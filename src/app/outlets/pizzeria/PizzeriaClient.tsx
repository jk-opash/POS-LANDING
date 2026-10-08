"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Pizza, 
  MapPin, 
  PhoneCall, 
  PieChart, 
  Bike, 
  Layers,
  CheckCircle2
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

export default function PizzeriaClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, rgba(239, 68, 68, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#EF4444", borderColor: "rgba(239, 68, 68, 0.2)", background: "rgba(239, 68, 68, 0.1)" }}>Pizzerias & Italian</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Built for the <span style={{ color: "#EF4444" }}>Perfect Slice</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Handle complex half-and-half orders, track your delivery drivers in real-time, and manage dynamic pricing matrices for sizes and crusts.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#EF4444", color: "white" }}>
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Half & Half Logic (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EF4444", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <PieChart size={20} /> Complex Orders
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Half & Half Mastery.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Customer wants left half Pepperoni, right half Veggie Supreme? Our interface splits the pizza visually, automatically calculating the price based on the more expensive half or an exact 50/50 split.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
                  <div style={{ position: "relative", width: "120px", height: "120px", borderRadius: "50%", overflow: "hidden", border: "4px solid #FCA5A5" }}>
                    <div style={{ position: "absolute", top: 0, left: 0, width: "50%", height: "100%", background: "#EF4444" }} />
                    <div style={{ position: "absolute", top: 0, right: 0, width: "50%", height: "100%", background: "#10B981" }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, color: "#111827", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Custom Half & Half</div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#EF4444", fontWeight: 600, fontSize: "0.9rem" }}>
                      <span>Left: Pepperoni</span>
                      <span>₹9.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#10B981", fontWeight: 600, fontSize: "0.9rem", marginBottom: "1rem" }}>
                      <span>Right: Veggie</span>
                      <span>₹7.50</span>
                    </div>
                    <div style={{ borderTop: "1px solid #E5E7EB", paddingTop: "0.5rem", fontWeight: 800, color: "#111827" }}>
                      Total: ₹16.50
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Delivery Driver App (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Bike size={20} /> Logistics
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Track Your Drivers.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Assign deliveries to drivers directly from the POS. Drivers receive the address on their dedicated mobile app, and you can track their GPS location in real-time until the pizza is delivered.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", maxWidth: "300px", padding: "1.5rem", background: "white", borderRadius: "32px", border: "8px solid #111827", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
                <div style={{ width: "100%", height: "150px", background: "#E5E7EB", borderRadius: "12px", marginBottom: "1rem", position: "relative", overflow: "hidden" }}>
                  {/* Abstract Map */}
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "200%", height: "2px", background: "#9CA3AF", transform: "translate(-50%, -50%) rotate(30deg)" }} />
                  <div style={{ position: "absolute", top: "50%", left: "50%", width: "2px", height: "200%", background: "#9CA3AF", transform: "translate(-50%, -50%)" }} />
                  <MapPin size={24} color="#EF4444" style={{ position: "absolute", top: "30%", left: "70%", transform: "translate(-50%, -50%)" }} fill="#EF4444" />
                  <Bike size={24} color="#3B82F6" style={{ position: "absolute", top: "60%", left: "40%", transform: "translate(-50%, -50%)" }} />
                </div>
                <div style={{ textAlign: "center", color: "#111827", fontWeight: 800, marginBottom: "0.25rem" }}>Order #882</div>
                <div style={{ textAlign: "center", color: "#6B7280", fontSize: "0.9rem", marginBottom: "1rem" }}>Est. Arrival: 8 mins</div>
                <button style={{ width: "100%", background: "#10B981", color: "white", border: "none", padding: "0.75rem", borderRadius: "8px", fontWeight: 700 }}>
                  Mark Delivered
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Crust & Size Modifiers (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Layers size={20} /> Pricing Matrix
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Dynamic Crusts & Sizes.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                A Cheese Burst crust costs +₹2 on a Medium, but +₹4 on a Large. Our matrix pricing engine handles multi-dimensional modifiers perfectly so your menu remains clean and errors are eliminated.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>1. Select Size</div>
                  <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    <div style={{ flex: 1, padding: "0.75rem", border: "1px solid #D1D5DB", borderRadius: "8px", textAlign: "center", color: "#4B5563", fontWeight: 600 }}>Small 8"</div>
                    <div style={{ flex: 1, padding: "0.75rem", background: "#FFFBEB", border: "2px solid #F59E0B", borderRadius: "8px", textAlign: "center", color: "#92400E", fontWeight: 800 }}>Medium 12"</div>
                    <div style={{ flex: 1, padding: "0.75rem", border: "1px solid #D1D5DB", borderRadius: "8px", textAlign: "center", color: "#4B5563", fontWeight: 600 }}>Large 16"</div>
                  </div>
                  
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem" }}>2. Select Crust</div>
                  <div style={{ display: "grid", gap: "0.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", border: "1px solid #D1D5DB", borderRadius: "8px" }}>
                      <span style={{ fontWeight: 600, color: "#374151" }}>Classic Hand-Tossed</span>
                      <span style={{ color: "#9CA3AF" }}>Included</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "8px" }}>
                      <span style={{ fontWeight: 600, color: "#374151" }}>Cheese Burst</span>
                      <span style={{ color: "#111827", fontWeight: 800 }}>+₹2.00</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Caller ID Integration (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <PhoneCall size={20} /> Hardware Integration
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Know Who's Calling.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Connect a Caller ID device to your landline. When the phone rings, BillBite instantly opens a pop-up showing the customer's name, address, and last 3 orders so you can say "The usual Large Pepperoni, John?"
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "rgba(16, 185, 129, 0.1)", border: "2px solid #10B981", borderRadius: "16px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem", borderBottom: "1px solid rgba(16, 185, 129, 0.3)", paddingBottom: "1rem" }}>
                  <PhoneCall size={32} color="#34D399" className="animate-pulse" />
                  <div>
                    <div style={{ color: "white", fontWeight: 800, fontSize: "1.2rem" }}>Incoming Call...</div>
                    <div style={{ color: "#34D399", fontWeight: 700 }}>John Doe • +1 555-0198</div>
                  </div>
                </div>
                <div style={{ color: "white", fontWeight: 700, marginBottom: "0.5rem" }}>Delivery Address:</div>
                <div style={{ color: "#D1D5DB", fontSize: "0.9rem", marginBottom: "1rem" }}>42 Wallaby Way, Sydney</div>
                <div style={{ color: "white", fontWeight: 700, marginBottom: "0.5rem" }}>Last Order (3 days ago):</div>
                <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.75rem", borderRadius: "8px", color: "#D1D5DB", fontSize: "0.9rem", display: "flex", justifyContent: "space-between" }}>
                  <span>1x L Pepperoni</span>
                  <button style={{ background: "#10B981", color: "white", border: "none", padding: "0.25rem 0.75rem", borderRadius: "4px", fontWeight: 700 }}>Repeat Order</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Inventory by Weight (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Pizza size={20} /> Recipe Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Track Cheese by the Gram.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Stop losing money to over-cheesing. When a Medium Pizza is sold, the system deducts exactly 150g of Mozzarella, 1 dough ball, and 50g of sauce from your raw inventory.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", fontSize: "1.1rem" }}>Recipe: Medium Cheese</div>
                  <div style={{ display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "#F9FAFB", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                      <span style={{ color: "#4B5563", fontWeight: 600 }}>Mozzarella Block</span>
                      <span style={{ color: "#EF4444", fontWeight: 800 }}>- 150 Gms</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "#F9FAFB", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                      <span style={{ color: "#4B5563", fontWeight: 600 }}>Dough Balls</span>
                      <span style={{ color: "#EF4444", fontWeight: 800 }}>- 1 Unit</span>
                    </div>
                  </div>
                  <div style={{ background: "#ECFDF5", color: "#065F46", padding: "0.75rem", borderRadius: "8px", textAlign: "center", fontWeight: 700, border: "1px solid #A7F3D0" }}>
                    <CheckCircle2 size={16} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: "0.5rem" }}/>
                    Inventory Deducted
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
