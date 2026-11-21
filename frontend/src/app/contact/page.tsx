import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contact Clarioft Technologies",
  description:
    "Discuss business software, custom applications, automation and digital projects with Clarioft Technologies.",
};

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
              <span>BUSINESS EMAIL</span>
              <a href="mailto:servicesa947@gmail.com">
                servicesa947@gmail.com
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

            <div className="contact-direct-note">
              Prefer email? Write to us directly and tell us what you need.
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
