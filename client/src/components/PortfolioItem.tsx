import { Badge } from "@/components/ui/badge";

export interface PortfolioItemProps {
  title: string;
  description: string;
  imageSrc: string;
  technologies: string[];
}

const PortfolioItem = ({ title, description, imageSrc, technologies }: PortfolioItemProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-sm">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => {
              const colors = [
                "bg-blue-100 text-blue-800",
                "bg-green-100 text-green-800",
                "bg-purple-100 text-purple-800",
                "bg-yellow-100 text-yellow-800",
                "bg-red-100 text-red-800",
              ];
              const colorClass = colors[index % colors.length];
              
              return (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className={`${colorClass} border-none`}
                >
                  {tech}
                </Badge>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
