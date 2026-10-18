"use client";

import React, { useState } from "react";
import {
  Calculator,
  Check,
  Clock,
  ArrowUpRight,
  MessageCircle,
  FileCheck,
} from "lucide-react";

interface CostEstimatorProps {
  initialProduct?: string;
  onOpenSampleModal: (details: string) => void;
}

export default function CostEstimator({
  initialProduct,
  onOpenSampleModal,
}: CostEstimatorProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    initialProduct || "woven-labels"
  );
  const [quantity, setQuantity] = useState<number>(5000);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "foil",
    "soft-touch",
  ]);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const productData: Record<
    string,
    { name: string; baseUnitPrice: number; unitName: string; minQty: number; maxQty: number; leadDays: number }
  > = {
    "woven-labels": {
      name: "High-Density Woven Labels",
      baseUnitPrice: 1.2,
      unitName: "Labels",
      minQty: 1000,
      maxQty: 100000,
      leadDays: 5,
    },
    "hang-tags": {
      name: "Designer Garment Hang Tags",
      baseUnitPrice: 2.5,
      unitName: "Tags",
      minQty: 1000,
      maxQty: 50000,
      leadDays: 4,
    },
    "rubber-patches": {
      name: "3D Rubber Patches",
      baseUnitPrice: 14.0,
      unitName: "Patches",
      minQty: 500,
      maxQty: 25000,
      leadDays: 8,
    },
    "silicon-printing": {
      name: "High-Density Silicon Prints",
      baseUnitPrice: 9.5,
      unitName: "Pieces",
      minQty: 1000,
      maxQty: 30000,
      leadDays: 6,
    },
    "apparel-boxes": {
      name: "Luxury Apparel Packaging Boxes",
      baseUnitPrice: 32.0,
      unitName: "Boxes",
      minQty: 500,
      maxQty: 20000,
      leadDays: 7,
    },
    "tissue-paper": {
      name: "Branded Tissue Paper",
      baseUnitPrice: 1.8,
      unitName: "Sheets",
      minQty: 2000,
      maxQty: 50000,
      leadDays: 5,
    },
  };

  const addonsList = [
    { id: "foil", name: "Metallic Hot Foil Stamping", pricePerUnit: 0.65 },
    { id: "spot-uv", name: "Precision Spot UV Gloss", pricePerUnit: 0.5 },
    { id: "emboss", name: "Multi-Level 3D Embossing", pricePerUnit: 0.75 },
    { id: "soft-touch", name: "Velvet Soft-Touch Lamination", pricePerUnit: 0.45 },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentProduct = productData[selectedProduct] || productData["woven-labels"];

  let volumeMultiplier = 1.0;
  if (quantity >= 25000) volumeMultiplier = 0.72;
  else if (quantity >= 10000) volumeMultiplier = 0.82;
  else if (quantity >= 5000) volumeMultiplier = 0.9;
  else if (quantity >= 2500) volumeMultiplier = 0.95;

  const addonTotalPerUnit = selectedAddons.reduce((acc, currId) => {
    const addon = addonsList.find((a) => a.id === currId);
    return acc + (addon ? addon.pricePerUnit : 0);
  }, 0);

  const baseCalculatedUnitPrice =
    (currentProduct.baseUnitPrice + addonTotalPerUnit) * volumeMultiplier;
  const unitPriceMin = (baseCalculatedUnitPrice * 0.92).toFixed(2);
  const unitPriceMax = (baseCalculatedUnitPrice * 1.08).toFixed(2);

  const totalMin = Math.round(Number(unitPriceMin) * quantity);
  const totalMax = Math.round(Number(unitPriceMax) * quantity);

  const estimatedDays = isExpress
    ? Math.max(3, currentProduct.leadDays - 2)
    : currentProduct.leadDays;

  const whatsappMessage = encodeURIComponent(
    `Hello S.R PRINTRAADES Team! I used your online Cost Estimator on your website:\n\n` +
      `Product: ${currentProduct.name}\n` +
      `Quantity: ${quantity.toLocaleString()} ${currentProduct.unitName}\n` +
      `Finishes: ${
        selectedAddons
          .map((id) => addonsList.find((a) => a.id === id)?.name)
          .join(", ") || "Standard"
      }\n` +
      `Estimated Range: ₹${totalMin.toLocaleString()} - ₹${totalMax.toLocaleString()}\n\n` +
      `Please provide an official invoice quote and confirm sample timeline. Thank you!`
  );

  return (
    <section id="estimator" className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-[11px] font-semibold text-[#ef6c00] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Interactive Calculator
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mt-2">
            Instant Cost & <br />
            Production Estimator
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-normal leading-relaxed">
          Configure product specifications, volume, and premium finishes below for an instant indicative
          rate and direct WhatsApp factory booking.
        </p>
      </div>

      {/* Main Estimator Card */}
      <div className="bg-white border border-neutral-200/90 rounded-symmetra-lg p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Controls Column */}
        <div className="lg:col-span-7 space-y-6">
          {/* Step 1: Select Product */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
              1. Select Product
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(productData).map(([key, data]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedProduct(key)}
                  className={`p-3 rounded-2xl text-left text-xs font-semibold transition-all border cursor-pointer ${
                    selectedProduct === key
                      ? "bg-[#ef6c00] text-white border-[#ef6c00] shadow-sm"
                      : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-neutral-300"
                  }`}
                >
                  <p className="leading-snug">{data.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Quantity Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                2. Select Quantity
              </label>
              <span className="text-xs font-bold text-[#ef6c00] bg-orange-50 px-3 py-1 rounded-full border border-orange-200/60">
                {quantity.toLocaleString()} {currentProduct.unitName}
              </span>
            </div>

            <input
              type="range"
              min={currentProduct.minQty}
              max={currentProduct.maxQty}
              step={quantity > 10000 ? 5000 : 1000}
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-[#ef6c00]"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
              <span>Min: {currentProduct.minQty.toLocaleString()}</span>
              <span>10,000</span>
              <span>Max: {currentProduct.maxQty.toLocaleString()}</span>
            </div>
          </div>

          {/* Step 3: Add-ons */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-neutral-500 mb-2.5">
              3. Premium Finishes
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {addonsList.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);
                return (
                  <div
                    key={addon.id}
                    onClick={() => toggleAddon(addon.id)}
                    className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                      isChecked
                        ? "bg-orange-50/70 border-[#ef6c00] text-neutral-900"
                        : "bg-neutral-50/70 border-neutral-200 text-neutral-600 hover:border-neutral-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-4 h-4 rounded-md flex items-center justify-center text-xs ${
                          isChecked
                            ? "bg-[#ef6c00] text-white"
                            : "border border-neutral-300"
                        }`}
                      >
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold">{addon.name}</span>
                    </div>
                    <span className="text-[11px] text-[#ef6c00] font-bold">
                      +₹{addon.pricePerUnit}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Indicative Estimate Card (Right) */}
        <div className="lg:col-span-5 bg-neutral-900 text-white rounded-symmetra p-6 sm:p-8 flex flex-col justify-between shadow-md">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold">
                  Factory Rate Breakdown
                </p>
                <h4 className="text-xl font-bold text-white mt-0.5">
                  {currentProduct.name}
                </h4>
              </div>
              <span className="text-[10px] font-bold text-[#ef6c00] bg-orange-950/60 px-2.5 py-1 rounded-full border border-orange-800/40">
                Direct Mill
              </span>
            </div>

            <div className="mb-6">
              <span className="text-xs text-neutral-400">Estimated Unit Cost:</span>
              <p className="text-3xl font-extrabold text-[#ef6c00] mt-1">
                ₹{unitPriceMin} - ₹{unitPriceMax}{" "}
                <span className="text-xs font-normal text-neutral-400">/ pc</span>
              </p>
            </div>

            <div className="space-y-2 mb-6 text-xs text-neutral-300">
              <div className="flex justify-between">
                <span>Quantity:</span>
                <span className="font-bold text-white">
                  {quantity.toLocaleString()} {currentProduct.unitName}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Est. Total Batch:</span>
                <span className="font-bold text-amber-300">
                  ₹{totalMin.toLocaleString()} - ₹{totalMax.toLocaleString()}*
                </span>
              </div>
              <div className="flex justify-between">
                <span>Production Lead Time:</span>
                <span className="font-bold text-emerald-400 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {estimatedDays} Working Days
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-neutral-800">
            <a
              href={`https://wa.me/918883334222?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full btn-symmetra-orange py-3 text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Confirm Quote on WhatsApp</span>
            </a>

            <button
              onClick={() =>
                onOpenSampleModal(
                  `${currentProduct.name} (Qty: ${quantity}, Finishes: ${selectedAddons.join(", ")})`
                )
              }
              className="w-full py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <FileCheck className="w-3.5 h-3.5" />
              <span>Request Sample Parcel</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
