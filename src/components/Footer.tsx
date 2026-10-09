"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/config/theme";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/Button";

const FOOTER_COLS = [
  {
    title: "Products",
    links: [
      { label: "Billing & POS", href: "/products/billing-pos" },
      { label: "Inventory", href: "/products/inventory-management" },
      {
        label: "Online Ordering & Recon",
        href: "/products/online-ordering-reconciliation",
      },
      { label: "Table & Floor Mgmt", href: "/products/table-floor-management" },
      { label: "Menu Management", href: "/products/menu-management" },
      { label: "Reporting", href: "/products/reports" },
      { label: "Supplier Management", href: "/products/inventory-management" },
    ],
  },
  {
    title: "Outlet Types",
    links: [
      { label: "Restaurant (Fine Dine / QSR)", href: "/outlets/restaurant" },
      { label: "Café", href: "/outlets/cafe" },
      { label: "Cloud Kitchen", href: "/outlets/cloud-kitchen" },
      { label: "Bar & Lounge (soon)", href: "/outlets/bar-lounge" },
      { label: "Retail & Grocery (soon)", href: "/outlets/retail-grocery" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help-center" },
      { label: "Free Tools", href: "/free-tools" },
      { label: "Escalation Matrix", href: "/escalation-matrix" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Pricing", href: "/pricing" },
      { label: "Features", href: "/features" },
      { label: "Solutions", href: "/solutions" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: theme.colors.bgDark,
        color: theme.colors.textLight,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top glow */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: "800px",
          height: "1px",
          background: `radial-gradient(circle, ${theme.colors.accent}80 0%, transparent 100%)`,
          boxShadow: `0 0 40px 2px ${theme.colors.accent}40`,
        }}
      />

      <div
        className="pp-wrap"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        {/* =======================
            TOP SECTION: CTA
        ======================= */}
        <div
          style={{
            position: "relative",
            width: "100%",
            background: theme.colors.bgDark,
            borderRadius: "32px",
            padding: "4rem clamp(2rem, 5vw, 5rem)",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "3rem",
            boxShadow: "0 30px 60px -15px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            marginBottom: "3rem",
          }}
          className="fade-up"
        >
          {/* Animated Glow Backdrop */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "50%",
              background: `radial-gradient(circle at 80% 50%, ${theme.colors.accent}30 0%, transparent 70%)`,
              filter: "blur(40px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              position: "relative",
              zIndex: 1,
              flex: "1 1 400px",
              textAlign: "left",
            }}
          >
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 4vw, 4rem)",
                color: theme.colors.textLight,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "1.5rem",
              }}
            >
              Ready to upgrade <br /> your restaurant?
            </h2>
            <p
              style={{
                color: theme.colors.whiteAlpha.a70,
                fontSize: "1.125rem",
                maxWidth: "450px",
                lineHeight: 1.6,
              }}
            >
              Join the fastest-growing network of food businesses running their
              entire operation seamlessly on BillBite.
            </p>
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              gap: "1rem",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <Button
              href="/demo"
              variant="primary"
              shape="pill"
              size="lg"
              className="group"
              style={{
                gap: "0.5rem",
                height: "64px",
                padding: "0 2.5rem",
                fontSize: "1.1rem",
                boxShadow: `0 10px 30px -10px ${theme.colors.accent}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${theme.colors.accent}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 10px 30px -10px ${theme.colors.accent}`;
              }}
            >
              Get a Free Demo
              <ArrowRight
                size={20}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>

            <Button
              href="/contact"
              variant="outline"
              shape="pill"
              size="lg"
              style={{
                height: "64px",
                padding: "0 2.5rem",
                fontSize: "1.1rem",
                background: "rgba(255,255,255,0.05)",
                borderColor: "rgba(255,255,255,0.1)",
                color: theme.colors.textLight,
                backdropFilter: "blur(10px)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Contact Sales
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            height: "1px",
            background: theme.colors.whiteAlpha.a10,
            marginBottom: "3rem",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            <Link href="/" style={{ display: "inline-block" }}>
              <Image
                src="/logo-full.png"
                alt="BillBite Logo"
                width={140}
                height={40}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
            <p
              style={{
                color: theme.colors.secondaryMuted,
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              The all-in-one ecosystem for modern food businesses. Built for
              speed, scaled for growth.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginTop: "1rem",
            }}
          >
            <a
              href="tel:+919876543210"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: theme.colors.whiteAlpha.a80,
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.whiteAlpha.a80)
              }
            >
              <Phone size={16} /> (+91) 98765 43210
            </a>
            <a
              href="mailto:hello@billbite.in"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: theme.colors.whiteAlpha.a80,
                fontSize: "0.9rem",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = theme.colors.accent)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = theme.colors.whiteAlpha.a80)
              }
            >
              <Mail size={16} /> hello@billbite.in
            </a>
          </div>
        </div>
        {/* =======================
            MIDDLE SECTION: LINKS
        ======================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "3rem",
            marginBottom: "5rem",
          }}
        >
          {/* Link Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h3
                style={{
                  color: theme.colors.textLight,
                  fontFamily: theme.fonts.heading,
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  marginBottom: "1.5rem",
                  letterSpacing: "0.02em",
                }}
              >
                {col.title}
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      style={{
                        color: theme.colors.secondaryMuted,
                        fontSize: "0.95rem",
                        transition: "all 0.2s ease",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = theme.colors.accent;
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color =
                          theme.colors.secondaryMuted;
                        e.currentTarget.style.transform = "translateX(0)";
                      }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* =======================
            BOTTOM SECTION: LEGAL
        ======================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            borderTop: `1px solid ${theme.colors.whiteAlpha.a10}`,
            paddingTop: "2rem",
          }}
        >
          {/* Left: Copyright & Legal */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <p
              style={{
                color: theme.colors.whiteAlpha.a60,
                fontSize: "0.875rem",
                margin: 0,
              }}
            >
              © {new Date().getFullYear()} BillBite. All rights reserved.
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                alignItems: "center",
              }}
            >
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Refunds", href: "/cancellation-refund" },
                { label: "Security", href: "/security" },
              ].map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  style={{
                    color: theme.colors.whiteAlpha.a60,
                    fontSize: "0.875rem",
                    transition: "color 0.2s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.colors.textLight)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = theme.colors.whiteAlpha.a60)
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Socials */}
          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
                href: "#",
                label: "LinkedIn",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
                href: "#",
                label: "Instagram",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                  </svg>
                ),
                href: "#",
                label: "YouTube",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
                href: "#",
                label: "X (Twitter)",
              },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.label}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  background: theme.colors.whiteAlpha.a05,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: theme.colors.whiteAlpha.a80,
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme.colors.accent;
                  e.currentTarget.style.color = theme.colors.textLight;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 4px 12px ${theme.colors.accent}60`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = theme.colors.whiteAlpha.a05;
                  e.currentTarget.style.color = theme.colors.whiteAlpha.a80;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* =======================
          FULL BLEED WORDMARK
      ======================= */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          marginTop: "4rem",
          padding: "0 2rem",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1640 380"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            maxWidth: "1640px",
            marginBottom: "-10%",
          }}
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            <linearGradient
              id="billbite-footer-wordmark"
              x1="820"
              x2="820"
              y1="0"
              y2="380"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor={theme.colors.accent} stopOpacity="0" />
              <stop offset="0.55" stopColor={theme.colors.accent} stopOpacity="0.2" />
              <stop offset="1" stopColor={theme.colors.accent} stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="75%"
            textAnchor="middle"
            fontFamily={theme.fonts.heading}
            fontWeight="800"
            fontSize="400px"
            letterSpacing="-0.04em"
            fill="url(#billbite-footer-wordmark)"
          >
            BillBite
          </text>
        </svg>
      </div>
    </footer>
  );
}
