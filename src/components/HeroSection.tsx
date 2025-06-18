"use client";

import { useEffect, useRef } from "react";
import { fadeInUp } from "@/utils/gsapHelpers";

export default function HeroSection() {
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const captionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    fadeInUp(".hero-label", { delay: 0 });
    fadeInUp(".hero-heading", { delay: 0.2 });
    fadeInUp(".hero-image", { delay: 0.4 });
    fadeInUp(".hero-caption", { delay: 0.6 });
    fadeInUp(".hero-button", { delay: 0.8 });
  }, []);

  return (
    <section className="relative bg-[#F4F8E8] py-16 px-4 md:px-16 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered on mobile/tablet: Label + Heading */}
        <div className="flex flex-col items-center md:hidden mb-8 gap-6 text-center">
          {/* Label */}
          <p ref={labelRef} className="hero-label max-w-xs text-sm text-[#2C3E2F]">
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="hero-heading text-4xl sm:text-5xl font-extrabold text-[#2C3E2F] leading-tight"
          >
            GLOW <br /> NATUR- <br /> ALLY
          </h1>
        </div>

        {/* Desktop layout: label + heading + product image */}
        <div className="hidden md:flex justify-between items-center mb-8 gap-6">
          {/* Left Label */}
          <p
            ref={labelRef}
            className="hero-label max-w-xs text-sm text-[#2C3E2F]"
          >
            Transform your skincare routine with premium products that restore,
            protect, and enhance your natural glow every day.
          </p>

          {/* Heading */}
          <h1
            ref={headingRef}
            className="hero-heading text-6xl font-extrabold text-[#2C3E2F] leading-tight text-right"
          >
            GLOW <br /> NATURALLY
          </h1>

          {/* Top-right product image */}
          <div>
            <div className="w-24 h-28 bg-white rounded-lg shadow flex items-center justify-center text-gray-400">
              Product
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div
          ref={imageRef}
          className="hero-image flex justify-center relative mt-4 mb-12"
        >
          <div className="w-[280px] h-[380px] bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-sm text-gray-500">
            Model Image
          </div>

          {/* Bottom caption over image */}
          <div
            ref={captionRef}
            className="hero-caption absolute bottom-3 bg-white px-4 py-2 text-xs rounded-full shadow-md flex items-center gap-2 max-w-xs"
          >
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
              🧴
            </div>
            <span className="text-gray-600 text-xs">
              while giving you an invigorating cleansing experience.
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start">
          <button
            ref={buttonRef}
            className="hero-button bg-[#2C3E2F] text-white px-6 py-3 rounded-full hover:bg-[#1f2d24] transition text-sm font-medium"
          >
            Shop Now
          </button>
        </div>
      </div>

      {/* Huge BG Text */}
      <h1 className="absolute text-[100px] sm:text-[160px] md:text-[240px] lg:text-[300px] font-black text-[#2C3E2F]/10 bottom-[-40px] left-1/2 -translate-x-1/2 z-0 leading-none select-none pointer-events-none whitespace-nowrap">
        SKINCARE
      </h1>
    </section>
  );
}
