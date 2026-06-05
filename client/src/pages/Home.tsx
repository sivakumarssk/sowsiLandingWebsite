import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import PortfolioItem from "@/components/PortfolioItem";
import StatsCounter from "@/components/StatsCounter";
import { CheckCircle2, Clock, Gauge, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";

import analyticsImg from "../assets/portfolio/AI-powered-analytics-dashboard.png";
import travelImg from "../assets/portfolio/AllonsZ-digital-platform.png";
import ecommerceImg from "../assets/portfolio/E-commerce-Platform.png";
import farmImg from "../assets/portfolio/smart-delivery-platform.png";
import iotImg from "../assets/portfolio/IOT-home-automation.png";
import healthcareImg from "../assets/portfolio/HealthCare-Mangement-system.png";
import bankingImg from "../assets/portfolio/mobile-banking-solution.png";

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications with responsive design, optimized for performance and SEO.",
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=300",
    imageAlt: "Web Development",
    features: [
      { text: "Responsive Design" },
      { text: "E-commerce Solutions" },
      { text: "Progressive Web Apps" }
    ]
  },
  {
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    imageSrc: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=300",
    imageAlt: "Mobile App Development",
    features: [
      { text: "iOS & Android Apps" },
      { text: "React Native Development" },
      { text: "Mobile UI/UX Design" }
    ]
  },
  {
    title: "IoT Solutions",
    description: "Connected device ecosystems and IoT platforms that enable smart operations and data-driven insights.",
    imageSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=300",
    imageAlt: "IoT Solutions",
    features: [
      { text: "Smart Home Automation" },
      { text: "Industrial IoT" },
      { text: "IoT Data Analytics" }
    ]
  }
];

const portfolioItems = [
  {
    title: "E-COMMERCE PLATFORM",
      category: "Web Development",
    description: "A scalable e-commerce solution for a fashion retailer.",
    imageSrc: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB"],
  },

  {
    title: "ALLONSZ DIGITAL PLATFORM",
    category: "App Development",
    description: "Travel booking and planning platform.",
    imageSrc: travelImg,
    technologies: ["Flutter", "Node.js", "Firebase"],
  },

  {
    title: "SMART FARM DELIVERY PLATFORM",
    category: "App Development",
    description: "Farm-to-home delivery platform.",
    imageSrc: farmImg,
    technologies: ["Flutter", "Node.js", "Firebase"],
  },

  {
    title: "IOT HOME AUTOMATION",
    category: "IOT",
    description: "Smart home automation platform.",
    imageSrc: iotImg,
    technologies: ["IoT", "Node.js", "AWS"],
  },

  {
    title: "HEALTHCARE MANAGEMENT SYSTEM",
    category: "Web Development",
    description: "Healthcare management platform.",
    imageSrc: healthcareImg,
    technologies: ["React", "Spring Boot", "PostgreSQL"],
  },

  {
    title: "MOBILE BANKING SOLUTION",
    category: "App Development",
    description: "Secure mobile banking solution.",
    imageSrc: bankingImg,
    technologies: ["React Native", "Firebase", "Node.js"],
  },
];

const keyHighlights = [
  {
    title: "Strategy First Approach",
    description: "We co-create a product roadmap that balances business priorities with user needs for a measurable impact.",
    icon: Lightbulb
  },
  {
    title: "Human-Centered Experiences",
    description: "Design thinking guides every interface and workflow, ensuring usability, accessibility, and delight.",
    icon: Sparkles
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security practices, proactive monitoring, and compliance by design keep your data safe.",
    icon: ShieldCheck
  },
  {
    title: "Momentum That Lasts",
    description: "From MVP to scale-up, agile delivery, DevOps automation, and 24/7 support keep your product evolving.",
    icon: Gauge
  }
];

const technologyStacks = [
  {
    category: "Web & Frontend",
    items: ["React", "Next.js", "Angular", "Vue", "Tailwind CSS", "Framer Motion"]
  },
  {
    category: "Mobile & Devices",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "IoT Edge", "Wearables"]
  },
  {
    category: "Backend & APIs",
    items: ["Node.js", "NestJS", "Laravel", "Python", "Golang", "GraphQL"]
  },
  {
    category: "Data, AI & Analytics",
    items: ["TensorFlow", "PyTorch", "LLMs", "Power BI", "Snowflake", "Apache Airflow"]
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"]
  },
  {
    category: "Commerce & ERP",
    items: ["Shopify", "Stripe", "Odoo", "Zoho", "QuickBooks", "SAP B1"]
  }
];

const processSteps = [
  {
    title: "Discover & Align",
    description: "Stakeholder workshops, user interviews, and product framing clarify the challenge and define success.",
    icon: CheckCircle2
  },
  {
    title: "Design & Prototype",
    description: "Interactive prototypes and design sprints validate assumptions before we write a single line of code.",
    icon: Sparkles
  },
  {
    title: "Build & Optimize",
    description: "Incremental releases with automated testing ensure a stable, scalable product foundation.",
    icon: Clock
  },
  {
    title: "Launch & Evolve",
    description: "Continuous feedback loops, observability dashboards, and data-led improvements sustain growth.",
    icon: Gauge
  }
];

const futureInitiatives = [
  {
    title: "Invoice & Inventory Suite",
    description: "A plug-and-play platform that unifies invoicing, inventory, purchase orders, and analytics for fast-growing businesses.",
    badge: "Beta",
    status: "Coming soon",
    cta: {
      href: "/products/invoice-inventory-suite",
      label: "Join Early Access",
      variant: "secondary" as const
    }
  },
  {
    title: "Sowsi Meet",
    description: "A secure, AI-assisted meeting and collaboration hub tailored for hybrid teams with real-time notes, tasks, and follow-ups.",
    badge: "Coming Soon",
    status: "In design",
    cta: {
      href: "/products/sowsi-meet",
      label: "Preview Concepts"
    }
  },
  {
    title: "AI-Assisted Operations",
    description: "Intelligent copilots will surface real-time recommendations and automate manual workflows across your organization.",
    badge: "Roadmap",
    status: "Exploration"
  },
  {
    title: "Unified Customer 360",
    description: "A composable data layer that centralizes customer touchpoints for sales, support, and marketing teams.",
    badge: "Concept",
    status: "Discovery"
  }
];

const productPreviews = [
  {
    title: "Invoice & Inventory Suite",
    status: "Beta Access",
    description: "Unify finance and operations with automated invoicing, inventory intelligence, and real-time analytics.",
    href: "/products/invoice-inventory-suite",
    badge: "New"
  },
  {
    title: "Sowsi Meet",
    status: "Coming Soon",
    description: "AI-assisted meetings with instant summaries, next-step automation, and secure recordings for hybrid teams.",
    href: "/products/sowsi-meet",
    badge: "Preview"
  }
];

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sowsi Technologies | Web, Mobile, IoT & AI Development Services</title>
        <meta name="description" content="Sowsi Technologies offers cutting-edge web development, mobile app development, IoT solutions, software services, and AI development for businesses of all sizes." />
      </Helmet>
      
      <Hero />

      {/* Stats Section */}
      <section className="pt-24 mt-48 lg:mt-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCounter label="Years Building Products" value={12} suffix="+" />
            <StatsCounter label="Platforms Delivered" value={160} suffix="+" />
            <StatsCounter label="Automation Hours Saved" value={24000} suffix="+" />
            <StatsCounter label="Client Satisfaction" value={98} suffix="%" />
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section
        id="services"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Services</h2>
            <p className="mt-1 text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Comprehensive Tech Solutions
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We provide end-to-end technology services to help businesses thrive in the digital era.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/services">
              <Button size="lg" variant="outline">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-24 bg-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Products</h2>
              <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Purpose-built platforms launching soon</p>
              <p className="mt-4 text-lg text-slate-300">
                Years of delivery experience are becoming packaged products. Join the cohorts shaping our next releases.
              </p>
            </div>
            <div>
              <Link href="/products">
                <Button variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0B1220]">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {productPreviews.map((product) => (
              <div key={product.title} className="rounded-2xl border border-slate-700 bg-[#111C34] p-8 transition hover:border-primary/60 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                    {product.badge}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">{product.status}</span>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{product.title}</h3>
                <p className="mt-3 text-base text-slate-300">{product.description}</p>
                <div className="mt-6">
                  <Link href={product.href}>
                    <Button size="sm" variant="secondary" className="bg-white text-[#0B1220] hover:bg-slate-100">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Why Teams Choose Sowsi</h2>
            <p className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              We ship experience-led products that grow with your business.
            </p>
            <p className="mt-5 text-lg text-slate-300">
              From early discovery to scale-up, our multidisciplinary team blends design, engineering, and strategy to help you launch faster and outpace the market.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            {keyHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="group rounded-2xl border border-slate-700 bg-[#111C34] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/80 hover:shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <highlight.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{highlight.title}</h3>
                    <p className="mt-3 text-base text-slate-300">{highlight.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=600" 
                  alt="Sowsi Technologies team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-72 h-48 rounded-lg overflow-hidden shadow-xl hidden lg:block">
                <img 
                  src="https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=300&h=200" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="mb-12">
                <h2 className="text-base font-semibold text-primary uppercase tracking-wide">About Us</h2>
                <p className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">Creating Innovative Technology Solutions</p>
                <p className="mt-6 text-lg text-gray-500">
                  Sowsi Technologies is a leading software development company that specializes in creating cutting-edge digital solutions for businesses across various industries. With a team of experienced developers, designers, and strategists, we deliver high-quality technology services that drive innovation and growth.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  Our mission is to help businesses leverage the power of technology to achieve their goals, whether that's through custom software development, web and mobile applications, IoT solutions, or AI-powered systems.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8">
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Our Vision</h3>
                  <p className="mt-2 text-base text-gray-500">To be the leading technology partner for businesses seeking innovative digital solutions that drive growth and success.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Our Values</h3>
                  <p className="mt-2 text-base text-gray-500">Innovation, quality, collaboration, and client satisfaction form the core principles that guide everything we do.</p>
                </div>
              </div>
              
              <div className="mt-10">
                <Link href="/about">
                  <Button>Learn More About Us</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Technology Expertise</h2>
              <p className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">Full-stack craftsmanship across platforms.</p>
              <p className="mt-6 text-lg text-gray-500">
                We love pairing proven frameworks with emerging tech. Here is a snapshot of the toolkits our teams bring to web, mobile, data, and enterprise engagements.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <Link href="/portfolio">
                <Button variant="outline">See Our Work in Action</Button>
              </Link>
            </div>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {technologyStacks.map((stack) => (
              <div
                key={stack.category}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-[#1E293B]">{stack.category}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {stack.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-24 bg-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Delivery DNA</h2>
            <p className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">Built for clarity, speed, and continuous value</p>
            <p className="mt-4 text-lg text-gray-600">
              Each engagement follows a transparent cadence that keeps stakeholders aligned and outcomes predictable.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
              >
                <span className="absolute -top-6 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white text-lg font-semibold">
                  {index + 1}
                </span>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#1E293B]">{step.title}</h3>
                <p className="mt-3 text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Our Work</h2>
            <p className="mt-1 text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Featured Projects
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Explore our portfolio of successful projects and see how we've helped businesses across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/portfolio">
              <Button>See All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Testimonials />

      {/* Future Roadmap */}
      <section className="py-24 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Future Roadmap</h2>
            <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Building the next wave of intelligent business platforms</p>
            <p className="mt-4 text-lg text-slate-300">
              Alongside client engagements, we are investing in product accelerators that help SMEs modernize faster.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {futureInitiatives.map((initiative) => (
              <div key={initiative.title} className="rounded-2xl border border-slate-800 bg-[#111C34] p-8 text-left transition hover:border-primary/60 hover:shadow-xl">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  {initiative.badge}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-white">{initiative.title}</h3>
                <p className="mt-3 text-base text-slate-300">{initiative.description}</p>
                {initiative.status && (
                  <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                    {initiative.status}
                  </p>
                )}
                {initiative.cta && (
                  <div className="mt-6">
                    <Link href={initiative.cta.href}>
                      <Button
                        size="sm"
                        variant={initiative.cta.variant ?? "outline"}
                        className={
                          initiative.cta.variant === "secondary"
                            ? "bg-white text-[#0B1220] hover:bg-slate-100"
                            : undefined
                        }
                      >
                        {initiative.cta.label}
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
