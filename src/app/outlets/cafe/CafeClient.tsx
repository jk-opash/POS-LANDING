"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  Utensils, 
  Monitor, 
  Coffee, 
  QrCode, 
  Smartphone,
  Gift,
  ArrowUpCircle,
  Croissant,
  Timer,
  CheckCircle2,
  ScanLine
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

export default function CafeClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, rgba(245, 158, 11, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#F59E0B", borderColor: "rgba(245, 158, 11, 0.2)", background: "rgba(245, 158, 11, 0.1)" }}>Cafes, Bakeries & QSR</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Bust the <span style={{ color: "#F59E0B" }}>Morning Rush</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              When the line is out the door, speed is everything. Process orders in under 3 clicks, scan QR codes instantly, upsell with smart prompts, and run loyalty programs right at the counter.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#F59E0B", color: "#111827" }}>
                Speed Up My Counter
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore QSR Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Lightning Fast Billing (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Zap size={20} /> Lightning Billing
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Punch Orders in 3 Clicks.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                We've stripped away every unnecessary screen. A highly-optimized, image-based grid allows cashiers to tap a coffee, tap a pastry, and hit exact cash in a fraction of a second.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Image-first grid layout for instant recognition.",
                  "Top 10 best-selling items are pinned to the home screen.",
                  "Zero loading times between order punches."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Timer size={14} />
                    </div>
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)", display: "flex", gap: "1rem" }}>
                
                {/* Menu Grid */}
                <div style={{ flex: 2 }}>
                  <div style={{ fontWeight: 700, color: "#111827", marginBottom: "1rem", fontSize: "1.1rem" }}>Quick Picks</div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
                    <button style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                      <Coffee size={24} color="#92400E" />
                      <span style={{ fontWeight: 700, color: "#374151" }}>Latte</span>
                    </button>
                    <button style={{ background: "#FEF3C7", border: "2px solid #F59E0B", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(245, 158, 11, 0.2)" }}>
                      <Coffee size={24} color="#D97706" />
                      <span style={{ fontWeight: 800, color: "#92400E" }}>Espresso</span>
                    </button>
                    <button style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                      <Croissant size={24} color="#92400E" />
                      <span style={{ fontWeight: 700, color: "#374151" }}>Croissant</span>
                    </button>
                    <button style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                      <Utensils size={24} color="#92400E" />
                      <span style={{ fontWeight: 700, color: "#374151" }}>Avocado Toast</span>
                    </button>
                  </div>
                </div>

                {/* Cart Strip */}
                <div style={{ flex: 1, background: "#F9FAFB", borderRadius: "16px", padding: "1rem", border: "1px solid #E5E7EB", display: "flex", flexDirection: "column" }}>
                   <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", paddingBottom: "0.5rem", borderBottom: "1px dashed #D1D5DB" }}>Current Order</div>
                   <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                     <span style={{ fontWeight: 600, color: "#374151" }}>1x Espresso</span>
                     <span style={{ fontWeight: 700, color: "#111827" }}>₹3.00</span>
                   </div>
                   <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                      <button style={{ width: "100%", background: "#10B981", color: "white", border: "none", padding: "1rem", borderRadius: "8px", fontWeight: 800, fontSize: "1.1rem" }}>
                        PAY ₹3.00
                      </button>
                   </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Dynamic Combos (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Utensils size={20} /> Dynamic Combo Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                "Make it a Meal" made simple.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Selling a "Breakfast Combo"? Let cashiers easily swap the standard black coffee for an iced latte. The system automatically recalculates the upcharge and adjusts inventory for both items without confusing math.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <ArrowUpCircle size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Auto-Upcharging</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Swapping a standard side for a premium side adds exact cost automatically.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <CheckCircle2 size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Forced Modifiers</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Prevent mistakes by forcing cashiers to select a drink size before sending.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Configure: Breakfast Special</div>
                  <div style={{ background: "#3B82F6", color: "white", padding: "0.25rem 0.75rem", borderRadius: "100px", fontWeight: 800, fontSize: "0.9rem" }}>₹9.00</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  
                  {/* Step 1 */}
                  <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ color: "#6EE7B7", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase" }}>Select Pastry</div>
                      <div style={{ color: "white", fontWeight: 700, fontSize: "1.1rem" }}>Butter Croissant</div>
                    </div>
                    <CheckCircle2 color="#10B981" />
                  </div>

                  {/* Step 2 (Active) */}
                  <div style={{ background: "rgba(59, 130, 246, 0.1)", border: "2px solid #3B82F6", padding: "1rem", borderRadius: "12px" }}>
                    <div style={{ color: "#93C5FD", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "0.75rem" }}>Select Drink</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                      <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.75rem", borderRadius: "8px", color: "rgba(255,255,255,0.6)", fontWeight: 600, border: "1px solid transparent" }}>
                        Drip Coffee <span style={{ float: "right", opacity: 0.5 }}>+ ₹0</span>
                      </div>
                      <div style={{ background: "#3B82F6", padding: "0.75rem", borderRadius: "8px", color: "white", fontWeight: 700, boxShadow: "0 4px 6px -1px rgba(59, 130, 246, 0.4)" }}>
                        Iced Latte <span style={{ float: "right", color: "#DBEAFE" }}>+ ₹2.50</span>
                      </div>
                    </div>
                  </div>

                </div>
                
                <div style={{ marginTop: "1.5rem", borderTop: "1px dashed rgba(255,255,255,0.2)", paddingTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "rgba(255,255,255,0.6)", fontWeight: 600 }}>New Combo Total:</span>
                  <span style={{ color: "white", fontWeight: 800, fontSize: "1.5rem" }}>₹11.50</span>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Customer Facing Display (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Monitor size={20} /> Customer Facing Display
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Transparency & Instant QR Pay.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Mount a secondary screen facing the customer. As the cashier punches the order, the customer sees the items appear live. When it's time to pay, a dynamic UPI QR code appears on the screen for a zero-contact, instant checkout.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <ScanLine size={18} color="#10B981" /> Dynamic QR Codes
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>No need for clunky card machines or asking for phone numbers.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Monitor size={18} color="#10B981" /> Build Trust
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Customers verify their order before paying, reducing wrong drinks.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", maxWidth: "450px", padding: "1.5rem", background: "#111827", borderRadius: "16px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.3)", border: "8px solid #374151" }}>
                  <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                    <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Your Order</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "white", fontSize: "1.1rem", fontWeight: 600 }}>
                      <span>1x Iced Latte</span>
                      <span>₹4.50</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "white", fontSize: "1.1rem", fontWeight: 600 }}>
                      <span>1x Blueberry Muffin</span>
                      <span>₹3.50</span>
                    </div>
                    <div style={{ borderTop: "1px dashed #374151", margin: "0.5rem 0" }} />
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#10B981", fontSize: "1.5rem", fontWeight: 800 }}>
                      <span>Total</span>
                      <span>₹8.00</span>
                    </div>
                  </div>

                  <div style={{ background: "white", padding: "1.5rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
                    <QrCode size={120} color="#111827" />
                    <div style={{ color: "#374151", fontWeight: 800, textAlign: "center", fontSize: "0.9rem" }}>Scan to Pay with Any UPI App</div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Smart Upselling (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ArrowUpCircle size={20} /> Smart Prompts
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Turn a ₹4 Order into a ₹7 Order.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Train your staff to upsell automatically. When a customer orders a coffee, the POS instantly prompts the cashier to ask if they'd like to add a pastry or an extra shot of espresso. 
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <ArrowUpCircle size={20} color="#EC4899" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Increase Ticket Size</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>A simple prompt can increase average order value by 15%.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Coffee size={20} color="#EC4899" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Custom Pairings</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Link specific snacks to specific drinks for targeted upselling.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", maxWidth: "350px", padding: "2rem", background: "#FEF2F8", border: "2px solid #FBCFE8", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(236, 72, 153, 0.2)", position: "relative" }}>
                
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <div style={{ width: "48px", height: "48px", background: "#EC4899", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "white", margin: "0 auto 1rem" }}>
                    <ArrowUpCircle size={24} />
                  </div>
                  <div style={{ fontWeight: 800, color: "#831843", fontSize: "1.2rem", marginBottom: "0.5rem" }}>Suggested Add-on</div>
                  <div style={{ color: "#BE185D", fontSize: "0.95rem", fontWeight: 600 }}>"Would you like an extra shot of espresso for ₹1?"</div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <button style={{ padding: "1rem", background: "white", border: "1px solid #FBCFE8", borderRadius: "12px", color: "#9D174D", fontWeight: 700, cursor: "pointer" }}>
                    No Thanks
                  </button>
                  <button style={{ padding: "1rem", background: "#EC4899", border: "none", borderRadius: "12px", color: "white", fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(236, 72, 153, 0.4)" }}>
                    Add (+₹1.00)
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Built-in Loyalty (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Gift size={20} /> Built-in Loyalty
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Turn Walk-ins into Regulars.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Ditch the paper punch cards. Customers simply enter their phone number on the Customer Facing Display to earn points automatically. When they have enough points, the cashier is instantly notified to offer a free pastry or coffee.
              </motion.p>
              
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", background: "rgba(139, 92, 246, 0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#8B5CF6" }}>
                      <Smartphone size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "1.1rem" }}>Alex Walker</div>
                      <div style={{ color: "#8B5CF6", fontWeight: 700, fontSize: "0.9rem" }}>450 Beans Available</div>
                    </div>
                  </div>
                  
                  <div style={{ background: "#F5F3FF", border: "1px dashed #C4B5FD", padding: "1rem", borderRadius: "12px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontWeight: 700, color: "#5B21B6", marginBottom: "0.25rem" }}>Reward Unlocked!</div>
                      <div style={{ color: "#7C3AED", fontSize: "0.85rem", fontWeight: 600 }}>Free Pastry (Costs 400 Beans)</div>
                    </div>
                    <button style={{ background: "#8B5CF6", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                      <Gift size={14}/> Redeem
                    </button>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CTA (Dark) */}
      <section style={{ padding: "6rem 0", background: "var(--pp-bg-dark)", textAlign: "center" }}>
        <div className="pp-wrap">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            style={{ maxWidth: "700px", margin: "0 auto", background: "rgba(255,255,255,0.03)", padding: "4rem 2rem", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-light)" }}>
              Ready to Bust the Queues?
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Give your cashiers the tools they need to serve more customers per hour, increasing revenue during your most critical morning and lunch rushes.
            </p>
            <Link href="/#demo-form" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#F59E0B", color: "#111827" }}>
              Start Your Free Trial
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
