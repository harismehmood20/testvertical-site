import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Activity,
  ArrowRight,
  Check,
  CircleCheck,
  Code2,
  Gauge,
  Loader2,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  ApproachTimeline,
  CTA,
  EngagementGrid,
  Eyebrow,
  Faq,
  Heading,
  IndustryGrid,
  ServiceCarousel,
  ServiceGrid,
  StatsStrip,
  TechMarquee,
  ToolGroups,
} from "@/components/site/sections";
import { Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "@/components/site/motion";
import { site } from "@/data/site";
import industriesContext from "@/assets/industries-context.jpg";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TestVertical | Software Testing & QA Automation Services" },
      { name: "description", content: site.description },
      { property: "og:title", content: "TestVertical | Software Testing & QA Automation Services" },
      { property: "og:description", content: site.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const faqs: [string, string][] = [
  [
    "What software testing services does TestVertical provide?",
    "We provide test automation, manual testing, API testing, performance testing, mobile testing, QA consulting, dedicated QA support, AI-assisted quality engineering, and related web and accessibility testing.",
  ],
  [
    "Do you provide manual testing?",
    "Yes. Manual testing covers functional, regression, smoke, sanity, exploratory, integration, end-to-end, browser, and release validation where human judgment adds value.",
  ],
  [
    "Do you provide test automation?",
    "Yes. We build and modernize maintainable UI, end-to-end, API, and regression automation, with Playwright and JavaScript as core technologies.",
  ],
  [
    "Can you test REST APIs?",
    "Yes. We validate requests, responses, authentication, negative paths, integrations, backend behavior, and databases where applicable.",
  ],
  [
    "Can automation integrate with CI/CD?",
    "Yes. We can help connect appropriate automated checks and reporting to the delivery workflow using the tools already used by your team.",
  ],
  [
    "Do you provide dedicated QA engineers?",
    "Yes. Dedicated QA teams and embedded specialists can work alongside an existing product, engineering, or Scrum team.",
  ],
  [
    "How does a QA engagement start?",
    "We start with a conversation about your product, release cadence, current coverage, risks, and goals, then recommend a practical scope and next step.",
  ],
  [
    "Do you offer QA consulting?",
    "Yes. Consulting can cover QA assessment, test strategy, automation evaluation, regression planning, CI/CD testing, and quality process improvement.",
  ],
];

const values: [typeof Gauge, string, string][] = [
  [Code2, "Experienced QA Expertise", "Bring structured testing judgment to complex products, releases, and quality challenges."],
  [CircleCheck, "Automation-First Approach", "Automate repeatable feedback while keeping human investigation where it matters."],
  [Users, "Flexible Engagement Models", "Work with a dedicated team, project-based scope, automation engineers, or consultants."],
  [Gauge, "Modern Testing Technologies", "Use maintainable tools and approaches that fit your application and delivery workflow."],
  [ShieldCheck, "Business-Focused Quality", "Connect testing evidence to customer journeys, operational risk, and release decisions."],
  [Activity, "Continuous Improvement", "Improve coverage, process, and feedback over time instead of treating QA as a final gate."],
];

function Console() {
  const bars = [42, 66, 38, 84, 58, 92, 70, 48, 78, 60, 88, 54];
  return (
    <div className="console">
      <div className="console-top">
        <span className="console-dots">
          <i />
          <i />
          <i />
        </span>
        <span>regression-suite · chromium</span>
        <span className="live-pill">
          <i /> live
        </span>
      </div>
      <div className="console-rows">
        <div className="console-row">
          <Check /> Checkout end-to-end journey <b>2.4s</b>
        </div>
        <div className="console-row">
          <Check /> Payments API contract suite <b>1.1s</b>
        </div>
        <div className="console-row running">
          <Loader2 /> Accessibility audit · WCAG AA <b>running</b>
        </div>
        <div className="console-row">
          <Check /> Mobile smoke · iOS + Android <b>3.7s</b>
        </div>
      </div>
      <div className="console-meter">
        <div>
          <strong>98%</strong>
          <small>Suite pass rate</small>
        </div>
        <div>
          <strong>4.2m</strong>
          <small>Full regression</small>
        </div>
        <div>
          <strong>0</strong>
          <small>Blocking defects</small>
        </div>
      </div>
      <div className="spark">
        {bars.map((height, index) => (
          <i key={index} style={{ height: `${height}%`, animationDelay: `${index * 60}ms` }} />
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual">
      <div className="hero-visual-frame">
        <svg viewBox="0 0 560 420" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Quality engineering illustration">
          <defs>
            <linearGradient id="hv-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#29c6db" />
              <stop offset="100%" stopColor="#087fdf" />
            </linearGradient>
            <radialGradient id="hv-glow" cx="50%" cy="30%" r="70%">
              <stop offset="0%" stopColor="#29c6db" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#29c6db" stopOpacity="0" />
            </radialGradient>
          </defs>
          <circle cx="280" cy="150" r="230" fill="url(#hv-glow)" />
          {[80, 140, 200].map((r) => (
            <circle key={r} cx="280" cy="150" r={r} fill="none" stroke="rgba(238,242,245,0.14)" strokeWidth="1" />
          ))}
          <rect x="120" y="230" width="320" height="150" rx="4" fill="#08192a" stroke="rgba(238,242,245,0.22)" />
          <rect x="120" y="230" width="320" height="26" fill="#0b2033" stroke="rgba(238,242,245,0.22)" />
          <circle cx="138" cy="243" r="4" fill="#29c6db" />
          <circle cx="152" cy="243" r="4" fill="rgba(238,242,245,0.3)" />
          <circle cx="166" cy="243" r="4" fill="rgba(238,242,245,0.3)" />
          {[0, 1, 2, 3].map((row) => (
            <g key={row} transform={`translate(140, ${272 + row * 26})`}>
              <rect width="14" height="14" rx="2" fill={row < 3 ? "url(#hv-grad)" : "none"} stroke={row === 3 ? "rgba(238,242,245,0.35)" : "none"} strokeWidth="1.5" />
              {row < 3 && (
                <path d="M3 7 L6 10 L11 4" stroke="#06131f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              )}
              <rect x="26" y="3" width={150 - row * 18} height="8" rx="2" fill="rgba(238,242,245,0.18)" />
            </g>
          ))}
          <g transform="translate(280,150)">
            <circle r="54" fill="#06131f" stroke="url(#hv-grad)" strokeWidth="3" />
            <path d="M-20 2 L-6 16 L24 -14" stroke="url(#hv-grad)" strokeWidth="7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          <g opacity="0.9">
            <circle cx="120" cy="80" r="5" fill="#29c6db" />
            <circle cx="440" cy="90" r="4" fill="#087fdf" />
            <circle cx="410" cy="200" r="3.5" fill="#29c6db" />
            <circle cx="95" cy="190" r="3.5" fill="#087fdf" />
          </g>
        </svg>
      </div>
      <div className="hero-visual-tag">
        <Sparkles /> Automated QA
      </div>
      <div className="hero-visual-badge">
        <span className="live-pill">
          <i /> live
        </span>
        <span>
          <strong>Regression suite passing</strong>
          <small>98% pass rate · 0 blocking defects</small>
        </span>
      </div>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="blob blob-blue float-slow" />
        <div className="blob blob-cyan float-slower" />
        <div className="grid-lines light-lines" />
        <div className="container">
          <div className="hero-scanline">
            <i />
          </div>
        </div>
        <div className="container hero-grid">
          <div>
            <Reveal y={14}>
              <Eyebrow>Software testing services</Eyebrow>
            </Reveal>
            <Reveal y={20} delay={0.08}>
              <h1 className="hero-title">
                <span className="hero-brand-title">TestVertical</span>

                <span className="hero-gradient-title">
                  <span className="hero-line" style={{ animationDelay: "0.35s" }}>
                    Quality.
                  </span>
                  <span className="hero-line" style={{ animationDelay: "1.15s" }}>
                    Engineering.
                  </span>
                  <span className="hero-line" style={{ animationDelay: "1.95s" }}>
                    Automation.
                  </span>
                  <span className="hero-line" style={{ animationDelay: "2.75s" }}>
                    Confidence.
                  </span>
                </span>
              </h1>

              </Reveal>
            <Reveal y={20} delay={0.16}>
              <p className="hero-lead">{site.description}</p>
            </Reveal>
            <Reveal y={16} delay={0.24}>
              <div className="hero-actions">
                <Link className="button" to="/contact">
                  Get a Free Consultation <ArrowRight size={17} />
                </Link>
                <Link className="button ghost" to="/services">
                  Explore Our Services
                </Link>
              </div>
            </Reveal>
            <Reveal y={16} delay={0.3}>
              <div className="trust-points">
                <span>
                  <Check />
                  Expert QA engineering
                </span>
                <span>
                  <Check />
                  Intelligent automation
                </span>
                <span>
                  <Check />
                  Clear release guidance
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal y={34} delay={0.18}>
            <div className="hero-panel">
              <HeroVisual />
              <Console />
            </div>
          </Reveal>
        </div>
        <div className="marquee-band">
          <TechMarquee onDark />
        </div>
        <div className="container">
          <StatsStrip />
        </div>
      </section>

      <section className="section dark-section" id="services">
        <div className="container">
          <Heading
            eyebrow="Our services"
            title="Testing expertise for every release risk"
            text="Choose focused testing support or build a quality engineering capability around your product and team."
          />
          <ServiceCarousel />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Heading
            eyebrow="Coverage"
            title="A complete quality toolkit under one partner"
            text="Every discipline below can be combined into a single engagement or delivered on its own."
          />
          <div className="center-action above">
            <Link className="button secondary" to="/services">
              View all testing services <ArrowRight size={16} />
            </Link>
          </div>
          <ServiceGrid limit={6} />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <Heading
              eyebrow="AI-powered quality engineering"
              title="Evolve quality engineering as software evolves"
              text="We use practical, responsible AI-assisted techniques to support test creation, validation, analysis, and optimization where they genuinely fit the product."
            />
            <Reveal delay={0.1}>
              <Link className="button" to="/services" hash="ai-testing">
                Explore AI Testing <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
          <StaggerGroup className="check-list">
            {[
              ["AI-assisted test creation", "Generate starting points for cases and automation that still receive expert review."],
              ["AI output validation", "Test prompts, responses, and expected behavior for AI-enabled product features."],
              ["Smarter quality analysis", "Assisted defect analysis and test optimization without removing human accountability."],
            ].map(([title, text]) => (
              <StaggerItem key={title}>
                <div>
                  <CircleCheck />
                  <span>
                    <b>{title}</b>
                    <small>{text}</small>
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section dark-section" id="why-testvertical">
        <div className="grid-lines light-lines" />
        <div className="container">
          <Heading
            eyebrow={`Why ${site.name}`}
            title="A technical quality partner for teams that ship"
            text="TestVertical combines practical testing discipline with the engineering mindset needed to make quality part of delivery."
          />
          <Reveal y={20}>
            <div className="photo-banner">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="TestVertical QA engineers reviewing a release together"
                loading="lazy"
              />
              <span className="photo-tag">
                <Sparkles size={14} /> Our QA engineers at work
              </span>
            </div>
          </Reveal>
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

      <section className="section soft">
        <div className="container">
          <Heading
            eyebrow="Engagement models"
            title="Support that fits how your team works"
            text="Bring TestVertical into an existing delivery process or start with a focused quality challenge."
          />
          <EngagementGrid />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="industries-intro">
            <div>
              <Heading
                eyebrow="Industries"
                title="Testing grounded in product context"
                text="Our methods can be applied across different product environments, workflows, integrations, and risk profiles."
              />
              <Link className="button secondary" to="/industries">
                Explore industry testing <ArrowRight size={16} />
              </Link>
            </div>
            <Reveal y={22} delay={0.1}>
              <div className="industries-photo">
                <img
                  src={industriesContext}
                  alt="QA analysts reviewing product quality dashboards for a client release"
                  loading="lazy"
                />
                <span className="photo-tag">
                  <Sparkles size={14} /> Context-driven QA insight
                </span>
              </div>
            </Reveal>
          </div>
          <IndustryGrid />
        </div>
      </section>


      <section className="section dark-section" id="how-we-work">
        <div className="grid-lines light-lines" />
        <div className="container split" style={{ alignItems: "start" }}>
          <div className="split-sticky">
            <Heading
              eyebrow="How we work"
              title="A clear path from risk to release confidence"
              text="Our process keeps testing focused, visible, and connected to delivery decisions."
            />
          </div>
          <ApproachTimeline />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <Heading
            eyebrow="Technology"
            title="Tools chosen for the problem"
            text="We select technologies according to your product, delivery workflow, and the feedback your team actually needs."
          />
          <ToolGroups />
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <Heading eyebrow="FAQ" title="Useful answers before we begin" center />
          <Faq items={faqs} />
        </div>
      </section>

      <CTA />
    </>
  );
}
