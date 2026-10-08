"use client";

import { motion } from "framer-motion";
import {
  RefreshCw,
  Smartphone,
  DollarSign,
  AlertCircle,
  CheckCircle2,
  PieChart,
} from "lucide-react";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

export default function OnlineOrderClient() {
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
              "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0) 70%)",
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
                  color: "#F87171",
                  borderColor: "rgba(248, 113, 113, 0.2)",
                  background: "rgba(248, 113, 113, 0.1)",
                }}
              >
                Zero Discrepancies
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
              Online Order Sync &{" "}
              <span style={{ color: "#F87171" }}>Reconciliation</span>
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
              Ditch the multiple tablets. Funnel Zomato, Swiggy, and direct web
              orders into one POS screen, push menu updates instantly, and audit
              every penny of aggregator payouts.
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
                  background: "#EF4444",
                }}
              >
                Reconcile Payouts Now
              </Link>
              <Link
                href="#features"
                className="btn-outline-pill"
                style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}
              >
                See How It Works
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Direct POS Sync (Light) */}
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
                  color: "#EF4444",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <RefreshCw size={20} /> Omnichannel Aggregation
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
                One Screen for All Orders.
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
                Stop manually punching aggregator orders into your POS. Online
                orders land directly on your main screen and fire straight to
                the Kitchen Display System without human intervention.
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
                  "Auto-accept rules to streamline peak hour rushes.",
                  "Zero manual entry errors and missed orders.",
                  "Consolidated queue for Zomato, Swiggy, and direct channels.",
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
                    <CheckCircle2
                      color="#EF4444"
                      size={24}
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
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
                  padding: "2rem",
                  background: "white",
                  borderRadius: "24px",
                  boxShadow: "var(--shadow-lg)",
                  border: "1px solid var(--pp-border)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1.5rem",
                    paddingBottom: "1rem",
                    borderBottom: "1px solid var(--pp-border)",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                    Active Deliveries
                  </div>
                  <div
                    className="badge-outline"
                    style={{
                      color: "#EF4444",
                      borderColor: "rgba(239, 68, 68, 0.2)",
                      background: "rgba(239, 68, 68, 0.1)",
                    }}
                  >
                    Auto-Accept: ON
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  {[
                    {
                      platform: "Zomato",
                      orderId: "#ZM-8992",
                      items: "2 Items",
                      time: "2 min ago",
                      color: "#E11D48",
                    },
                    {
                      platform: "Swiggy",
                      orderId: "#SW-1044",
                      items: "5 Items",
                      time: "5 min ago",
                      color: "#F97316",
                    },
                    {
                      platform: "Direct Web",
                      orderId: "#DW-0091",
                      items: "1 Item",
                      time: "12 min ago",
                      color: "#3B82F6",
                    },
                  ].map((order, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "1rem",
                        background: "var(--pp-bg-light)",
                        borderRadius: "12px",
                        borderLeft: `4px solid ${order.color}`,
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontWeight: 700,
                            color: order.color,
                            marginBottom: "0.25rem",
                          }}
                        >
                          {order.platform} {order.orderId}
                        </div>
                        <div
                          style={{
                            fontSize: "0.9rem",
                            color: "var(--pp-text-muted)",
                            fontWeight: 600,
                          }}
                        >
                          {order.items}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "1rem",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--pp-text-muted)",
                            fontSize: "0.85rem",
                            fontWeight: 600,
                          }}
                        >
                          {order.time}
                        </span>
                        <div
                          style={{
                            padding: "0.4rem 1rem",
                            background: "#111827",
                            color: "white",
                            borderRadius: "100px",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                          }}
                        >
                          Preparing
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Centralized Menu Push (Dark) */}
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
                  color: "#10B981",
                  fontWeight: 700,
                  marginBottom: "1rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                <Smartphone size={20} /> Centralized Menu Management
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
                Update Everywhere in One Click.
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
                Maintain separate pricing for dine-in, Zomato, and Swiggy from a
                single master catalog. Mark an item out-of-stock once on your
                POS, and it instantly hides across all aggregator platforms.
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
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#10B981",
                      }}
                    />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Platform Pricing
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Configure 15% markups for online orders automatically.
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
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        background: "#F59E0B",
                      }}
                    />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>
                      Live Stock Sync
                    </h4>
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Prevent angry customers by auto-hiding sold-out dishes.
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
                    paddingBottom: "1rem",
                    borderBottom: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                    Master Menu: Butter Chicken
                  </div>
                  <div
                    style={{
                      padding: "0.25rem 0.75rem",
                      background: "rgba(16,185,129,0.2)",
                      color: "#10B981",
                      borderRadius: "100px",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    IN STOCK
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  {[
                    {
                      platform: "Dine-In POS",
                      price: "₹14.00",
                      status: true,
                      color: "#3B82F6",
                    },
                    {
                      platform: "Zomato",
                      price: "₹16.50",
                      status: true,
                      color: "#E11D48",
                    },
                    {
                      platform: "Swiggy",
                      price: "₹16.50",
                      status: false,
                      color: "#F97316",
                    },
                  ].map((p, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
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
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            background: p.color,
                          }}
                        />
                        <span style={{ fontWeight: 600 }}>{p.platform}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "2rem",
                        }}
                      >
                        <span
                          style={{
                            color: "rgba(255,255,255,0.7)",
                            fontWeight: 700,
                          }}
                        >
                          {p.price}
                        </span>
                        {/* Mock Toggle Switch */}
                        <div
                          style={{
                            width: "44px",
                            height: "24px",
                            borderRadius: "100px",
                            background: p.status
                              ? "#10B981"
                              : "rgba(255,255,255,0.2)",
                            position: "relative",
                            transition: "all 0.3s",
                          }}
                        >
                          <div
                            style={{
                              width: "20px",
                              height: "20px",
                              borderRadius: "50%",
                              background: "white",
                              position: "absolute",
                              top: "2px",
                              left: p.status ? "22px" : "2px",
                              transition: "all 0.3s",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Payout Reconciliation (Light) */}
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
                <DollarSign size={20} /> Financial Reconciliation
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
                Recover Lost Revenue.
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
                Aggregator payouts are notoriously complex. Our reconciliation
                engine automatically matches gross sales against platform
                deductions, commissions, and cancellations so you know exactly
                what you are owed.
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
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#111827",
                    }}
                  >
                    Spot Discrepancies
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Instantly flag missing payments or incorrect commission
                    charges.
                  </p>
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                      color: "#111827",
                    }}
                  >
                    Cancellation Audits
                  </h4>
                  <p
                    style={{
                      color: "var(--pp-text-muted)",
                      fontSize: "0.95rem",
                      lineHeight: 1.5,
                    }}
                  >
                    Track who canceled an order and whether a refund was
                    deducted fairly.
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
                    marginBottom: "2rem",
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                    Weekly Payout: Zomato
                  </div>
                  <PieChart color="#8B5CF6" size={24} />
                </div>

                <div
                  style={{
                    padding: "1.5rem",
                    background: "var(--pp-bg-light)",
                    borderRadius: "16px",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{ color: "var(--pp-text-muted)", fontWeight: 600 }}
                    >
                      Gross Sales (142 Orders)
                    </span>
                    <span style={{ fontWeight: 700 }}>₹2,840.00</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "0.75rem",
                      color: "#EF4444",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>Commission (18%)</span>
                    <span style={{ fontWeight: 700 }}>-₹511.20</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                      color: "#EF4444",
                    }}
                  >
                    <span style={{ fontWeight: 600 }}>
                      Platform Discounts / Ads
                    </span>
                    <span style={{ fontWeight: 700 }}>-₹120.00</span>
                  </div>
                  <div
                    style={{
                      height: "1px",
                      background: "var(--pp-border)",
                      marginBottom: "1rem",
                    }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                      Expected Net Payout
                    </span>
                    <span
                      style={{
                        fontWeight: 800,
                        fontSize: "1.4rem",
                        color: "#10B981",
                      }}
                    >
                      ₹2,208.80
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                    padding: "1rem",
                    background: "rgba(239,68,68,0.1)",
                    borderRadius: "12px",
                    border: "1px solid rgba(239,68,68,0.2)",
                  }}
                >
                  <AlertCircle
                    color="#EF4444"
                    size={20}
                    style={{ flexShrink: 0 }}
                  />
                  <span
                    style={{
                      color: "#B91C1C",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                    }}
                  >
                    Discrepancy Found: Actual payout received was ₹2,180.00
                    (-₹28.80 shortage).
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA (Dark) */}
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
              Stop Leaking Revenue.
            </h2>
            <p
              style={{
                fontSize: "1.125rem",
                color: "rgba(255,255,255,0.7)",
                marginBottom: "2.5rem",
                lineHeight: 1.6,
              }}
            >
              Consolidate your online ordering stack, reduce manual errors, and
              guarantee you are being paid exactly what you are owed by
              aggregators.
            </p>
            <Link
              href="/#demo-form"
              className="btn-primary"
              style={{
                padding: "1.25rem 3rem",
                fontSize: "1.2rem",
                borderRadius: "100px",
                background: "#EF4444",
              }}
            >
              Start Syncing Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
