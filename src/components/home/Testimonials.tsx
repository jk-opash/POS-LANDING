import React, { useState, useEffect } from "react";
import { theme } from "@/config/theme";
import { TESTIS } from "@/constants/home";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = TESTIS.length;

  // Auto-play interval for the marquee effect
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused, total]);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % total);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + total) % total);

  // Helper to determine precise 3D positioning
  const getPositionStyle = (index: number) => {
    let diff = index - activeIndex;

    // Normalize diff to find the shortest path in our circle
    const half = Math.floor(total / 2);
    if (diff < -half) diff += total;
    if (diff > half) diff -= total;

    if (diff === 0) {
      // Center (Focus)
      return {
        transform: "translateX(0) scale(1) translateZ(0px)",
        opacity: 1,
        zIndex: 10,
        filter: "blur(0px)",
      };
    } else if (diff === 1) {
      // Right 1
      return {
        transform: "translateX(55%) scale(0.85) translateZ(-100px)",
        opacity: 0.4,
        zIndex: 5,
        filter: "blur(4px)",
      };
    } else if (diff === -1) {
      // Left 1
      return {
        transform: "translateX(-55%) scale(0.85) translateZ(-100px)",
        opacity: 0.4,
        zIndex: 5,
        filter: "blur(4px)",
      };
    } else if (diff === 2) {
      // Right 2 (Far Right)
      return {
        transform: "translateX(100%) scale(0.7) translateZ(-200px)",
        opacity: 0.15,
        zIndex: 2,
        filter: "blur(8px)",
      };
    } else if (diff === -2) {
      // Left 2 (Far Left)
      return {
        transform: "translateX(-100%) scale(0.7) translateZ(-200px)",
        opacity: 0.15,
        zIndex: 2,
        filter: "blur(8px)",
      };
    } else {
      // Back (Hidden) - tucks behind the center card smoothly
      return {
        transform: "translateX(0) scale(0.5) translateZ(-300px)",
        opacity: 0,
        zIndex: 1,
        filter: "blur(12px)",
        pointerEvents: "none",
      };
    }
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.accentLight,
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Premium Glow Background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "40vw",
          background: `radial-gradient(ellipse at center, ${theme.colors.accent}20 0%, transparent 60%)`,
          filter: "blur(100px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div
        className="pp-wrap relative z-10 fade-up"
        style={{ maxWidth: "1200px" }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "#C23A00",
              background: `${theme.colors.accent}15`,
              border: `1px solid ${theme.colors.accent}30`,
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
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
            SUCCESS STORIES
          </span>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: theme.colors.textDark,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            Loved by restaurants.
            <br />
            <span style={{ color: "#C23A00" }}>
              Trusted by founders.
            </span>
          </h2>
        </div>

        {/* 3D Focus Carousel */}
        <div
          style={{
            position: "relative",
            height: "500px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            perspective: "1200px",
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {TESTIS.map((t, idx) => {
            const style = getPositionStyle(idx);

            return (
              <div
                key={idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  position: "absolute",
                  width: "100%",
                  maxWidth: "550px",
                  transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: style.zIndex === 10 ? "default" : "pointer",
                  ...(style as React.CSSProperties),
                }}
              >
                {/* Ultra Premium Glassmorphism Card */}
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%)",
                    border: "1px solid rgba(255,255,255,0.8)",
                    borderRadius: "32px",
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow:
                      "0 30px 60px -15px rgba(255,90,31,0.15), inset 0 1px 0 rgba(255,255,255,1)",
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Quote
                    size={160}
                    color={theme.colors.accent}
                    style={{
                      position: "absolute",
                      top: "-20px",
                      right: "-20px",
                      opacity: 0.05,
                      transform: "rotate(10deg)",
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      gap: "0.25rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill={theme.colors.tertiary}
                        color={theme.colors.tertiary}
                      />
                    ))}
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.15rem, 2vw, 1.4rem)",
                      lineHeight: 1.6,
                      fontFamily: theme.fonts.heading,
                      fontWeight: 500,
                      color: theme.colors.textDark,
                      fontStyle: "italic",
                      flexGrow: 1,
                    }}
                  >
                    "{t.quote}"
                  </h3>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      borderTop: "1px solid rgba(255,90,31,0.1)",
                      paddingTop: "1.5rem",
                      marginTop: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "3rem",
                        height: "3rem",
                        borderRadius: "50%",
                        background: theme.colors.accent,
                        color: theme.colors.textLight,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontFamily: theme.fonts.heading,
                        fontWeight: 700,
                        fontSize: "1.1rem",
                        boxShadow: `0 0 15px ${theme.colors.accent}50`,
                      }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <p
                        style={{
                          color: theme.colors.textDark,
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        {t.name}
                      </p>
                      <p
                        style={{
                          color: theme.colors.textMuted,
                          fontSize: "0.9rem",
                        }}
                      >
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              border: `1px solid ${theme.colors.accent}`,
              background: "transparent",
              color: theme.colors.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.colors.accent;
              e.currentTarget.style.color = theme.colors.textLight;
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme.colors.accent;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            style={{
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
              border: `1px solid ${theme.colors.accent}`,
              background: "transparent",
              color: theme.colors.accent,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = theme.colors.accent;
              e.currentTarget.style.color = theme.colors.textLight;
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = theme.colors.accent;
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
