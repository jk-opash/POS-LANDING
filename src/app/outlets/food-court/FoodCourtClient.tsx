"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Store, 
  Ticket, 
  Radio, 
  Tv, 
  Split,
  CreditCard,
  ChefHat,
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

export default function FoodCourtClient() {
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
              <span className="badge-outline-white" style={{ color: "#3B82F6", borderColor: "rgba(59, 130, 246, 0.2)", background: "rgba(59, 130, 246, 0.1)" }}>Food Courts & Shared Seating</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Centralize Your <span style={{ color: "#3B82F6" }}>Food Stalls</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              One cashier, multiple stalls. Print segregated token slips, integrate customer pagers, and beam ready-orders directly to public TV displays.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#3B82F6", color: "white" }}>
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Centralized Cashier (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Store size={20} /> Multi-Stall Billing
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                One POS. Five Restaurants.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Allow customers to buy a burger from Stall A and a coffee from Stall B in a single transaction. The system automatically routes the correct kitchen tickets to the respective stalls.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1.5rem" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", fontSize: "1.1rem", borderBottom: "1px dashed #D1D5DB", paddingBottom: "0.5rem" }}>Consolidated Bill #992</div>
                  
                  <div style={{ marginBottom: "1rem" }}>
                    <div style={{ fontSize: "0.85rem", color: "#EF4444", fontWeight: 700, textTransform: "uppercase" }}>Stall 1: Burger Hub</div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#111827", fontWeight: 600 }}>
                      <span>1x Cheese Burger</span>
                      <span>₹8.00</span>
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <div style={{ fontSize: "0.85rem", color: "#8B5CF6", fontWeight: 700, textTransform: "uppercase" }}>Stall 3: Caffeine Fix</div>
                    <div style={{ display: "flex", justifyContent: "space-between", color: "#111827", fontWeight: 600 }}>
                      <span>2x Iced Americano</span>
                      <span>₹9.00</span>
                    </div>
                  </div>
                  
                  <div style={{ borderTop: "2px solid #111827", paddingTop: "0.5rem", display: "flex", justifyContent: "space-between", color: "#111827", fontWeight: 800, fontSize: "1.2rem" }}>
                    <span>Total</span>
                    <span>₹17.00</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Token Slip Printing (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Ticket size={20} /> Token Generation
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Segregated Token Slips.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Print distinct, numbered token slips for the customer to hand to each specific stall. The POS splits the central receipt into mini-tokens instantly upon payment.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              {/* Slip 1 */}
              <div style={{ width: "150px", background: "white", padding: "1.5rem", borderTop: "4px dashed #D1D5DB", borderBottom: "4px dashed #D1D5DB", textAlign: "center", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3)" }}>
                <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.9rem", textTransform: "uppercase" }}>Burger Hub</div>
                <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Token Number</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#111827" }}>42</div>
                <div style={{ fontSize: "0.75rem", color: "#374151", marginTop: "1rem" }}>1x Cheese Burger</div>
              </div>
              
              {/* Slip 2 */}
              <div style={{ width: "150px", background: "white", padding: "1.5rem", borderTop: "4px dashed #D1D5DB", borderBottom: "4px dashed #D1D5DB", textAlign: "center", boxShadow: "0 10px 15px -3px rgba(0,0,0,0.3)" }}>
                <div style={{ fontWeight: 800, color: "#111827", fontSize: "0.9rem", textTransform: "uppercase" }}>Caffeine Fix</div>
                <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>Token Number</div>
                <div style={{ fontSize: "2.5rem", fontWeight: 900, color: "#111827" }}>19</div>
                <div style={{ fontSize: "0.75rem", color: "#374151", marginTop: "1rem" }}>2x Iced Americano</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Pager Integration (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Radio size={20} /> Buzzers & Pagers
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Hardware Integration.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Stop yelling names across a noisy food court. Hand the customer a physical buzzer device; link the buzzer # to the order in the POS, and automatically vibrate it when the kitchen hits "Ready".
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", maxWidth: "350px", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", textAlign: "center" }}>Link Customer Pager</div>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                    <div style={{ width: "100px", height: "100px", background: "#111827", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "8px solid #EF4444", boxShadow: "0 0 20px rgba(239, 68, 68, 0.5)" }}>
                      <span style={{ color: "white", fontWeight: 900, fontSize: "2rem" }}>14</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "center", color: "#374151", fontWeight: 600, marginBottom: "1rem" }}>Hand pager #14 to customer</div>
                  <button style={{ width: "100%", background: "#10B981", color: "white", border: "none", padding: "0.75rem", borderRadius: "8px", fontWeight: 700 }}>
                    Confirm & Send to Kitchen
                  </button>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. TV Screens (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Tv size={20} /> Public Display
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Live "Ready" Boards.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Cast a live order status board to any Smart TV. When the kitchen marks an order as ready, it instantly jumps from the "Preparing" column to the "Ready for Pickup" column with a loud chime.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "rgba(0,0,0,0.8)", border: "8px solid #374151", borderRadius: "16px", display: "flex", gap: "1rem" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#9CA3AF", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Preparing</div>
                  <div style={{ display: "grid", gap: "0.5rem", textAlign: "center" }}>
                    <div style={{ color: "white", fontSize: "1.5rem", fontWeight: 700 }}>104</div>
                    <div style={{ color: "white", fontSize: "1.5rem", fontWeight: 700 }}>105</div>
                  </div>
                </div>
                <div style={{ width: "2px", background: "#374151" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#10B981", fontWeight: 800, textTransform: "uppercase", marginBottom: "1rem", textAlign: "center" }}>Please Collect</div>
                  <div style={{ display: "grid", gap: "0.5rem", textAlign: "center" }}>
                    <div style={{ color: "#34D399", fontSize: "2rem", fontWeight: 900, animation: "pulse 2s infinite" }}>102</div>
                    <style dangerouslySetInnerHTML={{__html: `
                      @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.1); } }
                    `}} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Split Payments (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Split size={20} /> Complex Checkout
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Split Tenders Effortlessly.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Large groups at a food court often want to split the bill across multiple payment methods. Easily process ₹10 in cash, ₹5 via UPI, and ₹2 on a credit card for a single transaction.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", maxWidth: "350px", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", fontSize: "1.2rem", textAlign: "center" }}>Total Due: ₹17.00</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "#ECFDF5", borderRadius: "8px", border: "1px solid #A7F3D0" }}>
                      <span style={{ color: "#065F46", fontWeight: 700 }}>CASH Paid</span>
                      <span style={{ color: "#047857", fontWeight: 800 }}>₹10.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "#EFF6FF", borderRadius: "8px", border: "1px solid #BFDBFE" }}>
                      <span style={{ color: "#1E3A8A", fontWeight: 700 }}>CARD Paid</span>
                      <span style={{ color: "#1D4ED8", fontWeight: 800 }}>₹7.00</span>
                    </div>
                  </div>
                  <div style={{ textAlign: "center", color: "#10B981", fontWeight: 800, fontSize: "1.1rem" }}>
                    <CheckCircle2 size={20} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: "0.5rem" }}/>
                    Bill Settled
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
