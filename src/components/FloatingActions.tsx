"use client";

import React, { useState, useEffect } from "react";
import { Phone, ArrowUp } from "lucide-react";

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-lg border border-slate-200 flex items-center justify-center hover:bg-orange-50 hover:text-[#ef6c00] transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Quick Phone Call (Only shows on scroll to keep hero clean) */}
      {showTopBtn && (
        <a
          href="tel:+918883334222"
          aria-label="Call S.R PRINTRAADES"
          className="w-12 h-12 rounded-full bg-[#ef6c00] text-white shadow-xl shadow-orange-950/20 flex items-center justify-center hover:bg-[#d85f00] transition-all hover:scale-110 active:scale-95 group relative"
        >
          <Phone className="w-5 h-5" />
          <span className="absolute right-14 whitespace-nowrap bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-md">
            Call: +91 88833 34222
          </span>
        </a>
      )}
    </div>
  );
}
