"use client";

import { useEffect } from "react";
import { fadeInUp, staggerReveal } from "@/utils/gsapHelpers";

export default function FeelBeautifulSection() {
  const filters = ["NEW ARRIVAL", "CLEANSING", "ACNE FIGHTER", "ANTI AGING"];
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
    fadeInUp(".feel-heading");
    staggerReveal(".feel-filter");
    staggerReveal(".feel-product");
  }, []);

  return (
    <section className="bg-[#FAFDF0] px-4 md:px-16 py-20 font-inter">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Top Banner */}
        <div className="relative w-full h-[400px] bg-gray-300 rounded-2xl shadow flex items-center justify-center overflow-hidden">
          <div className="text-white text-xl md:text-3xl font-semibold text-center z-10">
            Feel Beautiful Inside and Out <br /> with Every Product.
          </div>
          <button className="absolute bottom-6 bg-white text-sm px-5 py-2 rounded-full shadow hover:bg-gray-100 transition z-10">
            Shop Now
          </button>
        </div>

        {/* Repeating Heading */}
        <h2 className="feel-heading text-center text-xl md:text-2xl font-medium text-[#2C3E2F]">
          Feel Beautiful Inside and Out <br /> with Every Product.
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((filter, i) => (
            <button
              key={i}
              className="feel-filter px-4 py-1.5 text-sm bg-white rounded-full shadow text-[#2C3E2F] hover:bg-gray-100 transition"
            >
              {filter}
            </button>
          ))}
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
                  feel-product
                  min-w-[250px] sm:min-w-[320px] md:min-w-0
                  rounded-2xl bg-white shadow-md overflow-hidden
                  flex flex-col snap-start
                  md:max-w-none
                "
              >
                {/* Image Placeholder */}
                <div className="h-[240px] sm:h-[280px] md:h-[320px] bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
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
