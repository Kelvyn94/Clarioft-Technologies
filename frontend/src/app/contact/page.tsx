import type { Metadata } from "next";

import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Clarioft Technologies",
  description:
    "Contact Clarioft Technologies to discuss business software, custom applications, automation and digital projects.",
};

const enquiryTypes = [
  "Business management system",
  "CRM or customer platform",
  "Custom software development",
  "Workflow automation",
  "Other business technology enquiry",
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT CLARIOFT"
        title={<>Let&apos;s talk about <span>what you want to improve.</span></>}
        description="Tell us about your organisation, the challenge you are facing and what you would like technology to help you achieve."
      />

      <section className="inner-page-section">
        <div className="container contact-page-grid">
          <div className="contact-information">
            <span className="eyebrow">START A CONVERSATION</span>
            <h2>Good projects start with understanding.</h2>
            <p>
              Whether you need a business application, want to improve an
              existing process or are exploring an idea, the first step is
              a conversation about your requirements.
            </p>

            <div className="contact-detail">
              <span>EMAIL</span>
              <a href="mailto:hello@clarioft.com">
                hello@clarioft.com
              </a>
            </div>

            <div className="contact-detail">
              <span>LOCATION</span>
              <strong>Kenya · Working globally</strong>
            </div>

            <div className="contact-detail">
              <span>ENQUIRIES</span>
              <strong>Business systems · Software · Automation</strong>
            </div>
          </div>

          <div className="contact-enquiry-card">
            <span className="eyebrow">PROJECT ENQUIRY</span>
            <h2>What would you like to discuss?</h2>
            <p>
              Choose the closest enquiry category to prepare an email
              with the right subject.
            </p>

            <div className="enquiry-options">
              {enquiryTypes.map((type) => (
                <a
                  href={`mailto:hello@clarioft.com?subject=${encodeURIComponent(type)}`}
                  key={type}
                >
                  <span>{type}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>

            <p className="contact-note">
              Your email application will open so you can provide your
              project details and send the enquiry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
