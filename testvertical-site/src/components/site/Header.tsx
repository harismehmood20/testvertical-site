import { Link, useRouterState } from "@tanstack/react-router";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export function Logo() {
  return (
    <Link className="logo" to="/" aria-label={`${site.name} home`}>
      <img
        src="/testvertical-icon.svg"
        alt="TestVertical"
        className="logo-mark"
      />
      <span>{site.name}</span>
    </Link>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : !href.startsWith("/#") && pathname.startsWith(href));

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="nav-wrap">
        <Logo />
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav id="main-nav" className={open ? "nav open" : "nav"} aria-label="Main navigation">
          {nav.map(([name, href]) =>
            href.startsWith("/#") ? (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {name}
              </a>
            ) : (
              <Link key={href} to={href as "/"} className={isActive(href) ? "active" : ""} onClick={() => setOpen(false)}>
                {name}
              </Link>
            ),
          )}
        </nav>
      </div>
      <motion.div className="progress-bar" style={{ scaleX: progress }} />
    </header>
  );
}
