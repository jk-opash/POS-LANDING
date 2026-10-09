"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  IceCream, 
  Scale, 
  PlusCircle, 
  Gift, 
  Package, 
  CheckCircle2,
  Zap,
  Tag
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

export default function DessertClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#EC4899", borderColor: "rgba(236, 72, 153, 0.2)", background: "rgba(236, 72, 153, 0.1)" }}>Ice Cream, Gelato & Desserts</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Serve Sweets at <span style={{ color: "#EC4899" }}>Lightning Speed</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Manage complex topping modifiers, connect weighing scales for frozen yogurt, and track inventory from the master tub down to the final scoop.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#EC4899", color: "white" }}>
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Lightning Fast Billing (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Zap size={20} /> High-Speed POS
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Scoop, Tap, Paid.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Long lines on a hot summer day? Our image-based grid lets cashiers punch in a "Double Scoop Waffle Cone" in exactly two taps. No loading screens, no complex menus.
              </motion.p>
              
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }}>
                  <button style={{ background: "#FDF2F8", border: "2px solid #EC4899", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <IceCream size={24} color="#BE185D" />
                    <span style={{ fontWeight: 800, color: "#9D174D" }}>Vanilla Bean</span>
                  </button>
                  <button style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", cursor: "pointer" }}>
                    <IceCream size={24} color="#374151" />
                    <span style={{ fontWeight: 700, color: "#374151" }}>Chocolate</span>
                  </button>
                </div>
                <div style={{ background: "#F9FAFB", padding: "1rem", borderRadius: "12px", border: "1px solid #E5E7EB" }}>
                  <div style={{ fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Select Base:</div>
                  <div style={{ display: "flex", gap: "0.5rem" }}>
                    <button style={{ flex: 1, background: "white", border: "1px solid #D1D5DB", padding: "0.5rem", borderRadius: "8px", fontWeight: 600 }}>Cup</button>
                    <button style={{ flex: 1, background: "#111827", color: "white", border: "none", padding: "0.5rem", borderRadius: "8px", fontWeight: 600 }}>Waffle +₹1</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Weighing Scale Integration (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Scale size={20} /> Frozen Yogurt Scales
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Weigh and Pay Seamlessly.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Running a self-serve Fro-Yo shop? Connect your RS232 or USB weighing scale directly to BillBite. Place the cup on the scale, and the exact weight and price populate on the screen instantly.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)", textAlign: "center" }}>
                <Scale size={48} color="#3B82F6" style={{ marginBottom: "1rem" }} />
                <div style={{ fontSize: "3rem", fontWeight: 800, color: "white", lineHeight: 1 }}>0.320 <span style={{ fontSize: "1.5rem", color: "#9CA3AF" }}>KG</span></div>
                <div style={{ marginTop: "1.5rem", background: "#3B82F6", color: "white", padding: "1rem", borderRadius: "12px", fontWeight: 700, fontSize: "1.2rem" }}>
                  Total: ₹4.80 <span style={{ fontSize: "0.9rem", opacity: 0.8 }}>(@ ₹15/kg)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Modifiers & Toppings (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <PlusCircle size={20} /> Modifiers
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Unlimited Topping Logic.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                "First 2 toppings free, ₹0.50 after that." Our dynamic modifier engine handles complex pricing rules effortlessly so your cashiers never have to do mental math.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>Add Toppings (2 Free)</div>
                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", border: "1px solid #10B981" }}>
                      <span style={{ fontWeight: 700, color: "#065F46" }}><CheckCircle2 size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: "0.25rem" }}/> Sprinkles</span>
                      <span style={{ color: "#047857", fontWeight: 800 }}>FREE</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "rgba(16, 185, 129, 0.1)", borderRadius: "8px", border: "1px solid #10B981" }}>
                      <span style={{ fontWeight: 700, color: "#065F46" }}><CheckCircle2 size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: "0.25rem" }}/> Hot Fudge</span>
                      <span style={{ color: "#047857", fontWeight: 800 }}>FREE</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#F9FAFB", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                      <span style={{ fontWeight: 600, color: "#374151" }}>Gummy Bears</span>
                      <span style={{ color: "#111827", fontWeight: 700 }}>+₹0.50</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Loyalty (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Gift size={20} /> Built-in Loyalty
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                The 10th Scoop is Free.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Ditch the paper punch cards. Customers enter their phone number on the customer display screen, and the POS automatically tracks their visits and issues rewards.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ width: "48px", height: "48px", background: "rgba(139, 92, 246, 0.2)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#A78BFA" }}>
                    <Gift size={24} />
                  </div>
                  <div>
                    <div style={{ color: "white", fontWeight: 800, fontSize: "1.1rem" }}>Sarah's Loyalty</div>
                    <div style={{ color: "#A78BFA", fontWeight: 600 }}>9/10 Scoops Purchased</div>
                  </div>
                </div>
                <div style={{ width: "100%", height: "8px", background: "rgba(255,255,255,0.1)", borderRadius: "4px", overflow: "hidden", marginBottom: "1rem" }}>
                  <div style={{ width: "90%", height: "100%", background: "#8B5CF6" }} />
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", textAlign: "center" }}>1 more scoop to unlock a free sundae!</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Tub Inventory (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Package size={20} /> Tub Inventory
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Track Every Last Scoop.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Stop losing money to over-scooping. You buy ice cream in 5 Gallon tubs, but sell it in 4oz scoops. BillBite automatically handles the unit conversion so your inventory is always perfectly accurate.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "1.2rem" }}>Master: Vanilla Bean</div>
                      <div style={{ color: "#6B7280", fontSize: "0.9rem" }}>Total Stock: 2 Tubs (10 Gal)</div>
                    </div>
                    <Tag color="#F59E0B" />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "#FFFBEB", borderRadius: "8px", border: "1px dashed #FCD34D" }}>
                    <span style={{ fontWeight: 700, color: "#92400E" }}>1x Single Scoop Sold</span>
                    <span style={{ color: "#B45309", fontWeight: 800 }}>- 4 oz deducted</span>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
