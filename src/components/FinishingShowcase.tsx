"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Layers, Shield, CheckCircle, ArrowRight, Zap } from "lucide-react";

export default function FinishingShowcase() {
  const [activeFinish, setActiveFinish] = useState<number>(0);

  const finishes = [
    {
      id: "silicon",
      title: "High-Density Silicon 3D Printing",
      category: "Garment & Sportswear Innovation",
      image: "/images/rubber_silicon_patches.jpg",
      tagline: "Elastomeric 3D depth that stretches with fabric without cracking or peeling.",
      description:
        "Engineered with liquid medical-grade silicone elastomers. When screen-printed in multi-layer passes, it produces a distinct raised 3D logo that withstands 50+ industrial laundry cycles and extreme fabric stretching.",
      benefits: [
        "Zero-crack elasticity under high tension",
        "Available in high-gloss, velvety matte, or semi-translucent",
        "Oeko-Tex Standard 100 eco-safe chemistry",
        "Ideal for activewear, swimwear, compression garments & hoodies",
      ],
      stats: { thickness: "0.4mm - 1.8mm", washResistance: "60°C Heavy Wash", stretchRatio: "250%" },
    },
    {
      id: "rubber-patches",
      title: "3D Molded Rubber Patches & Embossing",
      category: "Tactile Identity & Outerwear",
      image: "/images/rubber_silicon_patches.jpg",
      tagline: "Micro-injected silicone and PVC emblems with sharp multi-level definition.",
      description:
        "Precision steel molds inject liquid polymer into fine channels, creating crisp raised letters, emblems, and textured backgrounds. Perfect for high-wear garments, jeans, outerwear jackets, caps, and technical gear.",
      benefits: [
        "Extreme resistance to weather, rain, and UV sunlight",
        "Recessed perimeter stitching channel for clean attachment",
        "Heat-activated adhesive or hook-and-loop Velcro backings",
        "Multi-color micro-injection without color bleeding",
      ],
      stats: { thickness: "1.5mm - 3.5mm", durability: "10+ Years", weatherProof: "100% Waterproof" },
    },
    {
      id: "foil-stamping",
      title: "Metallic Hot Foil Stamping",
      category: "Luxury Retail Packaging & Tags",
      image: "/images/garment_labels_tags.jpg",
      tagline: "Reflective mirror-sheen foils in gold, rose gold, copper, and metallic orange.",
      description:
        "Using precision magnesium and brass heated dies, foil film is thermally bonded into premium cardboards and rigid boxes, creating a reflective, luminous sheen that commands premium retail shelf attention.",
      benefits: [
        "Ultra-crisp foil edge crispness on dark & light stocks",
        "Custom foil shades: Deep Gold, Copper Orange, Gloss Silver, Holographic",
        "Can be combined with multi-level blind embossing for maximum pop",
        "Resistant to flaking, scuffing, and moisture",
      ],
      stats: { reflection: "99% Mirror Polish", stocks: "Up to 800 GSM", temperature: "140°C Thermal Bond" },
    },
    {
      id: "spot-uv",
      title: "Spot UV & Velvet Soft-Touch Lamination",
      category: "Packaging & Commercial Offset",
      image: "/images/luxury_packaging_boxes.jpg",
      tagline: "Dramatic tactile contrast between ultra-matte velvet paper and raised gloss UV.",
      description:
        "A combination of soft-touch thermal matte lamination followed by screen-applied ultraviolet high-gloss varnish. The contrast between tactile velvet paper and mirror-like glossy accents makes logos jump off the box.",
      benefits: [
        "Sensory finger-feel that buyers immediately notice",
        "Protects packaging boxes from fingerprint marks & scratching",
        "Can be applied as clear watermarks or registered over ink",
        "Standard on premium menswear and luxury apparel gift boxes",
      ],
      stats: { glossRating: "95+ GU", protection: "Scratch-Resistant", touch: "Peach-Skin Velvet" },
    },
  ];

  return (
    <section id="finishing" className="py-24 bg-gradient-to-b from-white via-orange-50/40 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            Specialized Craftsmanship & Finishes
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Finishing That Transforms <br />
            <span className="text-gradient-orange">Ordinary Apparel into Luxury Brands</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            &ldquo;The smallest details make the biggest difference.&rdquo; Our advanced post-press and embellishment
            technologies elevate your garment trims and packaging.
          </p>
        </div>

        {/* Interactive Finishes Switcher Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Finish Selection Buttons */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {finishes.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => setActiveFinish(idx)}
                className={`p-5 rounded-2xl cursor-pointer transition-all border ${
                  activeFinish === idx
                    ? "bg-white border-orange-400 shadow-xl shadow-orange-500/10 scale-[1.02]"
                    : "bg-white/60 hover:bg-white border-slate-200/80 hover:border-orange-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                    {item.category}
                  </span>
                  {activeFinish === idx && (
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2">
                  {item.tagline}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: Detailed Interactive Showcase Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-orange-200/80 p-6 sm:p-8 shadow-2xl overflow-hidden relative">
              {/* Image Banner */}
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 group">
                <Image
                  src={finishes[activeFinish].image}
                  alt={finishes[activeFinish].title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                    S.R PRINTRAADES LABORATORY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {finishes[activeFinish].title}
                  </h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed mb-6">
                {finishes[activeFinish].description}
              </p>

              {/* Key Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {finishes[activeFinish].benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 bg-orange-50/50 p-2.5 rounded-xl border border-orange-100"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Technical Performance Ticker */}
              <div className="bg-slate-900 text-white rounded-2xl p-4 flex flex-wrap items-center justify-around gap-4 text-center">
                {Object.entries(finishes[activeFinish].stats).map(([key, val]) => (
                  <div key={key}>
                    <p className="text-[11px] font-medium text-slate-400 capitalize">
                      {key.replace(/([A-Z])/g, " $1")}
                    </p>
                    <p className="text-base sm:text-lg font-black text-amber-400">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
