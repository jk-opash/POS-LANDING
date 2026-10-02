"use client";
import React from "react";
import Link from "next/link";
import { theme } from "@/config/theme";

const AWARDS = [
  { label: "High Performer", sub: "Mid-Market" },
  { label: "Best Support", sub: "Spring 2024" },
  { label: "Leader", sub: "Spring 2024" },
  { label: "Easiest To Do Business With", sub: "Spring 2024" },
  { label: "Users Love Us", sub: "" },
  { label: "Momentum Leader", sub: "Spring 2025" },
  { label: "Grid Leader", sub: "Small Business" },
];

const FOOTER_COLS = [
  {
    title: "Products",
    links: [
      { label: "Billing & POS", href: "/products/billing-pos" },
      { label: "Inventory", href: "/products/inventory-management" },
      { label: "Online Ordering & Recon", href: "/products/online-ordering-reconciliation" },
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
    <footer style={{ backgroundColor: theme.colors.bgDark }}>
      {/* Contact bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(255,255,255,0.07)",
          padding: "1.25rem 0",
        }}
      >
        <div
          className="pp-wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
          >
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="6" fill="#C52031" />
              <text
                x="16"
                y="22"
                textAnchor="middle"
                fill="white"
                fontSize="18"
                fontWeight="800"
                fontFamily="Poppins,sans-serif"
              >
                B
              </text>
            </svg>
            <span
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "1.2rem",
              }}
            >
              BillBite
            </span>
          </Link>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <span style={{ color: "#9EAAB4", fontSize: "0.875rem" }}>
              Connect with us:
            </span>
            <a
              href="tel:+919876543210"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.57a16 16 0 0 0 6.16 6.16l.88-.88a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              (+91) 98765 43210
            </a>
            <a
              href="mailto:hello@billbite.in"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                color: "#fff",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              hello@billbite.in
            </a>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "0.625rem" }}>
            {[
              {
                label: "LinkedIn",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
              {
                label: "Instagram",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                ),
              },
              {
                label: "YouTube",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                    <polygon
                      fill={theme.colors.bgDark}
                      points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02"
                    />
                  </svg>
                ),
              },
              {
                label: "Facebook",
                icon: (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="social-icon"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div
        className="pp-wrap"
        style={{
          padding: "3rem 2rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "2.5rem",
        }}
      >
        {FOOTER_COLS.map((col) => (
          <div key={col.title}>
            <h4
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                marginBottom: "1.25rem",
                letterSpacing: "0.03em",
              }}
            >
              {col.title}
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.07)",
          padding: "1.25rem 0",
        }}
      >
        <div
          className="pp-wrap"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.75rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#9EAAB4", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} BillBite
          </p>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
          {[
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Terms of Service", href: "/terms" },
            {
              label: "Refund & Cancellation",
              href: "/cancellation-refund",
            },
            { label: "Security", href: "/security" },
            { label: "Trust/Compliance Center", href: "/compliance" },
            { label: "Corporate Information", href: "/about-us" },
            { label: "Escalation Matrix", href: "/escalation-matrix" },
          ].map((l, i, arr) => (
            <React.Fragment key={l.label}>
              <Link
                href={l.href}
                style={{
                  color: "#9EAAB4",
                  fontSize: "0.8rem",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9EAAB4")}
              >
                {l.label}
              </Link>
              {i < arr.length - 1 && (
                <span style={{ color: "rgba(255,255,255,0.2)" }}>•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </footer>
  );
}
