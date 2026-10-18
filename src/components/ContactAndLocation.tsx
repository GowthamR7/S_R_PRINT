"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function ContactAndLocation() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    requirement: "Garment Labels & Tags",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ef6c00", "#ef6c00", "#fef4ec", "#ffffff"],
    });

    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Mr. U. Sathyasankar (S.R PRINTRAADES),\nI am interested in printing solutions for my brand.\nName: ${formData.name || "Customer"}\nCompany: ${formData.company || "Brand"}\nRequirement: ${formData.requirement}`
    );
    window.open(`https://wa.me/918883334222?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-[11px] font-semibold text-[#ef6c00] bg-orange-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Tirupur Manufacturing Hub
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 mt-2">
            Get In Touch With <br />
            Our Factory Team
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-neutral-500 max-w-md font-normal leading-relaxed">
          Visit our registered plant in Tirupur, call our executive line, or send digital artwork for an
          instant 2-hour feasibility review.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Leadership & Factory Info */}
        <div className="lg:col-span-5 space-y-4">
          {/* Managing Director Card */}
          <div className="bg-[#ef6c00] text-white p-7 sm:p-8 rounded-symmetra shadow-sm">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 bg-white/15 px-3 py-1 rounded-full">
              Executive Leadership
            </span>

            <h3 className="text-2xl font-bold mt-4 mb-0.5 text-white">
              U. SATHYASANKAR
            </h3>
            <p className="text-xs text-white/80 mb-6 font-medium">
              Managing Director • 25+ Years Experience
            </p>

            <div className="space-y-3 pt-4 border-t border-white/20 text-xs">
              <a
                href="tel:+918883334222"
                className="flex items-center gap-2.5 font-bold hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 88833 34222 (Primary & WhatsApp)</span>
              </a>

              <a
                href="tel:+918877758111"
                className="flex items-center gap-2.5 font-semibold hover:text-white/80 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+91 88777 58111 (Direct Line)</span>
              </a>

              <a
                href="mailto:s.r.printraades@gmail.com"
                className="flex items-center gap-2.5 hover:text-white/80 transition-colors font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>s.r.printraades@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Registered Office Card */}
          <div className="bg-white border border-neutral-200/90 p-7 sm:p-8 rounded-symmetra">
            <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
              Plant & Registered Office
            </span>

            <h4 className="text-lg font-bold text-neutral-900 mt-2 mb-1">
              S.R PRINTRAADES
            </h4>
            <p className="text-xs text-neutral-600 leading-relaxed font-medium mb-4">
              49, Patchaiyappa Nagar 2nd Street,
              <br />
              Maniyakaranpalayam Road,
              <br />
              Tirupur – 641606, Tamil Nadu, India.
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-xs text-neutral-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#ef6c00]" />
                <span>Mon – Sat: 9:00 AM – 8:00 PM</span>
              </div>

              <a
                href="https://maps.google.com/?q=Patchaiyappa+Nagar+Maniyakaranpalayam+Road+Tirupur+641606"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ef6c00] font-semibold hover:underline flex items-center gap-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Inquiry Form */}
        <div className="lg:col-span-7 bg-white border border-neutral-200/90 p-7 sm:p-10 rounded-symmetra">
          <h3 className="text-2xl font-bold text-neutral-900 mb-1">
            Send Project Details
          </h3>
          <p className="text-xs text-neutral-500 mb-6 font-normal">
            Our engineering team will review requirements and reach out within 2 hours.
          </p>

          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-orange-100 text-[#ef6c00] mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-neutral-900">
                Inquiry Received!
              </h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>. Mr. U. Sathyasankar has been notified and
                will contact you at <strong>{formData.phone}</strong>.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={handleWhatsAppDirect}
                  className="btn-symmetra-orange px-5 py-2 text-xs"
                >
                  Open in WhatsApp
                </button>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-symmetra-outline px-5 py-2 text-xs"
                >
                  Send Another
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#ef6c00] text-xs bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Apparel Ltd"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#ef6c00] text-xs bg-neutral-50/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#ef6c00] text-xs bg-neutral-50/50"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. info@yourbrand.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#ef6c00] text-xs bg-neutral-50/50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                  Primary Product Requirement
                </label>
                <select
                  value={formData.requirement}
                  onChange={(e) =>
                    setFormData({ ...formData, requirement: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#ef6c00] text-xs bg-neutral-50/50 text-neutral-800"
                >
                  <option value="Woven & Printed Labels">Woven & Printed Labels</option>
                  <option value="Garment Hang Tags & Eyelets">Garment Hang Tags & Eyelets</option>
                  <option value="3D Rubber Patches & Embossing">3D Rubber Patches & Embossing</option>
                  <option value="High-Density Silicon Printing">High-Density Silicon Printing</option>
                  <option value="Apparel & Shirt Packaging Boxes">Apparel & Shirt Packaging Boxes</option>
                  <option value="Branded Tissue Wrapping Paper">Branded Tissue Wrapping Paper</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-neutral-600 uppercase mb-1">
                  Order Details or Quantity
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about desired volume, sizes, or custom finishes..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 focus:outline-none focus:border-[#ef6c00] text-xs bg-neutral-50/50"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 btn-symmetra-orange py-3 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Factory Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn-symmetra-outline py-3 px-5 text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#ef6c00]" />
                  <span>Chat on WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
