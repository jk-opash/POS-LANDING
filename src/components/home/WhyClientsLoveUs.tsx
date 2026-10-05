import React, { useState } from "react";
import Image from "next/image";
import { theme } from "@/config/theme";

export default function WhyClientsLoveUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgDark,
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "-10%",
          width: "40vw",
          height: "40vw",
          background: `radial-gradient(circle, ${theme.colors.accent}15 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background: `radial-gradient(circle, ${theme.colors.accent}10 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div className="pp-wrap relative z-10">
        {/* Section Header */}
        <div
          className="fade-up"
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
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
                boxShadow: `0 0 10px ${theme.colors.accent}`,
              }}
            />
            Why Restaurants Choose Us
          </span>

          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.textLight,
              lineHeight: 1.1,
              maxWidth: "800px",
              margin: "0 0 1.5rem 0",
              letterSpacing: "-0.02em",
            }}
          >
            Everything you need to run smarter.
          </h2>

          <p
            style={{
              color: theme.colors.textMuted,
              maxWidth: "600px",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            From taking orders and managing KOTs to controlling inventory and
            monitoring outlets—BillBite brings your entire restaurant operations
            into one seamlessly integrated platform.
          </p>
        </div>

        {/* =========================
            BENTO FEATURE GRID
        ========================== */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "1.5rem",
          }}
        >
          {/* Card 1: POS & Billing (Wide) */}
          <div
            className="md:col-span-7 col-span-12"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: theme.colors.bgDark,
              border: `1px solid ${theme.colors.whiteAlpha.a06}`,
              borderRadius: "2rem",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredCard === 1 ? "translateY(-5px)" : "none",
              boxShadow:
                hoveredCard === 1
                  ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px ${theme.colors.whiteAlpha.a10}`
                  : "0 10px 30px -10px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ position: "relative", zIndex: 2, maxWidth: "80%" }}>
              <h3
                style={{
                  color: theme.colors.textLight,
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontFamily: theme.fonts.heading,
                }}
              >
                One POS for Every Order
              </h3>
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                  maxWidth: "90%",
                }}
              >
                Handle dine-in, takeaway and online orders from one streamlined
                billing system. Add items, variants, discounts, and split
                payments effortlessly.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {["Dine-In", "Takeaway", "QR Ordering", "Split Payment"].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.4rem 0.8rem",
                        background: theme.colors.whiteAlpha.a02,
                        border: `1px solid ${theme.colors.whiteAlpha.a06}`,
                        borderRadius: "100px",
                        fontSize: "0.75rem",
                        color: theme.colors.whiteAlpha.a60,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "-10%",
                right: "-5%",
                width: "55%",
                height: "80%",
                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  hoveredCard === 1
                    ? "scale(1.05) translate(-10px, -10px)"
                    : "scale(1)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/bento/pos_billing.jpg"
                alt="POS Billing"
                fill
                style={{
                  objectFit: "contain",
                  mixBlendMode: "lighten",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>

          {/* Card 2: Inventory (Tall) */}
          <div
            className="md:col-span-5 col-span-12"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: theme.colors.bgDark,
              border: `1px solid ${theme.colors.whiteAlpha.a06}`,
              borderRadius: "2rem",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredCard === 2 ? "translateY(-5px)" : "none",
              boxShadow:
                hoveredCard === 2
                  ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px ${theme.colors.whiteAlpha.a10}`
                  : "0 10px 30px -10px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  color: theme.colors.textLight,
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontFamily: theme.fonts.heading,
                }}
              >
                Complete Inventory Control
              </h3>
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                Know what comes in, what goes out. Track stock adjustments and
                get alerts before ingredients run low.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                flexGrow: 1,
                minHeight: "250px",
                marginTop: "2rem",
                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: hoveredCard === 2 ? "scale(1.05)" : "scale(1)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/bento/inventory.jpg"
                alt="Inventory Control"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  mixBlendMode: "lighten",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>

          {/* Card 3: Kitchen Ops (Tall) */}
          <div
            className="md:col-span-5 col-span-12"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: theme.colors.bgDark,
              border: `1px solid ${theme.colors.whiteAlpha.a06}`,
              borderRadius: "2rem",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredCard === 3 ? "translateY(-5px)" : "none",
              boxShadow:
                hoveredCard === 3
                  ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px ${theme.colors.whiteAlpha.a10}`
                  : "0 10px 30px -10px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ position: "relative", zIndex: 2 }}>
              <h3
                style={{
                  color: theme.colors.textLight,
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontFamily: theme.fonts.heading,
                }}
              >
                Smarter KOT Workflow
              </h3>
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                Send orders instantly to the kitchen. Manage active KOTs and
                ensure no dish gets missed or delayed.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                width: "100%",
                flexGrow: 1,
                minHeight: "250px",
                marginTop: "2rem",
                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                transform: hoveredCard === 3 ? "scale(1.05)" : "scale(1)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/bento/kitchen_ops.jpg"
                alt="Kitchen Operations"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                  mixBlendMode: "lighten",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>

          {/* Card 4: Business Mgmt (Wide) */}
          <div
            className="md:col-span-7 col-span-12"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              background: theme.colors.bgDark,
              border: `1px solid ${theme.colors.whiteAlpha.a06}`,
              borderRadius: "2rem",
              padding: "3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              transform: hoveredCard === 4 ? "translateY(-5px)" : "none",
              boxShadow:
                hoveredCard === 4
                  ? `0 20px 40px -10px rgba(0,0,0,0.5), 0 0 0 1px ${theme.colors.whiteAlpha.a10}`
                  : "0 10px 30px -10px rgba(0,0,0,0.3)",
            }}
          >
            <div style={{ position: "relative", zIndex: 2, maxWidth: "70%" }}>
              <h3
                style={{
                  color: theme.colors.textLight,
                  fontSize: "2rem",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  fontFamily: theme.fonts.heading,
                }}
              >
                Total Business Visibility
              </h3>
              <p
                style={{
                  color: theme.colors.textMuted,
                  fontSize: "1rem",
                  lineHeight: 1.6,
                }}
              >
                Manage outlets, staff access, expenses, and track performance
                reports in real-time from a centralized dashboard.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1.5rem",
                }}
              >
                {["Multi-Outlet", "Staff Management", "Live Analytics"].map(
                  (tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: "0.4rem 0.8rem",
                        background: theme.colors.whiteAlpha.a02,
                        border: `1px solid ${theme.colors.whiteAlpha.a06}`,
                        borderRadius: "100px",
                        fontSize: "0.75rem",
                        color: theme.colors.whiteAlpha.a60,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                bottom: "-10%",
                right: "-5%",
                width: "55%",
                height: "80%",
                transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
                transform:
                  hoveredCard === 4
                    ? "scale(1.05) translate(-10px, -10px)"
                    : "scale(1)",
                zIndex: 1,
              }}
            >
              <Image
                src="/images/bento/business_management.jpg"
                alt="Business Management"
                fill
                style={{
                  objectFit: "contain",
                  mixBlendMode: "lighten",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
        </div>

        {/* =========================
            COMPARISON SECTION
        ========================== */}
        <div style={{ marginTop: "10rem" }}>
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <h3
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: theme.colors.textLight,
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}
            >
              The BillBite Difference
            </h3>
            <p
              style={{
                color: theme.colors.textMuted,
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Stop wrestling with disconnected systems and manual spreadsheets.
              Upgrade to a unified experience.
            </p>
          </div>

          <div
            className="fade-up"
            style={{
              background: theme.colors.bgDark,
              border: `1px solid ${theme.colors.whiteAlpha.a06}`,
              borderRadius: "2rem",
              padding: "1px", // for gradient border effect
              overflow: "hidden",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {/* Headers */}
            <div
              className="hidden md:grid"
              style={{
                gridTemplateColumns: "1fr 1fr",
                background: theme.colors.whiteAlpha.a02,
                borderBottom: `1px solid ${theme.colors.whiteAlpha.a06}`,
              }}
            >
              <div style={{ padding: "2rem" }}>
                <span
                  style={{
                    color: theme.colors.whiteAlpha.a60,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                  }}
                >
                  Traditional Operations
                </span>
              </div>
              <div
                style={{
                  padding: "2rem",
                  background: `${theme.colors.accent}05`,
                  borderLeft: `1px solid ${theme.colors.whiteAlpha.a06}`,
                }}
              >
                <span
                  style={{
                    color: theme.colors.accent,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  The BillBite Way ⚡
                </span>
              </div>
            </div>

            {/* List */}
            {[
              {
                old: "Orders, bills and payments are handled across disconnected systems.",
                new: "One POS handles dine-in, takeaway, online orders, billing and payments in one workflow.",
              },
              {
                old: "Kitchen teams depend on manual communication and can lose track of pending items.",
                new: "KOT and kitchen workflows keep order preparation organized, prioritized, and visible.",
              },
              {
                old: "Inventory changes are difficult to trace and stock discrepancies are discovered late.",
                new: "Inventory movement, adjustments and audit logs provide real-time visibility into every stock activity.",
              },
              {
                old: "Managing multiple outlets requires switching between different systems and spreadsheets.",
                new: "Manage outlets, menus, staff, operations and business performance from one centralized dashboard.",
              },
            ].map((comp, i, arr) => (
              <div
                key={i}
                className="grid grid-cols-1 md:grid-cols-2 group"
                style={{
                  borderBottom:
                    i !== arr.length - 1
                      ? `1px solid ${theme.colors.whiteAlpha.a06}`
                      : "none",
                  transition: "background 0.3s ease",
                }}
              >
                {/* Old */}
                <div
                  style={{
                    padding: "2rem",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    opacity: 0.7,
                    transition: "opacity 0.3s ease",
                  }}
                  className="group-hover:opacity-100"
                >
                  <div
                    style={{
                      color: theme.colors.semantic.error,
                      fontSize: "1.25rem",
                      marginTop: "-0.2rem",
                      flexShrink: 0,
                    }}
                  >
                    ✕
                  </div>
                  <p
                    style={{
                      color: theme.colors.textLight,
                      fontSize: "1rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {comp.old}
                  </p>
                </div>

                {/* New */}
                <div
                  style={{
                    padding: "2rem",
                    background: `${theme.colors.accent}05`,
                    borderLeft: `1px solid ${theme.colors.whiteAlpha.a06}`,
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: "-1px",
                      top: "0",
                      width: "2px",
                      height: "100%",
                      background: theme.colors.accent,
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                    }}
                    className="group-hover:opacity-100"
                  />
                  <div
                    style={{
                      color: theme.colors.accent,
                      fontSize: "1.25rem",
                      marginTop: "-0.2rem",
                      flexShrink: 0,
                    }}
                  >
                    ✓
                  </div>
                  <p
                    style={{
                      color: theme.colors.textLight,
                      fontSize: "1rem",
                      fontWeight: 500,
                      lineHeight: 1.6,
                    }}
                  >
                    {comp.new}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            FEATURE HIGHLIGHTS
        ========================== */}
        <div
          className="fade-up"
          style={{
            marginTop: "8rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[
            {
              icon: "🍽️",
              title: "Tables & QR",
              text: "Manage floor plans, table statuses, and allow guests to order via QR codes seamlessly.",
            },
            {
              icon: "📱",
              title: "Online Orders",
              text: "Integrate with delivery aggregators and keep online orders visible alongside your POS.",
            },
            {
              icon: "👥",
              title: "Staff Management",
              text: "Manage employee roles, track shifts, and monitor detailed user activity logs.",
            },
            {
              icon: "🚚",
              title: "Supplier Tracking",
              text: "Keep suppliers, purchasing operations, and inward material records highly organized.",
            },
            {
              icon: "💰",
              title: "Accounting",
              text: "Track payments, daily expenses, petty cash, and end-of-day withdrawals.",
            },
            {
              icon: "📈",
              title: "Advanced Reports",
              text: "Understand sales trends, inventory gaps, and operational performance with real-time data.",
            },
          ].map((feature, i) => (
            <div
              key={i}
              style={{
                padding: "2rem",
                borderRadius: "1.5rem",
                background: `linear-gradient(180deg, ${theme.colors.whiteAlpha.a05} 0%, transparent 100%)`,
                border: `1px solid ${theme.colors.whiteAlpha.a06}`,
                borderTop: `1px solid ${theme.colors.whiteAlpha.a10}`,
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                transition: "all 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.borderColor = theme.colors.whiteAlpha.a20;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = theme.colors.whiteAlpha.a06;
              }}
            >
              <div
                style={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "1rem",
                  background: `${theme.colors.accent}15`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {feature.icon}
              </div>
              <div>
                <h4
                  style={{
                    color: theme.colors.textLight,
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    marginBottom: "0.5rem",
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  {feature.title}
                </h4>
                <p
                  style={{
                    color: theme.colors.textMuted,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
