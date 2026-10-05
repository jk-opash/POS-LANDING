import React, { useState } from "react";
import { theme } from "@/config/theme";
import { STATS } from "@/constants/home";
import NumberTicker from "./NumberTicker";

export default function Stats() {
  return (
    <section style={{ backgroundColor: theme.colors.bgDark }}>
      <div className="pp-wrap">
        <div className="stats-grid">
          {/* Left: heading */}
          <div className="stats-cell">
            <p
              style={{
                color: theme.colors.textMuted,
                fontSize: "0.875rem",
                marginBottom: "0.5rem",
              }}
            >
              Performance at Scale
            </p>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                color: theme.colors.textLight,
                lineHeight: 1.15,
              }}
            >
              Built for Volume & Reliability
            </h2>
          </div>
          {/* Stat cells */}
          {STATS.map((s) => (
            <NumberTicker
              key={s.label}
              value={s.value}
              label={s.label}
              img={s.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
