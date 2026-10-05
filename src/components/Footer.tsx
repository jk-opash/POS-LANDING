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
      { label: "Free Tools (soon)", href: "/free-tools" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about-us" },
      { label: "Careers", href: "/careers" },
      { label: "Pricing", href: "/pricing" },
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
        style={{ paddingTop: "6rem", paddingBottom: "3rem" }}
      >
        {/* =======================
            TOP SECTION: CTA
        ======================= */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            marginBottom: "5rem",
            backgroundColor: theme.colors.bgLight,
            padding: "5rem 2rem",
            borderRadius: "32px",
            boxShadow: theme.shadows.lg,
          }}
          className="fade-up"
        >
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.textDark,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.5rem",
            }}
          >
            Ready to upgrade <br /> your restaurant?
          </h2>
          <p
            style={{
              color: theme.colors.textMuted,
              fontSize: "1.125rem",
              maxWidth: "500px",
              marginBottom: "2.5rem",
            }}
          >
            Join the fastest-growing network of food businesses running their
            entire operation on BillBite.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              href="/demo"
              variant="primary"
              shape="pill"
              size="lg"
              className="group"
              style={{ gap: "0.5rem" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 10px 25px -5px ${theme.colors.accent}80`;
              }}
            >
              Get a Free Demo
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              shape="pill"
              size="lg"
              style={{
                background: theme.colors.blackAlpha.a05,
                borderColor: theme.colors.blackAlpha.a10,
                color: theme.colors.textDark,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = theme.colors.blackAlpha.a10;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = theme.colors.blackAlpha.a05;
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
            marginBottom: "5rem",
          }}
        />

        {/* =======================
            MIDDLE SECTION: LINKS
        ======================= */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "4rem",
            marginBottom: "5rem",
          }}
        >
          {/* Logo & Contact Info */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
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

          {/* Link Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.title}>
              <h4
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
              </h4>
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
            flexDirection: "column",
            gap: "2rem",
            borderTop: `1px solid ${theme.colors.whiteAlpha.a10}`,
            paddingTop: "2rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {/* Socials */}
            <div style={{ display: "flex", gap: "1rem" }}>
              {[
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z" />
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  icon: (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: theme.colors.whiteAlpha.a05,
                    border: `1px solid ${theme.colors.whiteAlpha.a10}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: theme.colors.whiteAlpha.a80,
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = theme.colors.accent;
                    e.currentTarget.style.color = theme.colors.textLight;
                    e.currentTarget.style.borderColor = theme.colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background =
                      theme.colors.whiteAlpha.a05;
                    e.currentTarget.style.color = theme.colors.whiteAlpha.a80;
                    e.currentTarget.style.borderColor =
                      theme.colors.whiteAlpha.a10;
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Legal Links */}
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
                    color: theme.colors.whiteAlpha.a50,
                    fontSize: "0.85rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = theme.colors.textLight)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = theme.colors.whiteAlpha.a50)
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <p
            style={{
              color: theme.colors.whiteAlpha.a50,
              fontSize: "0.85rem",
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} BillBite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
