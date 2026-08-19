import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion";
import { site } from "@/data/site";
import heroImage from "@/assets/terms-hero.jpg";

const description = "The terms that apply to the use of the TestVertical website and published information.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | TestVertical" },
      { name: "description", content: description },
      { property: "og:title", content: "Terms of Use | TestVertical" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="grid-lines light-lines" />
        <Reveal className="container narrow">
          <Eyebrow>Terms</Eyebrow>
          <h1>Terms of Use</h1>
          <p>Plain terms covering the content published on this website.</p>
        </Reveal>
        <Reveal className="container narrow" delay={0.12} y={20}>
          <div className="photo-banner legal-banner" style={{ marginTop: 40 }}>
              <img src={heroImage} alt="A consultant reviewing engagement terms at a desk" loading="lazy" />
            </div>
        </Reveal>
      </section>
      <section className="section legal-body">
        <Reveal className="container narrow" y={20}>
          <div className="legal-card">
          <p style={{ color: "var(--muted)" }}>
            The content on this site is provided for general information about {site.name} services. It does not
            constitute a commitment, warranty, or professional advice for a specific product or release.
          </p>
          <p style={{ color: "var(--muted)" }}>
            Service scope, deliverables, timelines, and responsibilities are defined in a written agreement for each
            engagement. Brand names and tools referenced on this site belong to their respective owners.
          </p>
          <p style={{ color: "var(--muted)" }}>
            Unless otherwise agreed in writing, TestVertical is not liable for indirect or consequential losses
            arising from the use of information published on this site. Continued use of this website means you
            accept these terms as they are updated from time to time.
          </p>
          <p style={{ color: "var(--muted)" }}>
            Questions about these terms can be sent to{" "}
            <a className="text-link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          </div>
        </Reveal>
      </section>
    </>
  );
}
