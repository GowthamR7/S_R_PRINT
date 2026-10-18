"use client";

import React from "react";
import {
  Award,
  ShieldCheck,
  Sliders,
  Sparkles,
  Clock,
  HeartHandshake,
  CheckCircle2,
  Building,
  Globe2,
  Users,
} from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      title: "25+ Years of Industry Mastery",
      subtitle: "Unrivaled Process & Material Knowledge",
      description:
        "Decades of hands-on experience in press mechanics, color calibration, paper GSM behavior, and textile ink chemistry ensure zero trial-and-error with your brand.",
      icon: Award,
    },
    {
      title: "Quality First Mentality",
      subtitle: "Multi-Tier Inspection Protocol",
      description:
        "Every label, box, and tag carrying your logo represents your business. We rigorously inspect registration, color consistency, and edge cut finishing before dispatch.",
      icon: ShieldCheck,
    },
    {
      title: "100% Customized Solutions",
      subtitle: "Bespoke Sizes, Dies & Inks",
      description:
        "Every client is unique. We customize according to your exact CAD specs, Pantone codes, custom die shapes, specialized backing adhesives, and packaging dimensions.",
      icon: Sliders,
    },
    {
      title: "Professional Luxury Finishing",
      subtitle: "Foil, Spot UV, Velvet & 3D Emboss",
      description:
        "From delicate micro-text woven damask to high-build silicon and metallic foil stamping, our post-press embellishments command high retail shelf value.",
      icon: Sparkles,
    },
    {
      title: "Dependable On-Time Turnaround",
      subtitle: "Deadlines That We Respect",
      description:
        "We know fashion shipping windows and export container schedules cannot wait. Our automated production pipeline delivers on-time, every time.",
      icon: Clock,
    },
    {
      title: "Built on Relationships & Trust",
      subtitle: "Direct Factory Founder Support",
      description:
        "Our clients are long-term partners. Enjoy direct access to our technical specialists and founder U. Sathyasankar for rapid answers and sample approvals.",
      icon: HeartHandshake,
    },
  ];

  const sectors = [
    { name: "Garment Manufacturers", count: "250+ Mills" },
    { name: "Buying Houses & Exporters", count: "Global Export" },
    { name: "Streetwear & Fashion Brands", count: "120+ Labels" },
    { name: "Textile Mills & Spinners", count: "Industrial Volume" },
    { name: "Retail Boutiques & Showrooms", count: "Luxury Packaging" },
    { name: "Corporate & Startup Brands", count: "Flexible MOQ" },
  ];

  return (
    <section id="why-us" className="py-24 bg-gradient-to-b from-white via-orange-50/50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            The S.R PRINTRAADES Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Why India&apos;s Top Garment Brands{" "}
            <span className="text-gradient-orange">Choose S.R PRINTRAADES</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Located in Tirupur, India&apos;s apparel capital, we merge heavy industrial printing capabilities
            with artisan attention to detail.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-3xl bg-white border border-orange-100/90 hover:border-orange-300 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 group-hover:bg-gradient-to-tr group-hover:from-orange-600 group-hover:to-amber-500 text-orange-600 group-hover:text-white flex items-center justify-center transition-all duration-300 mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-orange-600 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-xs font-semibold text-orange-600 mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Sectors We Support Banner */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
                PROUDLY ROOTED IN TIRUPUR, TAMIL NADU
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Serving the Apparel, Textile & Retail Ecosystem
              </h3>
              <p className="text-sm text-slate-300 max-w-2xl mt-2">
                Whether you produce 500 designer garments or export 500,000 t-shirts every month, our Tirupur facility
                handles orders with zero compromise on precision.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <div className="text-right">
                <p className="text-2xl font-black text-amber-400">Tirupur Hub</p>
                <p className="text-xs text-slate-400">Garment Capital of India</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
                <Building className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Sector Badges Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {sectors.map((sec) => (
              <div
                key={sec.name}
                className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/60 text-center hover:border-orange-500/50 transition-colors"
              >
                <p className="text-xs font-bold text-white mb-1">{sec.name}</p>
                <span className="inline-block text-[10px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded-full">
                  {sec.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
