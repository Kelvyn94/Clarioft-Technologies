import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries We Serve | Clarioft Technologies",
  description:
    "Explore practical business software for schools, healthcare and medical commerce, retail, distribution and growing organisations.",
};

const industries = [
  {
    number: "01",
    category: "EDUCATION",
    title: "Schools and education",
    description:
      "Give school administrators a clearer view of learners, fees and everyday operations through connected management tools.",
    challenge:
      "Disconnected records, manual fee tracking and time-consuming administrative work.",
    capabilities: [
      "Student admissions and information records",
      "Fee tracking, balances and payment records",
      "Receipts and financial reporting",
      "Parent, teacher and staff communication workflows",
    ],
    outcome:
      "More organised administration and better visibility into school operations.",
    solution: "School management systems",
  },
  {
    number: "02",
    category: "HEALTHCARE & MEDICAL COMMERCE",
    title: "Healthcare and medical businesses",
    description:
      "Connect the operational processes behind medical commerce, from product records and inventory to sales and reporting.",
    challenge:
      "Scattered product information, limited stock visibility and disconnected transaction records.",
    capabilities: [
      "Product catalogues and inventory management",
      "Sales and transaction records",
      "Purchasing and supplier workflows",
      "Operational and financial reporting",
    ],
    outcome:
      "Improved control over stock, transactions and day-to-day business information.",
    solution: "Medical commerce and inventory systems",
  },
  {
    number: "03",
    category: "RETAIL & DISTRIBUTION",
    title: "Retailers and distributors",
    description:
      "Help businesses manage the movement of products, customer transactions and supplier relationships in one organised workflow.",
    challenge:
      "Manual stock updates, fragmented sales records and difficulty tracking business performance.",
    capabilities: [
      "Stock movement and inventory tracking",
      "Sales and purchasing management",
      "Customer and supplier records",
      "Business performance dashboards and reports",
    ],
    outcome:
      "Clearer stock visibility, more organised transactions and informed decisions.",
    solution: "Retail and distribution management systems",
  },
  {
    number: "04",
    category: "GROWING BUSINESSES",
    title: "SMEs and expanding organisations",
    description:
      "Build a stronger operational foundation as teams grow, processes become more complex and management needs better information.",
    challenge:
      "Repeated manual work, disconnected tools and limited visibility across departments.",
    capabilities: [
      "Centralised business records",
      "Custom operational workflows",
      "Management dashboards and reporting",
      "Workflow automation and system integration",
    ],
    outcome:
      "More consistent processes and a clearer view of how the organisation operates.",
    solution: "Custom business management systems",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES WE SUPPORT"
        title={
          <>
            Different industries. <span>Technology that fits.</span>
          </>
        }
        description="A school does not operate like a distributor. A growing business does not have the same priorities as a medical supplier. We shape software around the processes, people and information that matter in each environment."
      />

      <section className="industry-intro-section">
        <div className="container industry-intro-layout">
          <div>
            <span className="eyebrow">UNDERSTAND THE OPERATION</span>
            <h2>Start with the work. Then build the right system.</h2>
          </div>
          <p>
            Our approach begins with understanding how an organisation
            operates, where information gets disconnected and which processes
            need improvement. The technology follows the requirements — not
            the other way around.
          </p>
        </div>
      </section>

      <section className="industry-catalogue-section">
        <div className="container">
          <div className="page-section-heading industry-catalogue-heading">
            <span className="eyebrow">INDUSTRIES AND APPLICATIONS</span>
            <h2>Practical solutions for real operational needs.</h2>
            <p>
              Explore the business processes we can help organise and the
              systems we can build around them.
            </p>
          </div>

          <div className="industry-catalogue-grid">
            {industries.map((industry) => (
              <article
                className="industry-catalogue-card"
                key={industry.number}
              >
                <div className="industry-card-topline">
                  <span className="industry-number">{industry.number}</span>
                  <span className="eyebrow">{industry.category}</span>
                </div>

                <h3>{industry.title}</h3>
                <p className="industry-card-description">
                  {industry.description}
                </p>

                <div className="industry-challenge">
                  <span className="industry-detail-label">
                    THE OPERATIONAL CHALLENGE
                  </span>
                  <p>{industry.challenge}</p>
                </div>

                <div className="industry-capabilities">
                  <span className="industry-detail-label">
                    WHAT WE CAN HELP BUILD
                  </span>
                  <ul>
                    {industry.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>

                <div className="industry-outcome">
                  <span className="industry-detail-label">
                    INTENDED OUTCOME
                  </span>
                  <p>{industry.outcome}</p>
                </div>

                <div className="industry-card-footer">
                  <span>{industry.solution}</span>
                  <Link
                    href={`/contact?industry=${encodeURIComponent(industry.title)}`}
                    aria-label={`Discuss ${industry.title} solutions with Clarioft`}
                  >
                    Discuss your needs <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-approach-section">
        <div className="container">
          <div className="industry-approach-heading">
            <span className="eyebrow">A PRACTICAL APPROACH</span>
            <h2>Built around your organisation, not assumptions.</h2>
          </div>

          <div className="industry-approach-grid">
            <article>
              <span>01</span>
              <h3>Understand</h3>
              <p>
                Map your existing processes, priorities and operational
                challenges.
              </p>
            </article>
            <article>
              <span>02</span>
              <h3>Shape</h3>
              <p>
                Define the requirements and identify an appropriate technical
                approach.
              </p>
            </article>
            <article>
              <span>03</span>
              <h3>Build</h3>
              <p>
                Develop and test software around the agreed business
                requirements.
              </p>
            </article>
            <article>
              <span>04</span>
              <h3>Improve</h3>
              <p>
                Refine the system as operational needs and business processes
                evolve.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="inner-page-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">YOUR BUSINESS. YOUR REQUIREMENTS.</span>
            <h2>Let&apos;s discuss what your organisation needs.</h2>
            <p>
              Tell us how your business operates and what you want to improve.
              We can explore a practical software solution together.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Talk to Clarioft <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}