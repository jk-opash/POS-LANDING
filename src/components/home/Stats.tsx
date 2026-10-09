import React, { useState, useEffect, useRef } from "react";
import { theme } from "@/config/theme";
import { STATS } from "@/constants/home";

const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9,\.]/g, "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          timer = setInterval(() => {
            start += Math.ceil(target / (duration / 50));
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 50);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "0.75rem",
        flex: "0 0 auto",
      }}
    >
      <h3
        style={{
          fontFamily: theme.fonts.heading,
          fontWeight: 800,
          fontSize: "2rem",
          color: theme.colors.textLight,
          lineHeight: 1,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        {count === 0 ? "0" : count.toLocaleString()}
        <span style={{ color: theme.colors.accent }}>{suffix}</span>
      </h3>
      <p
        style={{
          color: theme.colors.whiteAlpha.a70,
          fontSize: "0.65rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          lineHeight: 1.4,
          margin: 0,
          maxWidth: "85px",
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default function Stats() {
  return (
    <section
      style={{ backgroundColor: theme.colors.bgDark, padding: "3rem 0 3rem 0" }}
    >
      <div
        className="pp-wrap"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="stats-container"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "100px",
            padding: "1.25rem 3rem",
            display: "inline-flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "3rem",
            boxShadow: `0 20px 40px -10px rgba(0,0,0,0.5), inset 0 1px 0 0 rgba(255,255,255,0.05)`,
            backdropFilter: "blur(24px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle Glow */}
          <div
            style={{
              position: "absolute",
              top: "-50%",
              left: "-10%",
              width: "40%",
              height: "200%",
              background: `radial-gradient(circle, ${theme.colors.accent}15 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />

          {/* Left Heading */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.25rem",
              zIndex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <div
                style={{
                  width: "20px",
                  height: "2px",
                  background: theme.colors.accent,
                  borderRadius: "2px",
                }}
              />
              <span
                style={{
                  color: theme.colors.accent,
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                }}
              >
                Proven Scale
              </span>
            </div>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "1.15rem",
                color: theme.colors.textLight,
                lineHeight: 1,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Built for Volume
            </h2>
          </div>

          <div
            className="divider-main"
            style={{
              width: "1px",
              height: "35px",
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)",
              display: "block",
              zIndex: 1,
            }}
          />

          {/* Right Stats Container */}
          <div
            className="stats-row"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              zIndex: 1,
            }}
          >
            {STATS.map((s, idx) => (
              <React.Fragment key={s.label}>
                <AnimatedStat value={s.value} label={s.label} />
                {idx < STATS.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      height: "25px",
                      background:
                        "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), transparent)",
                      display: "block",
                    }}
                    className="stat-divider"
                  />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 1024px) {
          .stats-container {
            flex-direction: column !important;
            border-radius: 32px !important;
            padding: 2.5rem !important;
            gap: 2rem !important;
          }
          .divider-main {
            width: 100% !important;
            height: 1px !important;
            background: linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent) !important;
          }
          .stats-row {
            flex-wrap: wrap !important;
            justify-content: center !important;
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
