import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BarChart3, Boxes, CalendarCheck, Layers, Receipt, ShieldCheck } from "lucide-react";

const valuePillars = [
  { icon: Receipt, title: "Intelligent Invoicing", description: "Automate billing flows, approvals, and payment reminders with configurable templates and jurisdiction-aware tax rules." },
  { icon: Boxes, title: "Inventory Without Silos", description: "Track stock in real time across warehouses, sales channels, and manufacturing—with smart reorder alerts and batch controls." },
  { icon: Layers, title: "Integrated Operations", description: "Connect procurement, CRM, and accounting tools to create a single source of truth for orders, suppliers, and customers." },
  { icon: ShieldCheck, title: "Compliance & Audit Ready", description: "Role-based access, audit trails, and e-invoicing compliance for GST, VAT, and region-specific mandates." },
  { icon: CalendarCheck, title: "Workflow Automation", description: "Drag-and-drop workflows orchestrate approvals, fulfillment, and handoffs with reminders and escalation paths." },
  { icon: BarChart3, title: "Predictive Insights", description: "AI-powered dashboards forecast cash flow, demand, and supplier performance so you can act before issues arise." }
];

const featureHighlights = [
  "Modular architecture that scales from SMB to mid-market operations.",
  "APIs and connectors for QuickBooks, Zoho Books, Tally, Shopify, WooCommerce, and leading ERPs.",
  "Offline-capable mobile apps for field sales and warehouse teams.",
  "Data residency options across regions with encryption in transit and at rest.",
  "Embedded analytics and AI-assisted recommendations powered by our data platform."
];

const earlyAccessSteps = [
  "Share your current invoicing and inventory pain points",
  "Co-design target workflows with our product team",
  "Access private betas and migration toolkits",
  "Receive priority onboarding and success support"
];

const InvoiceInventorySuite = () => {
  return (
    <>
      <Helmet>
        <title>Invoice & Inventory Suite (Beta) | Sowsi Technologies</title>
        <meta
          name="description"
          content="Join the early access cohort for Sowsi Technologies unified Invoice & Inventory Suite—built for ambitious SMEs that need automation, visibility, and growth insights."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0B1220] to-[#020617] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.25),_transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
            Beta · Early Access
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            The unified invoice & inventory engine for modern SMEs.
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-slate-200">
            We&apos;re building a modular platform that closes the gap between finance, sales, and fulfillment—so your teams stay aligned, cash flow stays healthy, and customers stay delighted.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Join the Early Access List</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0B1220]">
                See our Product Builds
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Purpose-built for operations that never sleep</h2>
            <p className="mt-4 text-lg text-gray-600">
              The suite blends lessons from hundreds of custom implementations into a ready-to-launch platform you can tailor without starting from scratch.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {valuePillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-slate-100 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <pillar.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#1E293B]">{pillar.title}</h3>
                <p className="mt-3 text-base text-gray-600">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">What makes it different</h2>
            <p className="mt-4 text-lg text-gray-600">
              Built on top of our proven service accelerators, the suite delivers enterprise capabilities with the simplicity of SaaS.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {featureHighlights.map((feature) => (
              <li key={feature} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary">
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]">Become an early design partner</h2>
          <p className="mt-4 text-lg text-gray-600">
            Early access gives you a direct line to our product, design, and engineering teams so we can tailor the roadmap to your operations.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {earlyAccessSteps.map((step, index) => (
              <div key={step} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white text-lg font-semibold">
                  {index + 1}
                </span>
                <p className="mt-4 text-base text-gray-600">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Apply for Early Access</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Back to Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default InvoiceInventorySuite;

