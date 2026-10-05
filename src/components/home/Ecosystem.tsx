import React from "react";
import { theme } from "@/config/theme";
import { ECOSYSTEM } from "@/constants/home";

export default function Ecosystem() {
  return (
    <section
      style={{
        backgroundColor: theme.colors.bgLight,
        padding: "8rem 0",
        position: "relative",
      }}
    >
      <div className="pp-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 relative">
          {/* =========================
              STICKY LEFT SIDE
          ========================== */}
          <div className="lg:col-span-5 relative">
            <div
              className="fade-up"
              style={{
                position: "sticky",
                top: "8rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <span
                style={{
                  marginBottom: "1.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: theme.colors.accent,
                  background: `${theme.colors.accent}15`,
                  border: `1px solid ${theme.colors.accent}30`,
                  padding: "0.5rem 1rem",
                  borderRadius: "100px",
                  fontSize: "0.75rem",
                  fontWeight: 800,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    display: "inline-block",
                  }}
                />
                The BillBite Ecosystem
              </span>

              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                  color: theme.colors.textDark,
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Connect every dot of your empire.
              </h2>

              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1.125rem",
                  lineHeight: 1.7,
                  maxWidth: "480px",
                }}
              >
                From managing multiple branches to keeping an eye on every stock
                movement and staff action. Our integrated ecosystem gives you
                unparalleled control over the back-office.
              </p>

              {/* Architecture/Data Flow Visual */}
              <div
                className="hidden lg:flex"
                style={{
                  marginTop: "3rem",
                  width: "100%",
                  flexDirection: "column",
                  gap: "1.5rem",
                  padding: "2rem",
                  background: theme.colors.bgSurface,
                  borderRadius: "1.5rem",
                  border: `1px solid ${theme.colors.border}`,
                  boxShadow: theme.shadows.sm,
                }}
              >
                <h4
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: theme.colors.textDark,
                  }}
                >
                  How the Ecosystem Connects
                </h4>

                <div
                  style={{ display: "flex", flexDirection: "column", gap: "0" }}
                >
                  {/* Step 1 */}
                  <div style={{ display: "flex", gap: "1.25rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: theme.colors.accent,
                        }}
                      />
                      <div
                        style={{
                          width: "2px",
                          height: "40px",
                          background: `linear-gradient(to bottom, ${theme.colors.accent}, ${theme.colors.accent}40)`,
                        }}
                      />
                    </div>
                    <div style={{ paddingBottom: "1.5rem", marginTop: "-4px" }}>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        Front-of-House
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: theme.colors.textMuted,
                          marginTop: "0.25rem",
                        }}
                      >
                        Orders are punched and bills are generated.
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div style={{ display: "flex", gap: "1.25rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: `${theme.colors.accent}80`,
                        }}
                      />
                      <div
                        style={{
                          width: "2px",
                          height: "40px",
                          background: `linear-gradient(to bottom, ${theme.colors.accent}40, ${theme.colors.accent}15)`,
                        }}
                      />
                    </div>
                    <div style={{ paddingBottom: "1.5rem", marginTop: "-4px" }}>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        Automated Sync
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: theme.colors.textMuted,
                          marginTop: "0.25rem",
                        }}
                      >
                        Inventory drops instantly & roles are verified.
                      </div>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div style={{ display: "flex", gap: "1.25rem" }}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "50%",
                          background: theme.colors.bgSurface,
                          border: `3px solid ${theme.colors.accent}`,
                        }}
                      />
                    </div>
                    <div style={{ marginTop: "-4px" }}>
                      <div
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        Back-Office
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: theme.colors.textMuted,
                          marginTop: "0.25rem",
                        }}
                      >
                        Live analytics, branch reporting, and reconciliation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              SCROLLING RIGHT SIDE
          ========================== */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            {ECOSYSTEM.map((eco, idx) => (
              <div
                key={idx}
                className="fade-up group relative"
                style={{
                  background: theme.colors.bgSurface,
                  borderRadius: "2rem",
                  padding: "3rem",
                  border: `1px solid ${theme.colors.border}`,
                  boxShadow: "0 10px 40px -10px rgba(0,0,0,0.05)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "default",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 20px 50px -10px rgba(0,0,0,0.1)";
                  e.currentTarget.style.borderColor = `${theme.colors.accent}40`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 40px -10px rgba(0,0,0,0.05)";
                  e.currentTarget.style.borderColor = theme.colors.border;
                }}
              >
                {/* Accent Background Glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "300px",
                    height: "300px",
                    background: `radial-gradient(circle at top right, ${eco.color}, transparent 70%)`,
                    opacity: 0.5,
                    pointerEvents: "none",
                    transition: "opacity 0.4s ease",
                  }}
                  className="group-hover:opacity-100"
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      marginBottom: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "4rem",
                        height: "4rem",
                        borderRadius: "1rem",
                        background: eco.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "2rem",
                        border: `1px solid ${theme.colors.border}`,
                        boxShadow: "inset 0 2px 4px rgba(255,255,255,0.5)",
                      }}
                    >
                      {eco.icon}
                    </div>
                    <h3
                      style={{
                        fontFamily: theme.fonts.heading,
                        fontWeight: 700,
                        fontSize: "1.5rem",
                        color: theme.colors.textDark,
                      }}
                    >
                      {eco.name}
                    </h3>
                  </div>

                  <p
                    style={{
                      color: theme.colors.textMuted,
                      fontSize: "1.05rem",
                      lineHeight: 1.6,
                      marginBottom: "2.5rem",
                      maxWidth: "90%",
                    }}
                  >
                    {eco.desc}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "1.25rem",
                    }}
                  >
                    {eco.features.map((f, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                        }}
                      >
                        <div
                          style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: `${theme.colors.accent}15`,
                            color: theme.colors.accent,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "0.8rem",
                            fontWeight: 800,
                            flexShrink: 0,
                          }}
                        >
                          ✓
                        </div>
                        <span
                          style={{
                            color: theme.colors.textDark,
                            fontSize: "0.95rem",
                            fontWeight: 500,
                          }}
                        >
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom decorative line on hover */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    height: "4px",
                    background: theme.colors.accent,
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  className="group-hover:scale-x-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
