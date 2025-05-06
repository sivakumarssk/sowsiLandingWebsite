import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
}

const testimonials: TestimonialProps[] = [
  {
    quote: "Sowsi Technologies delivered an exceptional e-commerce platform that has significantly improved our online sales and customer experience. Their team was professional, responsive, and truly understood our business needs.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "Fashion Forward",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "The IoT solution developed by Sowsi has transformed our manufacturing process, reducing downtime by 35% and improving efficiency across all operations. Their technical expertise and innovation were impressive.",
    name: "David Chen",
    position: "CTO",
    company: "IndusTech Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Sowsi Technologies helped us develop a cutting-edge mobile app that has received overwhelmingly positive feedback from our users. Their attention to detail and commitment to quality was evident throughout the project.",
    name: "Michael Roberts",
    position: "Product Manager",
    company: "HealthTech",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonial = ({ quote, name, position, company, avatar }: TestimonialProps) => (
  <Card className="h-full">
    <CardContent className="p-8 relative">
      <div className="text-primary absolute -top-4 left-8">
        <Quote className="h-8 w-8" />
      </div>
      <div className="text-gray-700 mt-6">
        <p className="italic">{quote}</p>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <img className="h-12 w-12 rounded-full" src={avatar} alt={name} />
        </div>
        <div className="ml-4">
          <h4 className="text-lg font-bold text-[#1E293B]">{name}</h4>
          <p className="text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

const ClientLogo = ({ name }: { name: string }) => (
  <div className="flex justify-center items-center col-span-1 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <span className="font-bold text-xl text-gray-400">{name}</span>
  </div>
);

const clients = ["Client 1", "Client 2", "Client 3", "Client 4", "Client 5", "Client 6"];

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide">Testimonials</h2>
          <p className="mt-1 text-4xl font-extrabold text-[#1E293B] sm:text-5xl sm:tracking-tight">
            What Our Clients Say
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            We take pride in our work and the positive feedback we receive from our valued clients.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* Clients Logo Section */}
        {/* <div className="mt-24">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-10">Trusted by Leading Companies</h3>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {clients.map((client, index) => (
              <ClientLogo key={index} name={client} />
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
