"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  MonitorSmartphone, 
  ChefHat, 
  Clock, 
  UtensilsCrossed, 
  WifiOff,
  CheckCircle2,
  ArrowRight
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

export default function QSRClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, rgba(16, 185, 129, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#10B981", borderColor: "rgba(16, 185, 129, 0.2)", background: "rgba(16, 185, 129, 0.1)" }}>Quick Service Restaurants (QSR)</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Speed is your <span style={{ color: "#10B981" }}>Only Metric</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Connect self-serve kiosks, drive-thru timers, and kitchen displays into one unified ecosystem designed entirely to lower your customer wait times.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#10B981", color: "white" }}>
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Self Serve Kiosk (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <MonitorSmartphone size={20} /> Kiosk Mode
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Line-Busting Kiosks.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Turn any standard iPad or Android tablet into a beautiful self-serve kiosk. Customers can browse visual menus, customize their burgers, and tap to pay with zero staff intervention.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", maxWidth: "400px", padding: "1.5rem", background: "#111827", borderRadius: "32px", border: "12px solid #374151", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
                <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
                  <div style={{ color: "white", fontSize: "1.2rem", fontWeight: 800 }}>Touch to Order</div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
                  <div style={{ background: "white", padding: "1rem", borderRadius: "12px", textAlign: "center" }}>
                    <UtensilsCrossed size={32} color="#10B981" style={{ margin: "0 auto 0.5rem" }}/>
                    <div style={{ fontWeight: 800, color: "#111827" }}>Meals</div>
                  </div>
                  <div style={{ background: "white", padding: "1rem", borderRadius: "12px", textAlign: "center" }}>
                    <Zap size={32} color="#F59E0B" style={{ margin: "0 auto 0.5rem" }}/>
                    <div style={{ fontWeight: 800, color: "#111827" }}>Sides</div>
                  </div>
                </div>
                <button style={{ width: "100%", background: "#3B82F6", color: "white", border: "none", padding: "1rem", borderRadius: "100px", fontWeight: 800, fontSize: "1.1rem" }}>
                  View Cart (₹12.50)
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KDS (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ChefHat size={20} /> Kitchen Display
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Kill the Paper Tickets.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Orders fire directly from the kiosk or counter to digital screens on the assembly line. Color-coded timers ensure burgers never sit under the heat lamp for too long.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "#111827", border: "4px solid #374151", borderRadius: "16px" }}>
                <div style={{ display: "flex", gap: "1rem" }}>
                  
                  {/* Urgent Ticket */}
                  <div style={{ flex: 1, background: "rgba(239, 68, 68, 0.1)", border: "2px solid #EF4444", padding: "1rem", borderRadius: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(239, 68, 68, 0.3)", paddingBottom: "0.5rem", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 800, color: "white" }}>#104</span>
                      <span style={{ color: "#FCA5A5", fontWeight: 700 }}>04:20</span>
                    </div>
                    <div style={{ color: "white", fontWeight: 700 }}>1x Double Smash</div>
                    <div style={{ color: "#FCA5A5", fontSize: "0.85rem", paddingLeft: "1rem", marginTop: "0.25rem" }}>- NO Pickles</div>
                  </div>

                  {/* New Ticket */}
                  <div style={{ flex: 1, background: "rgba(255,255,255,0.05)", border: "2px solid rgba(255,255,255,0.1)", padding: "1rem", borderRadius: "8px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.5rem", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 800, color: "white" }}>#105</span>
                      <span style={{ color: "#9CA3AF", fontWeight: 700 }}>00:15</span>
                    </div>
                    <div style={{ color: "white", fontWeight: 700 }}>2x Crispy Chicken</div>
                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Drive-Thru Timers (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Clock size={20} /> Drive-Thru Mode
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Beat the Window Clock.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Enable drive-thru mode to separate window cars from lobby orders. Track metrics like "Time at Speaker" and "Time at Window" to optimize your speed of service during rush hour.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                    <div style={{ width: "48px", height: "48px", background: "rgba(236, 72, 153, 0.1)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", color: "#EC4899" }}>
                      <Clock size={24} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, color: "#111827", fontSize: "1.1rem" }}>Car #4 (Red Civic)</div>
                      <div style={{ color: "#EC4899", fontWeight: 700, fontSize: "0.9rem" }}>Current: At Window</div>
                    </div>
                  </div>
                  
                  <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1.25rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#374151", fontWeight: 600 }}>Speaker Time</span>
                      <span style={{ color: "#10B981", fontWeight: 800 }}>45s <CheckCircle2 size={14} style={{ display: "inline" }}/></span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#374151", fontWeight: 600 }}>Window Time</span>
                      <span style={{ color: "#EF4444", fontWeight: 800 }}>1m 20s (Warning)</span>
                    </div>
                    <button style={{ background: "#111827", color: "white", padding: "0.75rem", borderRadius: "8px", fontWeight: 700, border: "none" }}>
                      Order Handed Out
                    </button>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Offline Mode (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <WifiOff size={20} /> True Offline
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Internet Drops? Keep Billing.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                A QSR cannot afford to stop taking orders if the ISP goes down. BillBite caches orders locally and keeps printing to the kitchen. Once internet returns, it silently syncs to the cloud.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.3)", padding: "1rem", borderRadius: "8px", color: "#C4B5FD", fontWeight: 700, marginBottom: "1rem" }}>
                  <WifiOff size={20} color="#A78BFA" />
                  Internet Connection Lost
                </div>
                <div style={{ color: "white", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  Offline Mode Active
                </div>
                <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                  Orders are being cached securely. You can continue accepting cash payments and printing to the kitchen.
                </div>
                <div style={{ marginTop: "1rem", color: "#A78BFA", fontSize: "0.85rem", fontWeight: 700 }}>
                  24 Orders waiting to sync...
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
