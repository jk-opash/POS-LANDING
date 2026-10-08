"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  Smartphone,
  Users,
  Receipt,
  ChefHat,
  Clock,
  CreditCard,
  SplitSquareHorizontal,
  Bell,
  MessageSquare,
  Wine,
  Coffee,
  CalendarCheck,
  TrendingUp,
  Star,
  CheckCircle2,
  Play,
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

export default function RestaurantClient() {
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
                Fine Dine & Casual
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
              Elevate Your{" "}
              <span style={{ color: "#10B981" }}>Dining Experience</span>
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
              Deliver exceptional hospitality. From intuitive visual table
              management and tableside ordering to complex split billing and
              kitchen routing, BillBite handles the operations so you can focus
              on the guest.
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
                href="/#demo-form"
                className="btn-primary"
                style={{
                  padding: "1rem 2rem",
                  fontSize: "1.1rem",
                  background: "#10B981",
                }}
              >
                Book a Free Demo
              </Link>
              <Link
                href="#features"
                className="btn-outline-pill"
                style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}
              >
                Explore Restaurant POS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Interactive Table Management (Light) */}
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
                <Users size={20} /> Visual Floor Plan
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
                Know the Status of Every Table at a Glance.
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
                Replicate your exact restaurant layout on the POS. Color-coded
                tables show you instantly who is waiting for food, who has
                received their bill, and which tables need to be cleared.
                Maximize seating capacity and turnaround.
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
                  "Color-coded statuses (Dining, Billed, Cleaning).",
                  "Track live dining duration to prevent squatting.",
                  "Merge tables for large parties instantly.",
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
                  }}
                >
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "1.2rem",
                      color: "#111827",
                    }}
                  >
                    Main Dining Room
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#10B981",
                        }}
                      />{" "}
                      Available
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#F59E0B",
                        }}
                      />{" "}
                      Dining
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                      }}
                    >
                      <div
                        style={{
                          width: "10px",
                          height: "10px",
                          borderRadius: "50%",
                          background: "#EF4444",
                        }}
                      />{" "}
                      Billed
                    </span>
                  </div>
                </div>

                {/* Abstract Floor Plan */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                  }}
                >
                  {/* Table 1 - Available */}
                  <div
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "2px solid #10B981",
                      borderRadius: "12px",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "#065F46",
                      }}
                    >
                      T1
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#059669",
                        fontWeight: 600,
                      }}
                    >
                      4 Seats • Free
                    </div>
                  </div>

                  {/* Table 2 - Dining (Merged with T3) */}
                  <div
                    style={{
                      gridColumn: "span 2",
                      background: "rgba(245, 158, 11, 0.1)",
                      border: "2px solid #F59E0B",
                      borderRadius: "12px",
                      height: "120px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5rem",
                        flex: 1,
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 800,
                          fontSize: "1.2rem",
                          color: "#92400E",
                        }}
                      >
                        T2 + T3
                      </div>
                      <div
                        style={{
                          fontSize: "0.8rem",
                          color: "#B45309",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Users size={14} /> Party of 8
                      </div>
                      <div
                        style={{
                          background: "white",
                          padding: "0.25rem 0.5rem",
                          borderRadius: "100px",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          color: "#D97706",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.25rem",
                        }}
                      >
                        <Clock size={12} /> 45m
                      </div>
                    </div>
                  </div>

                  {/* Table 4 - Billed */}
                  <div
                    style={{
                      background: "rgba(239, 68, 68, 0.1)",
                      border: "2px dashed #EF4444",
                      borderRadius: "12px",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "#7F1D1D",
                      }}
                    >
                      T4
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#B91C1C",
                        fontWeight: 700,
                      }}
                    >
                      ₹145.50
                    </div>
                    <div
                      style={{
                        background: "#EF4444",
                        color: "white",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "4px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                      }}
                    >
                      PAYING
                    </div>
                  </div>

                  {/* Table 5 - Available */}
                  <div
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "2px solid #10B981",
                      borderRadius: "12px",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "#065F46",
                      }}
                    >
                      T5
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#059669",
                        fontWeight: 600,
                      }}
                    >
                      2 Seats • Free
                    </div>
                  </div>

                  {/* Table 6 - Reserved */}
                  <div
                    style={{
                      background: "rgba(107, 114, 128, 0.1)",
                      border: "2px solid #6B7280",
                      borderRadius: "12px",
                      height: "120px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: "1.2rem",
                        color: "#374151",
                      }}
                    >
                      T6
                    </div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "#4B5563",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.25rem",
                      }}
                    >
                      <CalendarCheck size={14} /> 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Captain App / Tableside Ordering (Dark) */}
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
                <Smartphone size={20} /> Captain App
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
                Tableside Ordering, Perfected.
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
                Equip your captains with a mobile app that acts as their digital
                notepad. Take orders right at the table, note allergies
                instantly, upsell with prompts, and fire KOTs straight to the
                kitchen without walking back to the terminal.
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
                    <MessageSquare size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Custom Modifiers
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    "Extra spicy, no onions, sauce on side" — punched instantly.
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
                    <ChefHat size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Instant Kitchen Sync
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Chefs start cooking before the captain even leaves the
                    table.
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
                  width: "300px",
                  height: "550px",
                  padding: "1.5rem",
                  background: "white",
                  border: "8px solid #1E293B",
                  borderRadius: "32px",
                  position: "relative",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                {/* iPhone Notch */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "120px",
                    height: "24px",
                    background: "#1E293B",
                    borderBottomLeftRadius: "16px",
                    borderBottomRightRadius: "16px",
                  }}
                />

                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      color: "#111827",
                      fontWeight: 800,
                      fontSize: "1.2rem",
                    }}
                  >
                    Table 12
                  </div>
                  <div
                    style={{
                      color: "#3B82F6",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    Dinesh (Capt)
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <input
                    type="text"
                    placeholder="Search menu..."
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      background: "#F3F4F6",
                      border: "none",
                      borderRadius: "12px",
                      outline: "none",
                      color: "#111827",
                      fontWeight: 600,
                    }}
                    readOnly
                  />
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    height: "260px",
                    overflow: "hidden",
                  }}
                >
                  {[
                    { name: "Truffle Risotto", price: "₹24" },
                    { name: "Wagyu Steak", price: "₹45" },
                    { name: "Caesar Salad", price: "₹12" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem",
                        border: "1px solid #E5E7EB",
                        borderRadius: "12px",
                        cursor: "pointer",
                      }}
                    >
                      <div style={{ color: "#111827", fontWeight: 700 }}>
                        {item.name}
                      </div>
                      <div style={{ color: "#374151", fontWeight: 600 }}>
                        {item.price}
                      </div>
                    </div>
                  ))}
                  {/* Modifier popup overlay effect */}
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "1rem",
                      right: "1rem",
                      transform: "translateY(-50%)",
                      background: "white",
                      padding: "1rem",
                      borderRadius: "16px",
                      boxShadow: "0 20px 25px -5px rgba(0,0,0,0.2)",
                      border: "1px solid #E5E7EB",
                    }}
                  >
                    <div
                      style={{
                        color: "#111827",
                        fontWeight: 800,
                        marginBottom: "0.5rem",
                      }}
                    >
                      Wagyu Steak Options
                    </div>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "0.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.5rem",
                          background: "#3B82F6",
                          color: "white",
                          borderRadius: "6px",
                          textAlign: "center",
                          fontSize: "0.85rem",
                          fontWeight: 700,
                        }}
                      >
                        Rare
                      </div>
                      <div
                        style={{
                          padding: "0.5rem",
                          background: "#F3F4F6",
                          color: "#374151",
                          borderRadius: "6px",
                          textAlign: "center",
                          fontSize: "0.85rem",
                          fontWeight: 600,
                        }}
                      >
                        Med Rare
                      </div>
                    </div>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "#111827",
                        color: "white",
                        borderRadius: "8px",
                        border: "none",
                        fontWeight: 700,
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    position: "absolute",
                    bottom: "1.5rem",
                    left: "1.5rem",
                    right: "1.5rem",
                  }}
                >
                  <button
                    style={{
                      width: "100%",
                      padding: "1rem",
                      background: "#3B82F6",
                      color: "white",
                      borderRadius: "12px",
                      border: "none",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      display: "flex",
                      justifyContent: "center",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <ChefHat size={20} /> FIRE TO KITCHEN
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Split Billing (Light) */}
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
                <SplitSquareHorizontal size={20} /> Split Billing
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
                "Can we split the bill?" Yes, Instantly.
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
                Large groups expect seamless payment division. With BillBite,
                you can split checks equally by the number of guests, assign
                specific items to specific seats, or even divide a single
                expensive bottle of wine 3 ways.
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
                    <UtensilsCrossed size={18} color="#8B5CF6" /> Split by Item
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    "I'll pay for the salad and my drinks." Drag and drop items
                    into sub-bills.
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
                    <CreditCard size={18} color="#8B5CF6" /> Multi-Tender
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Accept ₹50 in cash from one guest, and card payments from
                    the rest.
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
                  padding: "2rem",
                  background: "white",
                  borderRadius: "24px",
                  boxShadow: "var(--shadow-lg)",
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
                    Total: ₹240.00
                  </div>
                  <div
                    style={{
                      background: "#F3F4F6",
                      padding: "0.5rem 1rem",
                      borderRadius: "100px",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      color: "#4B5563",
                    }}
                  >
                    Split 3 Ways
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Bill 1 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "rgba(139, 92, 246, 0.05)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#6D28D9",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Guest 1 (Alex)
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                        Steak, Beer, 1/3 Wine
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#111827",
                        fontSize: "1.2rem",
                      }}
                    >
                      ₹95.00
                    </div>
                  </div>

                  {/* Bill 2 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "rgba(16, 185, 129, 0.05)",
                      border: "1px solid rgba(16, 185, 129, 0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#047857",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Guest 2 (Sarah)
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                        Salad, Water, 1/3 Wine
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        className="badge-outline-white"
                        style={{
                          background: "#10B981",
                          color: "white",
                          border: "none",
                        }}
                      >
                        PAID
                      </div>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "#111827",
                          fontSize: "1.2rem",
                        }}
                      >
                        ₹45.00
                      </div>
                    </div>
                  </div>

                  {/* Bill 3 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "rgba(139, 92, 246, 0.05)",
                      border: "1px solid rgba(139, 92, 246, 0.2)",
                      borderRadius: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#6D28D9",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Guest 3 (Mike)
                      </div>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280" }}>
                        Pasta, Coke, 1/3 Wine
                      </div>
                    </div>
                    <div
                      style={{
                        fontWeight: 800,
                        color: "#111827",
                        fontSize: "1.2rem",
                      }}
                    >
                      ₹100.00
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Course Management & KOT Routing (Dark) */}
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
                <ChefHat size={20} /> Intelligent Routing
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
                Pacing the Perfect Meal.
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
                Automate kitchen communication. Define your courses (Starters,
                Mains, Desserts) and route items to specific printers (Bar,
                Grill, Pastry). Waiters can place the entire order at once,
                holding courses and firing them exactly when the guest is ready.
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
                    <Wine size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Bar Routing
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Drinks bypass the kitchen and fire directly to the
                    bartender's screen.
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
                    <Play size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Hold & Fire
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Keep Mains on hold until the captain gives the signal to
                    cook.
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
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Course 1 */}
                  <div
                    style={{
                      background: "rgba(16, 185, 129, 0.1)",
                      border: "1px solid rgba(16, 185, 129, 0.4)",
                      borderRadius: "12px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                        paddingBottom: "0.5rem",
                        borderBottom: "1px dashed rgba(16, 185, 129, 0.3)",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: "white" }}>
                        Course 1: Starters
                      </span>
                      <span
                        style={{
                          color: "#6EE7B7",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        COOKING
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <div style={{ color: "white", fontWeight: 600 }}>
                        1x Calamari{" "}
                        <span
                          style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.85rem",
                          }}
                        >
                          (Fryer)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Drinks */}
                  <div
                    style={{
                      background: "rgba(245, 158, 11, 0.1)",
                      border: "1px solid rgba(245, 158, 11, 0.4)",
                      borderRadius: "12px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                        paddingBottom: "0.5rem",
                        borderBottom: "1px dashed rgba(245, 158, 11, 0.3)",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: "white" }}>
                        Drinks
                      </span>
                      <span
                        style={{
                          color: "#FCD34D",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        ROUTED TO BAR
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <div style={{ color: "white", fontWeight: 600 }}>
                        2x Pinot Noir{" "}
                        <span
                          style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.85rem",
                          }}
                        >
                          (Bar)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Course 2 */}
                  <div
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "12px",
                      padding: "1rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.75rem",
                        paddingBottom: "0.5rem",
                        borderBottom: "1px dashed rgba(255, 255, 255, 0.1)",
                      }}
                    >
                      <span style={{ fontWeight: 700, color: "white" }}>
                        Course 2: Mains
                      </span>
                      <span
                        style={{
                          color: "#9CA3AF",
                          fontWeight: 700,
                          fontSize: "0.85rem",
                        }}
                      >
                        ON HOLD
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                        opacity: 0.5,
                      }}
                    >
                      <div style={{ color: "white", fontWeight: 600 }}>
                        1x Wagyu Steak{" "}
                        <span
                          style={{
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "0.85rem",
                          }}
                        >
                          (Grill)
                        </span>
                      </div>
                    </div>
                    <button
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        background: "#F59E0B",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        fontWeight: 700,
                        marginTop: "1rem",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <Play size={16} /> FIRE COURSE 2
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Waitlist & Reservations (Light) */}
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
                  color: "#EC4899",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <CalendarCheck size={20} /> Host Stand Management
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
                Manage the Door with Ease.
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
                Ditch the pen and paper waitlist. Manage reservations, walk-ins,
                and wait times directly from the POS. Automatically notify
                guests via SMS when their table is ready.
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
                    <Smartphone size={18} color="#EC4899" /> SMS Alerts
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Let guests grab a drink nearby while they wait for your
                    text.
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
                    <Users size={18} color="#EC4899" /> Guest Profiles
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Track VIPs, preferences, and visit history right at the
                    door.
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
                  padding: "1.5rem",
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)",
                  border: "1px solid var(--pp-border)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "1rem",
                    borderBottom: "1px solid #E5E7EB",
                    paddingBottom: "1rem",
                  }}
                >
                  <span
                    style={{
                      fontWeight: 800,
                      color: "#111827",
                      fontSize: "1.2rem",
                    }}
                  >
                    Active Waitlist
                  </span>
                  <span style={{ color: "#EC4899", fontWeight: 700 }}>
                    45m Avg Wait
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Waitlist Item 1 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "#FDF2F8",
                      border: "1px solid #FBCFE8",
                      borderRadius: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "#831843",
                          marginBottom: "0.25rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        John Doe{" "}
                        <span
                          style={{
                            background: "#EC4899",
                            color: "white",
                            padding: "0.15rem 0.4rem",
                            borderRadius: "4px",
                            fontSize: "0.7rem",
                          }}
                        >
                          VIP
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#9D174D",
                          fontWeight: 600,
                        }}
                      >
                        Party of 4 • Waiting 25m
                      </div>
                    </div>
                    <button
                      style={{
                        background: "#EC4899",
                        color: "white",
                        border: "none",
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <Bell size={14} /> Text Ready
                    </button>
                  </div>

                  {/* Waitlist Item 2 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "#F3F4F6",
                      border: "1px solid #E5E7EB",
                      borderRadius: "12px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          color: "#374151",
                          marginBottom: "0.25rem",
                        }}
                      >
                        Sarah Smith
                      </div>
                      <div
                        style={{
                          fontSize: "0.85rem",
                          color: "#6B7280",
                          fontWeight: 600,
                        }}
                      >
                        Party of 2 • Waiting 10m
                      </div>
                    </div>
                    <button
                      style={{
                        background: "white",
                        color: "#374151",
                        border: "1px solid #D1D5DB",
                        padding: "0.5rem 1rem",
                        borderRadius: "8px",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Staff Performance & Tips (Dark) */}
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
                  color: "#06B6D4",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <TrendingUp size={20} /> Waiter Analytics
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
                Gamify Your Floor Staff.
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
                See who your best servers are. Track individual revenue
                generation, average table turnaround time, and upsell rates
                (e.g. who sells the most wine). Manage tip pooling automatically
                at the end of the shift.
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
                    <Star size={20} color="#06B6D4" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Sales Leaderboards
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Incentivize staff by tracking total covers and check
                    averages.
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
                    <CreditCard size={20} color="#06B6D4" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Tip Distribution
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Calculate card tips vs cash tips and manage BOH tip-outs.
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
                  background: "#0F172A",
                  border: "1px solid #1E293B",
                  borderRadius: "24px",
                  boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid #334155",
                    paddingBottom: "1rem",
                  }}
                >
                  Shift Report: Friday Evening
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {/* Staff 1 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "rgba(6, 182, 212, 0.1)",
                      border: "1px solid rgba(6, 182, 212, 0.3)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "#06B6D4",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 800,
                        }}
                      >
                        D
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: "white" }}>
                          Dinesh (Top Performer)
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#67E8F9" }}>
                          Avg Table: 45m • Covers: 42
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "white",
                          fontSize: "1.1rem",
                        }}
                      >
                        ₹1,240.00
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#22D3EE" }}>
                        ₹185 Tips
                      </div>
                    </div>
                  </div>

                  {/* Staff 2 */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "1rem",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "12px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "#334155",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontWeight: 800,
                        }}
                      >
                        R
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, color: "white" }}>
                          Rahul
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                          Avg Table: 58m • Covers: 28
                        </div>
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div
                        style={{
                          fontWeight: 800,
                          color: "white",
                          fontSize: "1.1rem",
                        }}
                      >
                        ₹890.00
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "#94A3B8" }}>
                        ₹110 Tips
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA (Light) */}
      <section
        style={{
          padding: "6rem 0",
          background: "var(--pp-bg-light)",
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
              background: "white",
              padding: "4rem 2rem",
              borderRadius: "32px",
              boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)",
              border: "1px solid var(--pp-border)",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "var(--pp-text-dark)",
              }}
            >
              Ready to Upgrade Your Service?
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "var(--pp-text-muted)",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              Give your staff the tools they need to turn tables faster and
              increase average check sizes without sacrificing guest
              hospitality.
            </p>
            <Link
              href="/#demo-form"
              className="btn-primary"
              style={{
                padding: "1.25rem 3rem",
                fontSize: "1.2rem",
                borderRadius: "100px",
                background: "#10B981",
              }}
            >
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
