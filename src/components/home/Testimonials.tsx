import React, { useState } from "react";
import { theme } from "@/config/theme";
import { TESTIS } from "@/constants/home";

export default function Testimonials() {
  const [testiIdx, setTestiIdx] = useState(0);

  return (
    <>
      {/* ════════════════════════════════════════════════════
          7. TESTIMONIALS — "Hear from our clients"
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: theme.colors.bgDark,
          padding: "5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="pp-wrap">
          <div
            style={{ textAlign: "center", marginBottom: "4rem" }}
            className="fade-up"
          >
            <span
              className="badge-outline-white"
              style={{ marginBottom: "1.25rem" }}
            >
              SUCCESS STORIES
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: theme.colors.textLight,
                lineHeight: 1.1,
              }}
            >
              Loved by restaurants.
              <br />
              <span style={{ color: theme.colors.accent }}>
                Trusted by founders.
              </span>
            </h2>
          </div>

          <div className="fade-up grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 - Span 8 */}
            <div
              className="md:col-span-8 bento-card"
              style={{
                background: theme.colors.bgSurface,
                padding: "3rem",
                borderRadius: "2rem",
                color: theme.colors.textDark,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    color: theme.colors.accent,
                    marginBottom: "1.5rem",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    lineHeight: 1.5,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{TESTIS[0].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    color: theme.colors.textLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  {TESTIS[0].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: theme.colors.textDark,
                    }}
                  >
                    {TESTIS[0].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: theme.colors.textMuted,
                    }}
                  >
                    {TESTIS[0].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Span 4 */}
            <div
              className="md:col-span-4 bento-card"
              style={{
                background: theme.colors.accent,
                padding: "3rem",
                borderRadius: "2rem",
                color: theme.colors.textLight,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "none",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.6,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{TESTIS[1].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: theme.colors.whiteAlpha.a20,
                    color: theme.colors.textLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {TESTIS[1].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: theme.colors.textLight,
                    }}
                  >
                    {TESTIS[1].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: theme.colors.whiteAlpha.a80,
                    }}
                  >
                    {TESTIS[1].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Span 4 */}
            <div
              className="md:col-span-4 bento-card"
              style={{
                background: theme.colors.bgSurface,
                padding: "3rem",
                borderRadius: "2rem",
                color: theme.colors.textDark,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.6,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{TESTIS[3].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: theme.colors.border,
                    color: theme.colors.textDark,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {TESTIS[3].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: theme.colors.textDark,
                    }}
                  >
                    {TESTIS[3].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: theme.colors.textMuted,
                    }}
                  >
                    {TESTIS[3].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Span 8 */}
            <div
              className="md:col-span-8 bento-card"
              style={{
                background: theme.colors.bgSurface,
                padding: "3rem",
                borderRadius: "2rem",
                color: theme.colors.textDark,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="glow-bg"
                style={{ top: "-300px", right: "-300px", opacity: 0.5 }}
              ></div>
              <div
                style={{
                  marginBottom: "2rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    color: theme.colors.accent,
                    marginBottom: "1.5rem",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    lineHeight: 1.5,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{TESTIS[2].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    color: theme.colors.textLight,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  {TESTIS[2].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: theme.colors.textDark,
                    }}
                  >
                    {TESTIS[2].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: theme.colors.textMuted,
                    }}
                  >
                    {TESTIS[2].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
