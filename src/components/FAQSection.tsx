"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item active by default matching Dribbble

  const faqs = [
    {
      question: "Production Timeframe",
      answer:
        "Standard production spans 3 to 5 business days, depending on project complexity and total volume. We focus on meticulous execution to ensure every output meets our rigorous quality benchmarks before completion.",
    },
    {
      question: "File Requirements & Design Formats",
      answer:
        "We accept vector PDF, Adobe Illustrator (.AI), CorelDraw (.CDR), and high-resolution EPS files. For woven labels and embroidery/rubber molds, our in-house pre-press team converts artwork into production-ready loom matrices and CNC tooling.",
    },
    {
      question: "Material Selection & Eco-Certifications",
      answer:
        "All our woven yarns, silicon polymers, and offset printing inks comply with international Oeko-Tex Standard 100 Class I and REACH safety regulations, free from harmful phthalates and heavy metals.",
    },
    {
      question: "Shipping, Sampling & Global Delivery",
      answer:
        "Based in Tirupur, we provide door-to-door express courier dispatch across all major Indian apparel hubs (Bengaluru, Mumbai, Delhi, Surat, Kolkata, Chennai) and direct export carton staging to air and sea freight forwarders.",
    },
    {
      question: "Minimum Order Quantities (MOQ)",
      answer:
        "We support growing brands with flexible MOQs starting at 1,000 pcs for woven labels, 500 pcs for custom 3D rubber patches, and 500 units for luxury apparel packaging boxes.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Center Header matching Dribbble reference */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 font-normal">
          Find detailed information regarding our production standards, ordering procedures, and
          delivery policies.
        </p>
      </div>

      {/* Accordion List matching Dribbble */}
      <div className="w-full max-w-6xl mx-auto space-y-4">
        {faqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={faq.question}
              onClick={() => toggleFAQ(idx)}
              className={`rounded-2xl transition-all duration-200 cursor-pointer ${
                isOpen
                  ? "bg-[#ef6c00] text-white p-6 sm:p-7 shadow-lg shadow-orange-950/10"
                  : "bg-white border border-neutral-200/90 text-neutral-900 px-6 py-4.5 hover:border-neutral-300"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3
                  className={`text-base sm:text-lg font-bold ${
                    isOpen ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {faq.question}
                </h3>

                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isOpen ? "bg-white text-[#ef6c00]" : "bg-neutral-100 text-neutral-700"
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4 stroke-[2.5]" /> : <Plus className="w-4 h-4 stroke-[2.5]" />}
                </div>
              </div>

              {isOpen && (
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mt-4 pt-4 border-t border-white/20 font-normal max-w-3xl">
                  {faq.answer}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
