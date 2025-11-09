import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Code2, MonitorSmartphone, Palette, Rocket, ShieldCheck } from "lucide-react";

const differentiators = [
  "Performance-first builds with Core Web Vitals monitoring baked in.",
  "Composable architectures that scale with headless CMS or commerce platforms.",
  "Design systems that keep multi-brand experiences consistent and accessible."
];

const servicePillars = [
  { icon: Code2, title: "Custom Platforms", description: "From corporate websites to complex customer portals, we build exactly what your roadmap needs—no more, no less." },
  { icon: Palette, title: "Experience Design", description: "UX research, UI design, and interactive prototypes ensure every user journey is intuitive and on-brand." },
  { icon: MonitorSmartphone, title: "Responsive Everything", description: "Pixel-perfect implementations across desktop, mobile, tablets, and emerging devices." },
  { icon: ShieldCheck, title: "Security & Compliance", description: "OWASP-hardened code, SOC2-ready processes, and rigorous QA pipelines." },
  { icon: Rocket, title: "Launch & Optimization", description: "A/B testing, SEO tuning, and conversion optimization to keep your growth engine running." }
];

const techStack = [
  "React, Next.js, Remix",
  "Angular, Vue",
  "Tailwind CSS, Chakra, Radix UI",
  "Node.js, NestJS, GraphQL",
  "Sanity, Contentful, Strapi, headless WordPress"
];

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services | Sowsi Technologies</title>
        <meta
          name="description"
          content="Sowsi Technologies crafts high-performing, experience-led web platforms using React, Next.js, headless CMS, and modular design systems."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#0F172A] py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services · Web</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Enterprise-grade web platforms that make every interaction count.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We partner with marketing, product, and technology teams to ship performant, content-rich web experiences that convert visitors into loyal customers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Request a Consultation</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0F172A]">
                View Related Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">What sets our web builds apart</h2>
              <p className="mt-4 text-lg text-gray-600">
                From discovery to launch, our teams operate as an extension of your in-house capabilities, embedding modern delivery practices and sharing knowledge along the way.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-lg font-semibold text-[#1E293B]">Key Outcomes</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
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
            <h2 className="text-3xl font-bold text-[#1E293B]">Technology toolkit</h2>
            <p className="mt-4 text-lg text-gray-600">
              We keep your stack modern, maintainable, and ready for continuous optimization.
            </p>
          </div>
          <ul className="mt-10 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <li key={tech} className="rounded-full border border-primary/20 bg-white px-4 py-2 text-sm font-medium text-primary">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]">Plan your next sprint with us</h2>
          <p className="mt-4 text-lg text-gray-600">
            Whether you need a new marketing site, a headless commerce stack, or a complex partner portal, our team is ready to collaborate.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Start a Conversation</Button>
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

export default WebDevelopment;

