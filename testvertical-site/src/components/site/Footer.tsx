import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { industries, nav, services, site } from "@/data/site";
import { Logo } from "./Header";
import { Reveal } from "./motion";

export default function Footer() {
  return (
    <footer>
      <div className="grid-lines light-lines" />
      <Reveal className="container footer-grid" y={20}>
        <div>
          <Logo />
          <p>{site.description}</p>
          <p style={{ color: "#7f95a7" }}>{site.coverage}</p>
        </div>
        <div>
          <h3>Company</h3>
          {nav.slice(1).map(([name, href]) =>
            href.startsWith("/#") ? (
              <a key={href} href={href}>
                {name}
              </a>
            ) : (
              <Link key={href} to={href as "/"}>
                {name}
              </Link>
            ),
          )}
          <h3 className="footer-subheading">Industries</h3>
          {industries.slice(0, 4).map((industry) => (
            <Link key={industry.title} to="/industries">
              {industry.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Services</h3>
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} to="/services" hash={service.slug}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <h3>Start a conversation</h3>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>
          <a href={`tel:${site.phoneLink}`}>{site.phone}</a>
          <Link className="text-link" to="/contact" style={{ marginTop: 10 }}>
            Get started <ArrowRight size={14} />
          </Link>
        </div>
      </Reveal>
      <Reveal className="container footer-collab" y={16}>
        <span className="footer-wordmark" aria-hidden="true">
          {site.name.toUpperCase()}
        </span>
        <a href="/contact">
          <ArrowRight size={44} strokeWidth={1.5} /> Let&rsquo;s collaborate
        </a>
      </Reveal>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </span>
        <span>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
