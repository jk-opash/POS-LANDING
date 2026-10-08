"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Grid, 
  ChefHat, 
  Smartphone, 
  UtensilsCrossed, 
  Store, 
  CreditCard, 
  CheckCircle2, 
  Clock, 
  Flame
} from "lucide-react";
import Link from "next/link";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function BillingClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#60A5FA", borderColor: "rgba(96, 165, 250, 0.2)", background: "rgba(96, 165, 250, 0.1)" }}>Lightning Fast</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Restaurant <span style={{ color: "#60A5FA" }}>Billing & POS</span> System
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              The operating system for modern restaurants. Punch orders in under 3 clicks, manage dynamic floor plans, and accept any payment method, all 100% offline-ready.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#3B82F6" }}>
                Start Free Trial
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Modules
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Advanced Billing Engine (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Calculator size={20} /> Advanced Billing Engine
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Speed Meets Precision.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Handle rush hours effortlessly. Our billing engine supports complex split bills, multi-tender payments, and instant discount applications without skipping a beat.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Split billing by seat, item, or custom amount",
                  "Multi-tender payments (Cash + Card + UPI)",
                  "Works 100% offline, auto-syncs when internet restores"
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <CheckCircle2 color="#3B82F6" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px dashed var(--pp-border)" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Table 04 <span style={{ color: "var(--pp-text-muted)", fontSize: "0.9rem", fontWeight: 500 }}>• Split Payment</span></div>
                  <div style={{ color: "#10B981", fontWeight: 700 }}>₹142.50</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>Truffle Pasta x2</span>
                    <span style={{ fontWeight: 600 }}>₹48.00</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>Ribeye Steak</span>
                    <span style={{ fontWeight: 600 }}>₹65.00</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>House Wine (Bottle)</span>
                    <span style={{ fontWeight: 600 }}>₹29.50</span>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ flex: 1, padding: "1rem", background: "rgba(16,185,129,0.1)", borderRadius: "12px", border: "1px solid rgba(16,185,129,0.2)" }}>
                    <div style={{ fontSize: "0.85rem", color: "#10B981", fontWeight: 700, marginBottom: "0.25rem" }}>PAID VIA CARD</div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>₹100.00</div>
                  </div>
                  <div style={{ flex: 1, padding: "1rem", background: "rgba(59,130,246,0.1)", borderRadius: "12px", border: "1px solid rgba(59,130,246,0.2)" }}>
                    <div style={{ fontSize: "0.85rem", color: "#3B82F6", fontWeight: 700, marginBottom: "0.25rem" }}>PAID VIA CASH</div>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>₹42.50</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Table & Floor (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Grid size={20} /> Table Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Maximize Seat Turnover.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Map your exact restaurant layout digitally. Monitor live table statuses, merge tables for large parties, and track Turnaround Time (TAT) to optimize seating.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10B981" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Occupied</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>See exactly how long guests have been seated and current bill value.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#F59E0B" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Billed</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Alert hosts when a table is about to clear for waiting guests.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }}>
                  {[
                    { id: "T1", cap: "2", status: "vacant", color: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.2)" },
                    { id: "T2", cap: "4", status: "occupied", color: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.4)" },
                    { id: "T3", cap: "4", status: "billed", color: "rgba(245,158,11,0.15)", border: "rgba(245,158,11,0.4)" },
                    { id: "T4", cap: "6", status: "cleaning", color: "rgba(59,130,246,0.15)", border: "rgba(59,130,246,0.4)" },
                    { id: "T5", cap: "2", status: "occupied", color: "rgba(16,185,129,0.15)", border: "rgba(16,185,129,0.4)" },
                    { id: "T6", cap: "2", status: "vacant", color: "rgba(255,255,255,0.1)", border: "rgba(255,255,255,0.2)" }
                  ].map((table, i) => (
                    <div key={i} style={{ aspectRatio: "1", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: table.color, border: `1px solid ${table.border}`, borderRadius: "16px" }}>
                      <div style={{ fontWeight: 700, fontSize: "1.2rem", marginBottom: "0.25rem" }}>{table.id}</div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)" }}>{table.cap} Pax</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. KDS & Omnichannel (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ChefHat size={20} /> Kitchen Display System (KDS)
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Digitize Kitchen Operations.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Eliminate lost paper KOTs. Route items to specific stations (Grill, Bar) automatically. Color-coded timers ensure dishes are prepared and expedited on time.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>Bump Screens</h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Mark items as preparing, ready, or served with a single tap.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>Omnichannel Sync</h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Swiggy, Zomato, and Dine-in orders flow into one unified KDS queue.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "#111827", borderRadius: "24px", boxShadow: "var(--shadow-lg)" }}>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    {/* Ticket 1 */}
                    <div style={{ flex: 1, background: "white", borderRadius: "12px", overflow: "hidden" }}>
                      <div style={{ background: "#F59E0B", color: "white", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontWeight: 700 }}>T-04</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                          <Clock size={14} /> 12:45
                        </div>
                      </div>
                      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "2px solid var(--pp-border)" }} />
                          <span style={{ fontWeight: 600, color: "#111827" }}>2x Truffle Pasta</span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "2px solid var(--pp-border)" }} />
                          <span style={{ fontWeight: 600, color: "#111827" }}>1x Ribeye (Med-Rare)</span>
                        </div>
                      </div>
                    </div>
                    {/* Ticket 2 */}
                    <div style={{ flex: 1, background: "white", borderRadius: "12px", overflow: "hidden" }}>
                      <div style={{ background: "#EF4444", color: "white", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div style={{ fontWeight: 700 }}>Zomato</div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 600 }}>
                          <Flame size={14} /> 22:10
                        </div>
                      </div>
                      <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div style={{ width: "20px", height: "20px", borderRadius: "4px", border: "2px solid var(--pp-border)" }} />
                          <span style={{ fontWeight: 600, color: "#111827" }}>1x Veggie Pizza</span>
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "#EF4444", fontWeight: 600, marginLeft: "1.75rem" }}>- No Onions</div>
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Enterprise & Mobile (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Smartphone size={20} /> Waiter App & Enterprise
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Empower Staff. Control Infinity.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Equip waiters with tableside ordering apps to fire orders instantly. For owners, manage infinite branches, global menus, and consolidated royalty reports from a single centralized dashboard.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Tableside Ordering: Instant KOT firing and live menu inventory.",
                  "Multi-Outlet Control: Global menu pushes and location-specific pricing.",
                  "Role-Based Access Control (RBAC) to prevent unauthorized actions."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <Store color="#10B981" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "280px", height: "550px", background: "#FFFFFF", borderRadius: "40px", border: "8px solid #111827", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)", position: "relative", overflow: "hidden", padding: "1.5rem 1rem" }}>
                {/* Mobile App Abstract */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                   <div style={{ fontWeight: 700, color: "#111827" }}>Table 12</div>
                   <div style={{ background: "#10B981", color: "white", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700 }}>Occupied</div>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", overflowX: "hidden" }}>
                  {["Starters", "Mains", "Drinks"].map((cat, i) => (
                    <div key={i} style={{ padding: "0.5rem 1rem", background: i === 0 ? "#111827" : "#F3F4F6", color: i === 0 ? "white" : "#6B7280", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600 }}>{cat}</div>
                  ))}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[1,2,3].map((item) => (
                    <div key={item} style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ width: "60px", height: "60px", background: "#F3F4F6", borderRadius: "12px" }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ width: "80%", height: "14px", background: "#E5E7EB", borderRadius: "4px", marginBottom: "0.5rem" }} />
                        <div style={{ width: "40%", height: "14px", background: "#E5E7EB", borderRadius: "4px", marginBottom: "0.5rem" }} />
                        <div style={{ width: "30%", height: "14px", background: "#10B981", borderRadius: "4px" }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ position: "absolute", bottom: "1rem", left: "1rem", right: "1rem", background: "#10B981", color: "white", padding: "1rem", borderRadius: "16px", textAlign: "center", fontWeight: 700 }}>
                  Fire KOT to Kitchen
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CTA (Light) */}
      <section style={{ padding: "6rem 0", background: "var(--pp-bg-light)", textAlign: "center" }}>
        <div className="pp-wrap">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            style={{ maxWidth: "700px", margin: "0 auto", background: "white", padding: "4rem 2rem", borderRadius: "32px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "#111827" }}>
              Upgrade Your Front-of-House.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Serve customers faster, reduce kitchen errors, and keep your floor humming with efficiency. Switch to the OS built for restaurants.
            </p>
            <Link href="/#demo-form" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#3B82F6" }}>
              Book Your Free Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
