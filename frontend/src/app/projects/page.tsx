import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Projects and Software Development | Clarioft Technologies",
  description:
    "Explore Clarioft software engineering projects, business applications, dashboards, analytics tools and active product development.",
};

const projects = [
  {
    number: "01",
    category: "BUSINESS APPLICATIONS",
    status: "Active development",
    title: "Medical Commerce ERP",
    description:
      "A business management application being developed to connect medical commerce operations, including inventory, sales, finance and reporting.",
    capabilities: [
      "Business and product management",
      "Inventory and sales workflows",
      "Financial records and reporting",
      "Payment and tax integration development",
    ],
    technologies: "FastAPI · React · PostgreSQL",
    featured: true,
    href: "/contact",
    linkLabel: "Discuss a similar system",
    external: false,
  },
  {
    number: "02",
    category: "FINANCIAL TECHNOLOGY",
    status: "Project showcase",
    title: "TradeX",
    description:
      "A trading journal and analytics application designed to help traders organise trade records, review performance and examine their trading activity.",
    capabilities: [
      "Trade journaling and record keeping",
      "Performance analytics",
      "Trading history visualisation",
      "Data export and review",
    ],
    technologies: "Web application · JavaScript",
    featured: false,
    href: "https://tradex-web-five.vercel.app/",
    linkLabel: "Explore TradeX",
    external: true,
  },
  {
    number: "03",
    category: "DASHBOARDS & APIS",
    status: "Project showcase",
    title: "Atlas OS",
    description:
      "A dashboard and API project exploring how application interfaces and backend services can work together to organise and present information.",
    capabilities: [
      "Dashboard interface",
      "API-backed application structure",
      "Information presentation",
      "Frontend and backend integration",
    ],
    technologies: "Web dashboard · API",
    featured: false,
    href: "https://atlas-intelligence-os-web.vercel.app/dashboard",
    linkLabel: "Explore dashboard",
    external: true,
  },
  {
    number: "04",
    category: "WEB DEVELOPMENT",
    status: "Website showcase",
    title: "Business Website",
    description:
      "A public-facing website project demonstrating website structure, content presentation and responsive web development.",
    capabilities: [
      "Business information architecture",
      "Responsive page layouts",
      "Service and content presentation",
      "Public website deployment",
    ],
    technologies: "Web development · Responsive design",
    featured: false,
    href: "https://kelvyn94.github.io/Business-Website/",
    linkLabel: "Visit website",
    external: true,
  },
];

const capabilities = [
  {
    number: "01",
    title: "Business systems",
    description:
      "Applications that organise operational records, workflows and business information.",
  },
  {
    number: "02",
    title: "Data and analytics",
    description:
      "Dashboards and reporting tools that make information easier to understand and use.",
  },
  {
    number: "03",
    title: "Application development",
    description:
      "Frontend and backend engineering for practical, maintainable software applications.",
  },
  {
    number: "04",
    title: "Integrations and automation",
    description:
      "Connecting services and developing workflows that reduce disconnected manual work.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK & PRODUCT DEVELOPMENT"
        title={
          <>
            Practical ideas. <span>Engineered into software.</span>
          </>
        }
        description="Explore selected software projects and product development work. Each demonstrates a different way technology can organise information, improve workflows or support better decisions."
      />

      <section className="project-feature-section">
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
              <span className="eyebrow">FEATURED PRODUCT</span>
              <div className="project-status">Active product development</div>
              <h2>Medical Commerce ERP</h2>
              <p>
                A business management platform being developed for medical
                commerce operations, bringing key business workflows into a
                more connected environment.
              </p>
              <p>
                Its development explores inventory, sales, finance, reporting
                and integrations within one business application.
              </p>
              <Link href="/contact" className="button button-primary">
                Discuss a similar system <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>

          <p className="project-disclaimer">
            The dashboard illustration is a conceptual representation, not a
            live product screenshot. This project is under active development;
            individual capabilities and integrations should not be interpreted
            as completed production features.
          </p>
        </div>
      </section>

      <section className="project-portfolio-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">SELECTED PROJECTS</span>
            <h2>Different projects. Practical engineering.</h2>
            <p>
              A selection of business applications, analytics tools and web
              development work.
            </p>
          </div>

          <div className="project-portfolio-grid">
            {projects.map((project) => (
              <article
                className={`project-portfolio-card${project.featured ? " project-portfolio-card-featured" : ""}`}
                key={project.number}
              >
                <div className="project-portfolio-top">
                  <span className="project-portfolio-number">
                    {project.number}
                  </span>
                  <span className="project-portfolio-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-portfolio-status">
                  <span />
                  {project.status}
                </div>

                <h3>{project.title}</h3>
                <p className="project-portfolio-description">
                  {project.description}
                </p>

                <div className="project-portfolio-capabilities">
                  <span className="project-detail-label">
                    PROJECT SCOPE
                  </span>
                  <ul>
                    {project.capabilities.map((capability) => (
                      <li key={capability}>{capability}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technology">
                  <span className="project-detail-label">
                    TECHNOLOGY / APPROACH
                  </span>
                  <p>{project.technologies}</p>
                </div>

                <div className="project-portfolio-footer">
                  {project.external ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <Link href={project.href}>
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="project-capabilities-section">
        <div className="container">
          <div className="page-section-heading">
            <span className="eyebrow">ENGINEERING CAPABILITIES</span>
            <h2>What our work is built around.</h2>
            <p>
              We bring together business understanding, application
              engineering and practical technology choices.
            </p>
          </div>

          <div className="detail-grid">
            {capabilities.map((capability) => (
              <article className="detail-card" key={capability.number}>
                <span className="detail-number">{capability.number}</span>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="inner-page-cta">
        <div className="container inner-cta-panel">
          <div>
            <span className="eyebrow">HAVE A SOFTWARE IDEA?</span>
            <h2>Your business could be our next project.</h2>
            <p>
              Tell us what you want to improve. We can explore the requirements
              and work towards a practical solution.
            </p>
          </div>
          <Link href="/contact" className="button button-light">
            Start a project <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}