"use client";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-white px-4 md:px-16 py-12 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Left: Text Content */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          GLOW <span className="text-green-600">NATURALLY</span><br />
          WITH OUR <span className="text-green-600">SKINCARE</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
          Discover the perfect skincare solution tailored to your needs.
          Our natural, organic products leave your skin radiant and healthy.
        </p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition shadow-md">
          Shop Now
        </button>
      </div>

      {/* Right: Image Placeholder */}
      <div className="flex-1 flex justify-center">
        <div className="w-[300px] h-[400px] bg-gray-200 rounded-xl shadow-inner flex items-center justify-center text-gray-500 text-lg">
          Image Placeholder
        </div>
      </div>
    </section>
  );
}
