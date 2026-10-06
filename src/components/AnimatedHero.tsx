"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { IMAGES } from "../assets";
import { theme } from "../config/theme";
import { Button } from "./Button";
import { Tabs } from "./Tabs";
import { PRODUCTS } from "../constants/products";

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Stage 1 (0 to 0.3): Initial Hero text fades out and slides up
  const text1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.15, 0.25], [0, 0, -50]);

  // Dashboard image shrinks and slides down
  const dashboardScale = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);
  const dashboardY = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6],
    [0, 50, 200, 800],
  );

  // Stage 2 (0.3 to 0.6): Second Hero text fades in
  const text2Opacity = useTransform(
    smoothProgress,
    [0.3, 0.4, 0.9, 1],
    [0, 1, 1, 1],
  );
  const text2Y = useTransform(smoothProgress, [0.3, 0.4], [50, 0]);

  // Stage 3 (0.5 to 0.8): White panel slides up from bottom
  const panelY = useTransform(smoothProgress, [0.5, 0.75], ["100%", "0%"]);

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div ref={containerRef} style={{ height: "700vh", position: "relative" }}>
      {/* Sticky container offset by Header height (64px) */}
      <div
        style={{
          position: "sticky",
          top: "75px",
          height: "calc(100vh - 75px)",
          overflow: "hidden",
          paddingRight: "1rem",
          paddingLeft: "1rem",
          paddingBottom: "1rem",
        }}
      >
        {/* Main Background Container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
            overflow: "hidden",
            position: "relative",
            backgroundColor: theme.colors.bgLight, // Fallback color
            borderStyle: "solid",
            borderColor: theme.colors.border,
            borderWidth: 3,
          }}
        >
          {/* Static Background Image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/hero_pos_bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
            }}
          />

          {/* Text Stage 1 */}
          <motion.div
            style={{
              position: "absolute",
              top: "10%",
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: text1Opacity,
              y: text1Y,
              zIndex: 10,
              padding: "0 1rem",
            }}
          >
            <h1
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                color: theme.colors.textDark,
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: 600,
              }}
            >
              Run Every Outlet Like You're Standing in All of Them.
            </h1>
          </motion.div>

          {/* Text Stage 2 */}
          <motion.div
            style={{
              position: "absolute",
              top: "12%",
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: text2Opacity,
              y: text2Y,
              zIndex: 10,
              padding: "0 1rem",
            }}
          >
            <h1
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                color: theme.colors.textDark,
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: 600,
              }}
            >
              Multi-branch POS, GST-ready billing, and complete stock audit.
            </h1>
          </motion.div>

          {/* Dashboard Mockup Image */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "-2.5%",
              left: "50%",
              width: "900px",
              height: "auto",
              marginLeft: "-450px",
              padding: "0.5rem",
              zIndex: 5,
              overflow: "hidden",
              scale: dashboardScale,
              y: dashboardY,
            }}
          >
            <img
              src={IMAGES.heroBg}
              alt="BillBite Dashboard"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: theme.radii.card,
              }}
            />
          </motion.div>

          {/* Sliding White Panel (Split Layout) */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "65%",
              background: theme.colors.bgSurface,
              zIndex: 20,
              y: panelY,
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
              boxShadow: theme.shadows.lg,
              display: "flex",
              padding: "3rem",
            }}
          >
            {/* Split Content Area */}
            <div style={{ flex: 1, display: "flex", gap: "4rem" }}>
              {/* Left Side: Tabs & Content */}
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <Tabs
                  items={PRODUCTS.map((p) => ({ label: p.title }))}
                  activeIndex={activeTab}
                  onChange={setActiveTab}
                />

                <div style={{ flex: 1, position: "relative" }}>
                  <motion.h2
                    key={activeTab + "-h2"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 400,
                      fontFamily: theme.fonts.heading,
                      marginBottom: "1rem",
                    }}
                  >
                    {PRODUCTS[activeTab].title}
                  </motion.h2>
                  <motion.p
                    key={activeTab + "-p"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      fontSize: "1.05rem",
                      color: theme.colors.textMuted,
                      lineHeight: 1.6,
                      maxWidth: "450px",
                      marginBottom: "2.5rem",
                      fontFamily: theme.fonts.body,
                    }}
                  >
                    {PRODUCTS[activeTab].desc}
                  </motion.p>
                  <Button
                    key={activeTab + "-btn"}
                    animated
                    variant="primary"
                    size="lg"
                    shape="pill"
                    motionProps={{
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      transition: { delay: 0.2 },
                    }}
                  >
                    {PRODUCTS[activeTab].btn}
                  </Button>
                </div>
              </div>

              {/* Right Side: Visual Context */}
              <div
                className="justify-center items-center flex flex-col relative"
                style={{
                  flex: 1,
                  position: "relative",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  background: theme.colors.bgLight,
                }}
              >
                <div
                  className="w-full h-full "
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/feature_cafe_bg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Floating UI specific to tab (Using real images) */}
                <motion.div
                  className="relative"
                  key={activeTab + "-img"}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    transform: "translate(-50%, -50%)",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    height: "320px",
                  }}
                >
                  <img
                    src={
                      typeof PRODUCTS[activeTab].img === "string"
                        ? PRODUCTS[activeTab].img
                        : (PRODUCTS[activeTab].img as { src: string }).src
                    }
                    alt={PRODUCTS[activeTab].title}
                    style={{ width: "auto", height: "100%", display: "block" }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
