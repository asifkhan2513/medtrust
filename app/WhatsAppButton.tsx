"use client";

import Image from "next/image";
import Link from "next/link";
import whatsappIcon from "./assets/whatsapp.gif";

const WhatsAppButton = () => {
  return (
    <Link
      href="https://wa.me/1234567890" // Please replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-9999 transition-all hover:scale-110 active:scale-95 drop-shadow-2xl hover:brightness-110"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative group">
        <div className="absolute -inset-2 bg-emerald-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <Image
          src={whatsappIcon}
          alt="WhatsApp"
          width={64}
          height={64}
          className="rounded-full w-14 h-14 sm:w-16 sm:h-16 relative z-10"
          unoptimized 
        />
        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0 pointer-events-none">
          <div className="bg-white/95 backdrop-blur-md text-[#0f766e] px-4 py-2 rounded-xl text-sm font-bold shadow-2xl border border-emerald-100/50 flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Chat With Us
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WhatsAppButton;
