"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Truck, 
  RefreshCcw, 
  TrendingUp, 
  ShieldCheck, 
  Map
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

export default function ChainClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#A855F7", borderColor: "rgba(168, 85, 247, 0.2)", background: "rgba(168, 85, 247, 0.1)" }}>Large Chains & Enterprises</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Scale Without <span style={{ color: "#A855F7" }}>Limits</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Control 5 or 500 outlets from a single cloud dashboard. Push global menu updates, calculate franchise royalties, and dispatch goods from your central kitchen.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#A855F7", color: "white" }}>
                Contact Enterprise Sales
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Central Kitchen Dispatch (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Truck size={20} /> Supply Chain
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Central Kitchen Control.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Outlets raise digital indents (purchase requests) for raw materials. The Central Kitchen consolidates these, dispatches the truck, and stock is automatically updated at the outlet upon delivery acceptance.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                  <div style={{ fontWeight: 800, color: "#111827" }}>Dispatch #TRK-882</div>
                  <div style={{ background: "#FEF3C7", color: "#D97706", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 700 }}>IN TRANSIT</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 700 }}>From</div>
                    <div style={{ fontWeight: 800, color: "#111827" }}>Central Kitchen HQ</div>
                  </div>
                  <Truck size={24} color="#D1D5DB" />
                  <div style={{ flex: 1, textAlign: "right" }}>
                    <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 700 }}>To</div>
                    <div style={{ fontWeight: 800, color: "#111827" }}>Outlet A (Downtown)</div>
                  </div>
                </div>
                <div style={{ background: "#F9FAFB", padding: "1rem", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", color: "#374151", fontWeight: 600 }}>
                    <span>Marinated Chicken</span>
                    <span>20 KG</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Master Menu Sync (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <RefreshCcw size={20} /> Cloud Sync
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Global Menu Updates.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Change the price of a Burger from ₹5 to ₹6 in the Master Dashboard, and push the update to all 50 outlets simultaneously. Outlets cannot override global pricing without admin approval.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)", textAlign: "center" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", background: "rgba(59, 130, 246, 0.2)", color: "#93C5FD", padding: "0.5rem 1rem", borderRadius: "100px", fontWeight: 700, marginBottom: "2rem" }}>
                  <RefreshCcw size={16} className="animate-spin-slow" /> Pushing to 50 Outlets
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,0,0,0.5)", padding: "1rem", borderRadius: "12px", marginBottom: "0.5rem" }}>
                  <span style={{ color: "white", fontWeight: 600 }}>New York (Times Sq)</span>
                  <span style={{ color: "#34D399", fontWeight: 700 }}>Synced 100%</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,0,0,0.5)", padding: "1rem", borderRadius: "12px", marginBottom: "0.5rem" }}>
                  <span style={{ color: "white", fontWeight: 600 }}>Los Angeles (Downtown)</span>
                  <span style={{ color: "#34D399", fontWeight: 700 }}>Synced 100%</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(0,0,0,0.5)", padding: "1rem", borderRadius: "12px" }}>
                  <span style={{ color: "white", fontWeight: 600 }}>Chicago (Loop)</span>
                  <span style={{ color: "#60A5FA", fontWeight: 700 }}>Syncing... 45%</span>
                </div>
                <style dangerouslySetInnerHTML={{__html: `
                  .animate-spin-slow { animation: spin 3s linear infinite; }
                  @keyframes spin { 100% { transform: rotate(360deg); } }
                `}} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Franchise Royalty (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <TrendingUp size={20} /> Finance
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Automated Royalties.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Do you charge franchisees a 5% royalty on gross sales? BillBite automatically calculates royalties, generates invoices, and provides a transparent ledger for both the franchisor and the franchisee.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", fontSize: "1.1rem" }}>October Royalty: Franchise #42</div>
                  <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", borderRadius: "12px", padding: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "#4B5563" }}>
                      <span>Gross Sales (Oct)</span>
                      <span style={{ fontWeight: 700 }}>₹124,500.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "#4B5563" }}>
                      <span>Agreed Royalty %</span>
                      <span style={{ fontWeight: 700 }}>5.0%</span>
                    </div>
                    <div style={{ borderTop: "2px solid #111827", paddingTop: "1rem", display: "flex", justifyContent: "space-between", color: "#065F46", fontWeight: 800, fontSize: "1.2rem" }}>
                      <span>Due to HQ</span>
                      <span>₹6,225.00</span>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Role-based Access (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EF4444", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ShieldCheck size={20} /> Security & Auditing
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Strict Permissions.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Prevent internal theft and errors. Cashiers cannot apply &gt;10% discounts without an Admin PIN. Regional Managers can view reports for their 5 stores, but not the whole company.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ color: "white", fontWeight: 800, marginBottom: "1.5rem", fontSize: "1.1rem" }}>Role: Regional Manager</div>
                <div style={{ display: "grid", gap: "0.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(16, 185, 129, 0.1)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                    <span style={{ color: "white", fontWeight: 600 }}>View Store Reports</span>
                    <span style={{ background: "#10B981", color: "white", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 800 }}>ALLOWED</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(16, 185, 129, 0.1)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(16, 185, 129, 0.3)" }}>
                    <span style={{ color: "white", fontWeight: 600 }}>Approve Inventory Indents</span>
                    <span style={{ background: "#10B981", color: "white", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 800 }}>ALLOWED</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(239, 68, 68, 0.1)", padding: "1rem", borderRadius: "8px", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                    <span style={{ color: "white", fontWeight: 600 }}>Change Global Menu Prices</span>
                    <span style={{ background: "#EF4444", color: "white", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.75rem", fontWeight: 800 }}>DENIED</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Multi-Store Analytics (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Map size={20} /> Enterprise Analytics
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Bird's Eye View.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Compare outlet performance side-by-side. Is your Downtown store selling more lattes than the Uptown store? Make data-driven decisions on where to run localized marketing campaigns.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1.5rem", fontSize: "1.1rem" }}>Top Performing Outlets (Today)</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", color: "#374151", fontWeight: 600, fontSize: "0.9rem" }}>
                        <span>1. Downtown HQ</span>
                        <span>₹12,450</span>
                      </div>
                      <div style={{ width: "100%", height: "8px", background: "#F3F4F6", borderRadius: "4px" }}>
                        <div style={{ width: "100%", height: "100%", background: "#3B82F6", borderRadius: "4px" }} />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", color: "#374151", fontWeight: 600, fontSize: "0.9rem" }}>
                        <span>2. Airport Terminal A</span>
                        <span>₹9,200</span>
                      </div>
                      <div style={{ width: "100%", height: "8px", background: "#F3F4F6", borderRadius: "4px" }}>
                        <div style={{ width: "75%", height: "100%", background: "#3B82F6", borderRadius: "4px" }} />
                      </div>
                    </div>

                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem", color: "#374151", fontWeight: 600, fontSize: "0.9rem" }}>
                        <span>3. Westside Mall</span>
                        <span>₹5,100</span>
                      </div>
                      <div style={{ width: "100%", height: "8px", background: "#F3F4F6", borderRadius: "4px" }}>
                        <div style={{ width: "40%", height: "100%", background: "#3B82F6", borderRadius: "4px" }} />
                      </div>
                    </div>

                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
