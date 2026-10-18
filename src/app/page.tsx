"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import ProcessSection from "@/components/ProcessSection";
import PopularCollections from "@/components/PopularCollections";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CostEstimator from "@/components/CostEstimator";
import CTASection from "@/components/CTASection";
import ContactAndLocation from "@/components/ContactAndLocation";
import SampleKitModal from "@/components/SampleKitModal";
import FloatingActions from "@/components/FloatingActions";

export default function Home() {
  const [isSampleModalOpen, setIsSampleModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string>("");

  const handleOpenSampleModal = (productName?: string) => {
    setPreselectedProduct(productName || "");
    setIsSampleModalOpen(true);
  };

  const handleSelectProductForQuote = (productName: string) => {
    const estimatorEl = document.getElementById("estimator");
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#f7f7f8] selection:bg-[#ef6c00] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <Navbar onOpenSampleModal={() => handleOpenSampleModal()} />

      {/* 2. Hero Section: Playful Title + Terracotta Orange Core Capabilities Card */}
      <HeroSection onOpenSampleModal={() => handleOpenSampleModal()} />

      {/* 3. Discover Our Main Products Services (Bento Grid) */}
      <ProductCatalog
        onSelectProductForQuote={handleSelectProductForQuote}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* 4. How Our Ordering Process Works (3 Steps) */}
      <ProcessSection onOpenSampleModal={() => handleOpenSampleModal()} />

      {/* 5. Most Popular Collections (2-Card Bento with Slider & Units Produced) */}
      <PopularCollections onOpenSampleModal={handleOpenSampleModal} />

      {/* 6. Frequently Asked Questions (Accordion) */}
      <FAQSection />

      {/* 7. Client Perspectives on Our Quality (Testimonial Spotlight) */}
      <TestimonialsSection onOpenSampleModal={() => handleOpenSampleModal()} />

      {/* 8. Interactive Project Cost & Lead Time Estimator */}
      <CostEstimator
        initialProduct={preselectedProduct}
        onOpenSampleModal={handleOpenSampleModal}
      />

      {/* 9. Registered Factory, Leadership & Quick Contact Form */}
      <ContactAndLocation />

      {/* 10. Ready To Transform Ideas Into Reality (Bottom CTA & Footer) */}
      <CTASection onOpenSampleModal={() => handleOpenSampleModal()} />

      {/* Floating Quick Action Buttons (WhatsApp, Phone, Scroll-Top) */}
      <FloatingActions />

      {/* Sample Kit Request Modal */}
      <SampleKitModal
        isOpen={isSampleModalOpen}
        onClose={() => setIsSampleModalOpen(false)}
        preselectedProduct={preselectedProduct}
      />
    </main>
  );
}
