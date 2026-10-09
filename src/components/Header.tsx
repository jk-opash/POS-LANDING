"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/config/theme";

import {
  Monitor,
  Package,
  Smartphone,
  Grid,
  ClipboardList,
  BarChart3,
  ChefHat,
  ShieldCheck,
  Store,
  Cable,
  Utensils,
  IceCream,
  UtensilsCrossed,
  Croissant,
  Coffee,
  Beer,
  Pizza,
  Cloud,
  Building,
  BookOpen,
  CircleHelp,
} from "lucide-react";

const NAV = [
  {
    label: "POSS",
    dropdown: [
      {
        label: "Billing & POS",
        href: "/products/billing-pos",
        icon: <Monitor size={18} strokeWidth={2} />,
        desc: "Fast & reliable billing",
      },
      {
        label: "Inventory",
        href: "/products/inventory-management",
        icon: <Package size={18} strokeWidth={2} />,
        desc: "Track stock & ingredients",
      },
      {
        label: "Online Ordering & Recon",
        href: "/products/online-ordering-reconciliation",
        icon: <Smartphone size={18} strokeWidth={2} />,
        desc: "Manage Swiggy & Zomato",
      },
      {
        label: "Table & Floor Mgmt",
        href: "/products/table-floor-management",
        icon: <Grid size={18} strokeWidth={2} />,
        desc: "Visual floor plans",
      },
      {
        label: "Menu Management",
        href: "/products/menu-management",
        icon: <ClipboardList size={18} strokeWidth={2} />,
        desc: "Centralized menu control",
      },
      {
        label: "Reporting",
        href: "/products/reports",
        icon: <BarChart3 size={18} strokeWidth={2} />,
        desc: "Real-time analytics",
      },
      {
        label: "KOT / Kitchen Display",
        href: "/products/kot-kitchen-display",
        icon: <ChefHat size={18} strokeWidth={2} />,
        desc: "Streamline kitchen ops",
      },
      {
        label: "Platform & Security",
        href: "/products/platform",
        icon: <ShieldCheck size={18} strokeWidth={2} />,
        desc: "Secure role-based access",
      },
    ],
  },
  {
    label: "Add ons",
    dropdown: [
      {
        label: "Marketplace",
        href: "/add-ons/marketplace",
        icon: <Store size={18} strokeWidth={2} />,
        desc: "Explore third-party integrations",
      },
      {
        label: "Integration",
        href: "/add-ons/integration",
        icon: <Cable size={18} strokeWidth={2} />,
        desc: "Connect your favourite tools",
      },
    ],
  },
  {
    label: "Outlet types",
    dropdown: [
      {
        label: "Fine dine",
        href: "/outlets/restaurant",
        icon: <Utensils size={18} strokeWidth={2} />,
        desc: "Table-side service",
      },
      {
        label: "Ice cream & desserts",
        href: "/outlets/dessert",
        icon: <IceCream size={18} strokeWidth={2} />,
        desc: "Quick sweet treats",
      },
      {
        label: "QSR",
        href: "/outlets/qsr",
        icon: <UtensilsCrossed size={18} strokeWidth={2} />,
        desc: "Fast-paced counters",
      },
      {
        label: "Bakery",
        href: "/outlets/bakery",
        icon: <Croissant size={18} strokeWidth={2} />,
        desc: "Fresh baked goods",
      },
      {
        label: "Cafe",
        href: "/outlets/cafe",
        icon: <Coffee size={18} strokeWidth={2} />,
        desc: "Coffee & snacks",
      },
      {
        label: "Bar & brewery",
        href: "/outlets/bar-lounge",
        icon: <Beer size={18} strokeWidth={2} />,
        desc: "Drinks & nightlife",
      },
      {
        label: "Food court",
        href: "/outlets/food-court",
        icon: <Store size={18} strokeWidth={2} />,
        desc: "Shared seating",
      },
      {
        label: "Pizzeria",
        href: "/outlets/pizzeria",
        icon: <Pizza size={18} strokeWidth={2} />,
        desc: "Pizza & slices",
      },
      {
        label: "Cloud kitchen",
        href: "/outlets/cloud-kitchen",
        icon: <Cloud size={18} strokeWidth={2} />,
        desc: "Delivery-only",
      },
      {
        label: "Large chain",
        href: "/outlets/chain",
        icon: <Building size={18} strokeWidth={2} />,
        desc: "Multi-outlet brands",
      },
    ],
  },
  { label: "Pricing", href: "/pricing" },
  {
    label: "Resources",
    dropdown: [
      {
        label: "Blog",
        href: "/blog",
        icon: <BookOpen size={18} strokeWidth={2} />,
        desc: "Articles & guides",
      },
      {
        label: "Help Center",
        href: "/help-center",
        icon: <CircleHelp size={18} strokeWidth={2} />,
        desc: "Support & FAQs",
      },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Using pure CSS for desktop hover states to match LottieFiles premium UI,
  // but we keep track of which dropdown is tapped on mobile/touch devices.
  const [activeTouchDropdown, setActiveTouchDropdown] = useState<string | null>(
    null,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleTouchDropdown = (label: string, e: React.MouseEvent) => {
    // Only intercept for touch behavior
    if (window.matchMedia("(hover: none)").matches) {
      e.preventDefault();
      setActiveTouchDropdown(activeTouchDropdown === label ? null : label);
    }
  };

  const closeMenu = () => {
    setActiveTouchDropdown(null);
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
              gap: "0.5rem", // Lottiefiles has less gap, items have padding
              height: "100%",
            }}
          >
            {NAV.map((item) => (
              <div
                key={item.label}
                className={item.dropdown ? "navbar__list" : ""}
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
                      className="navbar__link"
                      onClick={(e) => handleTouchDropdown(item.label, e)}
                    >
                      {item.label}
                      <svg
                        className="tringle-icon"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>

                    <div
                      className={`navbar__submenu_div ${activeTouchDropdown === item.label ? "active-touch" : ""}`}
                      style={{
                        width:
                          item.label === "POSS"
                            ? "750px"
                            : item.label === "Outlet types"
                              ? "550px"
                              : "250px",
                      }}
                    >
                      {/* Invisible bridge to prevent hover loss */}
                      <div className="navbar__submenu-bridge" />

                      {/* Respective Title */}
                      <div
                        style={{
                          padding: "1rem",
                          borderBottom: "1px solid rgba(0,0,0,0.05)",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "#6b7280",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {item.label === "POSS"
                            ? "Products & Features"
                            : item.label}
                        </span>
                      </div>

                      {item.label === "POSS" ? (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: "1.5rem",
                          }}
                        >
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
                                  className="navbar__sublink"
                                >
                                  <span className="sublink-icon">
                                    {sub.icon}
                                  </span>
                                  <span className="sublink-text-wrapper">
                                    <span className="sublink-text">
                                      {sub.label}
                                    </span>
                                    <span className="sublink-desc">
                                      {sub.desc}
                                    </span>
                                  </span>
                                  <svg
                                    className="right-arrow-icon"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                  </svg>
                                </Link>
                              ))}
                          </div>
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
                                  className="navbar__sublink"
                                >
                                  <span className="sublink-icon">
                                    {sub.icon}
                                  </span>
                                  <span className="sublink-text-wrapper">
                                    <span className="sublink-text">
                                      {sub.label}
                                    </span>
                                    <span className="sublink-desc">
                                      {sub.desc}
                                    </span>
                                  </span>
                                  <svg
                                    className="right-arrow-icon"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                  </svg>
                                </Link>
                              ))}
                          </div>
                        </div>
                      ) : item.label === "Outlet types" ? (
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            // gap: "1.5rem",
                          }}
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={closeMenu}
                              className="navbar__sublink"
                            >
                              <span className="sublink-icon">{sub.icon}</span>
                              <span className="sublink-text-wrapper">
                                <span className="sublink-text">
                                  {sub.label}
                                </span>
                                <span className="sublink-desc">{sub.desc}</span>
                              </span>
                              <svg
                                className="right-arrow-icon"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            // gap: "0.25rem",
                          }}
                        >
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={closeMenu}
                              className="navbar__sublink"
                            >
                              <span className="sublink-icon">{sub.icon}</span>
                              <span className="sublink-text-wrapper">
                                <span className="sublink-text">
                                  {sub.label}
                                </span>
                                <span className="sublink-desc">{sub.desc}</span>
                              </span>
                              <svg
                                className="right-arrow-icon"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                              </svg>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={closeMenu}
                    className="navbar__link"
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
              aria-label="Close menu"
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

        /* Lottiefiles Premium Header Styles */
        .navbar__link {
          background: none;
          border: none;
          color: #374151; /* Dark grey */
          font-family: ${theme.fonts.body};
          font-size: 0.95rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          cursor: pointer;
          transition: all 0.2s;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          text-decoration: none;
        }

        .navbar__list:hover .navbar__link,
        .navbar__link:hover {
          color: #000000;
          background: #f3f4f6; /* Very light subtle grey on hover like Lottiefiles */
        }

        .tringle-icon {
          transition: transform 0.2s ease;
          color: #6b7280;
        }

        .navbar__list:hover .tringle-icon {
          transform: rotate(180deg);
          color: #000000;
        }

        .navbar__submenu_div {
          position: absolute;
          top: 100%;
          left: -1rem; /* Adjust slightly left so padding aligns with text */
          transform: translateY(15px);
          background: #ffffff;
          border-radius: 16px; /* Smooth rounded corners */
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05); /* Premium shadow + subtle border */
          z-index: 1000;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Touch activation class */
        .navbar__submenu_div.active-touch {
          opacity: 1;
          visibility: visible;
          transform: translateY(5px);
        }

        /* Desktop pure CSS hover */
        @media (hover: hover) {
          .navbar__list:hover .navbar__submenu_div {
            opacity: 1;
            visibility: visible;
            transform: translateY(5px);
          }
        }

        .navbar__submenu-bridge {
          position: absolute;
          top: -20px;
          left: 0;
          width: 100%;
          height: 20px;
          background: transparent;
        }

        .navbar__sublink {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 0.85rem 1rem;
          color: #374151;
          text-decoration: none;
          border-radius: 12px;
          transition: all 0.2s ease;
          font-weight: 500;
          font-size: 0.95rem;
          font-family: ${theme.fonts.body};
          position: relative;
        }

        .sublink-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f9fafb; /* Light subtle grey bg for icons */
          color: #4b5563; /* Icon color */
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        
        .navbar__sublink:hover .sublink-icon {
          background: #ffffff; /* Pop out on hover */
          color: ${theme.colors.accent};
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
        }
        
        .sublink-text-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
        }

        .sublink-text {
          font-weight: 600;
          color: #111827;
          font-size: 0.95rem;
        }

        .sublink-desc {
          font-size: 0.8rem;
          color: #6b7280;
          font-weight: 400;
          line-height: 1.3;
        }

        .navbar__sublink:hover {
          background-color: #f3f4f6; /* Lottiefiles hover grey */
        }

        .right-arrow-icon {
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateX(-10px);
          color: #9ca3af;
          align-self: center;
          margin-left: auto;
        }

        .navbar__sublink:hover .right-arrow-icon {
          opacity: 1;
          visibility: visible;
          transform: translateX(0);
          color: #111827;
        }

        details > summary::-webkit-details-marker {
          display: none;
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100%); opacity: 0; }
          to   { transform: translateX(0);     opacity: 1; }
        }
      `}</style>
    </>
  );
}
