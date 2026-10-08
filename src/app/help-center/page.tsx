"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  Search,
  BookOpen,
  CreditCard,
  MonitorSmartphone,
  ChevronRight,
  MessageCircle,
  Sparkles,
  Users,
  ArrowRight,
  Terminal,
} from "lucide-react";
import { theme } from "@/config/theme";

const HELP_DATA = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Sparkles,
    articles: [
      "Initial POS setup and hardware connection",
      "Adding your first menu items and categories",
      "Configuring local taxes and service charges",
    ],
  },
  {
    id: "hardware",
    label: "Hardware",
    icon: MonitorSmartphone,
    articles: [
      "Troubleshooting Bluetooth receipt printers",
      "Connecting and pairing a barcode scanner",
      "Resolving cash drawer sync issues",
    ],
  },
  {
    id: "billing",
    label: "Billing & Plans",
    icon: CreditCard,
    articles: [
      "Understanding your monthly subscription invoice",
      "Updating your default payment methods",
      "How to upgrade or downgrade your current plan",
    ],
  },
  {
    id: "staff",
    label: "Staff & Roles",
    icon: Users,
    articles: [
      "Creating new employee accounts securely",
      "Setting up role-based access and permissions",
      "Managing and exporting shift attendance",
    ],
  },
];

export default function HelpCenterPage() {
  const [activeTab, setActiveTab] = useState(HELP_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const activeCategory = HELP_DATA.find((c) => c.id === activeTab);

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgDark,
        padding: "8rem 0",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Dynamic Ambient Background */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "1000px",
          height: "600px",
          background: `radial-gradient(ellipse at top, ${theme.colors.accent}15 0%, transparent 70%)`,
          opacity: searchFocused ? 1 : 0.5,
          transition: "opacity 0.8s ease",
          pointerEvents: "none",
        }}
      />

      <div
        className="fade-up"
        style={{
          width: "100%",
          maxWidth: "700px" /* Minimal wide spacing */,
          padding: "0 1.5rem",
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        {/* Header & Search */}
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              marginBottom: "2rem",
            }}
          >
            <Terminal size={14} color={theme.colors.accent} />
            <span
              style={{
                color: theme.colors.textMuted,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Support Center
            </span>
          </div>

          <h1
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.textLight,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "2.5rem",
            }}
          >
            Find answers, <br />
            <span style={{ color: theme.colors.textMuted }}>instantly.</span>
          </h1>

          {/* Interactive Search Bar */}
          <div
            style={{
              position: "relative",
              width: "100%",
              transform: searchFocused ? "scale(1.02)" : "scale(1)",
              transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: searchFocused
                  ? theme.colors.accent
                  : theme.colors.textMuted,
                transition: "color 0.3s ease",
                pointerEvents: "none",
              }}
            >
              <Search size={24} strokeWidth={2.5} />
            </div>
            <input
              type="text"
              placeholder="Ask a question or search for a topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              style={{
                width: "100%",
                background: searchFocused
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.02)",
                border: "1px solid",
                borderColor: searchFocused
                  ? theme.colors.accent
                  : "rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "1.75rem 1.75rem 1.75rem 4.5rem",
                fontSize: "1.15rem",
                color: theme.colors.textLight,
                outline: "none",
                boxShadow: searchFocused
                  ? `0 20px 40px rgba(0,0,0,0.4), 0 0 0 4px ${theme.colors.accent}15`
                  : "0 10px 30px rgba(0,0,0,0.2)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            />
            {/* Shortcut hint */}
            <div
              style={{
                position: "absolute",
                right: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
                display: searchFocused ? "none" : "flex",
                alignItems: "center",
                gap: "0.25rem",
                pointerEvents: "none",
              }}
            >
              <kbd
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  color: theme.colors.textMuted,
                  fontFamily: "monospace",
                }}
              >
                ⌘
              </kbd>
              <kbd
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "0.2rem 0.5rem",
                  borderRadius: "6px",
                  fontSize: "0.75rem",
                  color: theme.colors.textMuted,
                  fontFamily: "monospace",
                }}
              >
                K
              </kbd>
            </div>
          </div>
        </div>

        {/* Dynamic Interactive Content Area */}
        <div
          style={{
            background: "rgba(255,255,255,0.01)",
            border: "1px solid rgba(255,255,255,0.04)",
            borderRadius: "32px",
            padding: "0.5rem",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Custom Segmented Control */}
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              padding: "0.5rem",
              background: "rgba(255,255,255,0.02)",
              borderRadius: "24px",
              overflowX: "auto",
              scrollbarWidth: "none",
            }}
          >
            {HELP_DATA.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  style={{
                    flex: "1 0 auto",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 1.2rem",
                    borderRadius: "100px",
                    background: isActive
                      ? "rgba(255,255,255,0.08)"
                      : "transparent",
                    border: "none",
                    color: isActive
                      ? theme.colors.textLight
                      : theme.colors.textMuted,
                    fontSize: "0.95rem",
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.color = theme.colors.textLight;
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      e.currentTarget.style.color = theme.colors.textMuted;
                  }}
                >
                  <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Articles List for Active Tab */}
          <div style={{ padding: "1.5rem" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                animation: "fadeIn 0.5s ease",
              }}
            >
              <style
                dangerouslySetInnerHTML={{
                  __html: `
                @keyframes fadeIn {
                  from { opacity: 0; transform: translateY(10px); }
                  to { opacity: 1; transform: translateY(0); }
                }
              `,
                }}
              />

              {activeCategory?.articles.map((article, idx) => (
                <Link
                  key={idx}
                  href="#"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1.25rem 1.5rem",
                    background: "transparent",
                    borderRadius: "16px",
                    textDecoration: "none",
                    color: theme.colors.textLight,
                    transition: "all 0.2s ease",
                    border: "1px solid transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.05)";
                    const icon = e.currentTarget.querySelector(
                      ".article-arrow",
                    ) as HTMLElement;
                    if (icon) icon.style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "transparent";
                    const icon = e.currentTarget.querySelector(
                      ".article-arrow",
                    ) as HTMLElement;
                    if (icon) icon.style.transform = "translateX(0)";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <BookOpen size={18} color={theme.colors.textMuted} />
                    <span style={{ fontSize: "1rem", fontWeight: 500 }}>
                      {article}
                    </span>
                  </div>
                  <div
                    className="article-arrow"
                    style={{
                      color: theme.colors.textMuted,
                      transition: "transform 0.3s ease",
                      display: "flex",
                    }}
                  >
                    <ArrowRight size={18} />
                  </div>
                </Link>
              ))}
            </div>

            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: theme.colors.accent,
                textDecoration: "none",
                fontSize: "0.95rem",
                fontWeight: 600,
                marginTop: "1.5rem",
                padding: "0 1.5rem",
              }}
            >
              View all {activeCategory?.label} articles <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Minimal Contact Block */}
        <div
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "24px",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "1rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "1.2rem",
                color: theme.colors.textLight,
                marginBottom: "0.25rem",
              }}
            >
              Still need assistance?
            </h3>
            <p style={{ color: theme.colors.textMuted, fontSize: "0.95rem" }}>
              Our expert team is available 24/7.
            </p>
          </div>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "100px",
              background: theme.colors.textLight,
              color: theme.colors.bgDark,
              border: "none",
              fontWeight: 700,
              fontSize: "0.95rem",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(255,255,255,0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <MessageCircle size={18} />
            Start Chat
          </button>
        </div>
      </div>
    </section>
  );
}
