"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Calendar,
  Printer,
  Barcode,
  Scale,
  AlertTriangle,
  Package,
  TrendingDown,
  ArrowRightCircle,
  Tag,
  CheckCircle2,
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

export default function RetailClient() {
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
              "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)",
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
                  color: "#10B981",
                  borderColor: "rgba(16, 185, 129, 0.2)",
                  background: "rgba(16, 185, 129, 0.1)",
                }}
              >
                Supermarkets, FMCG & Retail
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
              Engineered for{" "}
              <span style={{ color: "#10B981" }}>High Volume</span>
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
              Scan 100 items a minute. Track batches and expiration dates.
              Connect weighing scales directly to your terminal. A complete
              retail management system designed for speed and accuracy.
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
                  background: "#10B981",
                }}
              >
                Upgrade Your Checkout
              </Link>
              <Link
                href="#features"
                className="btn-outline-pill"
                style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}
              >
                Explore Retail Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Lightning Barcode Billing (Light) */}
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
                  color: "#10B981",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Barcode size={20} /> High-Speed Scanning
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
                Scan. Beep. Done.
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
                Supermarkets demand absolute speed at the checkout counter. Our
                architecture handles continuous barcode scanning with zero UI
                lag. The system instantly recognizes GS1 and standard UPC
                barcodes.
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
                  "Continuous scan mode: No need to click 'add item' between scans.",
                  "Hardware agnostic: Works with any USB or Bluetooth scanner.",
                  "Offline mode: Keep billing even if the internet drops.",
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
                        background: "rgba(16, 185, 129, 0.1)",
                        color: "#10B981",
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
                    paddingBottom: "1rem",
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      color: "#10B981",
                      fontWeight: 800,
                    }}
                  >
                    <Barcode size={24} /> Scanner Active
                  </div>
                  <div
                    style={{
                      background: "#F3F4F6",
                      padding: "0.5rem 1rem",
                      borderRadius: "8px",
                      fontWeight: 700,
                      color: "#374151",
                    }}
                  >
                    Cart: 4 Items
                  </div>
                </div>

                <div style={{ display: "grid", gap: "0.5rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                      background: "#F9FAFB",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "#111827" }}>
                        Oat Milk (1L)
                      </div>
                      <div
                        style={{
                          color: "#6B7280",
                          fontSize: "0.85rem",
                          fontFamily: "monospace",
                        }}
                      >
                        8901234567890
                      </div>
                    </div>
                    <div style={{ fontWeight: 800, color: "#111827" }}>
                      ₹4.50
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                      background: "#F9FAFB",
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, color: "#111827" }}>
                        Whole Wheat Bread
                      </div>
                      <div
                        style={{
                          color: "#6B7280",
                          fontSize: "0.85rem",
                          fontFamily: "monospace",
                        }}
                      >
                        8909876543210
                      </div>
                    </div>
                    <div style={{ fontWeight: 800, color: "#111827" }}>
                      ₹3.20
                    </div>
                  </div>

                  {/* Latest Scan Animation */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "1rem",
                      background: "rgba(16, 185, 129, 0.1)",
                      borderRadius: "8px",
                      border: "2px solid #10B981",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: "-100%",
                        width: "50%",
                        height: "100%",
                        background:
                          "linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)",
                        animation: "shimmer 2s infinite",
                      }}
                    />
                    <style
                      dangerouslySetInnerHTML={{
                        __html: `
                      @keyframes shimmer { 100% { left: 200%; } }
                    `,
                      }}
                    />
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ fontWeight: 800, color: "#065F46" }}>
                        Avocado (Hass)
                      </div>
                      <div
                        style={{
                          color: "#047857",
                          fontSize: "0.85rem",
                          fontFamily: "monospace",
                        }}
                      >
                        8905555555555
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#065F46",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      ₹2.00
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "1.5rem",
                    background: "#111827",
                    padding: "1.5rem",
                    borderRadius: "12px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: 700,
                      fontSize: "1.2rem",
                    }}
                  >
                    TOTAL
                  </span>
                  <span
                    style={{
                      color: "#10B981",
                      fontWeight: 800,
                      fontSize: "1.5rem",
                    }}
                  >
                    ₹9.70
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Batch & Expiry (Dark) */}
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
                <Calendar size={20} /> Expiry Tracking
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
                Never Sell Expired Goods.
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
                FMCG products require strict batch tracking. BillBite forces GRN
                (Goods Received Notes) to include batch numbers and expiry
                dates, allowing the system to automatically flag items
                approaching expiration.
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
                    <AlertTriangle size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Auto-Alerts
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Get dashboard notifications 30 days before a batch expires.
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
                    <TrendingDown size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Clearance Discounts
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Automatically apply a 50% discount to near-expiry barcodes.
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "white",
                    }}
                  >
                    Expiry Dashboard
                  </div>
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.2)",
                      color: "#FCA5A5",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                    }}
                  >
                    2 Critical Alerts
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Alert 1 */}
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "1px solid rgba(239, 68, 68, 0.3)",
                      padding: "1.25rem",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        Greek Yogurt (Vanilla)
                      </div>
                      <div style={{ color: "#FCA5A5", fontWeight: 800 }}>
                        Expires in 3 Days
                      </div>
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.9rem",
                        marginBottom: "1rem",
                      }}
                    >
                      Batch: #YOG-9921 • Stock: 42 Units
                    </div>
                    <button
                      style={{
                        background: "#EF4444",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "6px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Apply 30% Clearance Sale
                    </button>
                  </div>

                  {/* Normal Stock */}
                  <div
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      padding: "1.25rem",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          color: "white",
                          fontWeight: 700,
                          fontSize: "1.1rem",
                        }}
                      >
                        Whole Milk (1L)
                      </div>
                      <div style={{ color: "#6EE7B7", fontWeight: 700 }}>
                        Expires in 14 Days
                      </div>
                    </div>
                    <div
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        fontSize: "0.9rem",
                      }}
                    >
                      Batch: #MLK-442 • Stock: 104 Units
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Weighing Scale (Light) */}
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
                  color: "#3B82F6",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Scale size={20} /> Scale Integration
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
                Weigh Produce Directly at Checkout.
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
                Selling loose vegetables, fruits, or bulk grains? Connect any
                standard RS232 or USB weighing scale directly to the POS. The
                cashier simply selects "Tomatoes" and the weight is pulled from
                the scale automatically.
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
                    <ArrowRightCircle size={18} color="#3B82F6" /> Zero Manual
                    Entry
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Eliminate human error. The exact weight is transmitted to
                    the POS.
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
                    <Tag size={18} color="#3B82F6" /> Per-KG Pricing
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    System automatically calculates price based on the weight
                    ratio.
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
                <div style={{ textAlign: "center", marginBottom: "2rem" }}>
                  <div
                    style={{
                      width: "80px",
                      height: "80px",
                      background: "#EFF6FF",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#3B82F6",
                      margin: "0 auto 1rem",
                    }}
                  >
                    <Scale size={40} />
                  </div>
                  <div
                    style={{
                      fontSize: "0.9rem",
                      color: "#6B7280",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Reading Scale Data...
                  </div>
                  <div
                    style={{
                      fontSize: "3rem",
                      fontWeight: 800,
                      color: "#111827",
                      lineHeight: 1,
                    }}
                  >
                    1.45{" "}
                    <span style={{ fontSize: "1.5rem", color: "#9CA3AF" }}>
                      KG
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    background: "#F9FAFB",
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                      fontWeight: 700,
                      color: "#111827",
                      fontSize: "1.1rem",
                    }}
                  >
                    <span>Red Tomatoes</span>
                    <span>₹5.80</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      color: "#6B7280",
                      fontSize: "0.9rem",
                    }}
                  >
                    <span>1.45 KG @ ₹4.00/KG</span>
                    <span>Auto-Calculated</span>
                  </div>
                  <button
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                      background: "#3B82F6",
                      color: "white",
                      padding: "0.75rem",
                      border: "none",
                      borderRadius: "8px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Add to Bill
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Custom Label Printing (Dark) */}
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
                  color: "#EC4899",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Printer size={20} /> Shelf Labels & Barcodes
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
                Print Your Own Barcodes.
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
                House-packing lentils or baking your own bread? Generate custom
                SKUs within the POS and send them directly to your Zebra or TSC
                label printer to stick on your packaging.
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
                    <Tag size={20} color="#EC4899" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Shelf Edge Labels
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Print beautiful price tags to stick on the shelves for
                    customers.
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
                    <Barcode size={20} color="#EC4899" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Auto-Generated SKUs
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    If a product lacks a manufacturer barcode, we create one for
                    it.
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
                  maxWidth: "350px",
                  padding: "2rem",
                  background: "white",
                  borderRadius: "4px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                  border: "1px solid #E5E7EB",
                  position: "relative",
                }}
              >
                {/* Paper Tear Effect */}
                <div
                  style={{
                    position: "absolute",
                    top: -10,
                    left: 0,
                    right: 0,
                    height: "10px",
                    background:
                      'url(\'data:image/svg+xml;utf8,<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg"><polygon points="0,10 5,0 10,10 15,0 20,10" fill="white"/></svg>\')',
                    backgroundRepeat: "repeat-x",
                    backgroundSize: "20px 10px",
                  }}
                />

                <div
                  style={{
                    textAlign: "center",
                    border: "2px solid #111827",
                    padding: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      fontWeight: 800,
                      fontSize: "1.5rem",
                      color: "#111827",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Organic Almonds
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#374151",
                      fontWeight: 600,
                      marginBottom: "1rem",
                    }}
                  >
                    House Packed • 500G
                  </div>

                  <div
                    style={{
                      width: "100%",
                      height: "60px",
                      background:
                        "repeating-linear-gradient(90deg, #111827, #111827 3px, transparent 3px, transparent 6px, #111827 6px, #111827 8px, transparent 8px, transparent 12px)",
                      marginBottom: "0.5rem",
                    }}
                  />
                  <div
                    style={{
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                      color: "#111827",
                      letterSpacing: "2px",
                      marginBottom: "1rem",
                    }}
                  >
                    100049219381
                  </div>

                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: 900,
                      color: "#111827",
                    }}
                  >
                    ₹12.50
                  </div>
                </div>

                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                  <button
                    style={{
                      background: "#EC4899",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 2rem",
                      borderRadius: "100px",
                      fontWeight: 700,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Printer size={16} /> Print 50 Copies
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Auto-Reorder (Light) */}
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
                <Package size={20} /> Intelligent Purchasing
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
                Never Run Out of Best-Sellers.
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
                Set minimum stock thresholds for your fast-moving items. When
                Coca-Cola drops below 50 bottles, the system automatically
                drafts a Purchase Order for your distributor. Just review and
                click send.
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
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid #E5E7EB",
                    paddingBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      background: "rgba(139, 92, 246, 0.1)",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#8B5CF6",
                    }}
                  >
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#111827",
                        fontSize: "1.1rem",
                      }}
                    >
                      Low Stock Alert
                    </div>
                    <div
                      style={{
                        color: "#6B7280",
                        fontWeight: 600,
                        fontSize: "0.9rem",
                      }}
                    >
                      Threshold Reached
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid #E5E7EB",
                    borderRadius: "12px",
                    padding: "1.25rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.5rem",
                    }}
                  >
                    <span style={{ fontWeight: 700, color: "#111827" }}>
                      Coca-Cola (6-Pack)
                    </span>
                    <span style={{ color: "#EF4444", fontWeight: 800 }}>
                      8 Left
                    </span>
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#6B7280",
                      marginBottom: "1rem",
                    }}
                  >
                    Minimum Par Level: 20
                  </div>

                  <div
                    style={{
                      background: "#F5F3FF",
                      border: "1px dashed #C4B5FD",
                      padding: "1rem",
                      borderRadius: "8px",
                    }}
                  >
                    <div
                      style={{
                        color: "#5B21B6",
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Auto-Drafted PO #991
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span
                        style={{
                          color: "#7C3AED",
                          fontWeight: 600,
                          fontSize: "0.85rem",
                        }}
                      >
                        Vendor: Coke Dist. Inc
                      </span>
                      <button
                        style={{
                          background: "#8B5CF6",
                          color: "white",
                          border: "none",
                          padding: "0.4rem 1rem",
                          borderRadius: "6px",
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Review & Send
                      </button>
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
              Modernize Your Supermarket.
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              Stop losing money to expired goods and slow checkouts. Get on the
              waitlist to be the first to experience our dedicated retail
              features.
            </p>
            <Link
              href="/demo"
              className="btn-primary"
              style={{
                padding: "1.25rem 3rem",
                fontSize: "1.2rem",
                borderRadius: "100px",
                background: "#10B981",
              }}
            >
              Join Early Access
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
