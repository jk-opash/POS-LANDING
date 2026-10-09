"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Users, 
  Truck, 
  DollarSign, 
  ShieldCheck, 
  Headphones,
  Globe,
  Lock,
  Key,
  FileText,
  AlertTriangle,
  Receipt
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

export default function PlatformClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(99, 102, 241, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#818CF8", borderColor: "rgba(129, 140, 248, 0.2)", background: "rgba(129, 140, 248, 0.1)" }}>Enterprise Operations</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              The Core <span style={{ color: "#818CF8" }}>Platform</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              A complete suite of modules to manage multi-branch franchises, granular staff permissions, supplier CRMs, petty cash, and immutable security audit logs—all from one unified dashboard.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#6366F1" }}>
                Explore Platform Capabilities
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Multi-Branch Operations (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#6366F1", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Globe size={20} /> Multi-Branch Control
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                One Login. Endless Outlets.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Whether you run a single cafe or a franchise of 50 restaurants globally, manage them all from a single Admin panel. Configure per-branch taxes, currencies, operating hours, and receipt footers effortlessly.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Building2 size={18} color="#6366F1" /> Branch-Level Settings
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Set independent SGST/CGST rules and timezones per location.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <ShieldCheck size={18} color="#6366F1" /> Unified Access
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Jump between stores instantly without logging out and back in.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid var(--pp-border)" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#111827" }}>Global Store Selector</div>
                    <div className="badge-outline" style={{ color: "#6366F1", borderColor: "rgba(99, 102, 241, 0.2)", background: "rgba(99, 102, 241, 0.1)" }}>3 Active Locations</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    {/* Location 1 (Active) */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "rgba(99, 102, 241, 0.05)", border: "1px solid rgba(99, 102, 241, 0.3)", borderRadius: "12px", position: "relative" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "#6366F1", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>NY</div>
                      <div>
                        <div style={{ fontWeight: 700, color: "#3730A3" }}>Downtown Manhattan (Active)</div>
                        <div style={{ fontSize: "0.85rem", color: "#4F46E5" }}>Currency: INR (₹) • Tax: 8.875%</div>
                      </div>
                    </div>

                    {/* Location 2 */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: "white", border: "1px solid var(--pp-border)", borderRadius: "12px" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "8px", background: "var(--pp-bg-light)", color: "var(--pp-text-muted)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700 }}>LND</div>
                      <div>
                        <div style={{ fontWeight: 600, color: "#111827" }}>Soho London</div>
                        <div style={{ fontSize: "0.85rem", color: "var(--pp-text-muted)" }}>Currency: GBP (£) • Tax: 20% VAT</div>
                      </div>
                    </div>

                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Staff & Roles (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#A78BFA", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Key size={20} /> Role Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Lock Down Your Cash Register.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Not every employee should be able to process refunds or open the cash drawer. Restrict critical actions behind 4-digit Manager PIN codes and maintain a strict Owner → Manager → Staff hierarchy.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Lock size={20} color="#A78BFA" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Granular Permissions</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Toggle exactly what a cashier can and cannot do on the POS screen.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Users size={20} color="#A78BFA" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Quick PIN Logins</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Staff can switch users in seconds using 4-digit codes during a rush.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Role: Cashier</div>
                  <div style={{ padding: "0.3rem 0.75rem", background: "rgba(255,255,255,0.1)", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 600, color: "white" }}>Permissions</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { rule: "Punch Orders", allowed: true },
                    { rule: "Apply 10% Discount", allowed: true },
                    { rule: "Void Sent KOTs", allowed: false, manager: true },
                    { rule: "Open Cash Drawer (No Sale)", allowed: false, manager: true }
                  ].map((perm, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.9)", fontSize: "0.95rem" }}>{perm.rule}</span>
                      {perm.allowed ? (
                        <span style={{ color: "#10B981", fontSize: "0.85rem", fontWeight: 700 }}>ALLOWED</span>
                      ) : (
                        <span style={{ color: "#EF4444", fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                          <Lock size={14} /> MGR PIN REQ.
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Suppliers & Finances (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <DollarSign size={20} /> Suppliers & Finance
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Track Every Single Penny.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Maintain a centralized vendor directory for your suppliers. Track daily petty cash, log utility bill payouts directly from the POS till, and keep a strict ledger of raw material expenses.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Truck size={18} color="#F59E0B" /> Supplier CRM
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Store vendor contacts, payment terms, and past Purchase Orders.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Receipt size={18} color="#F59E0B" /> Petty Cash Logging
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Cashiers can log daily expenses (e.g. "Gas Delivery: ₹45") right on the POS.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#111827" }}>Add Expense (Till)</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--pp-text-muted)" }}>Expense Category</label>
                      <div style={{ padding: "0.75rem 1rem", border: "1px solid var(--pp-border)", borderRadius: "8px", background: "var(--pp-bg-light)", fontWeight: 600 }}>Raw Material (Vendor)</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--pp-text-muted)" }}>Vendor / Description</label>
                      <div style={{ padding: "0.75rem 1rem", border: "1px solid var(--pp-border)", borderRadius: "8px", background: "var(--pp-bg-light)", fontWeight: 600 }}>Fresh Farms Ltd - Daily Produce</div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <label style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--pp-text-muted)" }}>Amount Withdrawn (Cash)</label>
                      <div style={{ padding: "0.75rem 1rem", border: "2px solid #F59E0B", borderRadius: "8px", background: "rgba(245, 158, 11, 0.05)", fontWeight: 800, fontSize: "1.1rem", color: "#92400E" }}>₹ 145.00</div>
                    </div>
                    <button style={{ width: "100%", padding: "1rem", background: "#F59E0B", border: "none", borderRadius: "8px", color: "white", fontWeight: 700, marginTop: "0.5rem", boxShadow: "0 4px 6px -1px rgba(245, 158, 11, 0.4)" }}>
                      Record Expense
                    </button>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Security & Audit Logs (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <FileText size={20} /> Immutable Audit Logs
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Know Exactly Who Did What.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Protect your business from internal fraud. Every sensitive action—from opening the cash drawer without a sale, to applying a 100% discount, to changing inventory stock counts manually—is logged permanently.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <AlertTriangle size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Severity Tagging</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>High-risk actions are flagged in red for immediate owner review.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <ShieldCheck size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Time-Stamped</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Every log includes the exact second the action occurred and the user PIN tied to it.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>System Activity Log</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { action: "Cash Drawer Opened (No Sale)", user: "Mark (Mgr)", time: "09:42 PM", risk: "HIGH", color: "#EF4444" },
                    { action: "100% Comp Discount Applied", user: "Mark (Mgr)", time: "08:15 PM", risk: "HIGH", color: "#EF4444" },
                    { action: "Inventory Manually Adjusted", user: "Admin", time: "03:20 PM", risk: "MEDIUM", color: "#F59E0B" },
                    { action: "End of Shift Executed", user: "Sarah (Cashier)", time: "03:00 PM", risk: "LOW", color: "#10B981" }
                  ].map((log, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "12px", borderLeft: `3px solid ${log.color}` }}>
                      <div>
                        <div style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem", fontSize: "0.95rem" }}>{log.action}</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>User: {log.user} • {log.time}</div>
                      </div>
                      <div style={{ padding: "0.25rem 0.5rem", background: `${log.color}20`, color: log.color, borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700 }}>
                        {log.risk} RISK
                      </div>
                    </div>
                  ))}
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
            style={{ maxWidth: "700px", margin: "0 auto", background: "white", padding: "4rem 2rem", borderRadius: "32px", border: "1px solid var(--pp-border)", boxShadow: "var(--shadow-xl)" }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)" }}>
              Take Complete Control.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              From managing petty cash to locking down staff permissions across 50 outlets, our enterprise platform puts you firmly in the driver's seat.
            </p>
            <Link href="/demo" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#6366F1", color: "white" }}>
              Upgrade Your Operations
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
