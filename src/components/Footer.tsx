"use client";

import React from "react";
import { Phone, Mail, MapPin, Sparkles, Clock, ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  const products = [
    "High-Density Woven Damask Labels",
    "Printed Satin & Cotton Care Labels",
    "Designer Garment Hang Tags & Eyelets",
    "3D Micro-Injected Rubber Patches",
    "High-Density Silicon Screen Printing",
    "Luxury Apparel & Shirt Packaging Boxes",
    "Custom Branded Tissue Wrapping Paper",
    "Commercial Offset Brochures & Lookbooks",
  ];

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-orange-500/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center text-white font-black text-xl shadow-md shadow-orange-500/25">
                SR
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white">
                  S.R PRINTRAADES
                </span>
                <p className="text-[11px] text-orange-400 font-semibold tracking-wide">
                  ESTABLISHED 2011 • 25+ YEARS INDUSTRY ROOTS
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              From our foundations with Cosmic Printers to modern automated manufacturing in Tirupur,
              we deliver high-precision offset printing, woven labels, 3D rubber patches, silicon printing,
              and luxury apparel packaging for India&apos;s leading garment exporters and fashion brands.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                Executive Leadership:
              </p>
              <p className="text-sm font-extrabold text-amber-400">
                U. SATHYASANKAR{" "}
                <span className="text-xs font-medium text-slate-400">
                  (Managing Director)
                </span>
              </p>
            </div>
          </div>

          {/* Products Column (Col 4) */}
          <div className="lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              Specialized Products
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {products.map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500/80" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-orange-400 mb-4">
              Registered Office & Factory
            </h4>
            <div className="text-xs sm:text-sm text-slate-300 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  49, Patchaiyappa Nagar 2nd Street,
                  <br />
                  Maniyakaranpalayam Road,
                  <br />
                  Tirupur – 641606,
                  <br />
                  Tamil Nadu, India.
                </p>
              </div>

              <div className="flex items-center gap-2.5 pt-2">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <div className="flex flex-col">
                  <a
                    href="tel:+918883334222"
                    className="hover:text-orange-400 transition-colors font-bold text-white"
                  >
                    +91 88833 34222
                  </a>
                  <a
                    href="tel:+918877758111"
                    className="hover:text-orange-400 transition-colors font-semibold text-slate-300"
                  >
                    +91 88777 58111
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a
                  href="mailto:s.r.printraades@gmail.com"
                  className="hover:text-orange-400 transition-colors"
                >
                  s.r.printraades@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-slate-400 pt-1">
                <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                <span>Mon – Sat: 9.00 AM – 8.00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © 2026 <strong className="text-white">S.R PRINTRAADES</strong>. All rights reserved.
            Printing with Precision. Creating with Purpose.
          </p>

          <p className="flex items-center gap-1 text-[11px]">
            Engineered in Tirupur, Tamil Nadu • Apparel Printing Capital
          </p>
        </div>
      </div>
    </footer>
  );
}
