"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProductCatalogProps {
  onSelectProductForQuote: (productName: string) => void;
  onOpenSampleModal: (productName?: string) => void;
}

export default function ProductCatalog({
  onSelectProductForQuote,
  onOpenSampleModal,
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <section id="services" className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Top Header Row matching Dribbble reference */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
            Discover Our Main <br />
            Products Services
          </h2>
        </div>

        <div className="max-w-xl flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-xs sm:text-sm text-neutral-500 font-normal leading-relaxed">
            Explore our diverse range of printing solutions tailored for garment manufacturing, fashion
            exporters, and commercial brands.
          </p>

          <button
            onClick={() => onOpenSampleModal("Full Catalog")}
            className="btn-symmetra-orange px-5 py-2.5 text-xs font-semibold whitespace-nowrap shrink-0 cursor-pointer self-start sm:self-auto"
          >
            View Catalog
          </button>
        </div>
      </div>

      {/* Bento Grid matching exact Symmetra Dribbble layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Card 1: Left Tall Card (Spans 5 cols, 2 rows) */}
        <div
          onClick={() => onOpenSampleModal("Woven & Printed Labels")}
          className="md:col-span-5 relative h-[460px] md:h-[540px] rounded-symmetra overflow-hidden group cursor-pointer border border-neutral-200/80 bg-neutral-100"
        >
          <Image
            src="/images/garment_labels_tags.jpg"
            alt="Woven & Printed Labels"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[11px] font-semibold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              5+ Weaves
            </span>
            <div className="arrow-circle-white">
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          {/* Bottom Title & Subtitle */}
          <div className="absolute bottom-5 left-5 right-5 text-white">
            <h3 className="text-2xl font-bold mb-1 text-white">
              Woven & Printed Labels
            </h3>
            <p className="text-xs text-neutral-300 font-medium">
              High fidelity damask, satin, taffeta & wash care labels.
            </p>
          </div>
        </div>

        {/* Right 7-Columns (Contains 4 smaller bento cards) */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Card 2: Middle Top (Photo Card) */}
          <div
            onClick={() => onOpenSampleModal("Silicon Printing & Apparel Trims")}
            className="relative h-[258px] rounded-symmetra overflow-hidden group cursor-pointer border border-neutral-200/80 bg-neutral-100"
          >
            <Image
              src="/images/rubber_silicon_patches.jpg"
              alt="Custom Apparel Printing"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-neutral-900 bg-white/90 backdrop-blur-md px-2.5 py-0.8 rounded-full">
                Custom Apparel
              </span>
              <div className="arrow-circle-white w-7 h-7">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-3.5 left-3.5 text-white">
              <p className="text-sm font-bold text-white">Silicon Screen Printing</p>
            </div>
          </div>

          {/* Card 3: Right Top (Clean Off-White Card) */}
          <div
            onClick={() => onOpenSampleModal("Packaging Boxes")}
            className="h-[258px] rounded-symmetra p-6 bg-white border border-neutral-200/90 flex flex-col justify-between group cursor-pointer hover:border-neutral-300 transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                Packaging
              </span>
              <div className="arrow-circle-orange w-7 h-7">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-neutral-900 leading-snug mb-1">
                Essential Apparel Packaging Boxes
              </h4>
              <p className="text-xs text-neutral-500">5+ Structural Collections</p>
            </div>
          </div>

          {/* Card 4: Middle Bottom (Solid Orange Symmetra Card) */}
          <div
            onClick={() => onOpenSampleModal("3D Rubber Patches")}
            className="h-[258px] rounded-symmetra p-6 bg-[#ef6c00] text-white flex flex-col justify-between group cursor-pointer hover:bg-[#d85f00] transition-colors shadow-md shadow-orange-950/5"
          >
            <div className="flex items-center justify-end">
              <div className="arrow-circle-white w-7 h-7">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold text-white leading-snug mb-1">
                3D Rubber Patches & Embossing
              </h4>
              <p className="text-xs text-white/80">4+ Molded Collections</p>
            </div>
          </div>

          {/* Card 5: Right Bottom (Photo Card with Tag) */}
          <div
            onClick={() => onOpenSampleModal("Tissue Papers & Lookbooks")}
            className="relative h-[258px] rounded-symmetra overflow-hidden group cursor-pointer border border-neutral-200/80 bg-neutral-100"
          >
            <Image
              src="/images/luxury_packaging_boxes.jpg"
              alt="Branded Tissue & Tags"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
              <span className="text-[10px] font-semibold text-neutral-900 bg-white/90 backdrop-blur-md px-2.5 py-0.8 rounded-full">
                Branded Tissue & Gifts
              </span>
              <div className="arrow-circle-white w-7 h-7">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </div>

            {/* Bottom text */}
            <div className="absolute bottom-3.5 left-3.5 text-white">
              <p className="text-sm font-bold text-white">Garment Tags & Tissue</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
