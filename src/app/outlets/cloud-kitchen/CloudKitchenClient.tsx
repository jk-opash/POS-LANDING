"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  RefreshCw,
  Building2,
  Bike,
  MonitorOff,
  UploadCloud,
  Database,
  Store,
  Pizza,
  Salad,
  Timer,
  CheckCircle2,
  Box,
} from "lucide-react";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function CloudKitchenClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      {/* 1. Hero Section (Dark) */}
      <section
        style={{
          backgroundColor: "var(--pp-bg-dark)",
          color: "var(--pp-text-light)",
          paddingTop: "8rem",
          paddingBottom: "6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="glow-bg"
          style={{
            top: "-300px",
            left: "50%",
            transform: "translateX(-50%)",
            background:
              "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)",
          }}
        />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div
              variants={fadeUpVariant}
              style={{ marginBottom: "1.5rem" }}
            >
              <span
                className="badge-outline-white"
                style={{
                  color: "#EC4899",
                  borderColor: "rgba(236, 72, 153, 0.2)",
                  background: "rgba(236, 72, 153, 0.1)",
                }}
              >
                Cloud & Ghost Kitchens
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUpVariant}
              style={{
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 700,
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
            >
              End <span style={{ color: "#EC4899" }}>Tablet Hell</span> Forever
            </motion.h1>
            <motion.p
              variants={fadeUpVariant}
              style={{
                fontSize: "1.25rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "3rem",
                lineHeight: 1.6,
                maxWidth: "650px",
                margin: "0 auto 3rem",
              }}
            >
              Consolidate Zomato, Swiggy, and direct web orders into a single,
              high-speed dispatch screen. Manage multiple virtual brands, push
              menu updates globally, and track raw materials from one unified
              dashboard.
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              style={{
                display: "flex",
                gap: "1rem",
                justifyContent: "center",
                flexWrap: "wrap",
              }}
            >
              <Link
                href="/demo"
                className="btn-primary"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1.1rem",
                  background: "#EC4899",
                }}
              >
                Unify Your Kitchen
              </Link>
              <Link
                href="#features"
                className="btn-outline-pill"
                style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}
              >
                Explore Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Aggregator Integration (Light) */}
      <section
        id="features"
        style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}
      >
        <div className="pp-wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div
                variants={fadeUpVariant}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#EC4899",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <MonitorOff size={20} /> Unified Dispatch
              </motion.div>
              <motion.h2
                variants={fadeUpVariant}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  color: "var(--pp-text-dark)",
                  lineHeight: 1.2,
                }}
              >
                One Screen to Rule Them All.
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                style={{
                  fontSize: "1.125rem",
                  color: "var(--pp-text-muted)",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                Stop toggling between 5 different aggregator tablets just to
                accept orders. BillBite integrates directly with Zomato, Swiggy,
                and MagicPin APIs. All orders flow directly into one master
                kitchen queue, in exactly the same format.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {[
                  "Auto-accept orders to improve aggregator rankings.",
                  "Standardized KOT printing, regardless of order source.",
                  "Acknowledge and clear orders from a single screen.",
                ].map((item, i) => (
                  <motion.div
                    variants={fadeUpVariant}
                    key={i}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <div
                      style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        background: "rgba(236, 72, 153, 0.1)",
                        color: "#EC4899",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={16} />
                    </div>
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 500,
                        color: "#111827",
                      }}
                    >
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              style={{
                flex: "1 1 500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "24px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  border: "1px solid var(--pp-border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid #E5E7EB",
                    paddingBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      color: "#111827",
                    }}
                  >
                    Unified Order Queue
                  </div>
                  <div
                    style={{
                      background: "#FDF2F8",
                      color: "#BE185D",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    12 Active Orders
                  </div>
                </div>

                <div style={{ display: "grid", gap: "1rem" }}>
                  {/* Zomato Order */}
                  <div
                    style={{
                      border: "2px solid #FCA5A5",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background: "#FEF2F2",
                        padding: "0.75rem 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#DC2626" }}>
                        ZOMATO - #8492
                      </span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "#B91C1C",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Timer size={14} /> 05:22
                      </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                      <div style={{ fontWeight: 600, color: "#111827" }}>
                        2x Paneer Tikka Masala
                      </div>
                      <div style={{ fontWeight: 600, color: "#111827" }}>
                        1x Garlic Naan
                      </div>
                    </div>
                  </div>

                  {/* Swiggy Order */}
                  <div
                    style={{
                      border: "2px solid #FDBA74",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background: "#FFF7ED",
                        padding: "0.75rem 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#EA580C" }}>
                        SWIGGY - #1102
                      </span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "#C2410C",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Timer size={14} /> 12:45
                      </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                      <div style={{ fontWeight: 600, color: "#111827" }}>
                        1x Veg Biryani
                      </div>
                    </div>
                  </div>

                  {/* Direct Web Order */}
                  <div
                    style={{
                      border: "2px solid #93C5FD",
                      borderRadius: "12px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        background: "#EFF6FF",
                        padding: "0.75rem 1rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ fontWeight: 800, color: "#2563EB" }}>
                        DIRECT WEB - #004
                      </span>
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontWeight: 700,
                          color: "#1D4ED8",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Timer size={14} /> 01:10
                      </span>
                    </div>
                    <div style={{ padding: "1rem" }}>
                      <div style={{ fontWeight: 600, color: "#111827" }}>
                        1x Butter Chicken
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Multi-Brand Support (Dark) */}
      <section
        style={{
          backgroundColor: "var(--pp-bg-dark)",
          color: "var(--pp-text-light)",
          padding: "7rem 0",
        }}
      >
        <div className="pp-wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem",
              alignItems: "center",
              flexDirection: "row-reverse",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div
                variants={fadeUpVariant}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#3B82F6",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Building2 size={20} /> Virtual Brands
              </motion.div>
              <motion.h2
                variants={fadeUpVariant}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Multiple Storefronts. One Kitchen.
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                Operating "Burger Bros", "Healthy Salads", and "Midnight Pizza"
                out of the exact same physical kitchen? No problem. Route orders
                to the correct prep stations while keeping brand revenues
                completely separate in your reporting.
              </motion.p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <motion.div
                  variants={fadeUpVariant}
                  className="bento-card-dark"
                  style={{ padding: "1.5rem", borderRadius: "16px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <Store size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Brand Tagging
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Every KOT clearly labels which virtual brand the food
                    belongs to.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeUpVariant}
                  className="bento-card-dark"
                  style={{ padding: "1.5rem", borderRadius: "16px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <Database size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Consolidated P&L
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    View profit margins per brand or for the entire physical
                    kitchen.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              style={{
                flex: "1 1 500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "2.5rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <div
                    style={{
                      color: "white",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Physical Location: Kitchen 1
                  </div>
                  <div
                    style={{
                      color: "rgba(255,255,255,0.5)",
                      fontSize: "0.9rem",
                    }}
                  >
                    3 Virtual Brands Active
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Brand 1 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem",
                      background: "rgba(59, 130, 246, 0.1)",
                      border: "1px solid rgba(59, 130, 246, 0.3)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#3B82F6",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <Pizza size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        Midnight Pizza Co.
                      </div>
                      <div style={{ color: "#93C5FD", fontSize: "0.85rem" }}>
                        Zomato • Swiggy
                      </div>
                    </div>
                    <div style={{ color: "white", fontWeight: 800 }}>
                      ₹1,240 Today
                    </div>
                  </div>

                  {/* Brand 2 */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem",
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.3)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#10B981",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                      }}
                    >
                      <Salad size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        Healthy Greens
                      </div>
                      <div style={{ color: "#6EE7B7", fontSize: "0.85rem" }}>
                        Zomato • Direct
                      </div>
                    </div>
                    <div style={{ color: "white", fontWeight: 800 }}>
                      ₹890 Today
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Centralized Menu Push (Light) */}
      <section
        style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}
      >
        <div className="pp-wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div
                variants={fadeUpVariant}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#10B981",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <UploadCloud size={20} /> Centralized Menu
              </motion.div>
              <motion.h2
                variants={fadeUpVariant}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  color: "var(--pp-text-dark)",
                  lineHeight: 1.2,
                }}
              >
                Update Prices Everywhere. Instantly.
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                style={{
                  fontSize: "1.125rem",
                  color: "var(--pp-text-muted)",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                Tired of logging into multiple aggregator portals just to change
                the price of a Coke? Update your menu once in BillBite, and push
                the changes live to Zomato, Swiggy, and your own website
                simultaneously with a single click.
              </motion.p>

              <motion.div
                variants={staggerContainer}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "2rem",
                }}
              >
                <div>
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#111827",
                    }}
                  >
                    <RefreshCw size={18} color="#10B981" /> 1-Click Sync
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Push new items, descriptions, and photos to all platforms at
                    once.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#111827",
                    }}
                  >
                    <MonitorOff size={18} color="#10B981" /> Live 86ing
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Mark an item out of stock in the POS, and it vanishes from
                    Zomato instantly.
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              style={{
                flex: "1 1 500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  border: "1px solid var(--pp-border)",
                }}
              >
                <div style={{ marginBottom: "1.5rem" }}>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#6B7280",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Editing Item
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "#F3F4F6",
                      padding: "1rem",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <span
                      style={{
                        fontWeight: 800,
                        color: "#111827",
                        fontSize: "1.1rem",
                      }}
                    >
                      Coca-Cola (330ml)
                    </span>
                    <span
                      style={{
                        background: "white",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "4px",
                        fontWeight: 700,
                        border: "1px solid #D1D5DB",
                      }}
                    >
                      ₹2.50
                    </span>
                  </div>
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "1rem",
                    background: "#10B981",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: 800,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.4)",
                  }}
                >
                  <UploadCloud size={18} /> PUSH TO ALL PLATFORMS
                </button>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#10B981",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    <CheckCircle2 size={16} /> Successfully synced to Zomato
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#10B981",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    <CheckCircle2 size={16} /> Successfully synced to Swiggy
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      color: "#10B981",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                  >
                    <CheckCircle2 size={16} /> Successfully synced to Direct Web
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Dispatch & Rider Management (Dark) */}
      <section
        style={{
          backgroundColor: "var(--pp-bg-dark)",
          color: "var(--pp-text-light)",
          padding: "7rem 0",
        }}
      >
        <div className="pp-wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem",
              alignItems: "center",
              flexDirection: "row-reverse",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div
                variants={fadeUpVariant}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#F59E0B",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Bike size={20} /> Rider Dispatch
              </motion.div>
              <motion.h2
                variants={fadeUpVariant}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  lineHeight: 1.2,
                }}
              >
                Seamless Handoffs. No Waiting.
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                style={{
                  fontSize: "1.125rem",
                  color: "rgba(255,255,255,0.7)",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                Prevent a crowd of delivery riders from crowding your kitchen.
                Track prep times accurately and hit "Ready for Pickup" on the
                POS to instantly ping the assigned Zomato or Swiggy rider that
                the bag is packed.
              </motion.p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                }}
              >
                <motion.div
                  variants={fadeUpVariant}
                  className="bento-card-dark"
                  style={{ padding: "1.5rem", borderRadius: "16px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <Timer size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Prep Timers
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Keep track of aggregator SLAs to prevent late delivery
                    penalties.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeUpVariant}
                  className="bento-card-dark"
                  style={{ padding: "1.5rem", borderRadius: "16px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <Bike size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Rider Verification
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Match the order ID to the rider's phone to prevent stolen
                    food.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              style={{
                flex: "1 1 500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "2rem",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "24px",
                  backdropFilter: "blur(20px)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                    paddingBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    Dispatch Station
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {/* Order Ready */}
                  <div
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.4)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontWeight: 800,
                            color: "white",
                            fontSize: "1.2rem",
                          }}
                        >
                          ZOMATO - #8492
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "0.9rem",
                            marginTop: "0.25rem",
                          }}
                        >
                          2 Items • Bag Packed
                        </div>
                      </div>
                      <div
                        style={{
                          background: "#10B981",
                          color: "white",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "100px",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          height: "fit-content",
                        }}
                      >
                        READY
                      </div>
                    </div>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "rgba(16, 185, 129, 0.2)",
                        border: "1px solid #10B981",
                        borderRadius: "8px",
                        color: "#6EE7B7",
                        fontWeight: 700,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Bike size={16} /> Hand Over to Rider (Pin: 4921)
                    </button>
                  </div>

                  {/* Order Cooking */}
                  <div
                    style={{
                      background: "rgba(245, 158, 11, 0.1)",
                      border: "1px dashed rgba(245, 158, 11, 0.4)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontWeight: 800,
                            color: "white",
                            fontSize: "1.2rem",
                          }}
                        >
                          SWIGGY - #1102
                        </div>
                        <div
                          style={{
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "0.9rem",
                            marginTop: "0.25rem",
                          }}
                        >
                          1 Item • In Kitchen
                        </div>
                      </div>
                      <div
                        style={{
                          color: "#FCD34D",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Timer size={14} /> 08:45
                      </div>
                    </div>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "#F59E0B",
                        border: "none",
                        borderRadius: "8px",
                        color: "white",
                        fontWeight: 700,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: "pointer",
                        boxShadow: "0 4px 6px -1px rgba(245, 158, 11, 0.4)",
                      }}
                    >
                      <CheckCircle2 size={16} /> Mark as Ready (Ping Rider)
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Cross-Brand Inventory (Light) */}
      <section
        style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}
      >
        <div className="pp-wrap">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div
                variants={fadeUpVariant}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#8B5CF6",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Box size={20} /> Master Stock Tracking
              </motion.div>
              <motion.h2
                variants={fadeUpVariant}
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                  color: "var(--pp-text-dark)",
                  lineHeight: 1.2,
                }}
              >
                One Stockroom. Multiple Menus.
              </motion.h2>
              <motion.p
                variants={fadeUpVariant}
                style={{
                  fontSize: "1.125rem",
                  color: "var(--pp-text-muted)",
                  marginBottom: "2rem",
                  lineHeight: 1.7,
                }}
              >
                When you sell a chicken burger from "Burger Bros" and a chicken
                salad from "Healthy Greens", both dishes deduct raw chicken from
                the exact same physical master inventory stock automatically.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
              style={{
                flex: "1 1 500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "100%",
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "24px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  border: "1px solid var(--pp-border)",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "1.5rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#6B7280",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    Master Inventory Stock
                  </div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 800,
                      color: "#111827",
                      marginTop: "0.25rem",
                    }}
                  >
                    Raw Chicken Breast
                  </div>
                  <div
                    style={{
                      color: "#10B981",
                      fontWeight: 800,
                      fontSize: "2rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    14.5 KG{" "}
                    <span style={{ fontSize: "1rem", color: "#6B7280" }}>
                      Remaining
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "#F3F4F6",
                      borderRadius: "8px",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "#374151" }}>
                        Burger Bros (Brand 1)
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                        1x Crispy Chicken Burger sold
                      </div>
                    </div>
                    <div style={{ color: "#EF4444", fontWeight: 800 }}>
                      - 150g
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "#F3F4F6",
                      borderRadius: "8px",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "#374151" }}>
                        Healthy Greens (Brand 2)
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                        1x Grilled Chicken Salad sold
                      </div>
                    </div>
                    <div style={{ color: "#EF4444", fontWeight: 800 }}>
                      - 200g
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA (Dark) */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--pp-bg-dark)",
          textAlign: "center",
        }}
      >
        <div className="pp-wrap">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              background: "rgba(255,255,255,0.03)",
              padding: "4rem 2rem",
              borderRadius: "32px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "var(--pp-text-light)",
              }}
            >
              Scale Your Kitchen Operations.
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              Don't let aggregator tablets and messy inventory slow down your
              growth. Unify your cloud kitchen operations today.
            </p>
            <Link
              href="/demo"
              className="btn-primary"
              style={{
                padding: "1.25rem 3rem",
                fontSize: "1.2rem",
                borderRadius: "100px",
                background: "#EC4899",
              }}
            >
              Book a Free Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
