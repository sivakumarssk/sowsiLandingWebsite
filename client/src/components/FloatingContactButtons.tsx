import { Phone} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const FloatingContactButtons = () => {
  const phoneNumber = "8019929888";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href={`https://wa.me/91${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <FaWhatsapp size={28} />
      </a>

      {/* Call */}
      <a
        href={`tel:${phoneNumber}`}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#2563EB] text-white shadow-lg transition-transform duration-300 hover:scale-110"
      >
        <Phone size={28} />
      </a>
    </div>
  );
};

export default FloatingContactButtons;