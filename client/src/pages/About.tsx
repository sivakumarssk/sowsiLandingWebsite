import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import StatsCounter from "@/components/StatsCounter";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Sowsi Technologies</title>
        <meta name="description" content="Learn about Sowsi Technologies - a leading software development company specializing in web, mobile, IoT, and AI solutions for businesses." />
      </Helmet>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              About Sowsi Technologies
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We're a team of passionate technologists dedicated to creating innovative digital solutions.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
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
            </div>
            
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-bold text-[#1E293B]">Our Story</h2>
              <p className="mt-6 text-lg text-gray-500">
                Founded in 2024, Sowsi Technologies began with a simple mission: to help businesses leverage the power of technology to achieve their goals. What started as a small team of passionate developers has grown into a full-service technology company with expertise across web, mobile, IoT, and AI development.
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Over the years, we've worked with clients ranging from startups to Fortune 500 companies, delivering innovative solutions that drive business growth and digital transformation. Our commitment to quality, innovation, and client satisfaction has been the cornerstone of our success.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E293B]">Our Mission & Vision</h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We're driven by a clear mission and guided by a focused vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative technology solutions that solve complex problems, improve efficiency, and drive growth. We strive to deliver exceptional value through our expertise, creativity, and commitment to excellence.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading technology partner for businesses seeking innovative digital solutions that drive growth and success. We aim to be at the forefront of technological advancement, continuously evolving our capabilities to meet the changing needs of our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-[#1E293B]">Product Innovation Pipeline</h2>
              <p className="mt-4 text-lg text-gray-600">
                Beyond client engagements, we are investing in proprietary products that extend Sowsi&apos;s impact. Each product is built alongside design partners to ensure it solves real operational pains from day one.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <Link href="/products">
                <Button variant="outline">Explore Products</Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Beta · Coming Soon
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#1E293B]">Invoice &amp; Inventory Suite</h3>
              <p className="mt-3 text-base text-gray-600">
                A modular engine that joins invoicing, inventory, procurement, and analytics for fast-scaling SMEs. Design partners are shaping automations, dashboards, and integrations before general availability.
              </p>
              <div className="mt-6">
                <Link href="/products/invoice-inventory-suite">
                  <Button size="sm">Join Early Access Waitlist</Button>
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-8 shadow-sm">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                Concept · Coming Soon
              </span>
              <h3 className="mt-4 text-xl font-semibold text-[#1E293B]">Sowsi Meet</h3>
              <p className="mt-3 text-base text-gray-600">
                Our upcoming collaboration suite blends AI-generated notes, task automation, and secure recordings to keep hybrid teams aligned. We are co-creating the experience with forward-looking product teams.
              </p>
              <div className="mt-6">
                <Link href="/products/sowsi-meet">
                  <Button size="sm" variant="outline">
                    Preview the Roadmap
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E293B]">Our Values</h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              The core principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Innovation</h3>
              <p className="text-gray-600">
                We continuously explore new technologies and approaches to deliver cutting-edge solutions for our clients.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Quality</h3>
              <p className="text-gray-600">
                We are committed to delivering high-quality solutions that meet and exceed our clients' expectations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in working closely with our clients, fostering open communication and partnership.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-3">Integrity</h3>
              <p className="text-gray-600">
                We conduct our business with honesty, transparency, and ethical practices at all times.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#1E293B]">Our Achievements</h2>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              A decade of excellence in technology solutions.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-xl p-8">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              <StatsCounter label="Years Experience" value={2} suffix="+" />
              <StatsCounter label="Completed Projects" value={20} suffix="+" />
              <StatsCounter label="Happy Clients" value={20} suffix="+" />
              <StatsCounter label="Team Members" value={15} suffix="+" />
            </dl>
          </div>
          
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1E293B]">Ready to Work With Us?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Contact us today to discuss how we can help your business leverage technology for growth and innovation.
              </p>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Get in Touch</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
