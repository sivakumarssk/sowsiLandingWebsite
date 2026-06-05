import { Helmet } from "react-helmet-async";
import PortfolioItem from "@/components/PortfolioItem";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PopupForm from "../components/PopupForm";
import { ArrowRight } from "lucide-react";

import { useState } from "react";

import analyticsImg from "../assets/portfolio/AI-powered-analytics-dashboard.png";
import travelImg from "../assets/portfolio/AllonsZ-digital-platform.png";
import ecommerceImg from "../assets/portfolio/E-commerce-Platform.png";
import farmImg from "../assets/portfolio/smart-delivery-platform.png";
import iotImg from "../assets/portfolio/IOT-home-automation.png";
import healthcareImg from "../assets/portfolio/HealthCare-Mangement-system.png";
import bankingImg from "../assets/portfolio/mobile-banking-solution.png";
import aiHealthImg from "../assets/portfolio/AI-healthCare-Platform.png";
import supplyChainImg from "../assets/portfolio/supply-chain-mangement-solution.png";
import rightImage from "../assets/portfolio/rightImage.png"

const categories = [
  "All",
  "App Development",
  "Web Development",
  "E-Commerce",
  "IoT",
];



const portfolioItems = [
  {
    title: "E-COMMERCE PLATFORM",
    category: "Web Development",
    description: "A scalable e-commerce solution for a fashion retailer with advanced product filtering and personalized recommendations.",
    imageSrc: ecommerceImg,
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "ALLONSZ DIGITAL PLATFORM",
    category: "App Development",
    description: "A smart digital platform offering personalized recommendations, secure access, and seamless user experiences.",
    imageSrc: travelImg,
    technologies: ["Flutter", "Node.js", "Firebase"],
  },
  {
    title: "SMART FARM DELIVERY PLATFORM",
    category: "App Development",
    description: "A farm-to-home delivery platform for fresh dairy products, subscriptions, order tracking, and seamless shopping.",
    imageSrc: farmImg,
    technologies: ["Flutter", "Node.js", "Firebase"],
  },
  {
    title: "IOT HOME AUTOMATION",
    category: "IoT",
    description: "A comprehensive smart home system with mobile app control, energy monitoring, and intelligent automation scenarios.",
    imageSrc: iotImg,
    technologies: ["IoT", "React Native", "AWS"],
  },
  {
    title: "MOBILE BANKING SOLUTION",
    category: "App Development",
    description: "A secure, feature-rich mobile banking application with biometric authentication and personalized financial insights.",
    imageSrc: bankingImg,
    technologies: ["React Native", "Firebase", "Node.js"],
  },
  {
    title: "HEALTHCARE MANAGEMENT SYSTEM",
    category: "Web Development",
    description: "An AI-powered healthcare platform for health tracking, doctor consultations, and personalized care insights.",
    imageSrc: healthcareImg,
    technologies: ["Angular", "Java Spring", "PostgreSQL"],
  },
  {
    title: "AI HEALTHCARE PLATFORM",
    category: "AI",
    description: "An AI-powered healthcare platform for health tracking, doctor consultations, and personalized care insights.",
    imageSrc: aiHealthImg,
    technologies: ["Flutter", "Node.js", "FireBase"],
  },
  {
    title: "AI-POWERED ANALYTICS DASHBOARD",
    category: "AI",
    description: "A business intelligence platform with predictive analytics, custom reporting, and interactive data visualizations.",
    imageSrc: analyticsImg,
    technologies: ["Python", "TensorFlow", "Vue.js"],
  },
  {
    title: "SUPPLY CHAIN MANAGEMENT",
    category: "Web Development",
    description: "An end-to-end logistics and inventory management system with real-time tracking and predictive analytics.",
    imageSrc: supplyChainImg,
    technologies: ["React", "Node.js", "MongoDB","IOT"],
  },
];

const categoryProjects = {
  All: portfolioItems.map((item) => item.title),

  "App Development": [
    "E-COMMERCE PLATFORM",
    "ALLONSZ DIGITAL PLATFORM",
    "SMART FARM DELIVERY PLATFORM",
    "MOBILE BANKING SOLUTION",
    "AI HEALTHCARE PLATFORM",
  ],

  "Web Development": [
    "E-COMMERCE PLATFORM",
    "AI ANALYTICS DASHBOARD",
    "IOT HOME AUTOMATION",
    "HEALTHCARE MANAGEMENT SYSTEM",
  ],

  "E-Commerce": [
    "E-COMMERCE PLATFORM",
    "SMART FARM DELIVERY PLATFORM",
  ],

  IoT: [
    "IOT HOME AUTOMATION",
    "SUPPLY CHAIN MANAGEMENT",
  ],
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showPopup, setShowPopup] = useState(false);
  const filteredProjects =
  activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) =>
        categoryProjects[
          activeCategory as keyof typeof categoryProjects
        ].includes(item.title)
      );
  return (
    <>
      <Helmet>
        <title>Our Portfolio | Sowsi Technologies</title>
        <meta name="description" content="Explore Sowsi Technologies' portfolio of successful web, mobile, IoT, and AI development projects across various industries." />
      </Helmet>
      
<section className="bg-[#F8FAFC] min-h-[500px] flex items-center">
<div className="max-w-[1800px] px-4">

<div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-center">

      {/* Left Content */}
    <div className="max-w-[800px] ml-6">

        <div className="inline-flex items-center bg-blue-100 px-4 py-4 rounded-full">
          <span className="font-semibold text-lg">
            • OUR PORTFOLIO
          </span>
        </div>
<h1 className="mt-8 text-5xl lg:text-[52px] font-bold leading-[1.1] text-[#0F172A]">
          Creating Digital
          <br />
          Experiences That
          <br />
          <span className="text-blue-500">
            Drive Real Impact
          </span>
        </h1>

<p className="mt-8 text-[22px] leading-[1.5] text-gray-500 max-w-[600px]">
          Explore our collection of innovative solutions,
          successful projects that showcase our expertise
          and innovation.
        </p>
<div
  onClick={() => setShowPopup(true)}
  className="mt-10 flex items-center cursor-pointer group"
>
  <div
    className="
      relative flex items-center
      bg-gradient-to-r from-[#5DAAF8] to-[#3458B5]
      rounded-full h-16 px-12 pr-20
      transition-all duration-300
      group-hover:bg-white
      group-hover:bg-none
      group-hover:border
      group-hover:border-[#3458B5]
    "
  >
    <span
      className="
        text-white text-xl font-semibold
        transition-colors duration-300
        group-hover:text-[#3458B5]
      "
    >
      Have a Project in Mind?
    </span>

    <div className="absolute right-1 w-14 h-14 rounded-full bg-[#27408F] flex items-center justify-center">
      <ArrowRight className="w-6 h-6 text-white" />
    </div>
  </div>
</div>
      </div>

      {/* Right Image */}
 <div className="flex justify-end mr-[-10px]">
 <img
  src={rightImage}
  alt="Portfolio Hero"
  className="w-full max-w-[500px] h-[460px] rounded-[24px] object-cover translate-y-6"
/>
</div>

    </div>

  </div>
</section>
      
      <section className="pt-20 pb-24 bg-white">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-wrap justify-start gap-3 mb-16">
  {categories.map((category) => (
    <button
      key={category}
      onClick={() => setActiveCategory(category)}
      className={`px-8 py-2 rounded-full transition-all duration-300 text-sm ${
  activeCategory === category
    ? "border border-[#1E2A78] bg-[#DDE4FF] text-[#1E2A78] font-semibold"
    : "border border-gray-400 text-gray-600 font-medium"
}`}
    >
      {category}
    </button>
  ))}
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">          
   {filteredProjects.map((item, index) => (
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
                      <Button
  size="sm"
  variant="outline"
  className="
    border-primary/40
    text-primary
    hover:bg-white/10
    hover:text-white
    hover:border-white
    transition-all
    duration-300
  "
>
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
                       <Button
  size="sm"
  variant="outline"
  className="
    border-primary/40
    text-primary
    hover:bg-white/10
    hover:text-white
    hover:border-white
    transition-all
    duration-300
  "
>
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
      {showPopup && (
  <PopupForm onClose={() => setShowPopup(false)} />
)}
    </>
  );
};

export default Portfolio;
