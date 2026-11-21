"use client";

import { FormEvent, useState } from "react";

const enquiryTypes = [
  "Business management system",
  "CRM or customer platform",
  "School management system",
  "Healthcare or medical system",
  "Custom software development",
  "Workflow automation and AI",
  "Other business technology enquiry",
];

const budgetOptions = [
  "Not yet determined",
  "Below KSh 50,000",
  "KSh 50,000 - 150,000",
  "KSh 150,000 - 500,000",
  "Above KSh 500,000",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      organisation: String(formData.get("organisation") || ""),
      enquiry_type: String(formData.get("enquiry_type") || ""),
      budget: String(formData.get("budget") || ""),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    setStatus("submitting");
    setFeedback("");

    try {
      const apiBaseUrl = (
        process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000"
      ).replace(/\/+$/, "");

      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.detail || "We could not send your enquiry. Please try again.",
        );
      }

      setStatus("success");
      setFeedback(result.message);
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <div className="contact-enquiry-card">
      <span className="eyebrow">PROJECT ENQUIRY</span>
      <h2>Tell us what you are working on.</h2>
      <p>
        Share a little about your organisation and the challenge you want
        to solve. We will review your enquiry and get back to you.
      </p>

      {status === "success" ? (
        <div className="contact-feedback contact-feedback-success" role="status">
          <strong>Enquiry sent successfully.</strong>
          <p>{feedback}</p>
          <button
            className="contact-submit-button"
            type="button"
            onClick={() => {
              setStatus("idle");
              setFeedback("");
            }}
          >
            Send another enquiry
          </button>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-row">
            <label>
              Your name *
              <input
                name="name"
                type="text"
                placeholder="Full name"
                minLength={2}
                maxLength={100}
                autoComplete="name"
                required
              />
            </label>

            <label>
              Work email *
              <input
                name="email"
                type="email"
                placeholder="you@company.com"
                maxLength={254}
                autoComplete="email"
                required
              />
            </label>
          </div>

          <label>
            Organisation
            <input
              name="organisation"
              type="text"
              placeholder="Business or organisation name"
              maxLength={150}
              autoComplete="organization"
            />
          </label>

          <label>
            What would you like to discuss? *
            <select name="enquiry_type" defaultValue="" required>
              <option value="" disabled>
                Select an enquiry type
              </option>
              {enquiryTypes.map((type) => (
                <option value={type} key={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            Estimated project budget
            <select name="budget" defaultValue="">
              <option value="">Prefer not to say</option>
              {budgetOptions.map((budget) => (
                <option value={budget} key={budget}>
                  {budget}
                </option>
              ))}
            </select>
          </label>

          <label>
            Tell us about your project *
            <textarea
              name="message"
              rows={6}
              minLength={20}
              maxLength={5000}
              placeholder="What does your organisation do? What challenge are you facing? What would you like the system or software to help you achieve?"
              required
            />
          </label>

          <div className="contact-honeypot" aria-hidden="true">
            <label>
              Leave this field empty
              <input
                name="website"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </label>
          </div>

          {status === "error" && (
            <div className="contact-feedback contact-feedback-error" role="alert">
              {feedback}
            </div>
          )}

          <button
            className="contact-submit-button"
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending enquiry..." : "Send enquiry"}
            <span aria-hidden="true">↗</span>
          </button>

          <p className="contact-form-note">
            Your details will only be used to respond to this enquiry.
            You can also contact us directly at{" "}
            <a href="mailto:servicesa947@gmail.com">
              servicesa947@gmail.com
            </a>.
          </p>
        </form>
      )}
    </div>
  );
}
