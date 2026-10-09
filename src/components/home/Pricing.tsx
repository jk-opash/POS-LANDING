import React, { useState } from "react";
import Link from "next/link";
import { theme } from "@/config/theme";
import { Check } from "lucide-react";
import { PRICING_PLANS } from "@/constants/home";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgDark,
        padding: "8rem 0",
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
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: theme.colors.textLight,
              lineHeight: 1.1,
              maxWidth: "700px",
              margin: "0 auto 1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Transparent Plans for Every Stage
          </h2>
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
                padding: "0.75rem 2rem",
                borderRadius: "100px",
                border: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                background: "transparent",
                color:
                  billing === "monthly"
                    ? theme.colors.textLight
                    : theme.colors.whiteAlpha.a80,
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
                padding: "0.75rem 2rem",
                borderRadius: "100px",
                border: "none",
                fontSize: "0.95rem",
                fontWeight: 700,
                background: "transparent",
                color:
                  billing === "yearly"
                    ? theme.colors.textLight
                    : theme.colors.whiteAlpha.a80,
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
                  opacity: billing === "yearly" ? 1 : 0.8,
                  fontSize: "0.8em",
                }}
              >
                (-20%)
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Panel Container */}
        <div
          className="fade-up"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "32px",
            padding: "1rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1rem",
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.5)",
            backdropFilter: "blur(24px)",
          }}
        >
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                background: plan.isPopular
                  ? "rgba(255,255,255,0.03)"
                  : "transparent",
                border: plan.isPopular
                  ? `1px solid ${theme.colors.accent}40`
                  : "1px solid transparent",
                borderRadius: "24px",
                padding: "3rem 2rem",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.4s ease",
              }}
              onMouseEnter={(e) => {
                if (!plan.isPopular)
                  e.currentTarget.style.background = "rgba(255,255,255,0.02)";
              }}
              onMouseLeave={(e) => {
                if (!plan.isPopular)
                  e.currentTarget.style.background = "transparent";
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
                    padding: "0.35rem 1.25rem",
                    borderRadius: "100px",
                    fontSize: "0.75rem",
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
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: theme.colors.textLight,
                  marginBottom: "0.75rem",
                }}
              >
                {plan.name}
              </h3>
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  minHeight: "45px",
                }}
              >
                {plan.desc}
              </p>

              <div
                style={{
                  margin: "2.5rem 0",
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
                      fontSize: "3rem",
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
                      fontSize: "1rem",
                      color: theme.colors.textMuted,
                      fontWeight: 500,
                    }}
                  >
                    {plan.suffix}
                  </span>
                </div>
                <p
                  style={{
                    color: theme.colors.whiteAlpha.a70,
                    fontSize: "0.8rem",
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
                  margin: "0 0 3rem 0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  flexGrow: 1,
                }}
              >
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: `${theme.colors.accent}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                      }}
                    >
                      <Check
                        size={12}
                        color={theme.colors.accent}
                        strokeWidth={3}
                      />
                    </div>
                    <span
                      style={{
                        color: theme.colors.textLight,
                        fontSize: "0.95rem",
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
                href="/#demo-form"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "1rem",
                  borderRadius: "16px",
                  fontWeight: 700,
                  fontSize: "1rem",
                  transition: "all 0.3s ease",
                  background: plan.isPopular
                    ? theme.colors.accent
                    : "rgba(255,255,255,0.05)",
                  color: theme.colors.textLight,
                  border: plan.isPopular
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                  boxShadow: plan.isPopular
                    ? `0 8px 20px -5px ${theme.colors.accent}60`
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!plan.isPopular) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  } else {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.isPopular) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  } else {
                    e.currentTarget.style.transform = "translateY(0)";
                  }
                }}
              >
                {plan.btnText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
