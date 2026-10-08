"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { theme } from "@/config/theme";

const FADE_UP: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const STAGGER: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const VALUES = [
  {
    title: "Omnichannel Sync",
    desc: "Seamlessly bridging Zomato, Swiggy, and direct walk-ins into one unified kitchen workflow.",
    color: "#FF4500", // theme.colors.primary
  },
  {
    title: "Granular Inventory",
    desc: "Tracking stock down to the exact gram. No more guesswork at the end of the shift.",
    color: "#3B82F6",
  },
  {
    title: "High-Speed KOTs",
    desc: "Because a 5-second delay in firing an order can ruin a table's dining experience.",
    color: "#10B981",
  },
  {
    title: "Admin & Client Ecosystem",
    desc: "Empowering owners with deep analytics while keeping the staff interface lightning fast.",
    color: "#8B5CF6",
  },
];

export default function AboutUsPage() {
  return (
    <div
      style={{
        backgroundColor: theme.colors.bgLight,
        minHeight: "100vh",
        color: theme.colors.textDark,
        overflow: "hidden",
        paddingTop: "120px",
        paddingBottom: "100px",
      }}
    >
      {/* Background Glow - Adapted for Light Mode */}
      <div
        style={{
          position: "fixed",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 0,
          background: `radial-gradient(circle at 50% 0%, ${theme.colors.primary}08 0%, transparent 60%)`,
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "0 2rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* HERO */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={STAGGER}
          style={{ marginBottom: "6rem" }}
        >
          <motion.div variants={FADE_UP}>
            <div
              style={{
                display: "inline-block",
                padding: "0.4rem 1rem",
                borderRadius: "100px",
                background: "rgba(255, 69, 0, 0.08)",
                color: theme.colors.primary,
                fontWeight: 700,
                fontSize: "0.75rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                border: `1px solid ${theme.colors.primary}20`,
              }}
            >
              The BillBite Story
            </div>
          </motion.div>

          <motion.h1
            variants={FADE_UP}
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
              color: theme.colors.textDark,
            }}
          >
            Built for the{" "}
            <span style={{ color: theme.colors.primary }}>hustle</span>
            <br /> of real restaurants.
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            style={{
              fontSize: "1.25rem",
              color: "rgba(0,0,0,0.6)",
              maxWidth: "600px",
              lineHeight: 1.6,
            }}
          >
            BillBite exists because the gap between a paper notebook and an
            overly complex enterprise POS is where most restaurants actually
            live. We studied the chaos and built a system to tame it.
          </motion.p>
        </motion.div>

        {/* WIDE STRIPS - THE REALITY */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          style={{ marginBottom: "6rem" }}
        >
          <motion.h3
            variants={FADE_UP}
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "2rem",
              color: theme.colors.textDark,
            }}
          >
            The Operational Reality
          </motion.h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}
          >
            {[
              {
                title: "Multiple KOT Rounds",
                desc: "Handling chaotic ordering sequences through a single meal without losing track of a single item.",
                bg: "#FFFFFF",
              },
              {
                title: "Aggregator Integration",
                desc: "Zomato and Swiggy orders landing mid-rush are instantly synced directly into the kitchen workflow.",
                bg: "rgba(255, 69, 0, 0.03)",
              },
              {
                title: "Inventory Accountability",
                desc: "Stock that needs to be accountable to the gram. Complete control over pilferage and wastage.",
                bg: "#FFFFFF",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={FADE_UP}
                className="wide-strip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.5rem 2rem",
                  background: item.bg,
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                }}
              >
                <div
                  className="strip-title"
                  style={{ fontWeight: 600, fontSize: "1.1rem", color: theme.colors.textDark }}
                >
                  {item.title}
                </div>
                <div
                  className="strip-desc"
                  style={{
                    color: "rgba(0,0,0,0.55)",
                    fontSize: "0.95rem",
                    maxWidth: "450px",
                    textAlign: "right",
                  }}
                >
                  {item.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* MISSION SECTION (Slightly varied light bg) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
          style={{
            background: "#FFFFFF",
            color: theme.colors.textDark,
            padding: "4rem",
            borderRadius: "24px",
            marginBottom: "6rem",
            border: "1px solid rgba(0,0,0,0.04)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.02)",
          }}
        >
          <motion.div variants={FADE_UP} style={{ maxWidth: "700px" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                fontFamily: theme.fonts.heading,
                fontWeight: 800,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                color: theme.colors.textDark,
              }}
            >
              Our Mission
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.65)",
              }}
            >
              To empower independent restaurant owners with the same level of
              operational visibility and control that multinational chains
              enjoy, without the complexity or extreme costs. We bridge the
              Admin panel with the Client POS seamlessly.
            </p>
          </motion.div>
        </motion.div>

        {/* VALUES STRIPS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={STAGGER}
        >
          <motion.h3
            variants={FADE_UP}
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "2rem",
              color: theme.colors.textDark,
            }}
          >
            The BillBite Ecosystem
          </motion.h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {VALUES.map((val, idx) => (
              <motion.div
                key={idx}
                variants={FADE_UP}
                className="values-strip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "1.25rem 2rem",
                  background: "#FFFFFF",
                  borderRadius: "8px",
                  borderLeft: `3px solid ${val.color}`,
                  borderTop: "1px solid rgba(0,0,0,0.03)",
                  borderRight: "1px solid rgba(0,0,0,0.03)",
                  borderBottom: "1px solid rgba(0,0,0,0.03)",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.01)",
                }}
              >
                <div
                  style={{
                    width: "25%",
                    fontWeight: 600,
                    color: theme.colors.textDark,
                  }}
                >
                  {val.title}
                </div>
                <div
                  style={{
                    flex: 1,
                    color: "rgba(0,0,0,0.55)",
                    fontSize: "0.95rem",
                  }}
                >
                  {val.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @media (max-width: 768px) {
            .wide-strip, .values-strip {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 0.75rem;
              padding: 1.25rem !important;
            }
            .strip-title, .values-strip > div:first-child {
              width: 100% !important;
            }
            .strip-desc {
              text-align: left !important;
              max-width: 100% !important;
            }
          }
        `,
        }}
      />
    </div>
  );
}
