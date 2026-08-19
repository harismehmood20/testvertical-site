import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShieldCheck, Layers, LineChart } from "lucide-react";
import { CTA, Eyebrow } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion";
import { services } from "@/data/site";
import servicesHero from "@/assets/services-hero-qa.jpg";

const description =
  "Software testing and QA services including Playwright automation, manual testing, API testing, performance testing, mobile testing, consulting, and dedicated QA teams.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Software Testing Services | TestVertical" },
      { name: "description", content: description },
      { property: "og:title", content: "Software Testing Services | TestVertical" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="page-hero dark-hero">
        <div className="blob blob-cyan float-slower" style={{ right: -80, top: -120, width: 380, height: 380 }} />
        <div className="grid-lines light-lines" />
        <div className="container">
          <div className="hero-split">
          <Reveal className="hero-split-copy">
            <Eyebrow>Software testing services</Eyebrow>
            <h1>Quality engineering shaped around your risks</h1>
            <p>
              TestVertical helps software teams choose the right balance of human validation, automation, technical
              testing, and quality guidance for each release.
            </p>
          </Reveal>
          <Reveal delay={0.12} y={20}>
            <div className="photo-banner services-banner">
              <img
                src={servicesHero}
                alt="Holographic quality assurance interface with a glowing checkmark and connected testing icons"
                width={1600}
                height={1280}
                loading="lazy"
              />
              <span className="photo-tag">
                <Check size={14} /> Automated regression in progress
              </span>
            </div>
          </Reveal>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container service-list">
          {services.map((service, index) => (
            <Reveal key={service.slug} id={service.slug} delay={Math.min(index * 0.04, 0.2)}>
              <article className="service-row">
                <div className="service-num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <span className="icon">
                    <service.icon />
                  </span>
                  <h2>{service.title}</h2>
                  <p>{service.text}</p>
                  <p className="service-tools">{service.tools}</p>
                </div>
                <div>
                  <div className="coverage-panel">
                    <div className="coverage-head">
                      <h3>What we can cover</h3>
                      <span className="coverage-count">{service.details.length} focus areas</span>
                    </div>
                    <ul className="coverage-list">
                      {service.details.map((detail) => (
                        <li key={detail}>
                          <span className="coverage-mark">
                            <Check strokeWidth={3} />
                          </span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="coverage-meta">
                      <span>
                        <ShieldCheck /> Risk-based coverage
                      </span>
                      <span>
                        <Layers /> CI/CD ready assets
                      </span>
                      <span>
                        <LineChart /> Reporting you can act on
                      </span>
                    </div>
                    <Link className="text-link" to="/contact">
                      Discuss this service <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
