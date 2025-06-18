"use client";

import { useEffect } from "react";
import { fadeInUp } from "@/utils/gsapHelpers";

export default function Footer() {
  useEffect(() => {
    fadeInUp(".footer-col", { stagger: 0.2, duration: 1 });
    fadeInUp(".footer-bottom-links", { delay: 0.5, duration: 1 });
    fadeInUp(".footer-bg-text", { delay: 0.7, duration: 1 });
  }, []);

  return (
    <footer className="relative bg-[#2C3E2F] text-white px-4 sm:px-8 md:px-16 py-16 sm:py-20 font-inter overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
        {/* Left Column */}
        <div className="footer-col space-y-4">
          <h3 className="text-xl sm:text-2xl font-semibold">
            Join The Skincare Community Now.
          </h3>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="#" className="hover:text-[#FEDD5B] transition">Facebook</a>
            <a href="#" className="hover:text-[#FEDD5B] transition">Instagram</a>
            <a href="#" className="hover:text-[#FEDD5B] transition">YouTube</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-col space-y-4 text-left md:text-right">
          <h3 className="text-xl sm:text-2xl font-semibold">Get in Touch</h3>
          <p className="text-sm sm:text-base text-[#FEDD5B]">contact.skincare.com</p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-10 border-t border-white/10"></div>

      {/* Bottom Links */}
      <div className="footer-bottom-links max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm relative z-10 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a href="#" className="hover:text-[#FEDD5B] transition">Terms of Service</a>
          <a href="#" className="hover:text-[#FEDD5B] transition">Privacy Policy</a>
          <a href="#" className="hover:text-[#FEDD5B] transition">Cookies Policy</a>
        </div>
      </div>

      {/* Background Text */}
      <h1 className="footer-bg-text absolute bottom-4 left-1/2 -translate-x-1/2 text-[80px] sm:text-[120px] md:text-[200px] lg:text-[240px] font-black text-white/5 select-none pointer-events-none tracking-widest leading-none whitespace-nowrap">
        SKINCARE
      </h1>
    </footer>
  );
}
