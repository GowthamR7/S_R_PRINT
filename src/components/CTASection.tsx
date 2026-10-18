"use client";

import React from "react";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

interface CTASectionProps {
  onOpenSampleModal: () => void;
}

export default function CTASection({ onOpenSampleModal }: CTASectionProps) {
  return (
    <section className="py-16 sm:py-20 px-3 sm:px-6 md:px-8 w-full max-w-[96%] xl:max-w-[97%] mx-auto">
      {/* Signature Rounded Card matching Dribbble footer */}
      <div className="bg-white border border-neutral-200/90 rounded-symmetra-lg p-8 sm:p-14 md:p-16 lg:p-20 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-12">
          {/* Left Column: Title & CTAs */}
          <div className="md:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-[1.15] mb-6">
              Ready To Transform <br />
              Ideas Into Reality
            </h2>

            {/* Buttons */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={onOpenSampleModal}
                className="btn-symmetra-orange px-6 py-3 text-xs sm:text-sm font-semibold cursor-pointer shadow-sm hover:shadow-md"
              >
                Start Project
              </button>

              <a
                href="#services"
                className="btn-symmetra-outline px-6 py-3 text-xs sm:text-sm font-semibold"
              >
                View Catalog
              </a>
            </div>

            {/* Connect With Us row */}
            <div>
              <p className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                Connect With Us
              </p>
              <div className="flex items-center gap-3 text-neutral-600">
                <a
                  href="https://wa.me/918883334222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#ef6c00] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <a
                  href="tel:+918883334222"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#ef6c00] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Phone"
                >
                  <Phone className="w-4 h-4" />
                </a>

                <a
                  href="mailto:s.r.printraades@gmail.com"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#ef6c00] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-[#ef6c00] hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Location"
                >
                  <MapPin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Pantone Swatches Graphic matching Dribbble */}
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm bg-neutral-50">
              <Image
                src="/images/pantone_swatches_cta.jpg"
                alt="Pantone Color Swatches & Precision Printing"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        {/* Bottom Footer Row matching Dribbble */}
        <div className="pt-8 border-t border-neutral-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>© 2026 S.R PRINTRAADES. All Rights Reserved</p>

          <div className="flex items-center gap-4 flex-wrap justify-center font-medium">
            <a href="#about" className="hover:text-neutral-900 transition-colors">
              Brand Profile
            </a>
            <a href="#services" className="hover:text-neutral-900 transition-colors">
              Our Services
            </a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">
              Client Support
            </a>
            <a href="#contact" className="hover:text-neutral-900 transition-colors">
              Contact
            </a>
            <span className="text-neutral-300">|</span>
            <span className="text-neutral-400">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </section>
  );
}
