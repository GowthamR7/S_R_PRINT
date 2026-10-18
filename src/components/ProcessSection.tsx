"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ProcessSectionProps {
  onOpenSampleModal: () => void;
}

export default function ProcessSection({ onOpenSampleModal }: ProcessSectionProps) {
  const steps = [
    {
      number: "01",
      title: "Select and Upload",
      description:
        "Upload your high resolution artwork and select premium materials through our Tirupur interface or direct WhatsApp support.",
      isPrimary: true, // Solid Orange Card in Dribbble reference
    },
    {
      number: "02",
      title: "Production Process",
      description:
        "Production using advanced Heidelberg offset and automated woven label loom technology for absolute accuracy and sharpness.",
      isPrimary: false,
    },
    {
      number: "03",
      title: "Secure Delivery",
      description:
        "Every order is rigorously inspected, quality verified, and securely packaged for a safe arrival across India and export ports.",
      isPrimary: false,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Header Row matching Dribbble reference */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            How Our Ordering <br />
            Process Works
          </h2>
        </div>

        <div className="max-w-lg flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
            Transform digital designs into premium products through our professional three-step
            manufacturing system.
          </p>

          <button
            onClick={onOpenSampleModal}
            className="btn-symmetra-orange px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* 3 Step Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step) =>
          step.isPrimary ? (
            /* Card 01: Solid Vibrant Orange Card */
            <div
              key={step.number}
              className="bg-[#ef6c00] text-white p-8 sm:p-9 rounded-symmetra flex flex-col justify-between min-h-[320px] shadow-lg shadow-orange-950/10 group transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                  {step.number}
                </span>
                <div className="arrow-circle-white">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ) : (
            /* Card 02 & 03: Crisp White Cards */
            <div
              key={step.number}
              className="bg-white border border-neutral-200/90 p-8 sm:p-9 rounded-symmetra flex flex-col justify-between min-h-[320px] hover:border-neutral-300 transition-all group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
                  {step.number}
                </span>
                <div className="arrow-circle-orange">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
