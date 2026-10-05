"use client";
import React, { useState, useEffect } from "react";
import AnimatedHero from "@/components/AnimatedHero";
import { theme } from "@/config/theme";

// Sections
import TrustedBrands from "@/components/home/TrustedBrands";
import WhyClientsLoveUs from "@/components/home/WhyClientsLoveUs";
import Ecosystem from "@/components/home/Ecosystem";
import Stats from "@/components/home/Stats";
import Solutions from "@/components/home/Solutions";
import Pricing from "@/components/home/Pricing";
import Faqs from "@/components/home/Faqs";
import Testimonials from "@/components/home/Testimonials";

export default function HomePage() {
  const [showTop, setShowTop] = useState(false);

  /* scroll observer for fade-up elements */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* back-to-top */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ flex: 1 }}>
      <AnimatedHero />
      <TrustedBrands />
      <WhyClientsLoveUs />
      <Ecosystem />
      <Stats />
      <Solutions />
      <Pricing />
      <Faqs />
      <Testimonials />
      {/* <DemoForm /> */}

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          backgroundColor: theme.colors.accent,
          color: theme.colors.textLight,
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: theme.shadows.accent,
          opacity: showTop ? 1 : 0,
          visibility: showTop ? "visible" : "hidden",
          transform: showTop
            ? "translateY(0) scale(1)"
            : "translateY(20px) scale(0.9)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          zIndex: 999,
        }}
        onMouseEnter={(e) => {
          if (showTop)
            e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          if (showTop)
            e.currentTarget.style.transform = "translateY(0) scale(1)";
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          [style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-column: span 7"],
          [style*="grid-column: span 5"],
          [style*="grid-column: span 4"],
          [style*="grid-column: span 8"] {
            grid-column: span 1 !important;
          }
          [style*="grid-template-columns: 1fr 1.6fr"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          .bento-card [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
