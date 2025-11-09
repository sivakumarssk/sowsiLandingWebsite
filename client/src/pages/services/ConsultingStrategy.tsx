import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Compass, Globe, Handshake, Layers3, Presentation, Target } from "lucide-react";

const differentiators = [
  "Workshops that align stakeholders, clarify vision, and convert goals into actionable roadmaps.",
  "Fractional product leadership to accelerate discovery, validation, and delivery outcomes.",
  "Technology assessments that balance innovation with operational excellence."
];

const servicePillars = [
  { icon: Compass, title: "Product & Innovation Strategy", description: "Define vision, prioritize features, and establish north-star metrics to guide investment." },
  { icon: Presentation, title: "Digital Transformation", description: "Bridge business and technology with pragmatic modernization, change management, and capability building." },
  { icon: Target, title: "Value Stream Mapping", description: "Illuminate bottlenecks across teams, tooling, and processes to unlock sustainable velocity." },
  { icon: Layers3, title: "Platform & Architecture Advisory", description: "Evaluate architectures, integrations, and vendor ecosystems to de-risk critical decisions." },
  { icon: Handshake, title: "Embedded Leadership", description: "Fractional CPO/CTO engagements bring experienced leaders into your organization when you need them most." },
  { icon: Globe, title: "Go-to-Market Enablement", description: "Align product, marketing, and revenue teams with messaging, enablement, and launch playbooks." }
];

const engagementFormats = [
  "Strategy sprints (1-3 weeks)",
  "Quarterly roadmap partnerships",
  "Embedded product leadership",
  "Design thinking & ideation workshops",
  "Process and tooling audits",
  "Training & capability uplift"
];

const ConsultingStrategy = () => {
  return (
    <>
      <Helmet>
        <title>Technology Consulting & Strategy | Sowsi Technologies</title>
        <meta
          name="description"
          content="Navigate change with Sowsi Technologies consulting services—product strategy, digital transformation, platform advisory, and embedded leadership."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#111C34] py-24">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,_rgba(14,116,233,0.18)_0%,_transparent_60%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services · Consulting</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Strategic partners for leaders navigating their next transformation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We help product, technology, and operations teams make confident decisions, align on priorities, and deliver measurable outcomes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Schedule a Strategy Session</Button>
            </Link>
            <Link href="/about">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#111C34]">
                Meet Our Leadership
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">Clarity today. Momentum tomorrow.</h2>
              <p className="mt-4 text-lg text-gray-600">
                Our consultants bring deep product and engineering experience to help your teams launch initiatives, optimize operations, and scale sustainably.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-lg font-semibold text-[#1E293B]">What you'll gain</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Compass className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicePillars.map((pillar) => (
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
            <h2 className="text-3xl font-bold text-[#1E293B]">Engagement formats</h2>
            <p className="mt-4 text-lg text-gray-600">
              Choose the partnership model that fits your pace and priorities. We adapt quickly as your needs evolve.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {engagementFormats.map((format) => (
              <li key={format} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary">
                {format}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]">Let's plot your next move</h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you're launching, scaling, or transforming, Sowsi Technologies brings the clarity and leadership to help you deliver.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Talk to an Advisor</Button>
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

export default ConsultingStrategy;

