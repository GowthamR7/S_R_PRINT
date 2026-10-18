"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

interface PopularCollectionsProps {
  onOpenSampleModal: (product?: string) => void;
}

export default function PopularCollections({ onOpenSampleModal }: PopularCollectionsProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Luxury Apparel Rigid Boxes",
      subtitle: "Custom Stamped Foil & Magnetic Closure",
      image: "/images/luxury_packaging_boxes.jpg",
      count: "1/4 Products",
    },
    {
      title: "High-Density Woven Labels",
      subtitle: "Ultra-fine Damask & Ultrasonic Cut Edges",
      image: "/images/garment_labels_tags.jpg",
      count: "2/4 Products",
    },
    {
      title: "3D Micro-Injected Rubber Patches",
      subtitle: "Tactile Sportswear & Outerwear Emblems",
      image: "/images/rubber_silicon_patches.jpg",
      count: "3/4 Products",
    },
    {
      title: "Heidelberg Commercial Offset",
      subtitle: "Fashion Lookbooks & Product Photo Cards",
      image: "/images/offset_photo_cards.jpg",
      count: "4/4 Products",
    },
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="collections" className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Center Header matching Dribbble reference */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mb-3">
          Most Popular Collections
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 font-normal">
          Discover our most-requested solutions curated for exceptional design and professional
          quality standards.
        </p>
      </div>

      {/* 2-Card Grid matching Dribbble */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Craft Unique Personal Stories */}
        <div className="bg-white border border-neutral-200/90 rounded-symmetra p-8 sm:p-12 flex flex-col justify-between min-h-[440px] hover:border-neutral-300 transition-all group">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                Garment Identity
              </span>
              <div className="arrow-circle-orange">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4 leading-tight">
              Craft Unique <br />
              Brand Stories
            </h3>

            <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed max-w-sm mb-6">
              Transform unique apparel and retail concepts into high-quality custom items using
              premium material standards and Oeko-Tex certified inks.
            </p>
          </div>

          {/* Bottom Units Produced Row matching Dribbble */}
          <div>
            <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
              Units Produced
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white relative overflow-hidden bg-orange-100">
                  <Image src="/images/garment_labels_tags.jpg" alt="Tag" fill className="object-cover" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white relative overflow-hidden bg-amber-100">
                  <Image src="/images/rubber_silicon_patches.jpg" alt="Patch" fill className="object-cover" />
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white relative overflow-hidden bg-neutral-100">
                  <Image src="/images/luxury_packaging_boxes.jpg" alt="Box" fill className="object-cover" />
                </div>
              </div>

              <span className="bg-[#ef6c00] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                10M+
              </span>
            </div>
          </div>
        </div>

        {/* Right Card: Interactive Slider Card matching Dribbble */}
        <div className="relative rounded-symmetra overflow-hidden min-h-[440px] group border border-neutral-200/90 bg-neutral-900">
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-neutral-950/30" />

          {/* Top Controls: Slide count on left, arrows on right */}
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between text-white">
            <span className="text-[11px] font-medium bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              {slides[currentSlide].count}
            </span>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-white/80 text-neutral-900 hover:bg-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-white/80 text-neutral-900 hover:bg-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Title & Arrow */}
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
            <div>
              <h4 className="text-2xl font-bold text-white mb-0.5">
                {slides[currentSlide].title}
              </h4>
              <p className="text-xs text-neutral-300 font-medium">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenSampleModal(slides[currentSlide].title)}
              className="arrow-circle-white cursor-pointer"
              aria-label="View collection"
            >
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
