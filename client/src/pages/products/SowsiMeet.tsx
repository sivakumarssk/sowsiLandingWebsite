import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CalendarCheck2, CheckCircle2, MessageSquare, Mic, ShieldCheck } from "lucide-react";

const differentiators = [
  {
    icon: MessageSquare,
    title: "Effortless Collaboration",
    description:
      "Real-time agendas, shared whiteboards, and contextual chat keep hybrid teams focused without bouncing between tools."
  },
  {
    icon: Mic,
    title: "AI Meeting Co-Pilot",
    description:
      "Capture highlights, action items, and decisions automatically with multilingual transcription and smart summaries."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Granular access controls, encrypted recordings, and compliance guardrails protect every conversation."
  },
  {
    icon: CalendarCheck2,
    title: "Workflow Automations",
    description:
      "Integrate meetings with your delivery stack—sync tasks to Jira, DevOps, or Slack and trigger follow-up playbooks."
  }
];

const SowsiMeet = () => {
  return (
    <>
      <Helmet>
        <title>Sowsi Meet (Coming Soon) | Sowsi Technologies</title>
        <meta
          name="description"
          content="Preview Sowsi Meet—an AI-assisted meeting and collaboration platform designed for hybrid product and delivery teams."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-[#0B1220] py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.15),_transparent_65%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
            Coming Soon · Product Lab
          </span>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Meet smarter. Act faster. Keep every project moving.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Sowsi Meet is our upcoming collaboration hub that blends AI note-taking, automated follow-ups, and secure recordings into one seamless experience for distributed teams.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Become a Design Partner</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0B1220]">
                See How We Build Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Why we&apos;re building Sowsi Meet</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our delivery teams wanted a meeting companion that understands product workflows out of the box. Sowsi Meet connects agendas, conversations, and deliverables so nothing gets lost between stand-ups, reviews, and stakeholder syncs.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#1E293B]">{item.title}</h3>
                <p className="mt-3 text-base text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#1E293B]">Help shape the roadmap</h2>
          <p className="mt-4 text-lg text-gray-600">
            We&apos;re looking for teams that run recurring ceremonies, client calls, and cross-functional reviews. Share your meeting challenges and we&apos;ll invite you to private previews.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Request an Invite</Button>
            </Link>
            <Link href="/products/invoice-inventory-suite">
              <Button size="lg" variant="outline">
                Explore Invoice Suite
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-10 md:p-16">
            <div className="grid gap-8 md:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="text-2xl font-bold text-[#1E293B]">Stay in the loop</h2>
                <p className="mt-3 text-base text-gray-600">
                  Be the first to see product demos, release notes, and integration announcements.
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Quarterly roadmap updates
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Early adopter pricing
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> Direct line to product team
                </div>
              </div>
            </div>
            <div className="mt-10">
              <Link href="/contact">
                <Button size="lg">Join the Interest List</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SowsiMeet;
