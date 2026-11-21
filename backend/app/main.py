import logging
import os
from pathlib import Path
from typing import Literal

import httpx
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, ConfigDict, EmailStr, Field

load_dotenv(Path(__file__).resolve().parents[1] / ".env")

logger = logging.getLogger(__name__)

app = FastAPI(
    title="Clarioft Technologies API",
    description="Official API for Clarioft Technologies.",
    version="1.0.0",
)

allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "FRONTEND_ORIGINS", "http://localhost:3000"
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["Content-Type"],
)


class ContactEnquiry(BaseModel):
    model_config = ConfigDict(str_strip_whitespace=True)

    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    organisation: str | None = Field(default=None, max_length=150)
    enquiry_type: Literal[
        "Business management system",
        "CRM or customer platform",
        "School management system",
        "Healthcare or medical system",
        "Custom software development",
        "Workflow automation and AI",
        "Other business technology enquiry",
    ]
    budget: str | None = Field(default=None, max_length=80)
    message: str = Field(min_length=20, max_length=5000)
    website: str = Field(default="", max_length=200)


def send_contact_email(enquiry: ContactEnquiry) -> None:
    api_key = os.getenv("RESEND_API_KEY")
    recipient = os.getenv(
        "CONTACT_TO_EMAIL", "servicesa947@gmail.com"
    )
    sender = os.getenv(
        "CONTACT_FROM_EMAIL", "onboarding@resend.dev"
    )

    if not all([api_key, recipient, sender]):
        raise RuntimeError("Email delivery is not configured.")

    message_text = "\n".join(
        [
            "A new enquiry was submitted through the Clarioft website.",
            "",
            f"Name: {enquiry.name}",
            f"Email: {enquiry.email}",
            f"Organisation: {enquiry.organisation or 'Not provided'}",
            f"Enquiry type: {enquiry.enquiry_type}",
            f"Budget: {enquiry.budget or 'Not provided'}",
            "",
            "Project details:",
            enquiry.message,
        ]
    )

    payload = {
        "from": sender,
        "to": [recipient],
        "reply_to": str(enquiry.email),
        "subject": "New website enquiry - Clarioft Technologies",
        "text": message_text,
    }

    response = httpx.post(
        "https://api.resend.com/emails",
        json=payload,
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json",
        },
        timeout=20.0,
    )
    response.raise_for_status()


@app.get("/")
async def root():
    return {
        "company": "Clarioft Technologies",
        "message": "Clarioft API is running.",
        "version": "1.0.0",
    }


@app.get("/api/health")
async def health():
    return {
        "status": "healthy",
        "service": "clarioft-api",
    }


@app.post("/api/contact", status_code=status.HTTP_202_ACCEPTED)
def submit_contact(enquiry: ContactEnquiry):
    if enquiry.website:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid submission.",
        )

    try:
        send_contact_email(enquiry)
    except RuntimeError:
        logger.error("Contact email delivery is not configured.")
        raise HTTPException(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            detail="Enquiry delivery is not configured yet. Please email servicesa947@gmail.com directly.",
        )
    except httpx.HTTPError:
        logger.exception("Contact email API request failed.")
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail="We could not send your enquiry. Please try again or email servicesa947@gmail.com.",
        )

    return {
        "message": "Your enquiry has been sent successfully. Thank you for contacting Clarioft.",
    }
