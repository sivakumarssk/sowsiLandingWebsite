import { Link } from "wouter";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";

export interface ServiceFeature {
  text: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  features: ServiceFeature[];
}

const ServiceCard = ({ title, description, imageSrc, imageAlt, features }: ServiceCardProps) => {
  return (
    <div className="relative group service-card transition duration-300 ease-in-out">
      <Card className="overflow-hidden h-full">
        <div className="h-48 bg-gray-200 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
          <p className="mt-2 text-gray-500">{description}</p>
          <ul className="mt-4 space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className="h-5 w-5 text-primary" />
                <span className="ml-2 text-sm text-gray-500">{feature.text}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="pt-0 pb-6 px-6">
          <Link href="/contact" className="inline-flex items-center text-primary hover:text-blue-700 transition-colors">
            Learn more
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ServiceCard;
