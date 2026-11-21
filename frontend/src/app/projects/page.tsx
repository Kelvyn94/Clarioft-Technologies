import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projects and Software Development",
  description:
    "Explore Clarioft software development work and product showcases, including the Medical Commerce ERP.",
};

const capabilities = [
  {
    title: "Business operations",
    description:
      "A structured environment for managing business records and operational activities.",
  },
  {
    title: "Inventory and sales",
    description:
      "Development of workflows for product records, stock, sales and transaction management.",
  },
  {
    title: "Finance and reporting",
    description:
      "Financial visibility and reporting capabilities designed around business operations.",
  },
  {
    title: "Payment and tax integrations",
    description:
      "Integration work exploring relevant Kenyan payment and tax-service workflows.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="PROJECTS & PRODUCT DEVELOPMENT"
        title={<>Ideas translated into <span>working software.</span></>}
        description="Explore selected software development work and the business problems behind the products being built at Clarioft."
      />

      <section className="inner-page-section">
        <div className="container">
          <div className="project-feature">
            <div className="project-feature-visual">
              <div className="project-window">
                <div className="project-window-top">
                  <span />
                  <span />
                  <span />
                  <small>MEDICAL COMMERCE ERP</small>
                </div>

                <div className="project-window-body">
                  <div className="project-sidebar">
                    <strong>CLARIOFT</strong>
                    <span>Overview</span>
                    <span>Products</span>
                    <span>Inventory</span>
                    <span>Sales</span>
                    <span>Finance</span>
                  </div>

                  <div className="project-dashboard">
                    <span className="project-dash-label">BUSINESS OVERVIEW</span>
                    <strong>Management dashboard</strong>
                    <div className="project-stat-grid">
                      <div><small>OPERATIONS</small><b>Connected</b></div>
                      <div><small>INVENTORY</small><b>Tracked</b></div>
                      <div><small>REPORTING</small><b>Insights</b></div>
                    </div>
                    <div className="project-chart">
                      <span /><span /><span /><span /><span /><span /><span />
                    </div>
                    <div className="project-table-lines">
                      <i /><i /><i /><i />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="project-feature-copy">
              <span className="eyebrow">FLAGSHIP PRODUCT SHOWCASE</span>
              <div className="project-status">Active product development</div>
              <h2>Medical Commerce ERP</h2>
              <p>
                A business management platform being developed for medical
                commerce operations, bringing key business workflows into
                a more connected environment.
              </p>
              <p>
                The project explores how inventory, sales, finance and
                reporting can work together within one business application.
              </p>
              <Link href="/contact" className="button button-primary">
                Discuss a similar system <span>↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="project-capabilities-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">PRODUCT CAPABILITIES</span>
            <h2>Designed around connected business operations.</h2>
            <p>
              These are the main capability areas represented in the
              product&apos;s development.
            </p>
          </div>

          <div className="detail-grid">
            {capabilities.map((capability, index) => (
              <article className="detail-card" key={capability.title}>
                <span className="detail-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>

          <p className="project-disclaimer">
            Product showcase for an active development project.
            The illustrated dashboard is a conceptual representation,
            not a live product screenshot. Individual integrations and
            capabilities are subject to implementation and verification.
          </p>
        </div>
      </section>

      <section className="inner-page-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">HAVE A SOFTWARE IDEA?</span>
            <h2>Your business could be our next project.</h2>
            <p>
              Let&apos;s discuss the requirements and explore what can be built.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Start a project <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}
