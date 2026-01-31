"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/523310767254?text=Hola,%20me%20gustaría%20información"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-6 right-6
        bg-[#25D366]
        text-white
        p-4
        rounded-full
        shadow-xl
        hover:bg-[#20bd5a]
        hover:scale-110
        transition-all duration-300
        z-50
      "
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}
