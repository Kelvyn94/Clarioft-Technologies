import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description:
    "Discover how Clarioft approaches digital systems for education, healthcare, retail and growing businesses.",
};

const industries = [
  {
    code: "01 / EDUCATION",
    title: "Education",
    description:
      "Help schools and education providers organise administration and improve visibility across daily operations.",
    examples: [
      "Student information management",
      "School fee tracking and records",
      "Administrative reporting",
      "Parent and staff communication workflows",
    ],
  },
  {
    code: "02 / HEALTHCARE",
    title: "Healthcare and medical commerce",
    description:
      "Support the operational side of medical businesses with connected information and practical management tools.",
    examples: [
      "Product and inventory management",
      "Sales and transaction records",
      "Purchasing and supplier workflows",
      "Financial and operational visibility",
    ],
  },
  {
    code: "03 / RETAIL",
    title: "Retail and distribution",
    description:
      "Improve the way growing retailers and distributors organise stock, transactions and business information.",
    examples: [
      "Stock and inventory tracking",
      "Sales and purchasing workflows",
      "Customer and supplier records",
      "Business performance reporting",
    ],
  },
  {
    code: "04 / ENTERPRISE",
    title: "Growing businesses",
    description:
      "Create more structure around business processes as teams, transactions and operational requirements expand.",
    examples: [
      "Business process digitisation",
      "Centralised operational records",
      "Management dashboards",
      "Connected internal workflows",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="INDUSTRIES"
        title={<>Different industries. <span>Practical technology.</span></>}
        description="Every organisation has its own processes and priorities. We focus on understanding those differences before recommending a digital solution."
      />

      <section className="inner-page-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">WHERE WE FOCUS</span>
            <h2>Technology shaped by the work you do.</h2>
            <p>
              These are the operational environments where our business
              software and application development capabilities can be applied.
            </p>
          </div>

          <div className="industry-detail-grid">
            {industries.map((industry) => (
              <article className="industry-detail-card" key={industry.code}>
                <span className="eyebrow">{industry.code}</span>
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <ul>
                  {industry.examples.map((example) => (
                    <li key={example}>{example}</li>
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
            <span className="eyebrow">YOUR ORGANISATION</span>
            <h2>Let&apos;s understand your operational challenges.</h2>
            <p>
              Start with the problem you want to solve. We can explore
              an appropriate approach together.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Talk to Clarioft <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
