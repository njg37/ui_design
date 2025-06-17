"use client";

export default function BestSellingProducts() {
  // Temporary placeholder data
  const products = [
    { id: 1, name: "Glow Cleanser", price: "$25" },
    { id: 2, name: "Hydrating Serum", price: "$35" },
    { id: 3, name: "Herbal Face Wash", price: "$20" },
  ];

  return (
    <section className="px-4 md:px-16 py-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Best Selling Products
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition"
          >
            <div className="w-full h-56 bg-gray-200 rounded-md flex items-center justify-center text-gray-500">
              Image Placeholder
            </div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{product.name}</h3>
            <p className="text-green-600 font-medium mt-1">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md w-full transition">
              View Product
            </button>
          </div>
        ))}
      </div>

      {/* Slider Buttons for mobile/tablet only */}
      <div className="flex justify-center gap-4 mt-8 md:hidden">
        <button className="w-10 h-10 bg-white border rounded-full shadow-sm hover:bg-green-100 transition">
          ←
        </button>
        <button className="w-10 h-10 bg-white border rounded-full shadow-sm hover:bg-green-100 transition">
          →
        </button>
      </div>
    </section>
  );
}
