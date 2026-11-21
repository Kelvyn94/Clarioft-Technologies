import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Business Software Solutions | Clarioft Technologies",
  description:
    "Explore Clarioft ERP and business management systems, CRM, school management software, custom applications and workflow automation.",
};

const solutions = [
  {
    number: "01",
    category: "BUSINESS OPERATIONS",
    title: "Business management & ERP systems",
    description:
      "Bring essential business operations into one organised system. We develop solutions that help teams manage information, transactions and day-to-day activities.",
    problem:
      "Disconnected spreadsheets, scattered records and limited visibility make it harder to manage a growing operation.",
    capabilities: [
      "Inventory, purchasing and sales management",
      "Financial records and transaction tracking",
      "Staff roles, permissions and workflows",
      "Management dashboards and reporting",
    ],
    outcome: "Greater operational visibility and control.",
    featured: true,
  },
  {
    number: "02",
    category: "CUSTOMER MANAGEMENT",
    title: "Customer relationship management",
    description:
      "Organise customer information and sales activities so your team can manage relationships, follow-ups and opportunities more consistently.",
    problem:
      "Customer details and sales conversations are easily lost across notebooks, messages and disconnected files.",
    capabilities: [
      "Centralised customer records",
      "Sales pipeline and opportunity tracking",
      "Follow-up and interaction history",
      "Customer activity and performance reports",
    ],
    outcome: "More organised customer relationships.",
  },
  {
    number: "03",
    category: "EDUCATION TECHNOLOGY",
    title: "School management systems",
    description:
      "Simplify school administration with connected tools for learner records, fee management, communication and reporting.",
    problem:
      "Manual administration makes it difficult to track learner information, fee balances and important school activities.",
    capabilities: [
      "Student admissions and records",
      "Fee tracking, balances and receipts",
      "Parent communication and notifications",
      "Academic and administrative reporting",
    ],
    outcome: "More efficient school administration.",
  },
  {
    number: "04",
    category: "SOFTWARE ENGINEERING",
    title: "Custom software development",
    description:
      "When off-the-shelf products do not fit, we design and build applications around your organisation's specific requirements.",
    problem:
      "Generic software may not support the way your team actually works or the processes that make your business different.",
    capabilities: [
      "Custom web applications",
      "Internal business platforms",
      "Customer and staff portals",
      "APIs and third-party integrations",
    ],
    outcome: "Software aligned with your requirements.",
  },
  {
    number: "05",
    category: "PROCESS IMPROVEMENT",
    title: "Workflow automation & AI",
    description:
      "Reduce repetitive work by connecting business processes, automating routine tasks and applying AI where it creates practical value.",
    problem:
      "Repeated manual tasks consume time, introduce inconsistencies and slow down everyday operations.",
    capabilities: [
      "Automated business workflows",
      "Notifications and task routing",
      "Application and data integrations",
      "Practical AI-assisted processes",
    ],
    outcome: "Less repetitive work and more consistent processes.",
  },
  {
    number: "06",
    category: "INDUSTRY SOLUTIONS",
    title: "Industry-specific business systems",
    description:
      "Build connected applications for the operational needs of sectors such as healthcare, retail, distribution and professional services.",
    problem:
      "Different industries have specialised workflows that generic tools may not adequately address.",
    capabilities: [
      "Sector-specific operational workflows",
      "Records and transaction management",
      "Reporting and business intelligence",
      "Integrations tailored to the organisation",
    ],
    outcome: "Technology shaped around your industry.",
  },
];

const deliverySteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "We learn about your business, current processes, challenges and desired outcomes.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We define requirements, system structure and a practical implementation approach.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop, test and refine the solution around the agreed requirements.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We support refinement as your workflows and business requirements evolve.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="BUSINESS SYSTEMS · SOFTWARE ENGINEERING"
        title={
          <>
            The right technology.
            <br />
            <span>Built around your business.</span>
          </>
        }
        description="From connected business operations to custom applications, Clarioft builds practical software solutions around real organisational needs."
      />

      <section className="solutions-intro-section">
        <div className="container solutions-intro-layout">
          <div>
            <span className="eyebrow">WHAT WE DO</span>
            <h2>
              Solve operational challenges with
              <span> purposeful software.</span>
            </h2>
          </div>
          <p>
            Every organisation works differently. We start by understanding
            your processes, then identify and build the systems that can make
            those processes clearer, more connected and easier to manage.
          </p>
        </div>
      </section>

      <section className="solutions-catalogue" id="services">
        <div className="container">
          <div className="solutions-catalogue-heading">
            <div>
              <span className="eyebrow">OUR CAPABILITIES</span>
              <h2>What we can build together.</h2>
            </div>
            <p>
              Explore our areas of work. Each engagement begins with your
              requirements, not a predetermined software package.
            </p>
          </div>

          <div className="solutions-service-grid">
            {solutions.map((solution) => (
              <article
                className={`solutions-service-card${solution.featured ? " solutions-service-featured" : ""}`}
                key={solution.number}
              >
                <div className="solutions-service-topline">
                  <span className="solutions-service-number">
                    {solution.number}
                  </span>
                  <span className="solutions-service-category">
                    {solution.category}
                  </span>
                </div>

                <h3>{solution.title}</h3>
                <p className="solutions-service-description">
                  {solution.description}
                </p>

                <div className="solutions-problem">
                  <span>THE BUSINESS CHALLENGE</span>
                  <p>{solution.problem}</p>
                </div>

                <div className="solutions-capabilities">
                  <span>WHAT WE CAN BUILD</span>
                  <ul>
                    {solution.capabilities.map((capability) => (
                      <li key={capability}>
                        <span aria-hidden="true">↗</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="solutions-service-bottom">
                  <div>
                    <span>INTENDED OUTCOME</span>
                    <p>{solution.outcome}</p>
                  </div>
                  <Link
                    href={`/contact?solution=${encodeURIComponent(solution.title)}`}
                    aria-label={`Discuss ${solution.title} with Clarioft`}
                  >
                    <span>Discuss this solution</span>
                    <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="solutions-delivery-section">
        <div className="container">
          <div className="solutions-delivery-heading">
            <span className="eyebrow">HOW WE WORK</span>
            <h2>From business challenge to working solution.</h2>
            <p>
              A clear, collaborative process keeps the focus on solving the
              right problem and delivering something useful.
            </p>
          </div>

          <div className="solutions-delivery-grid">
            {deliverySteps.map((step) => (
              <article className="solutions-delivery-card" key={step.number}>
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-page-cta solutions-final-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">LET&apos;S TALK ABOUT YOUR REQUIREMENTS</span>
            <h2>Your business has its own way of working. Your software should too.</h2>
            <p>
              Tell us what you are trying to improve. We can explore the
              requirements and identify a practical way forward.
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