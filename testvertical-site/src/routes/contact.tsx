import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Check, Clock3, Mail, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Eyebrow } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion";
import { site } from "@/data/site";

const description =
  "Talk with TestVertical about software testing, QA automation, release risk, or quality engineering needs.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Get a Free QA Consultation | TestVertical" },
      { name: "description", content: description },
      { property: "og:title", content: "Get a Free QA Consultation | TestVertical" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    window.setTimeout(() => {
      form.reset();
      setState("sent");
    }, 900);
  }

  if (state === "sent") {
    return (
      <motion.div className="success" role="status" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}>
        <span className="tick">
          <Check />
        </span>
        <h2 style={{ fontSize: 26, margin: 0 }}>Thanks&mdash;your request has been sent.</h2>
        <p style={{ color: "var(--muted)" }}>Our team will review your details and get back to you shortly.</p>
        <button className="button secondary" onClick={() => setState("idle")}>
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="contact-form">
      <div className="field-grid">
        <label>
          Full name
          <input name="name" required autoComplete="name" />
        </label>
        <label>
          Work email
          <input name="email" required type="email" autoComplete="email" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          Company
          <input name="company" required autoComplete="organization" />
        </label>
        <label>
          Phone <span>(optional)</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>
      <label>
        Service needed
        <select name="service" required defaultValue="">
          <option value="" disabled>
            Select a service
          </option>
          <option>QA assessment</option>
          <option>Test automation</option>
          <option>Manual testing</option>
          <option>API testing</option>
          <option>Performance testing</option>
          <option>Mobile testing</option>
          <option>AI testing</option>
          <option>Dedicated QA team</option>
          <option>Other</option>
        </select>
      </label>
      <label>
        Tell us about your product and quality goals
        <textarea name="message" required rows={5} placeholder="What are you building, and where does quality feel uncertain?" />
      </label>
      <label className="checkbox">
        <input type="checkbox" name="consent" required />
        <span>I agree to be contacted about this request.</span>
      </label>
      <button className="button" disabled={state === "sending"}>
        {state === "sending" ? "Sending request…" : "Get a Free Consultation"}
      </button>
      <p className="form-note">We&rsquo;ll only use your details to respond to this request.</p>
    </form>
  );
}

function Contact() {
  return (
    <section className="contact-page">
      <div
        className="contact-panel has-photo"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,24,39,.90), rgba(7,24,39,.95)), url('https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="blob blob-cyan float-slower" style={{ top: -100, left: -80, width: 340, height: 340 }} />
        <div className="grid-lines light-lines" />
        <Reveal>
          <Eyebrow>Get a Free Consultation</Eyebrow>
          <h1>Let&rsquo;s improve your software quality.</h1>
          <p>
            Tell us about your application, testing challenges, or automation goals. We&rsquo;ll review your context and
            suggest a practical next step.
          </p>
          <div className="contact-method">
            <Mail />
            <div>
              <small>Sales enquiries</small>
              <a href={`mailto:${site.salesEmail}`}>{site.salesEmail}</a>
            </div>
          </div>
          <div className="contact-method">
            <Phone />
            <div>
              <small>Call us</small>
              <a href={`tel:${site.phoneLink}`}>{site.phone}</a>
            </div>
          </div>
          <div className="contact-method">
            <Clock3 />
            <div>
              <small>Response time</small>
              <span style={{ fontWeight: 700 }}>Within one business day</span>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="contact-form-wrap">
        <Reveal delay={0.1}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
