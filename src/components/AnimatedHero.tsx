"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../assets";
import { theme } from "../config/theme";
import { Button } from "./Button";
import { PRODUCTS } from "../constants/products";

export default function AnimatedHero() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: theme.colors.bgLight,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          inset: 0,
          paddingTop: "6rem",
          backgroundImage: "url(/hero_pos_bg.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "bottom center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ textAlign: "center" }}
        >
          <h1
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              lineHeight: 1.1,
              color: theme.colors.textDark,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
              margin: "0 auto 1.5rem",
            }}
          >
            Run Every Outlet Like You're Standing in All of Them.
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: theme.colors.textDark,
              opacity: 0.7,
              maxWidth: "700px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.6,
            }}
          >
            Multi-branch POS, GST-ready billing, and complete stock audit. All
            from one powerful, unified dashboard.
          </p>
          <div
            style={{ display: "flex", gap: "1rem", justifyContent: "center" }}
          >
            <Button variant="primary" size="lg" shape="pill" animated>
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              shape="pill"
              style={{
                borderColor: "rgba(0,0,0,0.1)",
                color: theme.colors.textDark,
                background: "rgba(255,255,255,0.5)",
              }}
            >
              Book a Demo
            </Button>
          </div>
        </motion.div>

        {/* Dashboard Image Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto 0rem",
          }}
        >
          <img
            src={IMAGES.heroBg}
            alt="Dashboard"
            style={{ width: "100%", borderRadius: "16px", display: "block" }}
          />
        </motion.div>

        {/* Low Wide Interactive Features Section (Replacing the big white panel) */}
      </div>
    </div>
  );
}
