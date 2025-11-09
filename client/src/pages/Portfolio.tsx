import { Helmet } from "react-helmet-async";
import PortfolioItem from "@/components/PortfolioItem";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    title: "E-commerce Platform",
    description: "A scalable e-commerce solution for a fashion retailer with advanced product filtering and personalized recommendations.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=700",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "IoT Home Automation",
    description: "A comprehensive smart home system with mobile app control, energy monitoring, and intelligent automation scenarios.",
    imageSrc: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=700",
    technologies: ["IoT", "React Native", "AWS"]
  },
  {
    title: "AI-Powered Analytics Dashboard",
    description: "A business intelligence platform with predictive analytics, custom reporting, and interactive data visualizations.",
    imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=700",
    technologies: ["Python", "TensorFlow", "Vue.js"]
  },
  {
    title: "Healthcare Management System",
    description: "A comprehensive platform for healthcare providers to manage patient records, appointments, and billing information.",
    imageSrc: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=700",
    technologies: ["Angular", "Java Spring", "PostgreSQL"]
  },
  {
    title: "Supply Chain Management Solution",
    description: "An end-to-end logistics and inventory management system with real-time tracking and predictive analytics.",
    imageSrc: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=700",
    technologies: ["React", "Node.js", "MongoDB", "IoT"]
  },
  {
    title: "Mobile Banking Application",
    description: "A secure, feature-rich mobile banking application with biometric authentication and personalized financial insights.",
    imageSrc: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=700",
    technologies: ["React Native", "Firebase", "Node.js"]
  }
];

const Portfolio = () => {
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Sowsi Technologies</title>
        <meta name="description" content="Explore Sowsi Technologies' portfolio of successful web, mobile, IoT, and AI development projects across various industries." />
      </Helmet>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Our Portfolio
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Explore our collection of successful projects that showcase our expertise and innovation.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <PortfolioItem key={index} {...item} />
            ))}
          </div>
          
          <div className="mt-24 rounded-3xl bg-[#0B1220] px-6 py-12 sm:px-12">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                  Coming Soon
                </span>
                <h2 className="mt-4 text-3xl font-bold text-white">Next up in the Sowsi product lab</h2>
                <p className="mt-4 text-base text-slate-300">
                  Alongside bespoke builds, our team is productizing the playbooks that keep clients growing. Preview the upcoming releases and partner with us before launch.
                </p>
              </div>
              <div className="grid gap-6">
                <div className="rounded-2xl border border-slate-700 bg-[#111C34] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Invoice &amp; Inventory Suite</h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">Beta</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    Automate finance-to-fulfillment workflows with a modular platform shaped by our commerce and operations projects.
                  </p>
                  <div className="mt-4">
                    <Link href="/products/invoice-inventory-suite">
                      <Button size="sm" variant="outline" className="border-primary/40 text-primary hover:bg-white/10">
                        Join Early Access
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-700 bg-[#111C34] p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-white">Sowsi Meet</h3>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white/80">In Design</span>
                  </div>
                  <p className="mt-3 text-sm text-slate-300">
                    A collaborative workspace with AI-powered notes, automated handoffs, and secure recordings tailored to product and delivery teams.
                  </p>
                  <div className="mt-4">
                    <Link href="/products/sowsi-meet">
                      <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        Preview Features
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1E293B]">Let's Create Your Success Story</h2>
              <p className="mt-4 text-lg text-gray-500">
                Ready to start your next project? Contact us today to discuss how we can bring your vision to life.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Start Your Project</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
