import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Business Systems & Custom Software Development",
  description:
    "Clarioft Technologies builds practical business management systems, ERP and CRM solutions, school and healthcare software, and intelligent workflows for organisations in Kenya.",
};

const solutions = [
  {
    number: "01",
    title: "Business management systems",
    description:
      "Bring essential operations into one connected environment. Manage records, workflows, transactions and reporting with systems designed around how your organisation works.",
    tags: ["ERP", "Operations", "Reporting"],
  },
  {
    number: "02",
    title: "Customer & relationship management",
    description:
      "Organise customer information, sales activities and follow-ups. Give your team a clearer view of relationships and opportunities.",
    tags: ["CRM", "Sales", "Customer experience"],
  },
  {
    number: "03",
    title: "Custom software development",
    description:
      "Turn specific business requirements into practical web applications, internal tools and digital platforms that solve real operational problems.",
    tags: ["Web applications", "Portals", "Integrations"],
  },
  {
    number: "04",
    title: "Workflow automation & AI",
    description:
      "Reduce repetitive work and connect disconnected processes with intelligent automation that supports your people and improves efficiency.",
    tags: ["Automation", "AI workflows", "Integrations"],
  },
];

const industries = [
  {
    code: "ED",
    name: "Education",
    description:
      "School administration, student records, fee management and communication systems.",
  },
  {
    code: "HC",
    name: "Healthcare",
    description:
      "Connected operational tools for healthcare providers, pharmacies and medical businesses.",
  },
  {
    code: "RT",
    name: "Retail & distribution",
    description:
      "Inventory, sales, purchasing and business reporting for growing enterprises.",
  },
  {
    code: "SM",
    name: "Growing businesses",
    description:
      "Practical digital systems that bring structure, visibility and control to everyday operations.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn how your business works, identify challenges and define the outcomes that matter.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate your requirements into a clear solution, process and implementation plan.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, configure and test a solution around your operational needs.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We support adoption, evaluate results and help your systems evolve as you grow.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />

        <div className="container hero-layout">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow">
              <span className="status-dot" />
              BUSINESS SYSTEMS  •  SOFTWARE ENGINEERING
            </div>

            <h1>
              Software built
              <br />
              around the way
              <br />
              <span>your business works.</span>
            </h1>

            <p className="hero-description">
              Clarioft connects business understanding with practical
              software engineering. We design and build business systems
              that bring operations, people and information together —
              helping organisations work with greater clarity and control.
            </p>

            <div className="hero-actions">
              <Link href="#contact" className="button button-primary">
                Discuss your project <span>↗</span>
              </Link>
              <Link href="/projects" className="button button-secondary">
                Explore our work <span>↗</span>
              </Link>
            </div>

            <div className="hero-note">
              <span className="hero-note-line" />
              Technology built around the way you work.
            </div>
          </div>

          <div className="hero-visual" aria-label="Illustrative business operations dashboard showing connected workflows and organised business information">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />

            <div className="visual-label visual-label-top">
              <span className="status-dot" />
              CONNECTED OPERATIONS
            </div>

            <div className="system-card system-card-main">
              <div className="system-card-header">
                <div>
                  <span className="system-overline">BUSINESS OVERVIEW</span>
                  <h3>Operations hub</h3>
                </div>
                <span className="system-icon">✳</span>
              </div>

              <div className="system-metrics">
                <div>
                  <span className="metric-label">Workflows</span>
                  <strong>Connected</strong>
                </div>
                <div>
                  <span className="metric-label">Business data</span>
                  <strong>Organised</strong>
                </div>
              </div>

              <div className="system-visual-bars">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

              <div className="system-card-footer">
                <span className="status-dot" />
                A clearer view of your business
              </div>
            </div>

            <div className="floating-card floating-card-left">
              <span className="floating-icon">↗</span>
              <div>
                <strong>Smarter workflows</strong>
                <small>Less repetitive work</small>
              </div>
            </div>

            <div className="floating-card floating-card-right">
              <span className="floating-icon floating-icon-teal">◎</span>
              <div>
                <strong>Connected systems</strong>
                <small>Information in sync</small>
              </div>
            </div>

            <div className="visual-label visual-label-bottom">
              <span>01</span> SYSTEMS THAT WORK TOGETHER
            </div>
          </div>
        </div>

        <div className="container hero-bottom">
          <span>BUILT FOR REAL BUSINESS NEEDS</span>
          <div className="hero-bottom-line" />
          <span>DESIGNED FOR WHAT COMES NEXT</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section section-padding" id="about">
        <div className="container intro-layout">
          <div>
            <span className="eyebrow">A MORE PRACTICAL APPROACH</span>
            <h2 className="section-heading">
              Technology should make
              <br />
              business <span>work better.</span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              Too many businesses rely on disconnected tools, manual
              processes and information that is difficult to track.
              We believe the right technology should make everyday work
              simpler, decisions clearer and growth more manageable.
            </p>
            <p>
              Clarioft brings business understanding and software
              development together to create solutions with a purpose:
              helping organisations run better.
            </p>
          </div>
        </div>

        <div className="container principle-strip">
          <div>
            <span className="principle-number">01</span>
            <strong>Understand the business</strong>
          </div>
          <div>
            <span className="principle-number">02</span>
            <strong>Solve the real problem</strong>
          </div>
          <div>
            <span className="principle-number">03</span>
            <strong>Build for lasting value</strong>
          </div>
        </div>
      </section>

      {/* BUSINESS IN PRACTICE */}
      <section className="photo-story-section">
        <div className="container">
          <div className="photo-story-heading">
            <div>
              <span className="eyebrow">TECHNOLOGY IN PRACTICE</span>
              <h2 className="section-heading">
                Better systems.
                <br />
                <span>Better ways of working.</span>
              </h2>
            </div>
            <p className="section-intro">
              The best technology is not just impressive to look at.
              It makes a meaningful difference to the people who use it
              and the organisations that depend on it.
            </p>
          </div>

          <div className="photo-story-grid">
            <article className="photo-story-card photo-story-large">
              <div className="photo-story-image photo-image-team" role="img" aria-label="Professionals collaborating around a table" />
              <div className="photo-story-overlay">
                <span>01 / COLLABORATION</span>
                <h3>Technology starts with people.</h3>
              </div>
            </article>

            <article className="photo-story-card">
              <div className="photo-story-image photo-image-workspace" role="img" aria-label="Modern professional workspace" />
              <div className="photo-story-overlay">
                <span>02 / OPERATIONS</span>
                <h3>Make everyday work flow.</h3>
              </div>
            </article>

            <article className="photo-story-card">
              <div className="photo-story-image photo-image-data" role="img" aria-label="Business analytics displayed on a screen" />
              <div className="photo-story-overlay">
                <span>03 / BUSINESS INTELLIGENCE</span>
                <h3>Turn information into clarity.</h3>
              </div>
            </article>
          </div>
          <p className="photo-disclaimer">
            Illustrative photography. Project imagery and client stories
            will be added as our portfolio grows.
          </p>
        </div>
      </section>
      {/* SOLUTIONS */}
      <section className="solutions-section section-padding" id="solutions">
        <div className="container">
          <div className="section-topline">
            <span className="eyebrow">WHAT WE DO</span>
            <span className="section-index">01 / SOLUTIONS</span>
          </div>

          <div className="solutions-heading-row">
            <h2 className="section-heading">
              The right tools.
              <br />
              <span>For the way you work.</span>
            </h2>
            <p className="section-intro">
              From managing everyday operations to connecting entire
              workflows, we help turn business challenges into working
              digital solutions.
            </p>
          </div>

          <div className="solutions-grid">
            {solutions.map((solution) => (
              <article className="solution-card" key={solution.number}>
                <div className="solution-card-top">
                  <span>{solution.number}</span>
                  <span className="solution-arrow">↗</span>
                </div>

                <h3>{solution.title}</h3>
                <p>{solution.description}</p>

                <div className="tag-list">
                  {solution.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="industries-section section-padding" id="industries">
        <div className="container">
          <div className="section-topline">
            <span className="eyebrow">WHO WE WORK WITH</span>
            <span className="section-index">02 / INDUSTRIES</span>
          </div>

          <div className="industries-heading-row">
            <h2 className="section-heading">
              Built around
              <br />
              <span>your industry.</span>
            </h2>
            <p className="section-intro">
              Different industries have different challenges. We focus on
              understanding the work behind the business before designing
              the technology that supports it.
            </p>
          </div>

          <div className="industries-grid">
            {industries.map((industry) => (
              <article className="industry-card" key={industry.code}>
                <span className="industry-code">{industry.code}</span>
                <div>
                  <h3>{industry.name}</h3>
                  <p>{industry.description}</p>
                </div>
                <span className="industry-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="approach-section section-padding" id="approach">
        <div className="container">
          <div className="section-topline">
            <span className="eyebrow">HOW WE WORK</span>
            <span className="section-index">03 / OUR APPROACH</span>
          </div>

          <div className="approach-heading-row">
            <h2 className="section-heading">
              From business challenge
              <br />
              to <span>working solution.</span>
            </h2>
            <p className="section-intro">
              Good technology starts with understanding. Our process
              keeps the business objective at the centre of every
              implementation.
            </p>
          </div>

          <div className="process-grid">
            {process.map((step) => (
              <article className="process-step" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div className="process-rule" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-section section-padding" id="contact">
        <div className="container">
          <div className="contact-panel">
            <div className="contact-pattern" aria-hidden="true" />

            <div className="contact-content">
              <span className="eyebrow contact-eyebrow">
                HAVE A BUSINESS CHALLENGE?
              </span>

              <h2>
                Let&apos;s build something
                <br />
                that <span>moves you forward.</span>
              </h2>

              <p>
                Tell us what your business is working towards, what is
                slowing you down or what you would like to improve.
                Let&apos;s explore the right solution together.
              </p>

              <div className="contact-actions">
                <a
                  href="mailto:servicesa947@gmail.com?subject=Business%20Enquiry"
                  className="button button-light"
                >
                  Start a conversation <span>↗</span>
                </a>
                <span className="contact-response-note">
                  Business enquiries & project discussions
                </span>
              </div>
            </div>

            <div className="contact-decoration" aria-hidden="true">
              <div className="contact-ring ring-one" />
              <div className="contact-ring ring-two" />
              <div className="contact-ring ring-three" />
              <span>CL</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
