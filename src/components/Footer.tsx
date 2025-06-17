export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-16 py-10 font-inter">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-bold mb-2">SKIN<span className="text-green-400">CARE</span></h3>
          <p className="text-gray-400 text-sm">
            Your go-to natural skincare destination. Pure, cruelty-free, and made with love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#products" className="hover:text-white">Products</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact</h4>
          <p className="text-gray-300 text-sm">Email: support@skincare.com</p>
          <p className="text-gray-300 text-sm mt-1">Phone: +91 12345 67890</p>
          <p className="text-gray-300 text-sm mt-1">Address: Kamalpur, Tripura</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} SKINCARE. All rights reserved.
      </div>
    </footer>
  );
}
