import { Helmet } from "react-helmet-async";
import Hero from "@/components/Hero";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import Testimonials from "@/components/Testimonials";
import PortfolioItem from "@/components/PortfolioItem";

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
      
      {/* Services Section */}
      <section id="services" className="py-24 bg-white" style={{ marginTop: "5rem" }}>
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
    </>
  );
};

export default Home;
