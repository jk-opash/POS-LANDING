"use client";
import { motion, AnimatePresence } from "framer-motion";
import { IMAGES } from "../assets";
import Image from "next/image";
import { theme } from "../config/theme";
import { Button } from "./Button";

export default function AnimatedHero() {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: theme.colors.bgLight,
        overflow: "hidden",
      }}
    >
      {/* Background Gradient Orbs */}

      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingTop: "8rem",
        }}
      >
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: "5%",
            left: "10%",
            width: "15vw",
            height: "15vw",
            background: theme.colors.accent,
            filter: "blur(120px)",
            borderRadius: "50%",
            zIndex: 0,
            opacity: 0.5,
            pointerEvents: "none",
          }}
        />
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: "20%",
            right: "10%",
            width: "15vw",
            height: "15vw",
            background: theme.colors.accent,
            filter: "blur(120px)",
            borderRadius: "50%",
            opacity: 0.8,
            zIndex: 0,
            pointerEvents: "none",
          }}
        />

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
            <Button
              variant="primary"
              size="lg"
              shape="pill"
              animated
              href="/pricing"
            >
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="lg"
              shape="pill"
              href="/demo"
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
        {/* CRITICAL LCP ELEMENT: Do not animate this with opacity: 0 to avoid render delay */}
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto 0rem",
          }}
        >
          {/* Ultra-Modern Typography Marquee Background - Anchored strictly behind the image */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100vw",
              height: "150%",
              zIndex: -1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2rem",
              pointerEvents: "none",
            }}
          >
            {/* Row 1 - Moving Left */}
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              style={{
                whiteSpace: "nowrap",
                fontFamily: theme.fonts.heading,
                fontSize: "8rem",
                fontWeight: 900,
                color: theme.colors.textMuted,
                opacity: 0.2,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              POINT OF SALE • INVENTORY • ANALYTICS • POINT OF SALE • INVENTORY
              • ANALYTICS
            </motion.div>

            {/* Row 2 - Moving Right */}
            <motion.div
              animate={{ x: [-1000, 0] }}
              transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
              style={{
                whiteSpace: "nowrap",
                fontFamily: theme.fonts.heading,
                fontSize: "10rem",
                fontWeight: 900,
                color: theme.colors.accent,
                opacity: 0.2,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              RESTAURANTS • CAFES • CLOUD KITCHENS • RESTAURANTS • CAFES • CLOUD
              KITCHENS
            </motion.div>

            {/* Row 3 - Moving Left */}
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              style={{
                whiteSpace: "nowrap",
                fontFamily: theme.fonts.heading,
                fontSize: "8rem",
                fontWeight: 900,
                color: theme.colors.primary,
                opacity: 0.2,
                lineHeight: 1,
                userSelect: "none",
              }}
            >
              OMNICHANNEL • DELIVERY • PAYMENTS • OMNICHANNEL • DELIVERY •
              PAYMENTS
            </motion.div>

            {/* Top & Bottom Fade Overlays so it blends seamlessly */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "30%",
                background: `linear-gradient(to bottom, ${theme.colors.bgLight} 0%, transparent 100%)`,
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "30%",
                background: `linear-gradient(to top, ${theme.colors.bgLight} 0%, transparent 100%)`,
                zIndex: 1,
              }}
            />
          </div>
          <Image
            src={IMAGES.heroBg}
            alt="Dashboard"
            width={1000}
            height={658}
            priority
            fetchPriority="high"
            sizes="(max-width: 1000px) 100vw, 1000px"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "16px",
              display: "block",
            }}
          />
        </div>
        {/* Low Wide Interactive Features Section (Replacing the big white panel) */}
      </div>
    </div>
  );
}
