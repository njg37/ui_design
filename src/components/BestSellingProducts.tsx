"use client";

import { useEffect } from "react";
import { fadeInUp, staggerReveal } from "@/utils/gsapHelpers";

export default function BestSellingProducts() {
  const products = [
    {
      name: "ALYA SKIN CLEANSER.",
      price: "FROM $29.00",
    },
    {
      name: "RITUAL OF SAKURA.",
      price: "FROM $27.00",
    },
    {
      name: "THE BODY LOTION.",
      price: "FROM $19.00",
    },
  ];

  useEffect(() => {
    fadeInUp(".product-heading");
    staggerReveal(".product-card");
  }, []);

  return (
    <section className="bg-[#FAFDF0] px-4 md:px-16 py-20 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          {/* Pill */}
          <button className="flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow text-sm text-[#2C3E2F] w-fit">
            <div className="w-2 h-2 bg-[#2C3E2F] rounded-full"></div>
            Best Selling Products
          </button>

          {/* Heading */}
          <h2 className="product-heading text-center text-xl md:text-2xl font-semibold text-[#2C3E2F]">
            Skincare That Brings Out <br /> Your Natural Radiance
          </h2>

          {/* Arrows */}
          <div className="flex gap-2">
            <button className="w-9 h-9 bg-white rounded-full shadow flex items-center justify-center hover:bg-gray-100 transition">
              ←
            </button>
            <button className="w-9 h-9 bg-[#2C3E2F] text-white rounded-full shadow flex items-center justify-center hover:bg-[#1f2d24] transition">
              →
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="overflow-x-auto md:overflow-visible">
          <div
            className="
              flex md:grid md:grid-cols-3 gap-6 sm:gap-8
              snap-x snap-mandatory md:snap-none
              px-1 sm:px-2 md:px-0
              -mx-1 sm:-mx-2 md:mx-0
            "
          >
            {products.map((product, i) => (
              <div
                key={i}
                className="
                  product-card
                  min-w-[250px] sm:min-w-[320px] md:min-w-0
                  rounded-2xl bg-white shadow-md overflow-hidden
                  flex flex-col snap-start
                  md:max-w-none
                "
              >
                {/* Image Placeholder */}
                <div className="h-[240px] sm:h-[300px] md:h-[320px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                  Product Image
                </div>

                {/* Info Area */}
                <div className="flex items-center justify-between px-4 py-4 border-t border-gray-100">
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C3E2F]">{product.name}</h3>
                    <p className="text-[11px] text-gray-500 mt-1">{product.price}</p>
                  </div>
                  <button className="w-8 h-8 bg-gray-100 hover:bg-gray-200 transition rounded-md flex items-center justify-center">
                    🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
