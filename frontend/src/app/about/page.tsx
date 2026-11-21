import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Clarioft Technologies",
  description:
    "Learn about Clarioft Technologies and our practical approach to business software and digital transformation.",
};

const principles = [
  {
    number: "01",
    title: "Understand first",
    description:
      "Technology decisions should begin with a clear understanding of the organisation, its people and its operational challenges.",
  },
  {
    number: "02",
    title: "Build with purpose",
    description:
      "Every feature and workflow should have a reason to exist and contribute to a useful business outcome.",
  },
  {
    number: "03",
    title: "Keep improving",
    description:
      "Software should be evaluated, refined and improved as business requirements and working environments change.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT CLARIOFT"
        title={<>Business understanding meets <span>technology.</span></>}
        description="Clarioft Technologies is a business technology and software development brand focused on practical digital systems that help organisations improve how they work."
      />

      <section className="inner-page-section">
        <div className="container about-story-layout">
          <div>
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Make business technology more practical.</h2>
          </div>
          <div className="about-story-copy">
            <p>
              Businesses need more than software that simply looks modern.
              They need tools that fit their operations, organise information
              and support the people responsible for getting work done.
            </p>
            <p>
              Clarioft focuses on understanding business requirements and
              translating them into useful software, connected workflows
              and digital solutions.
            </p>
            <p>
              Our approach combines business process thinking with software
              development, with an emphasis on clarity, usability and
              continuous improvement.
            </p>
          </div>
        </div>
      </section>

      <section className="about-principles-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">HOW WE THINK</span>
            <h2>Principles behind the work.</h2>
          </div>

          <div className="principle-detail-grid">
            {principles.map((principle) => (
              <article className="principle-detail-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-page-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">LET&apos;S WORK TOGETHER</span>
            <h2>Have a business challenge worth solving?</h2>
            <p>
              We would like to understand what you are working towards.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Get in touch <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
