"use client";

import { useEffect } from "react";
import { fadeInUp, staggerReveal } from "@/utils/gsapHelpers";

export default function WhyOurProducts() {
  useEffect(() => {
    fadeInUp(".why-heading");
    staggerReveal(".why-feature-item");
  }, []);

  return (
    <section className="bg-[#F4F8E8] px-4 md:px-16 py-20 font-inter">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content (Text First on mobile/tablet) */}
        <div className="order-1 md:order-none space-y-8">
          {/* Pill button */}
          <button className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow text-sm text-[#2C3E2F] w-fit">
            <div className="w-2 h-2 bg-[#2C3E2F] rounded-full"></div>
            Why Our Products
          </button>

          {/* Heading */}
          <h2 className="why-heading text-3xl md:text-4xl font-bold text-[#2C3E2F]">
            YOUR SKIN DESERVES
            <br />
            THE BEST CARE.
          </h2>

          {/* Description */}
          <p className="text-gray-700 max-w-md text-sm leading-relaxed">
            Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin.
            Explore our rage crafted with love backed by science, and inspired by nature.
          </p>

          {/* Features List */}
          <div className="why-features space-y-6 text-[#2C3E2F] text-sm">
            {[
              {
                number: "01",
                title: "Bio Ingredients",
                desc: "Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.",
              },
              {
                number: "02",
                title: "Everything Natural",
                desc: "Pure ingredients for pure skin. The perfect solution for your skin care needs.",
              },
              {
                number: "03",
                title: "All Handmade",
                desc: "Made with love and care. Just for you. Give your skin the tender loving care it deserves.",
              },
            ].map(({ number, title, desc }) => (
              <div key={number} className="why-feature-item">
                <h3 className="font-semibold text-lg mb-1">
                  <span className="text-gray-400 font-medium mr-2">{number}</span>
                  {title}
                </h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content (Image block goes below text on mobile) */}
        <div className="order-2 md:order-none relative">
          {/* Image box */}
          <div className="w-full max-w-sm h-[500px] bg-gray-200 rounded-2xl shadow-md border-[3px] border-[#FEDD5B] mx-auto flex items-center justify-center text-gray-400">
            Model Image
          </div>

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
              ✅
            </div>
            <span className="text-[#2C3E2F] font-medium">
              Best Skin Care Product
              <br />
              Award Winning
            </span>
          </div>

          {/* Since text */}
          <p className="text-[10px] text-[#2C3E2F] text-center mt-3">SINCE 2001</p>
        </div>
      </div>
    </section>
  );
}
