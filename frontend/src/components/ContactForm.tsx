const BUSINESS_EMAIL = "servicesa947@gmail.com";

export default function ContactForm() {
  const subject = encodeURIComponent("Business Enquiry - Clarioft Technologies");
  const body = encodeURIComponent(
    "Hello Clarioft Technologies,\n\nI would like to enquire about your services.\n\nMy name:\nOrganisation:\nService required:\nProject details:\n\nThank you."
  );

  return (
    <div className="contact-enquiry-card">
      <span className="eyebrow">PROJECT ENQUIRY</span>
      <h2>Let's discuss your project.</h2>
      <p>
        Ready to improve your business with technology?
        Send us an email describing what you need.
        We will get back to you as soon as possible.
      </p>

      <div className="contact-email-direct">
        <span>EMAIL OUR TEAM DIRECTLY</span>
        <a
          href={`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`}
          className="contact-email-address"
        >
          {BUSINESS_EMAIL}
        </a>
        <p>
          Click the email address to open your default email application
          with a pre-filled enquiry.
        </p>
      </div>

      <a
        className="contact-submit-button contact-email-button"
        href={`mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`}
      >
        Send an email enquiry
        <span aria-hidden="true">↗</span>
      </a>

      <p className="contact-form-note">
        Prefer WhatsApp? Use the WhatsApp contact button to start a conversation.
      </p>
    </div>
  );
}
