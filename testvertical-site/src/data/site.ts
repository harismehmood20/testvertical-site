import { Activity, Accessibility, Bot, Briefcase, Building2, Cloud, Compass, Gauge, Globe2, HeartPulse, Landmark, LockKeyhole, Router, SearchCheck, ServerCog, ShoppingCart, Smartphone, Users } from "lucide-react";

export const site = {
  name: "TestVertical",
  tagline: "Quality Engineering. Automation. Confidence.",
  description: "Modern software testing services that help teams improve quality, reduce release risk and build confidence through expert QA engineering and intelligent test automation.",
  email: "info@testvertical.com",
  salesEmail: "sales@testvertical.com",
  ceoEmail: "CEO@testvertical.com",
  url: "https://www.testvertical.com",
  phone: "+92 322 4390100",
  phoneLink: "+923224390100",
  coverage: "Supporting product teams worldwide",
};

export const nav = [
  ["Home", "/"], ["Services", "/services"], ["Industries", "/industries"],
  ["Why TestVertical", "/why-testvertical"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export const services = [
  { slug: "test-automation", title: "Test Automation", text: "Playwright and JavaScript automation for UI, end-to-end, API, regression, and cross-browser coverage.", icon: Bot, tools: "Playwright · JavaScript · CI/CD", details: ["UI and end-to-end automation", "Regression suite development", "Page Object Model frameworks", "API automation and test reporting", "Framework modernization and CI/CD integration"] },
  { slug: "manual-testing", title: "Manual Testing", text: "Structured human validation for functional behavior, usability, integrations, and release-critical user journeys.", icon: SearchCheck, tools: "Exploratory testing · Browser coverage", details: ["Functional, smoke, sanity, and regression testing", "Exploratory and integration testing", "Cross-browser validation", "End-to-end release validation", "User acceptance testing support"] },
  { slug: "api-testing", title: "API Testing", text: "Reliable REST API validation across contracts, authentication, negative paths, integrations, and backend behavior.", icon: ServerCog, tools: "Postman · REST APIs · API automation", details: ["Request and response validation", "Authentication and authorization checks", "Negative and boundary testing", "Integration and backend validation", "Database validation where applicable"] },
  { slug: "performance-testing", title: "Performance Testing", text: "Practical load and stress testing to establish baselines, expose bottlenecks, and evaluate scalability.", icon: Gauge, tools: "JMeter · k6 · Performance analysis", details: ["Load and stress testing", "Performance baseline validation", "Bottleneck identification", "Scalability validation", "Actionable performance findings"] },
  { slug: "mobile-testing", title: "Mobile Testing", text: "Functional, regression, compatibility, and backend validation for mobile experiences across supported iOS and Android contexts.", icon: Smartphone, tools: "Appium · iOS · Android", details: ["Mobile functional and regression testing", "Compatibility and responsive behavior", "Device and browser coverage planning", "Network and real-world condition checks", "Mobile API and backend validation"] },
  { slug: "qa-consulting", title: "QA Consulting", text: "Technical guidance for test strategy, automation assessment, release confidence, and continuous quality improvement.", icon: Users, tools: "QA strategy · Process improvement", details: ["QA assessment and test planning", "Automation assessment and framework evaluation", "Regression strategy", "CI/CD testing strategy", "Quality process and maturity improvement"] },
  { slug: "dedicated-qa-teams", title: "QA Outsourcing & Dedicated Teams", text: "Flexible QA specialists who work alongside your product and Scrum team as an embedded quality partner.", icon: Activity, tools: "Embedded delivery · Flexible engagement", details: ["Dedicated QA team support", "Project-based testing", "Automation engineering", "Release and sprint validation", "Collaboration with existing development teams"] },
  { slug: "ai-testing", title: "AI Testing & Assisted Quality Engineering", text: "Responsible use of AI-assisted techniques for test creation, test data, defect analysis, and AI-enabled product validation.", icon: Bot, tools: "AI-assisted testing · Output validation", details: ["AI-assisted test case generation", "AI-assisted automation development", "Test data generation", "Prompt and AI output validation", "Defect analysis and test optimization"] },
  { slug: "web-testing", title: "Web Application Testing", text: "Cross-browser and accessibility-aware validation for dependable web experiences at every release.", icon: Globe2, tools: "Browser coverage · Accessibility", details: ["Cross-browser functional testing", "Responsive behavior validation", "Integration and end-to-end flows", "Accessibility-focused reviews", "Release readiness checks"] },
  { slug: "security-testing", title: "Security-Aware Testing", text: "Practical application security checks aligned with risk, access controls, data handling, and release priorities.", icon: LockKeyhole, tools: "Risk analysis · Secure validation", details: ["Security-aware functional checks", "Authentication and access-control validation", "Data handling and negative-path review", "Risk-focused release checks", "Actionable findings for remediation"] },
  { slug: "accessibility-testing", title: "Accessibility Testing", text: "Inclusive experience reviews against WCAG principles with clear, actionable remediation guidance.", icon: Accessibility, tools: "WCAG review · Inclusive UX", details: ["Keyboard and interaction review", "Content and semantic checks", "Assistive technology considerations", "WCAG-aligned findings", "Remediation guidance"] },
];

export const industries = [
  { title: "Banking & FinTech", text: "Testing expertise can be applied across financial workflows, payment processing, transaction validation, portals, APIs, and release-critical regression.", icon: Landmark },
  { title: "SaaS & Cloud", text: "Testing expertise can be applied across multi-tenant workflows, integrations, subscription journeys, and fast release cycles.", icon: Cloud },
  { title: "E-commerce", text: "Testing expertise can be applied across checkout, payments, inventory, promotions, and customer journeys.", icon: ShoppingCart },
  { title: "Healthcare", text: "Testing expertise can be applied across workflow accuracy, privacy-conscious validation, accessibility, and interoperability.", icon: HeartPulse },
  { title: "Enterprise Software", text: "Testing expertise can be applied across complex permissions, migrations, integrations, compatibility, and regression coverage.", icon: Building2 },
  { title: "Insurance & Telecom", text: "Testing expertise can be applied across policy, account, service, integration, and customer self-service workflows.", icon: Router },
];

export const engagementModels = [
  { title: "Dedicated QA Team", text: "Embedded QA specialists work with your product and Scrum team across sprints, releases, and quality improvement.", icon: Users },
  { title: "Project-Based Testing", text: "A focused testing engagement for a release, product area, migration, or defined quality challenge.", icon: Briefcase },
  { title: "Automation Engineering", text: "Build, modernize, or extend automation frameworks and integrate useful feedback into delivery workflows.", icon: Bot },
  { title: "QA Consulting", text: "Assess your current approach and leave with a practical strategy, roadmap, and prioritized next steps.", icon: Compass },
];

export const approachSteps = [
  { number: "01", title: "Understand", text: "Understand business goals, application architecture, users, and quality risks." },
  { number: "02", title: "Plan", text: "Define the right testing strategy, coverage, environments, and evidence." },
  { number: "03", title: "Build", text: "Develop manual and automated testing assets that fit the product and team." },
  { number: "04", title: "Integrate", text: "Integrate automation into development and CI/CD workflows where appropriate." },
  { number: "05", title: "Validate", text: "Execute testing, analyze defects, and provide clear release guidance." },
  { number: "06", title: "Improve", text: "Continuously improve coverage, efficiency, and quality practices." },
];

export const toolGroups = [
  { title: "Automation", tools: ["Playwright", "Cypress", "Selenium", "Appium"] },
  { title: "API & Performance", tools: ["Postman", "REST Assured", "JMeter", "k6"] },
  { title: "Delivery & Collaboration", tools: ["GitHub Actions", "Jira", "BrowserStack", "Docker"] },
];
