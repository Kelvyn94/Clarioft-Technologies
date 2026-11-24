import httpx
import pytest
from fastapi.testclient import TestClient

from app.main import app
import app.main as main_module

client = TestClient(app)

VALID_ENQUIRY = {
    "name": "Jane Client",
    "email": "jane@example.com",
    "organisation": "Example Organisation",
    "enquiry_type": "Business management system",
    "budget": "KSh 50,000 - 150,000",
    "message": "We need a system to manage inventory and sales.",
    "website": "",
}


def test_contact_submission_sends_email(monkeypatch):
    sent = []

    def fake_send(enquiry):
        sent.append(enquiry)

    monkeypatch.setattr(main_module, "send_contact_email", fake_send)

    response = client.post("/api/contact", json=VALID_ENQUIRY)

    assert response.status_code == 202
    assert len(sent) == 1
    assert sent[0].email == "jane@example.com"
    assert "successfully" in response.json()["message"]


def test_resend_request_uses_correct_email_details(monkeypatch):
    monkeypatch.setenv("RESEND_API_KEY", "test-resend-key")
    monkeypatch.setenv("CONTACT_FROM_EMAIL", "onboarding@resend.dev")
    monkeypatch.setenv("CONTACT_TO_EMAIL", "servicesa947@gmail.com")

    captured = {}

    def fake_post(url, **kwargs):
        captured["url"] = url
        captured.update(kwargs)
        return httpx.Response(
            200,
            json={"id": "test-email-id"},
            request=httpx.Request("POST", url),
        )

    monkeypatch.setattr(main_module.httpx, "post", fake_post)

    enquiry = main_module.ContactEnquiry(**VALID_ENQUIRY)
    main_module.send_contact_email(enquiry)

    assert captured["url"] == "https://api.resend.com/emails"
    assert captured["headers"]["Authorization"] == "Bearer test-resend-key"
    assert captured["json"]["from"] == "onboarding@resend.dev"
    assert captured["json"]["to"] == ["servicesa947@gmail.com"]
    assert captured["json"]["reply_to"] == "jane@example.com"
    assert captured["json"]["subject"] == (
        "New website enquiry - Clarioft Technologies"
    )
    assert "Jane Client" in captured["json"]["text"]
    assert "Example Organisation" in captured["json"]["text"]
    assert VALID_ENQUIRY["message"] in captured["json"]["text"]
    assert captured["timeout"] == 20.0


def test_resend_request_fails_when_configuration_is_missing(monkeypatch):
    monkeypatch.delenv("RESEND_API_KEY", raising=False)
    monkeypatch.delenv("CONTACT_FROM_EMAIL", raising=False)
    monkeypatch.delenv("CONTACT_TO_EMAIL", raising=False)

    enquiry = main_module.ContactEnquiry(**VALID_ENQUIRY)

    with pytest.raises(RuntimeError, match="not configured"):
        main_module.send_contact_email(enquiry)


def test_contact_submission_rejects_honeypot():
    payload = {**VALID_ENQUIRY, "website": "spam content"}

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 400


def test_contact_submission_validates_email():
    payload = {**VALID_ENQUIRY, "email": "not-an-email"}

    response = client.post("/api/contact", json=payload)

    assert response.status_code == 422


def test_contact_submission_reports_missing_email_configuration(monkeypatch):
    def missing_configuration(_enquiry):
        raise RuntimeError("Email delivery is not configured.")

    monkeypatch.setattr(
        main_module, "send_contact_email", missing_configuration
    )

    response = client.post("/api/contact", json=VALID_ENQUIRY)

    assert response.status_code == 503
    assert "not configured" in response.json()["detail"]


def test_contact_submission_reports_resend_failure(monkeypatch):
    def failed_delivery(_enquiry):
        raise httpx.ConnectError("Resend connection failed.")

    monkeypatch.setattr(
        main_module, "send_contact_email", failed_delivery
    )

    response = client.post("/api/contact", json=VALID_ENQUIRY)

    assert response.status_code == 502
    assert "could not send" in response.json()["detail"]


def test_health_endpoint():
    response = client.get("/api/health")

    assert response.status_code == 200
    assert response.json() == {
        "status": "healthy",
        "service": "clarioft-api",
    }


def test_root_endpoint():
    response = client.get("/")

    assert response.status_code == 200
    assert response.json()["company"] == "Clarioft Technologies"

@pytest.fixture(autouse=True)
def reset_contact_rate_limit():
    with main_module._rate_limit_lock:
        main_module._contact_attempts.clear()
    yield


def test_contact_rate_limit_blocks_sixth_submission(monkeypatch):
    monkeypatch.setattr(
        main_module, "send_contact_email", lambda _enquiry: None
    )

    responses = [
        client.post("/api/contact", json=VALID_ENQUIRY)
        for _ in range(5)
    ]

    assert all(response.status_code == 202 for response in responses)

    blocked = client.post("/api/contact", json=VALID_ENQUIRY)

    assert blocked.status_code == 429
    assert "Retry-After" in blocked.headers
    assert "Too many enquiries" in blocked.json()["detail"]


def test_contact_rate_limit_returns_security_headers():
    response = client.get("/api/health")

    assert response.headers["X-Content-Type-Options"] == "nosniff"
    assert response.headers["X-Frame-Options"] == "DENY"
    assert (
        response.headers["Referrer-Policy"]
        == "strict-origin-when-cross-origin"
    )
    assert (
        response.headers["Permissions-Policy"]
        == "camera=(), microphone=(), geolocation=()"
    )
