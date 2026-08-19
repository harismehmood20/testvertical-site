import { createFileRoute } from "@tanstack/react-router";
import { Activity, CircleCheck, Code2, Gauge, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTA, Eyebrow, Heading, StatsStrip } from "@/components/site/sections";
import { Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { site } from "@/data/site";
import whyPhoto from "@/assets/why-hero-qa.jpg";

const description =
  "Why teams choose TestVertical: experienced QA expertise, automation-first delivery, flexible engagement models, and quality evidence tied to real release decisions.";

export const Route = createFileRoute("/why-testvertical")({
  head: () => ({
    meta: [
      { title: "Why TestVertical | A Quality Partner for Teams That Ship" },
      { name: "description", content: description },
      { property: "og:title", content: "Why TestVertical | A Quality Partner for Teams That Ship" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WhyTestVertical,
});

const values: [typeof Gauge, string, string][] = [
  [Code2, "Experienced QA Expertise", "Bring structured testing judgment to complex products, releases, and quality challenges."],
  [CircleCheck, "Automation-First Approach", "Automate repeatable feedback while keeping human investigation where it matters."],
  [Users, "Flexible Engagement Models", "Work with a dedicated team, project-based scope, automation engineers, or consultants."],
  [Gauge, "Modern Testing Technologies", "Use maintainable tools and approaches that fit your application and delivery workflow."],
  [ShieldCheck, "Business-Focused Quality", "Connect testing evidence to customer journeys, operational risk, and release decisions."],
  [Activity, "Continuous Improvement", "Improve coverage, process, and feedback over time instead of treating QA as a final gate."],
];

function WhyTestVertical() {
  return (
    <>
      <section className="page-hero dark-hero">
        <div className="blob blob-cyan float-slower" style={{ right: -80, top: -120, width: 380, height: 380 }} />
        <div className="grid-lines light-lines" />
        <div className="container">
          <div className="hero-split">
          <Reveal className="hero-split-copy">
            <Eyebrow>Why {site.name}</Eyebrow>
            <h1>A technical quality partner for teams that ship</h1>
            <p>
              TestVertical combines practical testing discipline with the engineering mindset needed to make quality
              part of delivery&mdash;not a gate at the end of it.
            </p>
          </Reveal>
          <Reveal delay={0.12} y={20}>
            <div className="photo-banner services-banner">
              <img
                src={whyPhoto}
                alt="QA engineers reviewing glowing test dashboards with a holographic quality shield"
                width={1600}
                height={1280}
                loading="lazy"
              />
              <span className="photo-tag">
                <Sparkles size={14} /> Our QA engineers at work
              </span>
            </div>
          </Reveal>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Heading
            eyebrow="What sets us apart"
            title="Quality work you can act on"
            text="Every engagement is built around clear risk, useful feedback, and confident release decisions."
          />
          <StaggerGroup className="bento">
            {values.map(([Icon, title, text]) => (
              <StaggerItem key={title}>
                <SpotlightCard>
                  <span className="icon">
                    <Icon />
                  </span>
                  <h3>{title}</h3>
                  <p style={{ marginBottom: 0 }}>{text}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <StatsStrip />
        </div>
      </section>

      <CTA />
    </>
  );
}
