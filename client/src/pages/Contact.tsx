import { Helmet } from "react-helmet-async";
import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Sowsi Technologies</title>
        <meta name="description" content="Get in touch with Sowsi Technologies for your web development, mobile app, IoT solution, or AI development project." />
      </Helmet>
      
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
              Contact Us
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Let's discuss your project. Reach out to us today to learn how we can help bring your vision to life.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            
            <div>
              <div className="rounded-lg overflow-hidden h-64 mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&q=80&w=800&h=500" 
                  alt="Sowsi Technologies office" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-[#1E293B] mb-4">Contact Information</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mt-1" />
                      <div className="ml-4">
                        <p className="text-gray-900"><a href="tel:+918019929888">+91 8019929888</a></p>
                        <p className="text-gray-500 text-sm">Mon-Fri 9am-6pm</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mt-1" />
                      <div className="ml-4">
                        <p className="text-gray-900"><a href="mailto:info@sowsitechnologies.com">info@sowsitechnologies.com</a></p>
                        <p className="text-gray-500 text-sm">Email us anytime</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div >
                <h4 className="text-lg font-semibold text-[#1E293B] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  {/* <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a> */}
                </div>
              </div>

                {/* <div>
                  <h4 className="text-lg font-semibold text-[#1E293B] mb-4">Office Location</h4>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mt-1" />
                      <div className="ml-4">
                        <p className="text-gray-900">123 Tech Plaza, Suite 200</p>
                        <p className="text-gray-900">San Francisco, CA 94107</p>
                        <p className="text-gray-500 text-sm">United States</p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              
              {/* <div className="mt-8">
                <h4 className="text-lg font-semibold text-[#1E293B] mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">Facebook</span>
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">Twitter</span>
                    <Twitter className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                    <span className="sr-only">GitHub</span>
                    <Github className="h-6 w-6" />
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
