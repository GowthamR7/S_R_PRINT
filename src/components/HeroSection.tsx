"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Sparkles, X } from "lucide-react";

interface HeroSectionProps {
  onOpenSampleModal: () => void;
}

export default function HeroSection({ onOpenSampleModal }: HeroSectionProps) {
  const [showBriefBanner, setShowBriefBanner] = useState(true);

  return (
    <section id="hero" className="w-full">
      {/* Top Hero Text Area: Full Viewport (min-h-screen) with Dot Grid Background & Close Flanking Merchandise Cards */}
      <div className="hero-dot-grid relative w-full min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 overflow-hidden border-b border-neutral-200/50">
        {/* Main Centered Content: Vertically centered in the viewport */}
        <div className="my-auto text-center w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 py-4">
          <div className="relative inline-block w-full">
            {/* Main Headline matching Symmetra reference typography & layout */}
            <h1 className="font-heading font-semibold text-5xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[102px] text-neutral-950 leading-[1.12] tracking-[-0.03em] mb-9 select-none">
              {/* Line 1: Visualize and Bring + Printed Ceramic Mug */}
              <span className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5">
                <span>Visualize</span><span className="text-[#ef6c00]"></span>
                <span>and</span><span className="text-[#ef6c00]"></span>
                <span>Bring</span><span className="text-[#ef6c00]"></span>
                {/* Tilted Floral Ceramic Mug Cutout */}
                <span className="inline-block relative w-12 h-14 sm:w-16 sm:h-18 md:w-20 md:h-24 lg:w-24 lg:h-28 rotate-12 hover:rotate-0 transition-transform select-none shrink-0">
                  <Image
                    src="/images/hero_printed_mug_v3.jpg"
                    alt="Custom Printed Ceramic Mug"
                    fill
                    className="object-contain mix-blend-multiply"
                    priority
                  />
                </span><span className="text-[#ef6c00]"></span>
              </span>

              {/* Line 2: Your + Open Catalog + Creative Ideas with tight natural word spacing */}
              <span className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5 mt-1 sm:mt-2">
                <span>Your</span><span className="text-[#ef6c00]"></span>
                {/* Open Printed Catalog Spread Cutout */}
                <span className="inline-block relative w-14 h-12 sm:w-18 sm:h-16 md:w-22 md:h-18 lg:w-26 lg:h-22 -rotate-6 hover:rotate-0 transition-transform select-none shrink-0">
                  <Image
                    src="/images/hero_open_catalog_v3.jpg"
                    alt="Open Printed Lookbook Catalog"
                    fill
                    className="object-contain mix-blend-multiply"
                    priority
                  />
                </span><span className="text-[#ef6c00]"></span>
                <span>Creative</span><span className="text-[#ef6c00]"></span>
                <span>Ideas</span><span className="text-[#ef6c00]"></span>
              </span>

              {/* Line 3: Fox Mug Card + to Life Now + Badges + Bottle Card all in one snug row */}
              <span className="flex items-center justify-center flex-wrap gap-3 sm:gap-4 md:gap-6 mt-2 sm:mt-3">
                <span className="text-[#ef6c00]"></span>
                {/* Left Card: 3D Terracotta Fox Mug Card */}
                <span className="w-20 h-20 sm:w-26 sm:h-26 md:w-30 md:h-30 lg:w-34 lg:h-34 bg-white rounded-[22px] sm:rounded-[30px] border border-neutral-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 sm:p-2.5 shrink-0 hover:-translate-y-1 transition-transform select-none">
                  <span className="relative w-full h-full block">
                    <Image
                      src="/images/hero_fox_mug_v3.jpg"
                      alt="Custom Fox Ceramic Mug"
                      fill
                      className="object-contain -scale-x-100"
                      priority
                    />
                  </span>
                  <span className="text-[#ef6c00]"></span>
                </span>

                {/* Text: to Life Now */}
                <span className="inline-flex items-center gap-x-2.5 sm:gap-x-3.5 shrink-0">
                  <span>to</span><span className="text-[#ef6c00]"></span>
                  <span>Life</span><span className="text-[#ef6c00]"></span>
                  <span>Now</span><span className="text-[#ef6c00]"></span>
                </span>

                {/* Embroidered Badges & Enamel Pins */}
                <span className="inline-flex items-center gap-1.5 sm:gap-2 shrink-0 -mt-1 sm:-mt-2">
                  <span className="text-[#ef6c00]"></span>
                  {/* Detailed Owl Embroidered Badge */}
                  <span className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 -rotate-6 hover:rotate-0 transition-transform select-none block">
                    <svg viewBox="0 0 52 52" className="w-full h-full drop-shadow-sm" fill="none">
                      <ellipse cx="26" cy="27" rx="19" ry="21" fill="#78350f" />
                      <ellipse cx="26" cy="27" rx="17" ry="19" fill="#b45309" />
                      <path d="M11 11L18 17L14 19Z" fill="#78350f" />
                      <path d="M41 11L34 17L38 19Z" fill="#78350f" />
                      {/* Eyes */}
                      <circle cx="19" cy="21" r="7.5" fill="#fef08a" />
                      <circle cx="19" cy="21" r="5" fill="#0284c7" />
                      <circle cx="19" cy="21" r="2.5" fill="#0f172a" />
                      <circle cx="18" cy="19.5" r="1" fill="#ffffff" />
                      <circle cx="33" cy="21" r="7.5" fill="#fef08a" />
                      <circle cx="33" cy="21" r="5" fill="#0284c7" />
                      <circle cx="33" cy="21" r="2.5" fill="#0f172a" />
                      <circle cx="32" cy="19.5" r="1" fill="#ffffff" />
                      {/* Beak */}
                      <path d="M23 24L26 29L29 24Z" fill="#ea580c" />
                      {/* Feather stitching */}
                      <path d="M16 32Q21 37 26 32Q31 37 36 32" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                      <path d="M18 36Q22 40 26 36Q30 40 34 36" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                      <path d="M20 40Q23 43 26 40Q29 43 32 40" stroke="#facc15" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <span className="text-[#ef6c00]"></span>
                  {/* Lighthouse Pin with OUTSTANDING PINS banner */}
                  <span className="flex flex-col items-center rotate-12 hover:rotate-0 transition-transform select-none">
                    <svg viewBox="0 0 38 48" className="w-8 h-10 sm:w-10 sm:h-12 md:w-11 md:h-13 drop-shadow-sm" fill="none">
                      <path d="M15 4Q19 1 23 4L22 8L16 8Z" fill="#1e293b" />
                      <rect x="16.5" y="6" width="5" height="3" fill="#facc15" />
                      <path d="M14 9L24 9L26 35L12 35Z" fill="#ffffff" stroke="#1e293b" strokeWidth="1.2" />
                      <path d="M13.5 14L24.5 14L24.8 19L13.2 19Z" fill="#dc2626" />
                      <path d="M12.8 24L25.2 24L25.5 29L12.5 29Z" fill="#dc2626" />
                      <rect x="10" y="35" width="18" height="3" rx="1.5" fill="#334155" />
                      <rect x="4" y="37" width="30" height="8" rx="2" fill="#dc2626" />
                      <text x="19" y="42.5" fill="#ffffff" fontSize="3.5" fontWeight="bold" textAnchor="middle" letterSpacing="0.3">
                        OUTSTANDING
                      </text>
                      <text x="19" y="44.5" fill="#fef08a" fontSize="2.2" fontWeight="bold" textAnchor="middle" letterSpacing="0.5">
                        PINS
                      </text>
                    </svg>
                  </span>
                  <span className="text-[#ef6c00]"></span>
                </span>

                {/* Right Card: Modern Sports Bottle with red silicone base & loop cap */}
                <span className="w-20 h-20 sm:w-26 sm:h-26 md:w-30 md:h-30 lg:w-34 lg:h-34 bg-white rounded-[22px] sm:rounded-[30px] border border-neutral-100 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center justify-center p-2 sm:p-2.5 shrink-0 hover:-translate-y-1 transition-transform select-none">
                  <span className="relative w-full h-full block">
                    <Image
                      src="/images/hero_merch_bottle_v3.jpg"
                      alt="Custom Branded Merchandise Bottle"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
              </span>
            </h1>

            {/* Dual Pill CTA Buttons matching Symmetra reference Image 1 */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <button
                onClick={onOpenSampleModal}
                className="btn-symmetra-orange px-9 py-3.5 text-base font-semibold cursor-pointer shadow-md shadow-orange-500/25 hover:shadow-lg transition-all"
              >
                Start Project
              </button>

              <a
                href="#services"
                className="px-9 py-3.5 text-base font-semibold bg-[#f0f0f3] hover:bg-[#e4e4e8] text-neutral-800 rounded-full transition-colors"
              >
                View catalog
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Floating Project Brief Notification matching Symmetra reference */}
        {showBriefBanner && (
          <div className="max-w-3xl mx-auto w-full px-4 relative z-10">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-full border border-neutral-200/80 p-3 sm:py-2.5 sm:px-6 shadow-lg shadow-black/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100/60 flex items-center justify-center text-indigo-600 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-neutral-900 inline mr-1.5 font-heading">
                    Start a Project Brief
                  </p>
                  <span className="text-xs text-neutral-500 font-normal">
                    Tell us what you need and find the right talent for your project.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                <button
                  onClick={onOpenSampleModal}
                  className="px-5 py-2 bg-white hover:bg-neutral-50 text-neutral-900 text-xs font-semibold rounded-full border border-neutral-200 shadow-sm transition-colors cursor-pointer"
                >
                  Get Started
                </button>
                <button
                  type="button"
                  onClick={() => setShowBriefBanner(false)}
                  className="text-neutral-400 hover:text-neutral-600 p-1 cursor-pointer"
                  aria-label="Dismiss banner"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Signature Section: ONLY THIS SECTION HAS BG COLOR #ba5400, FULL WIDTH EDGE-TO-EDGE */}
      <div className="w-full bg-[#ba5400] text-white py-16 sm:py-20 md:py-24 px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 shadow-xl shadow-orange-950/15 relative overflow-hidden group">
        <div className="w-full max-w-[1440px] mx-auto">
          {/* Top Header of Card */}
          <div className="flex items-center justify-between mb-8 sm:mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-white/95 bg-white/15 px-4 py-1.5 rounded-full border border-white/20">
              Core Capabilities
            </span>

            <a
              href="#services"
              className="arrow-circle-white text-[#ba5400] cursor-pointer"
              aria-label="Explore Capabilities"
            >
              <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
            </a>
          </div>

          {/* Big Bold Headline in Full-Width Orange Card */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] tracking-tight text-white max-w-5xl mb-14 sm:mb-18">
            Providing Comprehensive Printing Solutions That Transform Your Garment & Textile
            Concepts Into Premium Labels, Patches and Elegant Custom Packaging
          </h2>

          {/* Bottom 4-Column Stats Row with vertical dividers matching Dribbble */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 sm:pt-10 border-t border-white/20">
            <div className="md:pr-6">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                24h
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-medium mt-1.5">
                Fast Sampling
              </p>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-8">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                25+
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-medium mt-1.5">
                Years Legacy
              </p>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-8">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                500+
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-medium mt-1.5">
                Active Brand Partners
              </p>
            </div>

            <div className="md:border-l md:border-white/20 md:pl-8">
              <p className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                10M+
              </p>
              <p className="text-xs sm:text-sm text-white/80 font-medium mt-1.5">
                Labels & Tags Printed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
