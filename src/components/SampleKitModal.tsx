"use client";

import React, { useState } from "react";
import { X, Check, Package, Sparkles, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

interface SampleKitModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

export default function SampleKitModal({
  isOpen,
  onClose,
  preselectedProduct,
}: SampleKitModalProps) {
  const [selectedItems, setSelectedItems] = useState<string[]>([
    "Woven Damask Labels",
    "Foil Garment Hang Tags",
    "3D Molded Rubber Patches",
  ]);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isDone, setIsDone] = useState(false);

  if (!isOpen) return null;

  const sampleTypes = [
    "Woven Damask Labels",
    "Printed Satin / Cotton Wash Labels",
    "Foil Garment Hang Tags",
    "3D Molded Rubber Patches",
    "High-Density Silicon Prints",
    "Luxury Apparel Boxes Swatches",
    "Branded Tissue Wrapping Paper",
    "Offset Lookbook & Photo Cards",
  ];

  const toggleItem = (item: string) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
      colors: ["#ef6c00", "#ef6c00", "#ffffff"],
    });

    setIsDone(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-symmetra-lg max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 relative max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {isDone ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ef6c00] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900">
              Sample Kit Dispatched Request Logged!
            </h3>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{name}</strong>! Your curated sample parcel containing{" "}
              <strong>{selectedItems.join(", ")}</strong> is being prepared by our Tirupur team.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="btn-symmetra-orange px-6 py-2.5 text-xs cursor-pointer"
              >
                Close & Return
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-1.5 text-[#ef6c00] font-semibold text-[11px] uppercase tracking-wider mb-2">
              <Package className="w-3.5 h-3.5" /> Free Factory Dispatch
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              Request Free Sample Kit
            </h3>
            <p className="text-xs text-neutral-500 mb-5 font-normal">
              Touch and feel our high-thread damask weaving, 3D rubber elasticity, and foil stamping
              before placing your bulk order.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-2">
                  Select Swatches You Want in Kit:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {sampleTypes.map((item) => {
                    const checked = selectedItems.includes(item);
                    return (
                      <div
                        key={item}
                        onClick={() => toggleItem(item)}
                        className={`p-2 rounded-xl border text-xs flex items-center gap-2 cursor-pointer transition-all ${
                          checked
                            ? "bg-orange-50 border-[#ef6c00] text-neutral-900 font-semibold"
                            : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-neutral-300"
                        }`}
                      >
                        <div
                          className={`w-3.5 h-3.5 rounded flex items-center justify-center text-[10px] ${
                            checked ? "bg-[#ef6c00] text-white" : "border border-neutral-300"
                          }`}
                        >
                          {checked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </div>
                        <span className="text-[11px]">{item}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-600 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kumar"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#ef6c00] bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-neutral-600 uppercase mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Urban Threads"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#ef6c00] bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold text-neutral-600 uppercase mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98430 xxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#ef6c00] bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-neutral-600 uppercase mb-1">
                    Delivery City & Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="City, Pincode"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs focus:outline-none focus:border-[#ef6c00] bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full btn-symmetra-orange py-3 text-xs font-bold cursor-pointer"
                >
                  Ship Free Sample Parcel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
