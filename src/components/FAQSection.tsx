"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Are your products suitable for sensitive skin?",
    answer: "Yes, all our products are dermatologically tested and safe for sensitive skin.",
  },
  {
    question: "Do you test on animals?",
    answer: "Absolutely not. We are 100% cruelty-free and vegan-friendly.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 3–5 business days depending on your location.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="px-4 md:px-16 py-12 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center md:text-left">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggle(idx)}
            >
              <span className="text-left text-gray-800 font-medium">{faq.question}</span>
              {openIndex === idx ? <ChevronUp /> : <ChevronDown />}
            </button>

            {openIndex === idx && (
              <div className="p-4 text-gray-600 bg-white border-t border-gray-200 transition-all duration-300 ease-in-out">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
