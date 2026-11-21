import type { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
};

export default function PageHero({
  eyebrow,
  title,
  description,
}: PageHeroProps) {
  return (
    <section className="inner-page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
