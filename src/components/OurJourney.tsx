"use client";

import React from "react";
import { History, Award, CheckCircle2, TrendingUp, Sparkles, Building2 } from "lucide-react";

export default function OurJourney() {
  const milestones = [
    {
      year: "The Foundation",
      title: "Cosmic Printers Genesis",
      subtitle: "25+ Years of Roots & Craftsmanship",
      description:
        "Our journey began with Cosmic Printers, where we cultivated our deep-rooted knowledge of printing presses, color calibration, customer dynamics, and material behaviors. These early years established our relentless focus on precision and reliability.",
      badge: "Foundational Era",
      icon: History,
    },
    {
      year: "2011",
      title: "S.R PRINTRAADES Established",
      subtitle: "A New Chapter of Innovation",
      description:
        "Carrying forward 25+ years of seasoned experience, S.R PRINTRAADES was officially founded in Tirupur with upgraded computerized offset machines, automated woven label looms, and a modern customer-first philosophy.",
      badge: "Milestone Launch",
      icon: Building2,
    },
    {
      year: "Apparel Mastery",
      title: "Specializing for Garment & Textile Hubs",
      subtitle: "Tirupur's Dedicated Trim & Packaging Partner",
      description:
        "Expanding directly into garment manufacturing, fashion export houses, and retail chains. We introduced specialized 3D silicone printing, micro-injected rubber patches, and rigid apparel packaging boxes.",
      badge: "Industrial Expansion",
      icon: TrendingUp,
    },
    {
      year: "Today & Beyond",
      title: "Precision Printing. Purposeful Creation.",
      subtitle: "Sustainable, Oeko-Tex Standard Manufacturing",
      description:
        "Today, under the dedicated leadership of U. Sathyasankar, S.R PRINTRAADES delivers millions of units across India and international fashion exporters, maintaining 99.8% on-time delivery and unyielding quality.",
      badge: "Modern Benchmark",
      icon: Award,
    },
  ];

  return (
    <section id="journey" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 text-orange-700 font-bold text-xs uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Heritage & Story
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Experience That Became Our Foundation: <br />
            <span className="text-gradient-orange">From Cosmic Printers to S.R PRINTRAADES</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            &ldquo;From experience came expertise. From expertise came trust. And from trust comes our
            commitment to every customer we serve.&rdquo;
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Central Line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-orange-500 via-amber-400 to-orange-200" />

          <div className="space-y-12">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card Content */}
                  <div className="w-full lg:w-1/2">
                    <div
                      className={`p-6 sm:p-8 rounded-3xl bg-orange-50/40 border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 relative group ${
                        isEven ? "lg:text-right" : "lg:text-left"
                      }`}
                    >
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold mb-3 ${
                          isEven ? "lg:ml-auto" : ""
                        }`}
                      >
                        <span>{item.badge}</span>
                      </div>

                      <h4 className="text-2xl font-black text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-bold text-orange-600 mb-3">
                        {item.subtitle}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node / Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-600 to-amber-500 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-orange-500/30 shrink-0 z-10 scale-110">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Empty Spacer Column for Desktop Alignment */}
                  <div className="hidden lg:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Quote Callout Banner */}
        <div className="mt-20 max-w-4xl mx-auto p-8 rounded-3xl bg-slate-900 text-white text-center border border-orange-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <h4 className="text-xl sm:text-2xl font-black text-white mb-3">
            &ldquo;A label tells your customer who you are. A tag tells your story. A package creates the first impression.&rdquo;
          </h4>
          <p className="text-xs sm:text-sm text-orange-300 font-semibold">
            — U. Sathyasankar, Managing Director, S.R PRINTRAADES
          </p>
        </div>
      </div>
    </section>
  );
}
