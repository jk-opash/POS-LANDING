"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  Grid,
  UtensilsCrossed,
  Calculator,
  Megaphone,
  MonitorSmartphone,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { theme } from "@/config/theme";

const CATEGORIES = [
  { id: "all", label: "All Apps", icon: Grid },
  { id: "delivery", label: "Food Delivery", icon: UtensilsCrossed },
  { id: "accounting", label: "Accounting", icon: Calculator },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "hardware", label: "Hardware Sync", icon: MonitorSmartphone },
];

const APPS = [
  {
    id: 1,
    name: "Zomato Sync",
    desc: "Seamlessly push menus and pull orders directly from Zomato.",
    category: "delivery",
    developer: "BillBite Official",
    isFree: true,
  },
  {
    id: 2,
    name: "Swiggy Integrate",
    desc: "Automated order acceptance and inventory sync for Swiggy.",
    category: "delivery",
    developer: "BillBite Official",
    isFree: true,
  },
  {
    id: 3,
    name: "QuickBooks Online",
    desc: "Export daily sales and tax reports directly to QuickBooks.",
    category: "accounting",
    developer: "Intuit",
    isFree: false,
    price: "₹999/mo",
  },
  {
    id: 4,
    name: "Tally ERP 9 Integration",
    desc: "One-click financial data export compatible with Tally ERP.",
    category: "accounting",
    developer: "Tally Solutions",
    isFree: true,
  },
  {
    id: 5,
    name: "Mailchimp CRM",
    desc: "Sync customer data to run targeted email campaigns.",
    category: "marketing",
    developer: "Mailchimp",
    isFree: false,
    price: "From ₹499/mo",
  },
  {
    id: 6,
    name: "LoyaltyPro",
    desc: "Advanced point-based loyalty program management.",
    category: "marketing",
    developer: "BillBite Official",
    isFree: false,
    price: "₹1,499/mo",
  },
  {
    id: 7,
    name: "Epson Printer Sync",
    desc: "Advanced driver support for all EPSON receipt printers.",
    category: "hardware",
    developer: "Epson",
    isFree: true,
  },
  {
    id: 8,
    name: "TVS Scanner Pro",
    desc: "Enhanced barcode scanning capabilities for retail POS.",
    category: "hardware",
    developer: "TVS Electronics",
    isFree: true,
  },
];

export default function MarketplacePage() {
  const [showTop, setShowTop] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredApps = APPS.filter((app) => {
    const matchesCategory =
      activeCategory === "all" || app.category === activeCategory;
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    // Re-bind observer when filters change
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [activeCategory, searchQuery]);

  /* back-to-top */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgDark,
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "800px",
          height: "400px",
          background: `radial-gradient(ellipse at top, ${theme.colors.accent}15 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="pp-wrap relative z-10 fade-up"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {/* Header Section */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3rem",
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
              background: `${theme.colors.accent}10`,
              border: `1px solid ${theme.colors.accent}25`,
              padding: "0.4rem 1rem",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.05em",
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
            App Marketplace
          </span>
          <h1
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              color: theme.colors.textLight,
              lineHeight: 1.1,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Supercharge your POS
          </h1>
          <p
            style={{
              color: theme.colors.textMuted,
              fontSize: "1.1rem",
              lineHeight: 1.6,
              maxWidth: "550px",
              marginBottom: "2.5rem",
            }}
          >
            Connect BillBite with your favorite tools. From delivery aggregators
            to accounting software, seamlessly integrate everything.
          </p>

          {/* Search Bar */}
          <div
            style={{
              width: "100%",
              maxWidth: "650px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: theme.colors.textMuted,
                display: "flex",
                pointerEvents: "none",
              }}
            >
              <Search size={22} strokeWidth={2} />
            </div>
            <input
              type="text"
              placeholder="Search apps, tools, or integrations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "1.5rem 1.5rem 1.5rem 4rem",
                fontSize: "1.05rem",
                color: theme.colors.textLight,
                outline: "none",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = theme.colors.accent;
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.boxShadow = `0 20px 40px rgba(0,0,0,0.2), 0 0 0 4px ${theme.colors.accent}15`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
              }}
            />
          </div>
        </div>

        {/* Categories Pills */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            marginBottom: "4rem",
          }}
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.75rem 1.25rem",
                  borderRadius: "100px",
                  background: isActive
                    ? theme.colors.textLight
                    : "rgba(255,255,255,0.03)",
                  border: "1px solid",
                  borderColor: isActive
                    ? theme.colors.textLight
                    : "rgba(255,255,255,0.08)",
                  color: isActive ? theme.colors.bgDark : theme.colors.textMuted,
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.color = theme.colors.textLight;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.color = theme.colors.textMuted;
                  }
                }}
              >
                <Icon
                  size={18}
                  color={isActive ? theme.colors.bgDark : "currentColor"}
                />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Apps Grid */}
        <div style={{ position: "relative" }}>
          {filteredApps.length === 0 ? (
            <div
              className="fade-up"
              style={{
                background: "rgba(255,255,255,0.01)",
                border: "1px dashed rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "4rem 2rem",
                textAlign: "center",
              }}
            >
              <p style={{ color: theme.colors.textMuted, fontSize: "1.1rem" }}>
                No apps found matching your search.
              </p>
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {filteredApps.map((app) => (
                <div
                  key={app.id}
                  className="fade-up"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "24px",
                    padding: "2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    position: "relative",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = `rgba(255,255,255,0.15)`;
                    e.currentTarget.style.transform = "translateY(-4px)";
                    const arrow = e.currentTarget.querySelector(
                      ".app-arrow",
                    ) as HTMLElement;
                    if (arrow) arrow.style.transform = "translate(2px, -2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                    const arrow = e.currentTarget.querySelector(
                      ".app-arrow",
                    ) as HTMLElement;
                    if (arrow) arrow.style.transform = "translate(0, 0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "60px",
                        borderRadius: "16px",
                        background: "rgba(255,255,255,0.03)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(255,255,255,0.08)",
                        flexShrink: 0,
                      }}
                    >
                      <Zap
                        size={28}
                        color={theme.colors.accent}
                        opacity={0.8}
                      />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3
                        style={{
                          fontFamily: theme.fonts.heading,
                          fontWeight: 700,
                          fontSize: "1.25rem",
                          color: theme.colors.textLight,
                          marginBottom: "0.2rem",
                        }}
                      >
                        {app.name}
                      </h3>
                      <p
                        style={{
                          color: theme.colors.textMuted,
                          fontSize: "0.85rem",
                          fontWeight: 500,
                        }}
                      >
                        By {app.developer}
                      </p>
                    </div>
                    <div
                      className="app-arrow"
                      style={{
                        transition: "transform 0.3s ease",
                        color: theme.colors.textMuted,
                        alignSelf: "flex-start",
                      }}
                    >
                      <ArrowUpRight size={22} />
                    </div>
                  </div>

                  <p
                    style={{
                      color: theme.colors.textMuted,
                      fontSize: "0.95rem",
                      lineHeight: 1.6,
                      flexGrow: 1,
                    }}
                  >
                    {app.desc}
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "0.5rem",
                      paddingTop: "1.25rem",
                      borderTop: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        color: app.isFree
                          ? theme.colors.semantic.success
                          : theme.colors.textLight,
                        fontWeight: 700,
                        fontSize: "0.95rem",
                      }}
                    >
                      {app.isFree ? "Free" : app.price}
                    </span>

                    <button
                      style={{
                        padding: "0.5rem 1.25rem",
                        borderRadius: "100px",
                        background: "transparent",
                        color: theme.colors.textLight,
                        border: "1px solid rgba(255,255,255,0.15)",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          theme.colors.textLight;
                        e.currentTarget.style.color = theme.colors.bgDark;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                        e.currentTarget.style.color = theme.colors.textLight;
                      }}
                    >
                      Install
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
