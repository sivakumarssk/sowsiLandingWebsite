import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BrainCircuit, ChartBar, Cog, Database, Infinity, Sparkles } from "lucide-react";

const differentiators = [
  "Product discovery that pinpoints automation, prediction, and personalization opportunities.",
  "Production-ready ML pipelines with observability, retraining, and governance.",
  "Human-in-the-loop experiences that keep domain experts empowered."
];

const servicePillars = [
  { icon: Database, title: "Modern Data Platforms", description: "Data lakes, warehouses, and lakehouses that centralize your sources and enable self-service analytics." },
  { icon: BrainCircuit, title: "Machine Learning & AI", description: "Predictive models, recommendation engines, conversational AI, and computer vision tailored to your domain." },
  { icon: Sparkles, title: "Generative AI", description: "Responsible implementation of LLMs, embeddings, and RAG pipelines for knowledge-intensive workflows." },
  { icon: ChartBar, title: "Business Intelligence", description: "Interactive dashboards, KPI tracking, and executive reporting that accelerate decision-making." },
  { icon: Cog, title: "MLOps & Automation", description: "CI/CD for ML, feature stores, monitoring, and alerting keep your models accurate in production." },
  { icon: Infinity, title: "Continuous Experimentation", description: "A/B testing, uplift modeling, and growth experiments to reveal what drives revenue and retention." }
];

const techStack = [
  "Python, R, Scala",
  "TensorFlow, PyTorch, scikit-learn",
  "LangChain, LlamaIndex, OpenAI, Azure OpenAI",
  "DBT, Airflow, Dagster",
  "Snowflake, BigQuery, Redshift, Databricks",
  "Power BI, Tableau, Looker, Superset"
];

const AIAndData = () => {
  return (
    <>
      <Helmet>
        <title>AI & Data Engineering Services | Sowsi Technologies</title>
        <meta
          name="description"
          content="Activate your data with Sowsi Technologies. We deliver modern data platforms, machine learning, generative AI, and analytics to power intelligent decisions."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#020617] py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-primary/5" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services · AI & Data</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Transform data into intelligent products and predictive insights.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            From data engineering foundations to AI-driven automation, we help teams unlock new value streams and empower decision-makers.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Book an AI Strategy Session</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#020617]">
                Review AI Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">Where data meets measurable outcomes</h2>
              <p className="mt-4 text-lg text-gray-600">
                We don’t just ship models—we integrate data, AI, and analytics into your product workflows and business processes.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-lg font-semibold text-[#1E293B]">How we deliver</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <BrainCircuit className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
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
            <h2 className="text-3xl font-bold text-[#1E293B]">Ecosystem expertise</h2>
            <p className="mt-4 text-lg text-gray-600">
              Partner with a team that understands the nuances of modern data tooling and governance.
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
          <h2 className="text-3xl font-bold text-[#1E293B]">Make confident moves with your data</h2>
          <p className="mt-4 text-lg text-gray-600">
            Schedule a workshop to uncover the highest-impact use cases for AI, automation, and analytics across your business.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Uncover Opportunities</Button>
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

export default AIAndData;

