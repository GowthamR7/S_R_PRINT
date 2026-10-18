"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenSampleModal: () => void;
}

export default function Navbar({ onOpenSampleModal }: NavbarProps) {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Collections", href: "#collections" },
    { name: "FAQ", href: "#faq" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-neutral-200/60 py-3 shadow-xs"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="w-full max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Left: Brand Logo matching Symmetra reference */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <svg viewBox="0 0 24 24" className="w-7 h-7 drop-shadow-sm" fill="none">
              <path d="M4 12L12 4L14 6L6 14L4 12Z" fill="#ff4d4f" />
              <path d="M6.5 16.5L16.5 6.5L18.5 8.5L8.5 18.5L6.5 16.5Z" fill="#ef6c00" />
              <path d="M11 21L21 11L22.5 12.5L12.5 22.5L11 21Z" fill="#c92a2a" />
            </svg>
          </div>
          <span className="font-heading font-bold text-xl sm:text-2xl tracking-tight text-neutral-950">
            Symmetra
          </span>
        </a>

        {/* Center: Floating Pill Navigation with larger font size matching reference */}
        <nav className="hidden md:flex items-center gap-1 bg-white/95 backdrop-blur-md px-2 py-1.5 rounded-full border border-neutral-200/80 shadow-xs">
          {[
            { name: "Home", href: "#hero" },
            { name: "Services", href: "#services" },
            { name: "Studio", href: "#estimator" },
            { name: "Catalog", href: "#collections" },
            { name: "About", href: "#about" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.name)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-[#ef6c00] text-white font-semibold shadow-sm"
                  : "text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100/80"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right: Contact Us Primary Orange Pill Button with larger font size */}
        <div className="hidden sm:flex items-center gap-2">
          <a
            href="#contact"
            className="btn-symmetra-orange px-7 py-2.5 text-sm font-semibold cursor-pointer shadow-md shadow-orange-500/20 hover:shadow-lg"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 text-neutral-700 hover:text-neutral-900 rounded-full"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto bg-white rounded-2xl p-4 shadow-xl border border-neutral-200 animate-in fade-in">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => {
                  setActiveTab(item.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                  activeTab === item.name
                    ? "bg-[#ef6c00] text-white"
                    : "text-neutral-700 hover:bg-neutral-100"
                }`}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenSampleModal();
                }}
                className="w-full btn-symmetra-orange py-2.5 text-xs text-center"
              >
                Get Free Sample Kit
              </button>
              <a
                href="tel:+918883334222"
                className="w-full text-center py-2 text-xs font-bold text-neutral-700 bg-neutral-100 rounded-full"
              >
                Call: +91 88833 34222
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
