import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Activity, Bluetooth, Cpu, GitBranch, Smartphone, Wifi } from "lucide-react";

const differentiators = [
  "Unified codebases for iOS and Android without compromising native polish.",
  "Offline-first architecture, background sync, and secure data storage.",
  "Continuous delivery pipelines with automated testing across devices."
];

const servicePillars = [
  { icon: Smartphone, title: "Product Strategy", description: "Mobile discovery workshops, user journey mapping, and KPI alignment to validate the right features before we build." },
  { icon: Cpu, title: "Native & Cross-Platform", description: "Swift, Kotlin, React Native, and Flutter specialists deliver experiences tailored to your product goals." },
  { icon: Wifi, title: "Connected Experiences", description: "IoT, Bluetooth, geofencing, and real-time data streams to power intelligent, context-aware apps." },
  { icon: GitBranch, title: "CI/CD Automation", description: "GitOps pipelines, TestFlight, Play Store, and enterprise distribution with release governance." },
  { icon: Activity, title: "Analytics & Growth", description: "Feature flags, in-app messaging, and product analytics to learn fast and grow retention." }
];

const techStack = [
  "React Native, Expo",
  "Flutter",
  "Swift, SwiftUI, Kotlin, Jetpack Compose",
  "Firebase, AWS Amplify, Supabase",
  "AppCenter, Fastlane, Bitrise"
];

const MobileDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Mobile App Development | Sowsi Technologies</title>
        <meta
          name="description"
          content="Design, build, and scale mobile applications with Sowsi Technologies expert teams across iOS, Android, React Native, and Flutter."
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-b from-[#0F172A] to-[#111C34] py-24">
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">Services · Mobile</p>
          <h1 className="mt-6 text-4xl font-extrabold text-white sm:text-5xl">
            Mobile experiences engineered for performance, adoption, and scale.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            We design and deliver mobile products that users love and product teams can iterate on quickly, with observability and growth levers from day one.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Book a Discovery Call</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0F172A]">
                Explore Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
            <div>
              <h2 className="text-3xl font-bold text-[#1E293B]">From idea to active users</h2>
              <p className="mt-4 text-lg text-gray-600">
                We combine user research, lean product delivery, and secure engineering to take your mobile roadmap from zero to launch—and beyond.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8">
              <h3 className="text-lg font-semibold text-[#1E293B]">What you can expect</h3>
              <ul className="mt-4 space-y-3 text-gray-600">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Bluetooth className="mt-1 h-5 w-5 text-primary" aria-hidden="true" />
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
            <h2 className="text-3xl font-bold text-[#1E293B]">Mobile tech stack</h2>
            <p className="mt-4 text-lg text-gray-600">Future-ready engineering that keeps your roadmap flexible.</p>
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
          <h2 className="text-3xl font-bold text-[#1E293B]">Launch faster with a dedicated pod</h2>
          <p className="mt-4 text-lg text-gray-600">
            Designers, developers, QA, and product strategists join forces as a single squad. Tap into our expertise to accelerate your next release.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Let’s Build</Button>
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

export default MobileDevelopment;

