import React, { useState } from "react";
import Link from "next/link";
import { theme } from "@/config/theme";


export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <>
      {/* ════════════════════════════════════════════════════
          6A. PRICING TEASER
      ════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: theme.colors.bgDark, padding: "5rem 0" }}
      >
        <div className="pp-wrap">
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <span
              className="badge-outline-white"
              style={{
                marginBottom: "1.25rem",
                display: "inline-block",
                color: theme.colors.bgSurface,
                border: `1px solid ${theme.colors.bgSurface}`,
                padding: "0.25rem 0.75rem",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              SIMPLE PRICING
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: theme.colors.textLight,
                lineHeight: 1.1,
                maxWidth: "600px",
                margin: "1.25rem auto 1rem",
              }}
            >
              Transparent Plans for Every Stage
            </h2>
            <p
              style={{
                color: theme.colors.whiteAlpha.a70,
                maxWidth: "600px",
                margin: "0 auto 2rem",
                fontSize: "1.1rem",
              }}
            >
              No hidden fees, no surprise charges. Upgrade or downgrade at any
              time as your business grows.
            </p>

            {/* Toggle */}
            <div
              style={{
                display: "inline-flex",
                background: theme.colors.whiteAlpha.a05,
                borderRadius: "2rem",
                padding: "0.25rem",
                border: `1px solid ${theme.colors.borderLight}`,
              }}
            >
              <button
                onClick={() => setBilling("monthly")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "2rem",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  background:
                    billing === "monthly" ? theme.colors.accent : "transparent",
                  color:
                    billing === "monthly"
                      ? theme.colors.textLight
                      : theme.colors.whiteAlpha.a70,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "2rem",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  background:
                    billing === "yearly" ? theme.colors.accent : "transparent",
                  color:
                    billing === "yearly"
                      ? theme.colors.textLight
                      : theme.colors.whiteAlpha.a70,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Starter */}
            <div
              className="bento-card-dark fade-up"
              style={{
                background: theme.colors.whiteAlpha.a03,
                border: `1px solid ${theme.colors.borderLight}`,
                padding: "2rem",
                borderRadius: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: theme.colors.textLight,
                }}
              >
                Starter
              </h3>
              <p
                style={{
                  color: theme.colors.whiteAlpha.a70,
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Everything you need to run one outlet without spreadsheets.
              </p>
              <div
                style={{
                  margin: "2rem 0",
                  padding: "1.5rem 0",
                  borderTop: `1px solid ${theme.colors.borderLight}`,
                  borderBottom: `1px solid ${theme.colors.borderLight}`,
                }}
              >
                <p
                  style={{
                    color: theme.colors.textLight,
                    fontSize: "2.5rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                  }}
                >
                  {billing === "yearly" ? "₹999" : "₹1,249"}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: theme.colors.whiteAlpha.a60,
                      fontWeight: 400,
                    }}
                  >
                    /month
                  </span>
                </p>
                <p
                  style={{
                    color: theme.colors.secondaryMuted,
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                  GST
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Core Billing & POS
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Offline Support
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Standard Reports
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Email Support
                </li>
              </ul>
              <Link
                href="/#demo-form"
                className="btn-outline-pill"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: theme.colors.textLight,
                  borderColor: theme.colors.borderLight,
                }}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Growth */}
            <div
              className="bento-card fade-up"
              style={{
                background: theme.colors.whiteAlpha.a05,
                border: `2px solid ${theme.colors.accent}`,
                position: "relative",
                padding: "2rem",
                borderRadius: "2rem",
                overflow: "visible",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: theme.colors.accent,
                  color: theme.colors.textLight,
                  padding: "0.25rem 1rem",
                  borderRadius: "1rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                MOST POPULAR
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: theme.colors.textLight,
                }}
              >
                Growth
              </h3>
              <p
                style={{
                  color: theme.colors.whiteAlpha.a70,
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Add outlets, inventory, and aggregator orders without adding
                chaos.
              </p>
              <div
                style={{
                  margin: "2rem 0",
                  padding: "1.5rem 0",
                  borderTop: `1px solid ${theme.colors.borderLight}`,
                  borderBottom: `1px solid ${theme.colors.borderLight}`,
                }}
              >
                <p
                  style={{
                    color: theme.colors.textLight,
                    fontSize: "2.5rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                  }}
                >
                  {billing === "yearly" ? "₹2,499" : "₹3,124"}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: theme.colors.whiteAlpha.a60,
                      fontWeight: 400,
                    }}
                  >
                    /mo/outlet
                  </span>
                </p>
                <p
                  style={{
                    color: theme.colors.secondaryMuted,
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                  GST
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Everything in Starter
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Online Order Sync
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Inventory Management
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Multi-branch Dashboard
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Phone & Chat Support
                </li>
              </ul>
              <Link
                href="/#demo-form"
                className="btn-primary"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: theme.colors.textLight,
                  boxShadow: theme.shadows.lg,
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div
              className="bento-card-dark fade-up"
              style={{
                background: theme.colors.whiteAlpha.a03,
                border: `1px solid ${theme.colors.borderLight}`,
                padding: "2rem",
                borderRadius: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: theme.colors.textLight,
                }}
              >
                Professional
              </h3>
              <p
                style={{
                  color: theme.colors.whiteAlpha.a70,
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Full visibility into every branch, every platform, every rupee.
              </p>
              <div
                style={{
                  margin: "2rem 0",
                  padding: "1.5rem 0",
                  borderTop: `1px solid ${theme.colors.borderLight}`,
                  borderBottom: `1px solid ${theme.colors.borderLight}`,
                }}
              >
                <p
                  style={{
                    color: theme.colors.textLight,
                    fontSize: "2.5rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                  }}
                >
                  {billing === "yearly" ? "₹4,999" : "₹6,249"}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: theme.colors.whiteAlpha.a60,
                      fontWeight: 400,
                    }}
                  >
                    /mo/outlet
                  </span>
                </p>
                <p
                  style={{
                    color: theme.colors.secondaryMuted,
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                  GST
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Everything in Growth
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Payout Reconciliation
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Advanced Supplier Mgmt
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Custom Roles & Audit Logs
                </li>
                <li
                  style={{
                    color: theme.colors.whiteAlpha.a90,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Dedicated Account Manager
                </li>
              </ul>
              <Link
                href="/#demo-form"
                className="btn-outline-pill"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: theme.colors.textLight,
                  borderColor: theme.colors.borderLight,
                }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
