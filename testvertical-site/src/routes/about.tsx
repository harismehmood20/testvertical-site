import { createFileRoute } from "@tanstack/react-router";
import { Compass, Handshake, Search, Sparkles } from "lucide-react";
import { ApproachTimeline, CTA, Eyebrow, Heading } from "@/components/site/sections";
import { Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/site/motion";
import aboutTeam from "@/assets/team-thumbs-up.jpg";

const description =
  "Meet TestVertical: a quality engineering partner focused on clear risk, useful feedback, and confident releases.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TestVertical | Quality Engineering Partner" },
      { name: "description", content: description },
      { property: "og:title", content: "About TestVertical | Quality Engineering Partner" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const values = [
  { number: "01", title: "Clarity over noise", text: "Every finding should help someone make a better decision.", icon: Sparkles },
  { number: "02", title: "Risk before ritual", text: "We spend effort where failure would matter most.", icon: Compass },
  { number: "03", title: "Evidence over opinion", text: "Quality decisions deserve clear, reproducible information.", icon: Search },
  { number: "04", title: "Shared ownership", text: "The strongest quality cultures include the whole product team.", icon: Handshake },
];

function About() {
  return (
    <>
      <section className="page-hero">
        <div className="blob blob-blue float-slow" style={{ left: -140, bottom: -180, width: 420, height: 420 }} />
        <div className="blob blob-cyan float-slower" style={{ right: -60, top: -100, width: 340, height: 340 }} />
        <div className="grid-lines light-lines" />
        <Reveal className="container narrow">
          <Eyebrow>About TestVertical</Eyebrow>
          <h1>Quality should create momentum&mdash;not a final gate.</h1>
          <p>We help product teams make quality visible, shared, and practical throughout delivery.</p>
        </Reveal>
      </section>

      <section className="section">
        <div className="container split">
          <Reveal>
            <Eyebrow>Our mission</Eyebrow>
            <h2 style={{ fontSize: "clamp(28px,3.4vw,40px)" }}>Build confidence into every release decision.</h2>
          </Reveal>
          <Reveal delay={0.1} className="mission-card">
            <p>
              TestVertical exists to close the gap between &ldquo;the build passed&rdquo; and genuine confidence that a
              product will work for its users.
            </p>
            <p>
              We combine human investigation, thoughtful automation, and clear communication to expose meaningful risk
              early. Our role is not merely to find defects&mdash;it is to help teams understand quality and improve how
              they deliver it.
            </p>
          </Reveal>
        </div>
        <div className="container">
          <Reveal y={20} delay={0.15}>
            <div className="photo-banner about-banner" style={{ marginTop: 56 }}>
              <img
                src={aboutTeam}
                alt="TestVertical quality engineers reviewing test results together in the office"
                width={1600}
                height={768}
                loading="lazy"
              />
              <span className="photo-tag">
                <Handshake size={14} /> The people behind TestVertical
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Heading eyebrow="What we believe" title="The principles behind every engagement" />
          <StaggerGroup className="values">
            {values.map((value) => (
              <StaggerItem key={value.number}>
                <SpotlightCard>
                  <span className="card-index">{value.number}</span>
                  <span className="icon">
                    <value.icon />
                  </span>
                  <h3>{value.title}</h3>
                  <p style={{ marginBottom: 0 }}>{value.text}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section dark-section">
        <div className="grid-lines light-lines" />
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="split-sticky">
            <Heading
              eyebrow="How we work"
              title="Six steps from unknown risk to release confidence"
              text="The same disciplined path applies whether we join for one release or embed for a year."
            />
          </div>
          <ApproachTimeline />
        </div>
      </section>

      <CTA />
    </>
  );
}
