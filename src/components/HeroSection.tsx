"use client";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F4F8E8] py-16 px-4 md:px-16 overflow-hidden font-inter">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          {/* Left Label */}
          <p className="max-w-xs text-sm text-[#2C3E2F]">
            Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
          </p>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#2C3E2F] leading-tight text-right">
            GLOW <br /> NATUR- <br /> ALLY
          </h1>

          {/* Top-right product image */}
          <div className="hidden md:block">
            <div className="w-24 h-28 bg-white rounded-lg shadow flex items-center justify-center text-gray-400">
              Product
            </div>
          </div>
        </div>

        {/* Center Image */}
        <div className="flex justify-center relative mt-4 mb-12">
          <div className="w-[280px] h-[380px] bg-gray-300 rounded-2xl shadow-md flex items-center justify-center text-sm text-gray-500">
            Model Image
          </div>

          {/* Bottom caption over image */}
          <div className="absolute bottom-3 bg-white px-4 py-2 text-xs rounded-full shadow-md flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px]">
              🧴
            </div>
            <span className="text-gray-600">
              while giving you an invigorating cleansing experience.
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-start">
          <button className="bg-[#2C3E2F] text-white px-6 py-3 rounded-full hover:bg-[#1f2d24] transition text-sm font-medium">
            Shop Now
          </button>
        </div>
      </div>

      {/* Huge BG Text */}
      <h1 className="absolute text-[200px] md:text-[300px] font-black text-[#2C3E2F]/10 bottom-[-40px] left-1/2 -translate-x-1/2 z-0 leading-none select-none pointer-events-none">
        SKINCARE
      </h1>
    </section>
  );
}
