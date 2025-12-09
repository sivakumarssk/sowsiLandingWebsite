import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    
    try {
      setIsSubmitting(true);
      await apiRequest("POST", "/api/subscribe", { email });
      toast({
        title: "Success!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold text-white">Sowsi</span>
              <span className="text-2xl font-medium text-blue-300">Technologies</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Innovative technology solutions for businesses of all sizes. We help transform ideas into reality.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-gray-300 hover:text-white">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Mobile Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">IoT Solutions</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Software Services</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">AI Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Consulting & Strategy</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white">Our Team</Link></li>
              <li><Link href="/careers" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white">Testimonials</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <form className="mb-4" onSubmit={handleSubscribe}>
              <div className="flex max-w-md">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="rounded-l-md rounded-r-none text-darkSlate"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  className="rounded-l-none"
                  disabled={isSubmitting}
                >
                  Subscribe
                </Button>
              </div>
            </form>
            <p className="text-gray-300 text-sm">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-gray-300 text-center">© {new Date().getFullYear()} Sowsi Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
