"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TestimonialsSectionProps {
  onOpenSampleModal: () => void;
}

export default function TestimonialsSection({ onOpenSampleModal }: TestimonialsSectionProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "The print precision and matte finish perfectly align with our brand's professional aesthetic requirements. S.R PRINTRAADES has been our trusted partner for 8 consecutive export seasons.",
      clientName: "Anand Kumar",
      clientRole: "Managing Director, Apex Garments Tirupur",
      spotlightTitle: "Garment Trim Series",
      spotlightTag: "Woven & Hang Tags",
      image: "/images/garment_labels_tags.jpg",
    },
    {
      quote:
        "Their 3D rubber patches and silicon screen printing gave our streetwear collection an unmistakably premium tactile feel. Zero defects across a 25,000 unit production run.",
      clientName: "Vikram Sundaram",
      clientRole: "Co-Founder, Urban Pulse Apparel",
      spotlightTitle: "Sportswear Patches",
      spotlightTag: "3D Molded Rubber",
      image: "/images/rubber_silicon_patches.jpg",
    },
    {
      quote:
        "From rigid shirt gift boxes to custom printed acid-free tissue paper, the packaging presentation created an unforgettable unboxing experience for our retail buyers.",
      clientName: "Deepika Menon",
      clientRole: "Brand Director, Aurelia Fine Textiles",
      spotlightTitle: "Luxury Apparel Box",
      spotlightTag: "Foil & Rigid Greyboard",
      image: "/images/luxury_packaging_boxes.jpg",
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Header matching Dribbble reference */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
          Client Perspectives <br />
          on Our Quality
        </h2>

        <button
          onClick={onOpenSampleModal}
          className="btn-symmetra-orange px-5 py-2.5 text-xs font-semibold cursor-pointer"
        >
          See More
        </button>
      </div>

      {/* 2-Part Card Layout matching Dribbble */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        {/* Left: Product Spotlight Image Card */}
        <div className="relative h-[400px] md:h-[460px] rounded-symmetra overflow-hidden border border-neutral-200/90 group bg-neutral-100">
          <Image
            src={testimonials[activeTestimonial].image}
            alt="Project Spotlight"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-neutral-950/20" />

          {/* Top Left Badge */}
          <div className="absolute top-5 left-5">
            <span className="text-[11px] font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              Project Spotlight
            </span>
          </div>

          {/* Bottom Badge Tag */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
            <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/50 flex items-center gap-3">
              <div>
                <p className="text-xs font-bold text-neutral-900">
                  {testimonials[activeTestimonial].spotlightTitle}
                </p>
                <p className="text-[10px] text-neutral-500 font-medium">
                  {testimonials[activeTestimonial].spotlightTag}
                </p>
              </div>
              <div className="arrow-circle-orange w-7 h-7">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Clean White Testimonial Quote Card */}
        <div className="bg-white border border-neutral-200/90 rounded-symmetra p-8 sm:p-10 flex flex-col justify-between hover:border-neutral-300 transition-all">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[11px] font-semibold text-neutral-400">
              {activeTestimonial + 1}/{testimonials.length} Testimonials
            </span>
            <div className="arrow-circle-orange">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          <blockquote className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 leading-snug mb-8">
            &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-between pt-6 border-t border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ef6c00] text-white flex items-center justify-center font-bold text-sm">
                {testimonials[activeTestimonial].clientName.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-bold text-neutral-900">
                  {testimonials[activeTestimonial].clientName}
                </p>
                <p className="text-xs text-neutral-500">
                  {testimonials[activeTestimonial].clientRole}
                </p>
              </div>
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-[#ef6c00]" />
          </div>
        </div>
      </div>

      {/* 3 Dot Pagination Indicators matching Dribbble */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveTestimonial(i)}
            className={`transition-all rounded-full cursor-pointer ${
              activeTestimonial === i
                ? "w-6 h-2 bg-[#ef6c00]"
                : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
