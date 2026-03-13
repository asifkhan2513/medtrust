"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LOGO from "@/app/assets/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/delivary", label: "Delivary process" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="relative mx-auto flex max-w-7xl items-center justify-center px-4 py-3 sm:px-6 sm:py-3 lg:px-8">
        {/* Center layout: logo in middle, links around it */}
        <div className="flex w-full flex-col items-center gap-4 md:flex-row md:justify-between md:gap-8">
          {/* Desktop nav - left */}
          <div className="hidden flex-1 justify-end md:flex md:gap-6 lg:gap-8">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-black transition-colors hover:text-[#0d9488] lg:text-base"
              >
                <span className="after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#0d9488] after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Logo - centered */}
          <Link
            href="/"
            className="flex items-center gap-2  border border-black/2 p-1.5 rounded-full  shadow-sm transition-all hover:border-[#0d9488]/40 hover:shadow-md"
          >
            <Image
              src={LOGO}
              alt="MedTrust Logo"
              width={120}
              height={48}
              className="h-9 w-9 sm:h-10 scale-150"
              priority
            />
          </Link>

          {/* Desktop nav - right */}
          <div className="hidden flex-1 justify-start md:flex md:gap-6 lg:gap-8">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-black transition-colors hover:text-[#0d9488] lg:text-base"
              >
                <span className="after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:bg-[#0d9488] after:transition-all after:duration-300 hover:after:w-full">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden">
            <button
              onClick={toggleMenu}
              className="rounded-lg p-2 text-slate-600 ring-1 ring-slate-200/60 transition hover:bg-slate-50 hover:text-[#0d9488] hover:cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="border-t border-slate-100 bg-white/98 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                className="rounded-lg px-4 py-3 text-slate-600 transition-colors hover:bg-[#0d9488]/10 hover:text-[#0d9488]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
