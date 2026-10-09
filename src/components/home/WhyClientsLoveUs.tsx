import React, { useState, useEffect } from "react";
import { theme } from "@/config/theme";
import { motion, AnimatePresence } from "framer-motion";
import {
  Utensils,
  Smartphone,
  Truck,
  LayoutDashboard,
  CheckCircle2,
  Zap,
} from "lucide-react";

const FEATURES = [
  {
    id: "unified-pos",
    icon: <Smartphone size={22} />,
    title: "Unified POS Ecosystem",
    shortDesc: "One screen for every order.",
    details:
      "Handle dine-in, takeaway, and aggregators (Zomato/Swiggy) without switching tabs. Split bills, apply discounts, and manage tables with zero lag.",
    tags: ["Dine-in", "Takeaway", "Aggregators", "QR Orders"],
    color: theme.colors.accent,
  },
  {
    id: "smart-kitchen",
    icon: <Utensils size={22} />,
    title: "Smart Kitchen Routing",
    shortDesc: "Never lose a KOT again.",
    details:
      "Orders fire instantly to the correct kitchen stations. Track prep times, manage coursing, and eliminate the chaos of paper tickets.",
    tags: ["Digital KOTs", "Prep Tracking", "Station Routing"],
    color: "#10B981", // Emerald
  },
  {
    id: "inventory",
    icon: <Truck size={22} />,
    title: "Granular Inventory",
    shortDesc: "Track stock to the exact gram.",
    details:
      "Stop pilferage before it happens. Map recipes to ingredients, receive low-stock alerts, and generate one-click purchase orders.",
    tags: ["Recipe Mapping", "Low Stock Alerts", "Supplier POs"],
    color: "#3B82F6", // Blue
  },
  {
    id: "admin",
    icon: <LayoutDashboard size={22} />,
    title: "Total Business Control",
    shortDesc: "Your restaurant in your pocket.",
    details:
      "Monitor live sales across multiple outlets, manage staff permissions, track daily accounting, and view AI-driven performance insights.",
    tags: ["Multi-Outlet", "Staff Payroll", "Live Analytics"],
    color: "#8B5CF6", // Purple
  },
];

export default function WhyClientsLoveUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate the active tab
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgDark,
        padding: "6rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "50vw",
          height: "50vw",
          background: `radial-gradient(circle, ${theme.colors.accent}08 0%, transparent 60%)`,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div className="pp-wrap relative z-10">
        {/* Section Header */}
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: theme.colors.textLight,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Built for{" "}
            <span style={{ color: theme.colors.accent }}>Speed & Scale</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.8)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            We replaced messy spreadsheets, blind inventory, and clunky legacy
            software with a lightning-fast, interconnected ecosystem.
          </p>
        </div>

        {/* INTERACTIVE FEATURE ACCORDION / TABS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "2rem",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "24px",
            padding: "1rem",
            boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* LEFT: Nav Tabs */}
          <div
            className="col-span-12 md:col-span-4"
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {FEATURES.map((feat, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveIndex(idx)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1.25rem",
                    borderRadius: "16px",
                    background: isActive
                      ? "rgba(255,255,255,0.05)"
                      : "transparent",
                    border: `1px solid ${
                      isActive ? "rgba(255,255,255,0.1)" : "transparent"
                    }`,
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    outline: "none",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabGlow"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        bottom: 0,
                        width: "4px",
                        background: feat.color,
                        boxShadow: `0 0 15px ${feat.color}`,
                      }}
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}

                  <div
                    style={{
                      color: isActive ? feat.color : "rgba(255,255,255,0.6)",
                      transition: "color 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      background: isActive
                        ? `${feat.color}15`
                        : "rgba(255,255,255,0.03)",
                    }}
                  >
                    {feat.icon}
                  </div>

                  <div>
                    <h3
                      style={{
                        color: isActive
                          ? theme.colors.textLight
                          : "rgba(255,255,255,0.8)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {feat.title}
                    </h3>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontSize: "0.8rem",
                        margin: 0,
                      }}
                    >
                      {feat.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active Content Showcase */}
          <div
            className="col-span-12 md:col-span-8"
            style={{
              position: "relative",
              minHeight: "380px",
              background: "rgba(0,0,0,0.2)",
              borderRadius: "16px",
              padding: "3rem",
              border: "1px solid rgba(255,255,255,0.03)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Decorative Background Icon */}
            <div
              style={{
                position: "absolute",
                right: "-5%",
                bottom: "-20%",
                opacity: 0.03,
                transform: "scale(4)",
                pointerEvents: "none",
                color: "#FFFFFF",
              }}
            >
              {FEATURES[activeIndex].icon}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(5px)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ position: "relative", zIndex: 1 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0.5rem 1rem",
                    borderRadius: "100px",
                    background: `${FEATURES[activeIndex].color}15`,
                    color: FEATURES[activeIndex].color,
                    marginBottom: "1.5rem",
                    border: `1px solid ${FEATURES[activeIndex].color}30`,
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  Core Advantage
                </div>

                <h3
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 700,
                    color: theme.colors.textLight,
                    marginBottom: "1rem",
                    fontFamily: theme.fonts.heading,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {FEATURES[activeIndex].title}
                </h3>

                <p
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "1.1rem",
                    lineHeight: 1.6,
                    maxWidth: "90%",
                    marginBottom: "2.5rem",
                  }}
                >
                  {FEATURES[activeIndex].details}
                </p>

                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}
                >
                  {FEATURES[activeIndex].tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        padding: "0.5rem 1rem",
                        background: "rgba(255,255,255,0.03)",
                        borderRadius: "100px",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.8)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <CheckCircle2
                        size={16}
                        color={FEATURES[activeIndex].color}
                      />
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* MARQUEE FOOTER */}
        <div
          style={{
            marginTop: "5rem",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            padding: "1.25rem 0",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* Gradient Masks */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "100px",
              background: `linear-gradient(to right, ${theme.colors.bgDark}, transparent)`,
              zIndex: 2,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "100px",
              background: `linear-gradient(to left, ${theme.colors.bgDark}, transparent)`,
              zIndex: 2,
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "4rem",
              width: "max-content",
              animation: "scrollX 40s linear infinite",
            }}
          >
            {[
              "Ditch the spreadsheets",
              "Automate your kitchen",
              "Stop inventory pilferage",
              "Unify your outlets",
              "Lightning-fast billing",
              "Ditch the spreadsheets",
              "Automate your kitchen",
              "Stop inventory pilferage",
              "Unify your outlets",
              "Lightning-fast billing",
            ].map((text, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                <Zap
                  size={14}
                  color={theme.colors.primary}
                  style={{ opacity: 0.8 }}
                />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 768px) {
              .col-span-12 { grid-column: span 12 / span 12 !important; }
            }
          `,
        }}
      />
    </section>
  );
}
