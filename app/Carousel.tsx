"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import image1 from "@/app/assets/image.jpg";
import image2 from "@/app/assets/image1.jpg";

const slides = [
  { src: image1, alt: "MedTrust - Quality medicine" },
  { src: image2, alt: "Trusted healthcare" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[320px] w-full overflow-hidden sm:h-[420px] md:h-[520px] lg:h-[600px]">
      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          aria-hidden={index !== currentIndex}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Light teal gradient overlay for text readability (no black) */}
      <div
        className="absolute inset-0 bg-linear-to-t from-[#0f766e]/70 via-[#0d9488]/40 to-transparent"
        aria-hidden
      />

      {/* Hero text overlay - centered on carousel */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_8px_rgba(15,118,110,0.6)] sm:text-4xl md:text-5xl lg:text-6xl">
          Trusted Medicine,{" "}
          <span className="text-[#5eead4]">Better Health</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-black drop-shadow-md sm:text-lg md:text-xl">
          Quality pharmaceutical products and reliable healthcare solutions you can trust
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex items-center rounded-xl bg-[#0d9488] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#0f766e] hover:shadow-xl"
        >
          Get in Touch
        </Link>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
        {[0, 1].map((i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all ${i === currentIndex ? "w-6 bg-white" : "w-2 bg-white/60"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
