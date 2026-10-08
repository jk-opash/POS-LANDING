import React from "react";
import { theme } from "@/config/theme";

const FEATURES = [
  "POS & Billing",
  "Inventory Tracking",
  "Menu Engineering",
  "Table Layouts",
  "KOT Management",
  "CRM & Loyalty",
  "Aggregator Sync",
  "Supplier Management",
  "Staff Payroll",
  "Live Analytics",
  "Multi-Outlet",
  "AI Forecasting",
  "Direct Ordering",
  "Tax & Accounting",
  "Automated Alerts",
  "Offline Mode",
];

export default function TrustedBrands() {
  return (
    <>
      {/* ════════════════════════════════════════════════════
          FEATURES MARQUEE
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "2.5rem 0",
          backgroundColor: theme.colors.bgLight,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: theme.colors.primary,
              background: "rgba(255, 69, 0, 0.08)",
              padding: "0.4rem 1.2rem",
              borderRadius: "100px",
              border: `1px solid ${theme.colors.primary}20`,
            }}
          >
            A Unified Ecosystem
          </span>
        </div>

        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            margin: "0 auto",
          }}
        >
          {/* Left Gradient Mask */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "15vw",
              background: `linear-gradient(to right, ${theme.colors.bgLight}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Right Gradient Mask */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "15vw",
              background: `linear-gradient(to left, ${theme.colors.bgLight}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "1rem",
              width: "max-content",
              animation: "scrollX 35s linear infinite",
              padding: "0.5rem 0",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {[...FEATURES, ...FEATURES, ...FEATURES].map((feature, i) => (
              <div
                key={`${feature}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.6rem 1.25rem",
                  background: "#FFFFFF",
                  borderRadius: "100px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  fontFamily: theme.fonts.body,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: theme.colors.textDark,
                  whiteSpace: "nowrap",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                  const dot = e.currentTarget.querySelector('.feature-dot') as HTMLElement;
                  if (dot) {
                    dot.style.background = theme.colors.primary;
                    dot.style.boxShadow = `0 0 8px ${theme.colors.primary}80`;
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.02)";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.04)";
                  const dot = e.currentTarget.querySelector('.feature-dot') as HTMLElement;
                  if (dot) {
                    dot.style.background = "rgba(0,0,0,0.15)";
                    dot.style.boxShadow = "none";
                  }
                }}
              >
                <div
                  className="feature-dot"
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "rgba(0,0,0,0.15)",
                    transition: "all 0.3s ease",
                  }}
                />
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
