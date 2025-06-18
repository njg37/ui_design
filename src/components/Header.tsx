"use client";

import { useState } from "react";
import { ShoppingBag, Heart, User2, Menu, X } from "lucide-react";

const navLinks = ["All Products", "Serum", "Sunscreen", "Bundle"];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#F4F8E8] font-inter border-b border-[#e1e5d6]">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        {/* Left: Logo */}
        <div className="text-xl font-extrabold text-[#2C3E2F] tracking-wide">
          SKINCARE
        </div>

        {/* Center: Nav Links (Desktop Only) */}
        <nav className="hidden md:flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-[#2C3E2F] text-sm font-medium hover:underline underline-offset-4 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Cart with label */}
          <button className="flex items-center gap-2 text-[#2C3E2F] text-sm font-medium">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition">
              <ShoppingBag size={16} />
            </div>
            <span className="hidden sm:inline">Cart (1)</span>
          </button>

          {/* Wishlist Icon */}
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition">
            <Heart size={16} className="text-[#2C3E2F]" />
          </button>

          {/* User Icon */}
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-gray-100 transition">
            <User2 size={16} className="text-[#2C3E2F]" />
          </button>

          {/* Hamburger Menu (Mobile Only) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-[#2C3E2F]"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#F4F8E8] px-4 pb-6 space-y-4 border-t border-[#e1e5d6]">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="block text-[#2C3E2F] text-sm font-medium hover:underline underline-offset-4 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
