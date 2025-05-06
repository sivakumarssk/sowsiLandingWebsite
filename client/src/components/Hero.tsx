import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import StatsCounter from "./StatsCounter";
import { useEffect, useState } from "react";

// Animation images array
const animationImages = [
  "https://images.unsplash.com/photo-1726065235188-20092754fc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=450",
  "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=450",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=450"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Image animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === animationImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 sm:text-center md:max-w-2xl md:mx-auto lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-[#1E293B] sm:text-5xl md:text-6xl animate-fade-in">
              <span className="block">Your Vision.</span>
              <span className="block text-primary mt-1">Our Technology.</span>
            </h1>
            <p className="mt-5 text-lg text-gray-500 animate-slide-up">
              Sowsi Technologies specializes in creating cutting-edge digital solutions, from web applications and 
              mobile apps to IoT solutions and AI-powered systems.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/services">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Services
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6 relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden">
              {animationImages.map((src, index) => (
                <img 
                  key={index}
                  src={src} 
                  alt={`Sowsi Technologies - Slide ${index + 1}`} 
                  className={`w-full h-full rounded-lg object-cover absolute transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating stats section */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute z-10" style={{ marginBottom: "-5rem" }}>
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-10">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            <StatsCounter label="Years Experience" value={10} suffix="+" />
            <StatsCounter label="Completed Projects" value={200} suffix="+" />
            <StatsCounter label="Happy Clients" value={150} suffix="+" />
            <StatsCounter label="Team Members" value={50} suffix="+" />
          </dl>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
