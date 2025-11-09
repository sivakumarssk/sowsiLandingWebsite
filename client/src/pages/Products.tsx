import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, CalendarCheck2, Rocket } from "lucide-react";

const products = [
  {
    title: "Invoice & Inventory Suite",
    description:
      "A modular finance and operations platform that synchronises invoicing, stock, procurement, and analytics for fast-scaling SMEs.",
    status: "Beta",
    badgeVariant: "default" as const,
    href: "/products/invoice-inventory-suite",
    ctaLabel: "Join Early Access"
  },
  {
    title: "Sowsi Meet",
    description:
      "An AI-assisted meeting workspace with automatic notes, task automation, and secure recordings tailored for hybrid delivery teams.",
    status: "Coming Soon",
    badgeVariant: "secondary" as const,
    href: "/products/sowsi-meet",
    ctaLabel: "Preview Roadmap"
  }
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Products | Sowsi Technologies</title>
        <meta
          name="description"
          content="Discover Sowsi Technologies upcoming product launches including the Invoice & Inventory Suite and Sowsi Meet collaboration platform."
        />
      </Helmet>

      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="inline-flex items-center gap-2 bg-primary/10 text-primary">
              <Rocket className="h-4 w-4" /> Product Lab
            </Badge>
            <h1 className="mt-6 text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Products in the Sowsi pipeline
            </h1>
            <p className="max-w-2xl mt-5 mx-auto text-xl text-gray-500">
              We are channeling years of delivery experience into ready-to-launch platforms. Partner with us early to shape the roadmap and unlock early adopter advantages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {products.map((product) => (
              <div key={product.title} className="group rounded-3xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-[#1E293B]">{product.title}</h2>
                  <Badge variant={product.badgeVariant}>{product.status}</Badge>
                </div>
                <p className="mt-4 text-base text-gray-600">{product.description}</p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link href={product.href}>
                    <Button>
                      {product.ctaLabel}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <span className="flex items-center gap-2 text-sm text-gray-500">
                    <CalendarCheck2 className="h-4 w-4 text-primary" />
                    Early partners receive roadmap workshops and onboarding support.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0B1220]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">Have a product idea we should explore next?</h2>
          <p className="mt-4 text-lg text-slate-300">
            Share the pain points holding your teams back. We love co-innovating with customers and industry leaders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg">Start a Conversation</Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="bg-white/10 text-white hover:bg-white hover:text-[#0B1220]">
                See How We Build
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
