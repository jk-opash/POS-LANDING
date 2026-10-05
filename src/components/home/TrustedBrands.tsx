import React, { useState } from "react";
import { theme } from "@/config/theme";


export default function TrustedBrands() {


  return (
    <>
      {/* ════════════════════════════════════════════════════
          2. TRUSTED BRANDS MARQUEE
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "3rem 0",
          backgroundColor: theme.colors.bgLight,
          borderBottom: `1px solid ${theme.colors.border}`,
          overflow: "hidden",
        }}
      >
        <div className="pp-wrap" style={{ marginBottom: "1.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{
                flex: 1,
                height: "1px",
                background: theme.colors.border,
              }}
            />

            <p
              style={{
                fontFamily: theme.fonts.body,
                fontWeight: 500,
                fontSize: "0.875rem",
                color: theme.colors.textDark,
                whiteSpace: "nowrap",
                margin: 0,
              }}
            >
              Everything you need to{" "}
              <strong style={{ color: theme.colors.primary }}>
                run, manage & grow
              </strong>{" "}
              your business
            </p>

            <div
              style={{
                flex: 1,
                height: "1px",
                background: theme.colors.border,
              }}
            />
          </div>
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
              width: "150px",
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
              width: "150px",
              background: `linear-gradient(to left, ${theme.colors.bgLight}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              width: "max-content",
              animation: "scrollX 35s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {[
              "POS & Billing",
              "Inventory Management",
              "Menu Management",
              "Table Management",
              "Kitchen Display",
              "CRM & Loyalty",
              "Orders Management",
              "Purchase & Suppliers",
              "Employee Management",
              "Reports & Analytics",
              "Multi-Branch Management",
              "AI Business Insights",
              "Online Orders",
              "Accounting",
              "Smart Notifications",
              "Offline POS",
              "POS & Billing",
              "Inventory Management",
              "Menu Management",
              "Table Management",
              "Kitchen Display",
              "CRM & Loyalty",
              "Orders Management",
              "Purchase & Suppliers",
              "Employee Management",
              "Reports & Analytics",
              "Multi-Branch Management",
              "AI Business Insights",
              "Online Orders",
              "Accounting",
              "Smart Notifications",
              "Offline POS",
            ].map((feature, i) => (
              <div
                key={`${feature}-${i}`}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: theme.colors.bgSurface,
                  borderRadius: "0.5rem",
                  border: `1px solid ${theme.colors.border}`,
                  boxShadow: theme.shadows.sm,
                  fontFamily: theme.fonts.heading,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: theme.colors.textDark,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  opacity: 0.65,
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.color = theme.colors.accent;
                  e.currentTarget.style.borderColor = theme.colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.65";
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = theme.colors.textDark;
                  e.currentTarget.style.borderColor = theme.colors.border;
                }}
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
