import { createFileRoute } from "@tanstack/react-router";
import { Eyebrow } from "@/components/site/sections";
import { Reveal } from "@/components/site/motion";
import { site } from "@/data/site";
import heroImage from "@/assets/privacy-hero.jpg";

const description = "How TestVertical collects, uses, and protects information submitted through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TestVertical" },
      { name: "description", content: description },
      { property: "og:title", content: "Privacy Policy | TestVertical" },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <>
      <section className="page-hero legal-hero">
        <div className="grid-lines light-lines" />
        <Reveal className="container narrow">
          <Eyebrow>Privacy</Eyebrow>
          <h1>Privacy Policy</h1>
          <p>We keep data collection minimal and use it only to respond to your enquiry.</p>
        </Reveal>
        <Reveal className="container narrow" delay={0.12} y={20}>
          <div className="photo-banner legal-banner" style={{ marginTop: 40 }}>
              <img src={heroImage} alt="Secure data handling illustrated by a shield protecting a data centre" loading="lazy" />
            </div>
        </Reveal>
      </section>
      <section className="section legal-body">
        <Reveal className="container narrow" y={20}>
          <div className="legal-card">
          <p style={{ color: "var(--muted)" }}>
            We collect only the details you choose to submit through our contact form&mdash;name, work email, company,
            optional phone number, and the message you write. This information is used solely to respond to your
            request and discuss potential testing work.
          </p>
          <p style={{ color: "var(--muted)" }}>
            We do not sell or rent your information. We do not use your details for unrelated marketing. Client project
            information shared during an engagement is treated as confidential.
          </p>
          <p style={{ color: "var(--muted)" }}>
            Any data used during a testing engagement, such as sample accounts, test credentials, or non-production
            data sets, is handled under the confidentiality terms of that engagement and is not reused outside of it.
            We apply reasonable technical and organizational safeguards to protect information in transit and at rest.
          </p>
          <p style={{ color: "var(--muted)" }}>
            To request access to, correction of, or deletion of your information, email{" "}
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
