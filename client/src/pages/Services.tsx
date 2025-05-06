import { Helmet } from "react-helmet-async";
import ServiceCard from "@/components/ServiceCard";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

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
  },
  {
    title: "Software Services",
    description: "Custom software solutions and enterprise applications designed to solve complex business challenges.",
    imageSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=300",
    imageAlt: "Software Services",
    features: [
      { text: "Custom Software Development" },
      { text: "Enterprise Applications" },
      { text: "Legacy System Modernization" }
    ]
  },
  {
    title: "AI Development",
    description: "Machine learning solutions and AI integrations that automate processes and deliver predictive insights.",
    imageSrc: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=300",
    imageAlt: "AI Development",
    features: [
      { text: "Machine Learning Models" },
      { text: "Natural Language Processing" },
      { text: "Computer Vision" }
    ]
  },
  {
    title: "Consulting & Strategy",
    description: "Technology consulting and digital transformation strategies to help businesses evolve and compete.",
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=600&h=300",
    imageAlt: "Consulting & Strategy",
    features: [
      { text: "Digital Transformation" },
      { text: "Technology Roadmapping" },
      { text: "IT Strategy Development" }
    ]
  }
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Sowsi Technologies</title>
        <meta name="description" content="Sowsi Technologies offers a wide range of services including web development, mobile app development, IoT solutions, software services, and AI development." />
      </Helmet>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Our Services
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We offer a comprehensive range of technology services designed to help businesses innovate and grow in the digital era.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1E293B]">Ready to Start Your Project?</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our team of experts is ready to help you turn your vision into reality. Contact us today to discuss your project.
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

export default Services;
