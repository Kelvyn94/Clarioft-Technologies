import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Business Software & Digital Solutions",
  description:
    "Explore Clarioft business management systems, CRM, custom software and workflow automation solutions.",
};

const solutions = [
  {
    number: "01",
    title: "Business management systems",
    description:
      "Connect the essential parts of your operation through software designed around your processes, teams and information.",
    capabilities: [
      "Business and operational records",
      "Inventory and transaction management",
      "Financial and management reporting",
      "Role-based access and workflows",
    ],
  },
  {
    number: "02",
    title: "Customer relationship management",
    description:
      "Bring customer information, sales activities and follow-ups into a more organised environment.",
    capabilities: [
      "Customer information management",
      "Sales pipeline organisation",
      "Follow-up and activity tracking",
      "Customer reporting",
    ],
  },
  {
    number: "03",
    title: "Custom software development",
    description:
      "Build web applications and internal platforms around requirements that generic software does not adequately address.",
    capabilities: [
      "Business web applications",
      "Internal management platforms",
      "Customer and staff portals",
      "System integrations and APIs",
    ],
  },
  {
    number: "04",
    title: "Workflow automation and AI",
    description:
      "Identify repetitive processes and explore practical ways to connect tools, reduce manual work and improve consistency.",
    capabilities: [
      "Workflow automation",
      "Business process integration",
      "AI-assisted workflows",
      "Operational notifications",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR SOLUTIONS"
        title={<>Technology that works around <span>your business.</span></>}
        description="Practical software and digital systems designed to address real operational challenges, connect information and support better decisions."
      />

      <section className="inner-page-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">WHAT WE BUILD</span>
            <h2>Solutions with a clear business purpose.</h2>
            <p>
              We start with the way your organisation works, then identify
              the technology that can make it work better.
            </p>
          </div>

          <div className="detail-grid">
            {solutions.map((solution) => (
              <article className="detail-card" key={solution.number}>
                <span className="detail-number">{solution.number}</span>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
                <ul>
                  {solution.capabilities.map((capability) => (
                    <li key={capability}>{capability}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-page-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">HAVE A REQUIREMENT?</span>
            <h2>Let&apos;s discuss what your business needs.</h2>
            <p>
              Tell us about your processes, challenges and the outcome
              you want to achieve.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Discuss a solution <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
