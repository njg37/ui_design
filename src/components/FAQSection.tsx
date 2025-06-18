"use client";

import { useState, useEffect } from "react";
import { Plus, Minus } from "lucide-react";
import { fadeInUp, staggerReveal } from "@/utils/gsapHelpers";

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes, our products are dermatologically tested and safe for all skin types, including sensitive skin.",
  },
  {
    question: "Do you test on animals?",
    answer: "No, we are 100% cruelty-free and do not test on animals.",
  },
  {
    question: "What’s your return policy?",
    answer: "We offer a 15-day return window. Items must be unopened and in original packaging.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship worldwide with tracking and customer support.",
  },
  {
    question: "How do I choose the right product?",
    answer: "Use our AI-powered skincare quiz or contact our experts for personalized guidance.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    fadeInUp(".faq-title");
    staggerReveal(".faq-item");
  }, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAFDF0] px-4 md:px-16 py-20 font-inter">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left: Image with Badge */}
        <div className="relative">
          <div className="w-full h-[460px] max-w-sm bg-gray-200 rounded-2xl shadow-md flex items-center justify-center text-gray-500 text-sm mx-auto">
            Product Image
          </div>
          {/* Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">
              🕒
            </div>
            <span className="text-[#2C3E2F] font-medium">
              24/7 We&#39;re Here to Help You
            </span>
          </div>
        </div>

        {/* Right: FAQs */}
        <div className="space-y-6">
          <h2 className="faq-title text-2xl md:text-3xl font-semibold text-[#2C3E2F] mb-4">
            Answers to Your Skincare Questions, All in One Place.
          </h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 bg-white"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left text-[#2C3E2F] font-medium hover:bg-gray-100 transition"
              >
                {faq.question}
                {openIndex === index ? (
                  <Minus size={18} />
                ) : (
                  <Plus size={18} />
                )}
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
