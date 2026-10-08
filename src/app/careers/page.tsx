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

const OPEN_ROLES = [
  {
    title: "Frontend Engineer (POS-CLIENT)",
    type: "Full-Time",
    desc: "Build highly responsive, touch-first interfaces for high-speed restaurant environments. You'll work heavily with React, state management, and offline-first capabilities.",
    color: "#FF4500",
  },
  {
    title: "Backend Engineer (POS-ADMIN)",
    type: "Full-Time",
    desc: "Architect scalable backend systems to handle granular inventory tracking across multiple branches, real-time analytics, and heavy aggregator integrations (Zomato/Swiggy).",
    color: "#3B82F6",
  },
  {
    title: "Product Designer (POS-NEW)",
    type: "Full-Time",
    desc: "Design the future of restaurant operations. Your focus will be minimizing friction in the kitchen workflow and creating stunning, high-contrast POS terminals.",
    color: "#10B981",
  },
];

export default function CareersPage() {
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
      {/* Background Glow */}
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
              Careers at BillBite
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
            Build the systems that <br />
            <span style={{ color: theme.colors.primary }}>run the industry.</span>
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
            We are looking for passionate engineers, designers, and problem solvers to help us redefine restaurant technology through our Client POS, Admin dashboards, and ecosystem tools.
          </motion.p>
        </motion.div>

        {/* CULTURE SECTION */}
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
              How We Work
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.65)",
              }}
            >
              We don't build generic software. We build specialized, high-velocity tools for environments where every second counts. Whether it's the <b>POS-CLIENT</b> used by servers on the floor or the <b>POS-ADMIN</b> used by owners for granular inventory control, everything we ship must be fast, reliable, and beautifully designed.
            </p>
          </motion.div>
        </motion.div>

        {/* OPEN ROLES WIDE STRIPS */}
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
            Open Positions
          </motion.h3>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {OPEN_ROLES.map((role, idx) => (
              <motion.div
                key={idx}
                variants={FADE_UP}
                className="role-strip"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1.75rem 2rem",
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  border: "1px solid rgba(0,0,0,0.04)",
                  borderLeft: `4px solid ${role.color}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  cursor: "pointer",
                }}
                whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(0,0,0,0.04)" }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <h4
                      style={{
                        margin: 0,
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: theme.colors.textDark,
                      }}
                    >
                      {role.title}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        padding: "0.2rem 0.6rem",
                        borderRadius: "100px",
                        background: "rgba(0,0,0,0.05)",
                        color: "rgba(0,0,0,0.6)",
                      }}
                    >
                      {role.type}
                    </span>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      color: "rgba(0,0,0,0.55)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                      maxWidth: "600px",
                    }}
                  >
                    {role.desc}
                  </p>
                </div>

                <div
                  className="apply-btn"
                  style={{
                    padding: "0.75rem 1.5rem",
                    borderRadius: "8px",
                    background: "rgba(0,0,0,0.04)",
                    color: theme.colors.textDark,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    transition: "all 0.2s ease",
                  }}
                >
                  Apply Now
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
            .role-strip {
              flex-direction: column !important;
              align-items: flex-start !important;
              gap: 1.5rem;
              padding: 1.5rem !important;
            }
            .apply-btn {
              width: 100%;
              text-align: center;
            }
          }
          
          .role-strip:hover .apply-btn {
            background: ${theme.colors.primary};
            color: white !important;
          }
        `,
        }}
      />
    </div>
  );
}
