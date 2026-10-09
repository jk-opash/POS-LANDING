"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { theme } from "@/config/theme";
import { PRICING_PLANS } from "@/constants/home";

const compareFeatures = [
  { name: "Billing & POS", starter: true, growth: true, pro: true },
  { name: "Table & Floor Plan", starter: true, growth: true, pro: true },
  { name: "Inventory Management", starter: false, growth: true, pro: true },
  { name: "Online Ordering Sync", starter: false, growth: true, pro: true },
  { name: "Payout Reconciliation", starter: false, growth: false, pro: true },
  { name: "Multi-Branch Central Dashboard", starter: false, growth: true, pro: true },
  { name: "Custom Roles & Audit Logs", starter: false, growth: false, pro: true },
  { name: "Dedicated Account Manager", starter: false, growth: false, pro: true },
  { name: "24/7 Priority Support", starter: false, growth: false, pro: true },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  /* scroll observer for fade-up elements - EXACTLY AS HOME PAGE */
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

  return (
    <div
      style={{
        backgroundColor: theme.colors.bgDark,
        minHeight: "100vh",
        padding: "10rem 0 8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "60vw",
          background: `radial-gradient(circle, ${theme.colors.accent}15 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div className="pp-wrap relative z-10">
        <div
          className="fade-up"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span
            style={{
              marginBottom: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: theme.colors.accent,
              background: `${theme.colors.accent}15`,
              border: `1px solid ${theme.colors.accent}30`,
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: theme.colors.accent,
                display: "inline-block",
                boxShadow: `0 0 10px ${theme.colors.accent}`,
              }}
            />
            Simple Pricing
          </span>
          <h1
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.textLight,
              lineHeight: 1.1,
              maxWidth: "800px",
              margin: "0 auto 1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Pricing that scales with you
          </h1>
          <p
            style={{
              color: theme.colors.textMuted,
              maxWidth: "600px",
              margin: "0 auto 3rem",
              fontSize: "1.1rem",
              lineHeight: 1.6,
            }}
          >
            No hidden fees, no surprise charges. Upgrade or downgrade at any
            time as your business grows.
          </p>

          {/* Premium Animated Toggle */}
          <div
            style={{
              display: "inline-grid",
              gridTemplateColumns: "1fr 1fr",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "100px",
              padding: "0.35rem",
              position: "relative",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0.35rem",
                bottom: "0.35rem",
                left: billing === "monthly" ? "0.35rem" : "50%",
                width: "calc(50% - 0.35rem)",
                background: theme.colors.accent,
                borderRadius: "100px",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: `0 4px 12px ${theme.colors.accent}40`,
              }}
            />
            <button
              onClick={() => setBilling("monthly")}
              style={{
                padding: "0.75rem 2.5rem",
                borderRadius: "100px",
                border: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                background: "transparent",
                color:
                  billing === "monthly"
                    ? theme.colors.textLight
                    : theme.colors.textMuted,
                cursor: "pointer",
                transition: "color 0.4s ease",
                position: "relative",
                zIndex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              style={{
                padding: "0.75rem 2.5rem",
                borderRadius: "100px",
                border: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                background: "transparent",
                color:
                  billing === "yearly"
                    ? theme.colors.textLight
                    : theme.colors.textMuted,
                cursor: "pointer",
                transition: "color 0.4s ease",
                position: "relative",
                zIndex: 1,
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "baseline",
                gap: "0.25rem",
              }}
            >
              Yearly{" "}
              <span
                style={{
                  opacity: billing === "yearly" ? 1 : 0.6,
                  fontSize: "0.8em",
                }}
              >
                (-20%)
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Panel Container - EXACTLY COPIED FROM HOME COMPONENT */}
        <div
          className="fade-up"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "24px",
            padding: "1.25rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1rem",
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.5)",
            backdropFilter: "blur(24px)",
            marginBottom: "5rem",
          }}
        >
          {PRICING_PLANS.map((plan, idx) => {
            // Multi-colour mapping for cards
            const bgGradients = [
              "linear-gradient(180deg, rgba(56,189,248,0.12) 0%, rgba(255,255,255,0.01) 100%)",
              `linear-gradient(180deg, ${theme.colors.accent}20 0%, rgba(255,255,255,0.01) 100%)`,
              "linear-gradient(180deg, rgba(168,85,247,0.12) 0%, rgba(255,255,255,0.01) 100%)",
            ];
            const borderColors = [
              "rgba(56,189,248,0.3)",
              `${theme.colors.accent}50`,
              "rgba(168,85,247,0.3)",
            ];
            const iconColors = [
              "#38bdf8",
              theme.colors.accent,
              "#a855f7",
            ];
            
            const currentBg = bgGradients[idx % bgGradients.length];
            const currentBorder = borderColors[idx % borderColors.length];
            const currentIconColor = iconColors[idx % iconColors.length];

            return (
              <div
                key={plan.name}
                style={{
                  background: plan.isPopular ? currentBg : "rgba(255,255,255,0.02)",
                  border: `1px solid ${plan.isPopular ? currentBorder : "rgba(255,255,255,0.05)"}`,
                  borderRadius: "20px",
                  padding: "1.75rem 1.5rem",
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  transition:
                    "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease, border-color 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = currentBg;
                  e.currentTarget.style.borderColor = currentBorder;
                  if (plan.isPopular) e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = plan.isPopular ? currentBg : "rgba(255,255,255,0.02)";
                  e.currentTarget.style.borderColor = plan.isPopular ? currentBorder : "rgba(255,255,255,0.05)";
                  if (plan.isPopular) e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                {plan.isPopular && (
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      background: theme.colors.accent,
                      color: theme.colors.textLight,
                      padding: "0.25rem 1rem",
                      borderRadius: "100px",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      whiteSpace: "nowrap",
                      boxShadow: `0 4px 15px ${theme.colors.accent}60`,
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                <h3
                  style={{
                    fontSize: "1.25rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    color: theme.colors.textLight,
                    marginBottom: "0.5rem",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    color: theme.colors.textMuted,
                    fontSize: "0.85rem",
                    lineHeight: 1.4,
                    minHeight: "40px",
                  }}
                >
                  {plan.desc}
                </p>

                <div
                  style={{
                    margin: "1.5rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.25rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        color: theme.colors.textLight,
                        fontSize: "2.5rem",
                        fontFamily: theme.fonts.heading,
                        fontWeight: 800,
                        lineHeight: 1,
                      }}
                    >
                      ₹
                      {billing === "yearly"
                        ? plan.priceYearly
                        : plan.priceMonthly}
                    </span>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: theme.colors.textMuted,
                        fontWeight: 500,
                      }}
                    >
                      {plan.suffix}
                    </span>
                  </div>
                  <p
                    style={{
                      color: theme.colors.whiteAlpha.a50,
                      fontSize: "0.75rem",
                      fontWeight: 500,
                    }}
                  >
                    Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                    GST
                  </p>
                </div>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: "0 0 2rem 0",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    flexGrow: 1,
                  }}
                >
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: `${currentIconColor}20`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <Check
                          size={10}
                          color={currentIconColor}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        style={{
                          color: theme.colors.textLight,
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          lineHeight: 1.4,
                        }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/demo"
                  style={{
                    display: "block",
                    textAlign: "center",
                    padding: "0.75rem",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    transition: "all 0.3s ease",
                    background: plan.isPopular
                      ? currentIconColor
                      : "rgba(255,255,255,0.05)",
                    color: theme.colors.textLight,
                    border: plan.isPopular
                      ? "none"
                      : "1px solid rgba(255,255,255,0.1)",
                    boxShadow: plan.isPopular
                      ? `0 6px 15px -4px ${currentIconColor}60`
                      : "none",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.isPopular) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    } else {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 8px 20px -4px ${currentIconColor}80`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.isPopular) {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    } else {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 6px 15px -4px ${currentIconColor}60`;
                    }
                  }}
                >
                  {plan.btnText}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Detailed Features Table matched perfectly to your dark theme logic */}
        <div className="fade-up" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2rem, 3vw, 2.5rem)",
              color: theme.colors.textLight,
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Compare All Features
          </h2>
          
          <div
            style={{
              background: "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
              backdropFilter: "blur(24px)",
            }}
          >
            <div style={{ overflowX: "auto" }} className="no-scrollbar">
              <table style={{ width: "100%", textAlign: "left", borderCollapse: "collapse", minWidth: "700px" }}>
                <thead>
                  <tr>
                    <th style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)", color: theme.colors.textMuted, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 800, width: "40%" }}>
                      Features
                    </th>
                    <th style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)", color: theme.colors.textLight, fontSize: "0.9rem", fontWeight: 800, textAlign: "center", width: "20%" }}>
                      Starter
                    </th>
                    <th style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)", color: theme.colors.textLight, fontSize: "0.9rem", fontWeight: 800, textAlign: "center", width: "20%" }}>
                      Growth
                    </th>
                    <th style={{ padding: "1.25rem 1.5rem", borderBottom: "1px solid rgba(255,255,255,0.08)", background: "rgba(0,0,0,0.2)", color: theme.colors.textLight, fontSize: "0.9rem", fontWeight: 800, textAlign: "center", width: "20%" }}>
                      Professional
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((row, idx) => (
                    <tr 
                      key={row.name}
                      style={{
                        background: idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)",
                        borderBottom: idx === compareFeatures.length - 1 ? "none" : "1px solid rgba(255,255,255,0.04)",
                        transition: "background 0.3s ease",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                      onMouseLeave={(e) => e.currentTarget.style.background = idx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.015)"}
                    >
                      <td style={{ padding: "1.25rem 1.5rem", color: theme.colors.textLight, fontSize: "0.9rem", fontWeight: 600 }}>
                        {row.name}
                      </td>
                      <td style={{ padding: "1.25rem 1.5rem", textAlign: "center" }}>
                        {row.starter ? (
                          <div style={{ display: "inline-flex", background: `rgba(56,189,248,0.15)`, padding: "0.3rem", borderRadius: "50%", boxShadow: `0 0 10px rgba(56,189,248,0.2)` }}>
                            <Check size={14} color="#38bdf8" strokeWidth={3} />
                          </div>
                        ) : (
                          <Minus size={14} color={theme.colors.textMuted} style={{ margin: "0 auto", opacity: 0.3 }} strokeWidth={3} />
                        )}
                      </td>
                      <td style={{ padding: "1.25rem 1.5rem", textAlign: "center" }}>
                        {row.growth ? (
                          <div style={{ display: "inline-flex", background: `${theme.colors.accent}15`, padding: "0.3rem", borderRadius: "50%", boxShadow: `0 0 10px ${theme.colors.accent}20` }}>
                            <Check size={14} color={theme.colors.accent} strokeWidth={3} />
                          </div>
                        ) : (
                          <Minus size={14} color={theme.colors.textMuted} style={{ margin: "0 auto", opacity: 0.3 }} strokeWidth={3} />
                        )}
                      </td>
                      <td style={{ padding: "1.25rem 1.5rem", textAlign: "center" }}>
                        {row.pro ? (
                          <div style={{ display: "inline-flex", background: `rgba(168,85,247,0.15)`, padding: "0.3rem", borderRadius: "50%", boxShadow: `0 0 10px rgba(168,85,247,0.2)` }}>
                            <Check size={14} color="#a855f7" strokeWidth={3} />
                          </div>
                        ) : (
                          <Minus size={14} color={theme.colors.textMuted} style={{ margin: "0 auto", opacity: 0.3 }} strokeWidth={3} />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
}
