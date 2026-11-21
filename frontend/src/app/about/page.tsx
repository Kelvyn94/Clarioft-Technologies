import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Clarioft Technologies | Our Approach and Founder",
  description:
    "Discover Clarioft Technologies, our business-first approach to software engineering, and the founder behind our work.",
};

const principles = [
  {
    number: "01",
    title: "Understand before building",
    description:
      "We start by understanding the organisation, its people, existing processes and operational challenges before recommending a technical solution.",
  },
  {
    number: "02",
    title: "Build around real needs",
    description:
      "We focus on purposeful features, practical workflows and usable systems that address clearly defined business requirements.",
  },
  {
    number: "03",
    title: "Value clarity and control",
    description:
      "Good business software should make information easier to understand, work easier to coordinate and important activities easier to monitor.",
  },
  {
    number: "04",
    title: "Improve continuously",
    description:
      "Business needs evolve. We believe software should be tested, reviewed and refined as requirements and working environments change.",
  },
];

const capabilities = [
  "Business management and ERP systems",
  "Customer and operational management tools",
  "School and industry-specific applications",
  "Workflow automation and integrations",
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT CLARIOFT"
        title={
          <>
            Business understanding meets <span>technology.</span>
          </>
        }
        description="Clarioft Technologies is a founder-led business technology and software engineering company focused on turning operational challenges into practical digital systems."
      />

      <section className="inner-page-section">
        <div className="container about-story-layout">
          <div>
            <span className="eyebrow">OUR PURPOSE</span>
            <h2>Make business technology more practical.</h2>
          </div>

          <div className="about-story-copy">
            <p>
              Organisations need more than software that simply looks modern.
              They need dependable tools that fit the way they operate, organise
              information and support the people responsible for getting work done.
            </p>
            <p>
              Clarioft brings business process thinking and software engineering
              together. We work to understand a business problem, define what a
              useful solution should achieve and translate those requirements
              into practical applications and connected workflows.
            </p>
            <p>
              Our focus is on business systems that improve visibility,
              coordination and operational control, with usability and the
              realities of each working environment considered from the start.
            </p>
          </div>
        </div>
      </section>

      <section className="about-founder-section">
        <div className="container about-founder-layout">
          <div className="about-founder-intro">
            <span className="eyebrow">A NOTE FROM THE FOUNDER</span>
            <h2>Technology should solve the problem behind the process.</h2>
            <p>
              Clarioft was established around a simple idea: useful software
              starts with understanding how a business actually works.
            </p>
            <p>
              That means looking beyond screens and features to understand
              workflows, information gaps, everyday decisions and the outcomes
              an organisation needs.
            </p>
          </div>

          <article className="about-founder-card">
            <div className="about-founder-mark" aria-hidden="true">
              <span>CL</span>
            </div>

            <div className="about-founder-details">
              <span className="about-founder-label">FOUNDER & SOFTWARE DEVELOPER</span>
              <h3>Kelvin Macharia</h3>
              <p>
                I lead Clarioft&apos;s direction and software development work,
                with an interest in business applications, operational systems
                and practical technology solutions.
              </p>
              <p>
                My approach is to understand the requirement first, engineer
                the solution carefully and keep the business outcome at the
                centre of the work.
              </p>
              <Link
                href="https://portfolio-public-nine.vercel.app/"
                className="about-founder-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Explore my professional portfolio <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="about-principles-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">HOW WE THINK</span>
            <h2>Principles behind the work.</h2>
            <p>
              These principles guide how we approach business requirements,
              engineering decisions and the solutions we develop.
            </p>
          </div>

          <div className="principle-detail-grid">
            {principles.map((principle) => (
              <article
                className="principle-detail-card"
                key={principle.number}
              >
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-capabilities-section">
        <div className="container about-capabilities-layout">
          <div>
            <span className="eyebrow">WHERE WE FOCUS</span>
            <h2>Practical software for real business operations.</h2>
            <p>
              Our work centres on applications and digital systems that help
              organisations manage information, coordinate activities and
              improve the way work gets done.
            </p>
          </div>

          <ul className="about-capabilities-list">
            {capabilities.map((capability) => (
              <li key={capability}>
                <span aria-hidden="true">↗</span>
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="inner-page-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">LET&apos;S WORK TOGETHER</span>
            <h2>Have a business challenge worth solving?</h2>
            <p>
              Tell us what your organisation needs to improve. We would be glad
              to understand the challenge and explore a practical way forward.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Discuss your project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
