interface PortfolioItemProps {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  technologies: string[];
}

const PortfolioItem = ({
  title,
  description,
  imageSrc,
  technologies,
}: PortfolioItemProps) => {
  return (
  <div
  className="
    bg-[#F8F8F8]
    rounded-[20px]
    p-3
    h-[450px]
    max-w-[500px]
    mx-auto
shadow-[0_0_30px_8px_rgba(0,0,0,0.15)]
    transition-all
    duration-300
  "
>
    
    {/* Image */}
<div className="relative">
  <img
    src={imageSrc}
    alt={title}
    className="w-full h-[300px] object-cover object-top rounded-[16px]"
  />
</div>

    {/* Content */}
    <div className="-mt-9 px-2 pb-2 relative z-10 bg-[#F8F8F8]">
     <h3 className="pt-4 text-center text-[14px] md:text-[16px] font-bold text-[#0A2F66]">
        {title}
      </h3>

<p className="mt-2 text-center text-[14px] leading-6 text-[#6B7280]">      
    {description}
      </p>

     <div className="flex flex-wrap justify-center gap-3 mt-3">
        {technologies.map((tech, index) => {
          const techStyles: Record<string, string> = {
  React: "border border-[#0284C7] text-[#0284C7] bg-white",

  "React Native": "border border-[#0284C7] text-[#0284C7] bg-white",

  "Node.js": "border border-[#2E7D32] text-[#2E7D32] bg-white",

  MongoDB: "border border-[#2E7D32] text-[#2E7D32] bg-white",

  Flutter: "border border-[#1565C0] text-[#1565C0] bg-white",

  Firebase: "border border-[#8E24AA] text-[#8E24AA] bg-white",
  FireBase: "border border-[#8E24AA] text-[#8E24AA] bg-white",

  AWS: "border border-[#AE4F00] text-[#AE4F00] bg-white",

  Angular: "border border-[#C62828] text-[#C62828] bg-white",

  "Java Spring": "border border-[#558B2F] text-[#558B2F] bg-white",

  PostgreSQL: "border border-[#1E4D8C] text-[#1E4D8C] bg-white",

  Python: "border border-[#1565C0] text-[#1565C0] bg-white",

  TensorFlow: "border border-[#AE4F00] text-[#AE4F00] bg-white",

  "Vue.js": "border border-[#1B8F5A] text-[#1B8F5A] bg-white",

  IoT: "border border-[#6A1B9A] text-[#6A1B9A] bg-white",
  IOT: "border border-[#6A1B9A] text-[#6A1B9A] bg-white",
};

          return (
            <span
              key={index}
             className={`rounded-full px-4 py-1 text-xs font-medium ${
                techStyles[tech] || "border border-gray-300 text-gray-700"
              }`}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  </div>
);
  
};

export default PortfolioItem;