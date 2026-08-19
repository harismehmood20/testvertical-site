import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { CTA, Eyebrow, IndustryGrid } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion";

const description =
  "Context-aware testing expertise for banking and fintech, SaaS, e-commerce, healthcare, enterprise software, insurance, and telecom products.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Test For | TestVertical" },
      { name: "description", content: description },
      { property: "og:title", content: "Industries We Test For | TestVertical" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="blob blob-blue float-slow" style={{ left: -120, bottom: -180, width: 420, height: 420 }} />
        <div className="grid-lines light-lines" />
        <Reveal className="container narrow">
          <Eyebrow>Industries</Eyebrow>
          <h1>Quality strategy that understands your world</h1>
          <p>
            The best testing reflects how your customers work, where your business carries risk, and what failure
            actually costs.
          </p>
        </Reveal>
      </section>
      <section className="section">
        <div className="container">
          <IndustryGrid />
        </div>
      </section>
      <section className="section dark-section">
        <div className="grid-lines light-lines" />
        <div className="container split">
          <Reveal>
            <div className="photo-frame">
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                alt="Testing team reviewing a banking and fintech workflow"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Banking &amp; FinTech</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>
              Confidence across financial workflows and integrations.
            </h2>
            <p>
              Testing expertise can be applied across payment processing, transaction validation, customer portals,
              APIs, database validation, regression testing, and release validation.
            </p>
            <p>
              We work with the information available to your delivery team and keep testing focused on business-critical
              behavior without disclosing confidential client information.
            </p>
            <Link className="button ghost" to="/contact">
              Talk about your sector <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <Reveal>
            <Eyebrow>Context first</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>One testing method does not fit every product.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ color: "var(--muted)" }}>
              We map critical journeys, roles, data boundaries, integrations, environments, and peak conditions
              before deciding what&mdash;and how&mdash;to test.
            </p>
            <p style={{ color: "var(--muted)", margin: 0 }}>
              That context becomes a practical quality model your whole delivery team can use.
            </p>
          </Reveal>
        </div>
      </section>
      <CTA />
    </>
  );
}
