"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/config/theme";

const NAV = [
  {
    label: "Products",
    dropdown: [
      { label: "Billing & POS", href: "/products/billing-pos", icon: "🖥️" },
      {
        label: "Inventory",
        href: "/products/inventory-management",
        icon: "📦",
      },
      {
        label: "Online Ordering & Recon",
        href: "/products/online-ordering-reconciliation",
        icon: "📱",
      },
      {
        label: "Table & Floor Mgmt",
        href: "/products/table-floor-management",
        icon: "🪑",
      },
      {
        label: "Menu Management",
        href: "/products/menu-management",
        icon: "📋",
      },
      { label: "Reporting", href: "/products/reports", icon: "📊" },
      {
        label: "KOT / Kitchen Display",
        href: "/products/kot-kitchen-display",
        icon: "🍳",
      },
      { label: "Platform & Security", href: "/products/platform", icon: "🛡️" },
    ],
  },
  {
    label: "Outlet Types",
    dropdown: [
      {
        label: "Restaurant (Fine Dine / QSR)",
        href: "/outlets/restaurant",
        icon: "🍽️",
      },
      { label: "Café", href: "/outlets/cafe", icon: "☕" },
      { label: "Cloud Kitchen", href: "/outlets/cloud-kitchen", icon: "🛵" },
      { label: "Bar & Lounge (soon)", href: "/outlets/bar-lounge", icon: "🍻" },
      {
        label: "Retail & Grocery (soon)",
        href: "/outlets/retail-grocery",
        icon: "🛒",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    dropdown: [
      { label: "Blog", href: "/blog", icon: "📝" },
      { label: "Help Center", href: "/help-center", icon: "❓" },
      { label: "Free Tools (soon)", href: "/free-tools", icon: "🛠️" },
    ],
  },
  {
    label: "Company",
    dropdown: [
      { label: "About Us", href: "/about-us", icon: "🏢" },
      { label: "Careers", href: "/careers", icon: "🚀" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdown(openDropdown === label ? null : label);
  };

  const closeMenu = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          backgroundColor: scrolled
            ? theme.colors.glassLight
            : theme.colors.bgSurface,
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? theme.shadows.sm : "none",
          borderBottom: scrolled
            ? `1px solid ${theme.colors.borderLight}`
            : "1px solid transparent",
          transition: "all 0.7s ease",
          fontFamily: theme.fonts.body,
        }}
      >
        <div
          className="pp-wrap"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "72px",
            padding: theme.spacing.containerPadding,
          }}
          ref={navRef}
        >
          <Link
            href="/"
            onClick={closeMenu}
            style={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              textDecoration: "none",
            }}
          >
            <Image
              src="/logo-full.png"
              alt="BillBite Logo"
              width={80}
              height={45}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>

          <div
            className="pp-desktop-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              height: "100%",
            }}
          >
            {NAV.map((item) => (
              <div
                key={item.label}
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {item.dropdown ? (
                  <>
                    <button
                      onClick={(e) => toggleDropdown(item.label, e)}
                      style={{
                        background: "none",
                        border: "none",
                        color:
                          openDropdown === item.label
                            ? theme.colors.accent
                            : theme.colors.textDark,
                        fontFamily: theme.fonts.body,
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                        cursor: "pointer",
                        transition: "color 0.2s",
                        padding: 0,
                      }}
                    >
                      {item.label}
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        style={{
                          transform:
                            openDropdown === item.label
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    {openDropdown === item.label && (
                      <div
                        style={{
                          position: "absolute",
                          top: "100%",
                          left:
                            item.label === "Products" ||
                            item.label === "Outlet Types"
                              ? "-100%"
                              : "50%",
                          transform:
                            item.label === "Products" ||
                            item.label === "Outlet Types"
                              ? "translateY(0)"
                              : "translateX(-50%) translateY(0)",
                          background: theme.colors.bgSurface,
                          borderRadius: theme.radii.card,
                          boxShadow: theme.shadows.lg,
                          width:
                            item.label === "Products" ||
                            item.label === "Outlet Types"
                              ? "800px"
                              : "220px",
                          padding:
                            item.label === "Products" ||
                            item.label === "Outlet Types"
                              ? "1.5rem"
                              : "0.75rem",
                          zIndex: 1000,
                          animation: "fadeInUp 0.2s ease",
                        }}
                      >
                        {item.label === "Products" ||
                        item.label === "Outlet Types" ? (
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns: "repeat(2, 1fr) 250px",
                              gap: "2rem",
                            }}
                          >
                            <div>
                              <h4
                                style={{
                                  color: theme.colors.accent,
                                  fontSize: "0.85rem",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.05em",
                                  marginBottom: "1rem",
                                  fontWeight: 800,
                                }}
                              >
                                {item.label}
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.25rem",
                                }}
                              >
                                {item.dropdown
                                  .slice(0, Math.ceil(item.dropdown.length / 2))
                                  .map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={closeMenu}
                                      className="desktop-dropdown-link"
                                    >
                                      <span style={{ fontSize: "1.2rem" }}>
                                        {sub.icon}
                                      </span>
                                      <span>{sub.label}</span>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                            <div>
                              <h4
                                style={{
                                  color: "transparent",
                                  fontSize: "0.85rem",
                                  marginBottom: "1rem",
                                }}
                              >
                                &nbsp;
                              </h4>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "0.25rem",
                                }}
                              >
                                {item.dropdown
                                  .slice(Math.ceil(item.dropdown.length / 2))
                                  .map((sub) => (
                                    <Link
                                      key={sub.label}
                                      href={sub.href}
                                      onClick={closeMenu}
                                      className="desktop-dropdown-link"
                                    >
                                      <span style={{ fontSize: "1.2rem" }}>
                                        {sub.icon}
                                      </span>
                                      <span>{sub.label}</span>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                            <div
                              style={{
                                background: theme.colors.secondaryLight,
                                padding: "1.5rem",
                                borderRadius: theme.radii.button,
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "flex-start",
                                border: `1px solid ${theme.colors.border}`,
                              }}
                            >
                              <h4
                                style={{
                                  fontSize: "1.1rem",
                                  fontWeight: 800,
                                  marginBottom: "0.5rem",
                                  color: theme.colors.textDark,
                                  fontFamily: theme.fonts.heading,
                                }}
                              >
                                See it in action
                              </h4>
                              <p
                                style={{
                                  fontSize: "0.85rem",
                                  color: theme.colors.textMuted,
                                  marginBottom: "1.25rem",
                                  lineHeight: 1.5,
                                  fontFamily: theme.fonts.body,
                                }}
                              >
                                Book a live demo with our experts and see how
                                BillBite transforms operations.
                              </p>
                              <Link
                                href="/#demo-form"
                                onClick={closeMenu}
                                className="btn-primary"
                                style={{
                                  width: "100%",
                                  textAlign: "center",
                                  padding: "0.6rem",
                                  fontSize: "0.9rem",
                                  borderRadius: theme.radii.button,
                                  fontFamily: theme.fonts.body,
                                }}
                              >
                                Book a Demo
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                onClick={closeMenu}
                                className="desktop-dropdown-link"
                              >
                                <span style={{ fontSize: "1.1rem" }}>
                                  {sub.icon}
                                </span>
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMenu}
                    style={{
                      color: theme.colors.textDark,
                      fontFamily: theme.fonts.body,
                      fontSize: "0.95rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/#demo-form"
              onClick={closeMenu}
              className="btn-primary desktop-cta"
              style={{
                fontSize: "0.9375rem",
                padding: "0.6rem 1.35rem",
                borderRadius: theme.radii.button,
                fontFamily: theme.fonts.body,
              }}
            >
              Book a Demo
            </Link>
            <button
              onClick={() => setMobileOpen(true)}
              className="pp-hamburger"
              style={{
                background: "none",
                border: "none",
                padding: "0.25rem",
                cursor: "pointer",
                color: theme.colors.textDark,
              }}
              aria-label="Open menu"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            backgroundColor: theme.colors.bgLight,
            overflowY: "auto",
            animation: "slideInLeft 0.25s ease",
            fontFamily: theme.fonts.body,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1.1rem 1.25rem",
              borderBottom: `1px solid ${theme.colors.border}`,
            }}
          >
            <Link
              href="/"
              onClick={closeMenu}
              style={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              <Image
                src="/logo-full.png"
                alt="BillBite Logo"
                width={120}
                height={38}
                style={{ objectFit: "contain" }}
                priority
              />
            </Link>
            <button
              onClick={closeMenu}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke={theme.colors.textDark}
                strokeWidth="2.2"
                strokeLinecap="round"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav style={{ padding: "0.75rem 1.25rem" }}>
            {NAV.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <details
                    style={{ borderBottom: `1px solid ${theme.colors.border}` }}
                  >
                    <summary
                      style={{
                        padding: "1rem 0",
                        fontWeight: 700,
                        color: theme.colors.textDark,
                        cursor: "pointer",
                        listStyle: "none",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "1.05rem",
                      }}
                    >
                      {item.label}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={theme.colors.accent}
                        strokeWidth="3"
                        strokeLinecap="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </summary>
                    <div style={{ paddingLeft: "1rem", paddingBottom: "1rem" }}>
                      {item.dropdown.map((s) => (
                        <Link
                          key={s.label}
                          href={s.href}
                          onClick={closeMenu}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            padding: "0.6rem 0",
                            color: theme.colors.textMuted,
                            fontSize: "0.95rem",
                            textDecoration: "none",
                          }}
                        >
                          <span style={{ fontSize: "1.1rem" }}>{s.icon}</span>
                          {s.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMenu}
                    style={{
                      display: "block",
                      padding: "1rem 0",
                      fontWeight: 700,
                      color: theme.colors.textDark,
                      borderBottom: `1px solid ${theme.colors.border}`,
                      fontSize: "1.05rem",
                      textDecoration: "none",
                    }}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div style={{ marginTop: "2rem" }}>
              <Link
                href="/#demo-form"
                onClick={closeMenu}
                className="btn-primary"
                style={{
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  padding: "0.875rem",
                  fontSize: "1rem",
                  borderRadius: theme.radii.button,
                  fontFamily: theme.fonts.body,
                }}
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}

      <style>{`
        @media (max-width: 992px) {
          .pp-desktop-nav, .desktop-cta { display: none !important; }
          .pp-hamburger { display: flex !important; }
        }
        @media (min-width: 993px) {
          .pp-hamburger { display: none !important; }
          .desktop-cta { display: inline-flex !important; }
        }

        .desktop-dropdown-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0.75rem;
          color: ${theme.colors.textDark};
          text-decoration: none;
          border-radius: ${theme.radii.button};
          transition: background 0.15s, color 0.15s;
          font-weight: 600;
          font-size: 0.95rem;
          font-family: ${theme.fonts.body};
        }

        .desktop-dropdown-link:hover {
          background: ${theme.colors.secondaryLight};
          color: ${theme.colors.accent};
        }

        details > summary::-webkit-details-marker {
          display: none;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px) translateX(var(--translate-x, 0)); }
          to   { opacity: 1; transform: translateY(0) translateX(var(--translate-x, 0)); }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </>
  );
}
