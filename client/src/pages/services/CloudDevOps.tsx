import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Box, CloudCog, Cog, Container, LifeBuoy, ServerCog } from "lucide-react";

const differentiators = [
  "Landing zones that blend security guardrails with developer enablement.",
  "Infrastructure as Code blueprints that accelerate provisioning and governance.",
  "Site reliability engineering practices tuned to your product metrics."
];

const servicePillars = [
  { icon: CloudCog, title: "Cloud Foundations", description: "AWS, Azure, and GCP architectures with networking, identity, and cost-management baked in." },
  { icon: Container, title: "Platform Engineering", description: "Container orchestration, CI/CD pipelines, and internal developer platforms that boost productivity." },
  { icon: ServerCog, title: "Modernization & Migration", description: "Rehost, replatform, or refactor legacy workloads with minimal downtime and improved resilience." },
  { icon: Cog, title: "Automation & IaC", description: "Terraform, Pulumi, and CloudFormation stacks that keep environments consistent across regions." },
  { icon: LifeBuoy, title: "SRE & Observability", description: "Incident response playbooks, on-call operations, and telemetry dashboards for proactive reliability." }
];

const techStack = [
  "AWS, Azure, GCP",
  "Terraform, Pulumi, AWS CDK",
  "Docker, Kubernetes, ECS, AKS, GKE",
  "GitHub Actions, GitLab CI, Argo CD, Jenkins",
  "Prometheus, Grafana, Datadog, New Relic",
  "Vault, Okta, Azure AD, AWS IAM Identity Center"
];

const CloudDevOps = () => {
  return (
    <>
      <Helmet>
        <title>Cloud & DevOps Engineering | Sowsi Technologies</title>
        <meta
          name="description"
          content="Accelerate delivery with Sowsi Technologies Cloud & DevOps services—platform engineering, IaC, modernization, and SRE practices."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#0B1220] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.15),_transparent_65%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services · Cloud & DevOps</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Reliable infrastructure, automated delivery, and teams that move faster.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We build robust cloud foundations, modernize legacy workloads, and equip your teams with the tooling they need to ship confidently.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Schedule a Cloud Assessment</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0B1220]">
                See DevOps Transformations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">Accelerate your cloud maturity</h2>
              <p className="mt-4 text-lg text-gray-600">
                Whether you are adopting the cloud for the first time or optimizing an existing footprint, we deliver secure, scalable foundations that unlock velocity.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-lg font-semibold text-[#1E293B]">Guiding principles</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Box className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
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
            <h2 className="text-3xl font-bold text-[#1E293B]">Tooling & automations</h2>
            <p className="mt-4 text-lg text-gray-600">
              Bring consistency, observability, and resilience to your infrastructure with tool stacks we deploy every day.
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
          <h2 className="text-3xl font-bold text-[#1E293B]">Operate with confidence</h2>
          <p className="mt-4 text-lg text-gray-600">
            Partner with Sowsi to implement cloud governance, DevOps automation, and reliability practices tailored to your teams.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Start a Cloud Initiative</Button>
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

export default CloudDevOps;

