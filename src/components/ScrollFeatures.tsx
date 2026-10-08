"use client";
import React, { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { theme } from "@/config/theme";
import { Button } from "./Button";
import { PRODUCTS } from "@/constants/products";

export default function ScrollFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = latest * PRODUCTS.length;
    const current = Math.min(Math.floor(progress), PRODUCTS.length - 1);
    setActiveIndex(Math.max(0, current));
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: `${PRODUCTS.length * 150}vh`,
        backgroundColor: theme.colors.bgLight,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 2rem",
          overflow: "hidden",
        }}
      >
        {/* Soft Background Gradients */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-20%",
              left: "-10%",
              width: "60vw",
              height: "60vw",
              background: `radial-gradient(circle, ${theme.colors.accent}15 0%, transparent 60%)`,
              filter: "blur(100px)",
            }}
          />
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            maxWidth: "1200px",
            width: "100%",
            zIndex: 1,
            alignItems: "center",
          }}
          className="scroll-features-grid"
        >
          {/* Left Side: Text Content */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              zIndex: 20,
            }}
          >
            {/* Scroll Indicators */}
            <div
              style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
            >
              {PRODUCTS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "4px",
                    flex: 1,
                    borderRadius: "2px",
                    background:
                      activeIndex === i
                        ? theme.colors.primary
                        : "rgba(0,0,0,0.08)",
                    transition: "background 0.4s ease",
                  }}
                />
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div
                  style={{
                    display: "inline-block",
                    padding: "0.5rem 1.25rem",
                    borderRadius: "100px",
                    background: "rgba(0,0,0,0.05)",
                    color: theme.colors.primary,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginBottom: "1.5rem",
                  }}
                >
                  Feature {activeIndex + 1}
                </div>
                <h2
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                    color: theme.colors.textDark,
                    lineHeight: 1.1,
                    marginBottom: "1.5rem",
                  }}
                >
                  {PRODUCTS[activeIndex].title}
                </h2>
                <p
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(0,0,0,0.6)",
                    lineHeight: 1.6,
                    marginBottom: "2rem",
                    maxWidth: "480px",
                  }}
                >
                  {PRODUCTS[activeIndex].desc}
                </p>

                {/* Detailed Sub-features Grid */}
                {(PRODUCTS[activeIndex] as any).subFeatures && (
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "1rem",
                      marginBottom: "2.5rem",
                      maxWidth: "500px",
                    }}
                  >
                    {(
                      (PRODUCTS[activeIndex] as any).subFeatures as {
                        title: string;
                        desc: string;
                      }[]
                    ).map((feat, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: "rgba(255, 255, 255, 0.4)",
                          border: "1px solid rgba(255, 255, 255, 0.8)",
                          boxShadow: "0 4px 16px rgba(0,0,0,0.02)",
                          padding: "1rem",
                          borderRadius: "16px",
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                            marginBottom: "0.25rem",
                          }}
                        >
                          <div
                            style={{
                              width: "6px",
                              height: "6px",
                              borderRadius: "50%",
                              background: theme.colors.primary,
                            }}
                          />
                          <h4
                            style={{
                              fontSize: "0.95rem",
                              fontWeight: 700,
                              color: theme.colors.textDark,
                              margin: 0,
                            }}
                          >
                            {feat.title}
                          </h4>
                        </div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            color: "rgba(0,0,0,0.6)",
                            margin: 0,
                            lineHeight: 1.4,
                            paddingLeft: "1.1rem",
                          }}
                        >
                          {feat.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <Button variant="primary" shape="pill" animated size="lg">
                  {PRODUCTS[activeIndex].btn}
                </Button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Container with 3D Flip */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "0.84 / 1.1",
              perspective: "1200px",
              zIndex: 10,
            }}
          >
            <AnimatePresence>
              <motion.div
                key={activeIndex}
                initial={{
                  opacity: 0,
                  rotateX: -90,
                  scale: 0.85,
                  filter: "blur(15px)",
                  zIndex: 0,
                }}
                animate={{
                  opacity: 1,
                  rotateX: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  zIndex: 10,
                }}
                exit={{
                  opacity: 0,
                  rotateX: 90,
                  scale: 1.1,
                  filter: "blur(15px)",
                  zIndex: 0,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1rem",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Image Card Container */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1.5rem",
                  }}
                >
                  <img
                    src={
                      typeof PRODUCTS[activeIndex].img === "string"
                        ? PRODUCTS[activeIndex].img
                        : (PRODUCTS[activeIndex].img as any).src
                    }
                    alt={PRODUCTS[activeIndex].title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            @media (max-width: 992px) {
              .scroll-features-grid {
                grid-template-columns: 1fr !important;
                gap: 3rem !important;
              }
            }
          `,
        }}
      />
    </div>
  );
}
