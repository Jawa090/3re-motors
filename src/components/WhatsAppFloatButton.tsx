import React from "react";

const phoneNumber = "923452221114"; // WhatsApp requires country code, so 92 for Pakistan
const whatsappLink = `https://wa.me/${phoneNumber}`;

const WhatsAppFloatButton = () => (
  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="fixed z-50 bottom-6 right-6 group"
  >
    <div className="relative flex items-center">
      <span className="absolute right-16 opacity-0 group-hover:opacity-100 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </span>
      <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white animate-bounce group-hover:scale-110">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill="#fff"
            d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.1 3.2 5.077 4.363.71.306 1.263.489 1.695.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z"
          />
          <path
            fill="#fff"
            d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.463 3.484 1.34 4.997L2.003 22l5.09-1.333a9.96 9.96 0 0 0 4.91 1.257h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.67-1.04-5.178-2.929-7.067A9.96 9.96 0 0 0 12.004 2.003zm0 17.994a8.01 8.01 0 0 1-4.073-1.12l-.292-.173-3.02.789.805-2.945-.19-.302A7.96 7.96 0 0 1 4.01 12c0-4.418 3.582-8 7.997-8 2.137 0 4.146.832 5.656 2.344A7.96 7.96 0 0 1 20 12c0 4.418-3.582 7.997-7.996 7.997z"
          />
        </svg>
      </div>
    </div>
  </a>
);

export default WhatsAppFloatButton; 