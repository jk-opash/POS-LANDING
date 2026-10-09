"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Receipt, 
  TrendingDown, 
  Truck, 
  AlertCircle, 
  BarChart3, 
  Store, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  RefreshCw,
  Scale
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

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

export default function InventoryClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white">Precision Control</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Smart POS <span style={{ color: "var(--pp-accent)" }}>Inventory Management</span> Software
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Stop guessing your food costs. Track every gram of raw material, manage complex recipes, and auto-deduct stock with every single sale across all your outlets.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Book a Free Demo
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Recipe & Yield Management (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--pp-accent)", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Receipt size={20} /> Recipe Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Map Ingredients to Menu Items with Precision.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Break down every dish into its exact raw ingredients. From a pinch of salt to a slice of cheese, our POS maps your complex recipes so that your theoretical stock matches your physical stock perfectly.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Multi-level sub-recipes and batch preparations",
                  "Yield management to account for cooking loss",
                  "Accurate cost-per-dish calculations in real-time"
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <CheckCircle2 color="var(--pp-accent)" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", aspectRatio: "4/3", background: "white", borderRadius: "24px", padding: "2rem", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)", display: "flex", flexDirection: "column", gap: "1rem", position: "relative", overflow: "hidden" }}>
                {/* Abstract UI Representation */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "1rem", borderBottom: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Margherita Pizza</div>
                  <div style={{ color: "var(--pp-accent)", fontWeight: 700 }}>₹1.45 Cost</div>
                </div>
                {[
                  { name: "Pizza Dough", qty: "200g", cost: "₹0.40" },
                  { name: "Tomato Sauce", qty: "50ml", cost: "₹0.15" },
                  { name: "Mozzarella Cheese", qty: "100g", cost: "₹0.80" },
                  { name: "Fresh Basil", qty: "5g", cost: "₹0.10" }
                ].map((ing, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem", background: "var(--pp-bg-light)", borderRadius: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                      <Scale size={18} color="var(--pp-text-muted)" />
                      <span style={{ fontWeight: 600 }}>{ing.name}</span>
                    </div>
                    <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.95rem" }}>
                      <span style={{ color: "var(--pp-text-muted)" }}>{ing.qty}</span>
                      <span style={{ fontWeight: 700 }}>{ing.cost}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Auto Deductions (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--pp-accent)", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <TrendingDown size={20} /> Auto-Deductions & Alerts
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Real-Time Stock Depletion with Every Sale.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                The moment a bill is punched, inventory is instantly adjusted. Never wait for end-of-day reports to know what you are running low on. 
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <AlertCircle size={28} color="var(--pp-accent)" style={{ marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Low Stock Alerts</h4>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Get push notifications when ingredients hit critical thresholds.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <RefreshCw size={28} color="var(--pp-accent)" style={{ marginBottom: "1rem" }} />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Live Sync</h4>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Changes reflect instantly across kitchen displays and admin panels.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: "0.05em", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
                    <span>Ingredient</span>
                    <span>Status</span>
                  </div>
                  {[
                    { name: "Coffee Beans", stock: "12 kg", status: "Healthy", color: "#10B981" },
                    { name: "Milk", stock: "4 L", status: "Low Stock", color: "#F59E0B" },
                    { name: "Almond Syrup", stock: "0.5 L", status: "Critical", color: "#EF4444" },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(255,255,255,0.05)", borderRadius: "12px" }}>
                      <span style={{ fontWeight: 600 }}>{item.name}</span>
                      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                        <span style={{ color: "rgba(255,255,255,0.7)" }}>{item.stock}</span>
                        <span style={{ padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: "0.8rem", fontWeight: 700, backgroundColor: `${item.color}20`, color: item.color }}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PO & Suppliers (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--pp-accent)", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Truck size={20} /> Suppliers & Purchasing
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                End-to-End Procurement Lifecycle.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Automate your restocking process. Generate Purchase Orders (POs) automatically when stock is low, track inward goods, and manage supplier payments all from a unified dashboard.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>Smart Indenting</h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Outlets can raise material requests to the central kitchen easily.</p>
                </div>
                <div>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>Invoice Matching</h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Match received items against POs to prevent supplier fraud.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2.5rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Recent Purchase Orders</div>
                    <div className="badge-outline">Auto-Gen Enabled</div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { id: "PO-2091", supplier: "Fresh Farms Dairy", amount: "₹450.00", status: "Delivered" },
                      { id: "PO-2092", supplier: "Global Spices Co.", amount: "₹125.50", status: "Pending" },
                      { id: "PO-2093", supplier: "Meat Masters", amount: "₹890.00", status: "Approved" },
                    ].map((po, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", border: "1px solid var(--pp-border)", borderRadius: "12px" }}>
                        <div>
                          <div style={{ fontWeight: 700, color: "var(--pp-accent)", marginBottom: "0.25rem" }}>{po.id}</div>
                          <div style={{ fontSize: "0.9rem", color: "var(--pp-text-muted)", fontWeight: 600 }}>{po.supplier}</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontWeight: 700, fontSize: "1.1rem" }}>{po.amount}</div>
                          <div style={{ fontSize: "0.85rem", color: po.status === 'Delivered' ? '#10B981' : po.status === 'Approved' ? '#3B82F6' : '#F59E0B', fontWeight: 600 }}>{po.status}</div>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Analytics & Audit (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--pp-accent)", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ShieldCheck size={20} /> Analytics & Audit Trails
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Identify Wastage & Prevent Pilferage.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Compare theoretical stock (what should be left) against physical stock (what is actually left) to pinpoint exact wastage, over-portioning, and theft.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Detailed Audit Logs: Track who made stock adjustments and when.",
                  "Wastage Reports: Log damaged or expired goods.",
                  "Cost of Goods Sold (COGS) analytics to improve profit margins."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <BarChart3 color="var(--pp-accent)" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "rgba(255,255,255,0.9)" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "3rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "80px", height: "80px", borderRadius: "50%", background: "rgba(255,90,31,0.1)", marginBottom: "2rem" }}>
                   <BarChart3 size={40} color="var(--pp-accent)" />
                </div>
                <h3 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Cut Food Costs by up to 15%</h3>
                <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
                  Our analytics engine identifies pricing inefficiencies and highlights high-wastage items, allowing you to optimize your menu instantly.
                </p>
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
              Take Control of Your Kitchen.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Join thousands of restaurants saving hours of manual stock-taking every week. Stop the leakage and start maximizing profits today.
            </p>
            <Link href="/demo" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px" }}>
              Schedule a Free Walkthrough
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
