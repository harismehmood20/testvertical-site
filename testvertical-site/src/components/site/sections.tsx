import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  Container,
  Drama,
  FlaskConical,
  Gauge,
  Github,
  Layers,
  Plus,
  Send,
  ShieldCheck,
  Smartphone,
  SquareKanban,
  TestTube,
  TreePine,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { approachSteps, engagementModels, industries, services, toolGroups } from "@/data/site";
import { CountUp, Reveal, SpotlightCard, StaggerGroup, StaggerItem } from "./motion";


const ease = [0.16, 1, 0.3, 1] as const;

const toolIcons: Record<string, typeof Drama> = {
  Playwright: Drama,
  Cypress: TreePine,
  Selenium: FlaskConical,
  Appium: Smartphone,
  Postman: Send,
  "REST Assured": ShieldCheck,
  JMeter: Gauge,
  k6: Activity,
  "GitHub Actions": Github,
  Jira: SquareKanban,
  BrowserStack: Layers,
  Docker: Container,
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Heading({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <Reveal className={`section-heading${center ? " center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </Reveal>
  );
}

export function ServiceGrid({ limit }: { limit?: number }) {
  return (
    <StaggerGroup className="bento">
      {services.slice(0, limit).map((service, index) => (
        <StaggerItem key={service.slug}>
          <SpotlightCard>
            <span className="card-index">{String(index + 1).padStart(2, "0")}</span>
            <span className="icon">
              <service.icon />
            </span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <small className="card-tools">{service.tools}</small>
            <Link className="text-link" to="/services" hash={service.slug}>
              Learn more <ArrowRight size={15} />
            </Link>
          </SpotlightCard>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function IndustryGrid() {
  return (
    <StaggerGroup className="bento">
      {industries.map((industry, index) => (
        <StaggerItem key={industry.title}>
          <SpotlightCard>
            <span className="card-index">0{index + 1}</span>
            <span className="icon">
              <industry.icon />
            </span>
            <h3>{industry.title}</h3>
            <p style={{ marginBottom: 0 }}>{industry.text}</p>
          </SpotlightCard>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function EngagementGrid() {
  return (
    <>
      <StaggerGroup className="bento">
      {engagementModels.map((model) => (
        <StaggerItem key={model.title}>
          <SpotlightCard>
            <span className="icon">
              <model.icon />
            </span>
            <h3>{model.title}</h3>
            <p>{model.text}</p>
            <Link className="text-link" to="/contact">
              Discuss your needs <ArrowRight size={15} />
            </Link>
          </SpotlightCard>
        </StaggerItem>
      ))}
      <StaggerItem className="bento-cta-cell">
        <div className="bento-cta">
          <Eyebrow>Not sure which model fits?</Eyebrow>
          <h3>We&rsquo;ll shape the engagement around your release cadence.</h3>
          <ul className="bento-cta-points">
            <li>
              <Check /> Start with a focused scope or a full QA team
            </li>
            <li>
              <Check /> Scale coverage up or down between releases
            </li>
            <li>
              <Check /> Clear reporting your stakeholders can act on
            </li>
          </ul>
          <Link className="button" to="/contact">
            Get a Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </StaggerItem>
      </StaggerGroup>
    </>
  );
}

export function ApproachTimeline() {
  return (
    <StaggerGroup className="timeline">
      {approachSteps.map((step) => (
        <StaggerItem className="timeline-step" key={step.number}>
          <span className="timeline-num">{step.number}</span>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function ToolGroups() {
  return (
    <StaggerGroup className="tool-groups">
      {toolGroups.map((group, index) => (
        <StaggerItem key={group.title}>
          <SpotlightCard>
            <span className="card-index">0{index + 1}</span>
            <h3>{group.title}</h3>
            <div className="tool-cloud" style={{ marginTop: 14 }}>
              {group.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
          </SpotlightCard>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

const stats = [
  { value: services.length, suffix: "+", label: "Testing disciplines" },
  { value: industries.length, suffix: "", label: "Industries served" },
  { value: toolGroups.reduce((total, group) => total + group.tools.length, 0), suffix: "+", label: "Tools & frameworks" },
  { value: approachSteps.length, suffix: "-step", label: "Delivery process" },
];

export function StatsStrip() {
  return (
    <StaggerGroup className="stats-strip">
      {stats.map((stat) => (
        <StaggerItem className="stat-cell" key={stat.label}>
          <strong>
            <CountUp end={stat.value} suffix={stat.suffix} />
          </strong>
          <span>{stat.label}</span>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}

export function TechMarquee({ onDark = false }: { onDark?: boolean }) {
  const all = toolGroups.flatMap((group) => group.tools);
  const loop = [...all, ...all];
  return (
    <div className={onDark ? "marquee on-dark" : "marquee"}>
      <div className="marquee-track">
        {loop.map((tool, index) => (
          <span key={`${tool}-${index}`} className="marquee-item">
            {(() => {
              const Icon = toolIcons[tool] ?? TestTube;
              return <Icon className="marquee-icon" aria-hidden="true" />;
            })()}
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Interactive services explorer replacing the old carousel. */
export function ServiceExplorer() {
  const [active, setActive] = useState(0);
  const service = services[active]!;
  return (
    <Reveal className="explorer" y={30}>
      <div className="explorer-list" role="tablist" aria-label="Testing services">
        {services.map((item, index) => (
          <button
            key={item.slug}
            role="tab"
            aria-selected={index === active}
            data-active={index === active}
            onClick={() => setActive(index)}
          >
            <item.icon />
            {item.title}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={service.slug}
          className="explorer-panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease }}
        >
          <Eyebrow>{service.tools}</Eyebrow>
          <h3>{service.title}</h3>
          <p>{service.text}</p>
          <ul className="explorer-details">
            {service.details.map((detail) => (
              <li key={detail}>
                <Check />
                {detail}
              </li>
            ))}
          </ul>
          <Link className="button" to="/contact">
            Discuss {service.title} <ArrowRight size={16} />
          </Link>
        </motion.div>
      </AnimatePresence>
    </Reveal>
  );
}

/** Swipeable services carousel — prev / active / next cards with arrow and drag navigation. */
export function ServiceCarousel() {
  const [active, setActive] = useState(0);
  const count = services.length;
  const go = (delta: number) => setActive((current) => (current + delta + count) % count);

  const indices = [(active - 1 + count) % count, active, (active + 1) % count];
  const roles = ["is-side", "is-active", "is-side"] as const;

  return (
    <Reveal className="carousel" y={30}>
      <div className="carousel-track">
        {indices.map((index, position) => {
          const item = services[index]!;
          const isActive = position === 1;
          return (
            <motion.div
              key={item.slug}
              className={`carousel-card ${roles[position]}${isActive ? " is-active" : ""}`}
              onClick={() => setActive(index)}
              drag={isActive ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.6}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) go(1);
                else if (info.offset.x > 80) go(-1);
              }}
              layout
              transition={{ duration: 0.4, ease }}
            >
              <span className="icon">
                <item.icon />
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-tools">{item.tools}</span>
            </motion.div>
          );
        })}
      </div>

      <div className="carousel-nav">
        <button type="button" className="carousel-arrow" aria-label="Previous service" onClick={() => go(-1)}>
          <ChevronLeft />
        </button>
        <AnimatePresence mode="wait">
          <motion.span
            key={services[active]!.slug}
            className="carousel-label"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease }}
          >
            {services[active]!.title}
          </motion.span>
        </AnimatePresence>
        <button type="button" className="carousel-arrow" aria-label="Next service" onClick={() => go(1)}>
          <ChevronRight />
        </button>
      </div>

      <div className="carousel-dots">
        {services.map((item, index) => (
          <button
            key={item.slug}
            type="button"
            className={index === active ? "active" : ""}
            aria-label={`Go to ${item.title}`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </Reveal>
  );
}

export function Faq({ items }: { items: [string, string][] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="faq">
      {items.map(([question, answer], index) => {
        const isOpen = open === index;
        return (
          <div className="faq-item" data-open={isOpen} key={question}>
            <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
              {question}
              <span className="faq-icon">
                <Plus size={15} />
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  className="faq-panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease }}
                >
                  <p>{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function CTA() {
  return (
    <Reveal as="section" className="cta container" y={30}>
      <div className="grid-lines light-lines" />
      <div style={{ position: "relative" }}>
        <Eyebrow>Start with clarity</Eyebrow>
        <h2>Let&rsquo;s improve your software quality.</h2>
        <p>
          Tell us about your application, testing challenges, or automation goals and we&rsquo;ll help identify the right
          next step.
        </p>
      </div>
      <div className="cta-actions" style={{ position: "relative" }}>
        <Link className="button light" to="/contact">
          Get a Free Consultation
        </Link>
        <Link className="button ghost" to="/services">
          Explore Our Services
        </Link>
      </div>
    </Reveal>
  );
}
