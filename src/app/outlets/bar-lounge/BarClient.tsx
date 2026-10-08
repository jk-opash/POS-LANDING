"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Beer, 
  Wine, 
  CreditCard, 
  Clock, 
  Zap, 
  Banknote,
  Martini,
  Droplets,
  CalendarClock,
  Percent,
  ShieldCheck,
  UserCheck,
  ListOrdered
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

export default function BarClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#8B5CF6", borderColor: "rgba(139, 92, 246, 0.2)", background: "rgba(139, 92, 246, 0.1)" }}>Bars, Pubs & Lounges</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Built for <span style={{ color: "#8B5CF6" }}>High-Volume Nightlife</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              When the bar is three deep on a Friday night, every second counts. Speed up service with fast cash modes, secure tab pre-authorizations, automated happy hour pricing, and precise liquid inventory tracking.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#8B5CF6" }}>
                See it in Action
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Fast Cash & Quick Tenders (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Zap size={20} /> Fast Cash Mode
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Two Taps to Close a Check.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Bartenders don't have time to navigate through clunky payment screens. Our Fast Cash interface anticipates the bills customers will hand over, calculating exact change instantly so your bartenders can keep pouring.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "One-touch Smart Cash buttons (₹10, ₹20, ₹50, ₹100).",
                  "Instant exact change calculation displayed in large font.",
                  "Zero confirmation screens required to print receipt."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(16, 185, 129, 0.1)", color: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Banknote size={14} />
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
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#111827" }}>Total: ₹14.50</div>
                  <div className="badge-outline-white" style={{ background: "#F3F4F6", color: "#374151", border: "none" }}>2x IPA Draft</div>
                </div>
                
                {/* Abstract Quick Tender UI */}
                <div>
                  <div style={{ color: "#6B7280", fontWeight: 700, marginBottom: "0.75rem", fontSize: "0.9rem", textTransform: "uppercase" }}>Quick Cash Tender</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    
                    <button style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", padding: "1rem", borderRadius: "12px", fontWeight: 800, fontSize: "1.2rem", color: "#111827", cursor: "pointer" }}>
                      ₹15
                    </button>
                    <button style={{ background: "#10B981", border: "1px solid #059669", padding: "1rem", borderRadius: "12px", fontWeight: 800, fontSize: "1.2rem", color: "white", cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(16, 185, 129, 0.4)" }}>
                      ₹20
                    </button>
                    <button style={{ background: "#F3F4F6", border: "1px solid #E5E7EB", padding: "1rem", borderRadius: "12px", fontWeight: 800, fontSize: "1.2rem", color: "#111827", cursor: "pointer" }}>
                      ₹50
                    </button>

                  </div>

                  <div style={{ background: "#ECFDF5", border: "2px dashed #34D399", padding: "1.5rem", borderRadius: "16px", textAlign: "center" }}>
                    <div style={{ color: "#065F46", fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>Change Due</div>
                    <div style={{ color: "#059669", fontWeight: 900, fontSize: "2.5rem" }}>₹5.50</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Secure Tab Management (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <CreditCard size={20} /> Tab Pre-Authorization
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Keep Tabs Open Securely.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Don't hold on to physical credit cards behind the bar. Swipe a customer's card once to securely pre-authorize a set amount and hand it right back. Bartenders can simply search the customer's name to add drinks to their tab all night.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <ShieldCheck size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Zero Walk-Outs</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Funds are guaranteed. If they leave without paying, just close the tab.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <UserCheck size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Name-Based Tabs</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Search by "John Doe" or look up the last 4 digits of their card.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Active Tabs</div>
                  <button style={{ background: "#3B82F6", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "8px", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>+ New Tab (Swipe)</button>
                </div>

                <input type="text" placeholder="Search by name or card..." style={{ width: "100%", padding: "1rem", background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px", color: "white", marginBottom: "1.5rem" }} readOnly />

                {/* Tab List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  
                  {/* Tab 1 */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "12px" }}>
                    <div>
                      <div style={{ fontWeight: 700, color: "white", fontSize: "1.1rem" }}>Mike Johnson</div>
                      <div style={{ fontSize: "0.85rem", color: "#93C5FD", display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                        <CreditCard size={14} /> Visa ending in 4242
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 800, color: "white", fontSize: "1.2rem" }}>₹84.00</div>
                      <div style={{ fontSize: "0.75rem", color: "#60A5FA", background: "rgba(59,130,246,0.2)", padding: "0.15rem 0.5rem", borderRadius: "100px", marginTop: "0.25rem" }}>Auth: ₹150.00</div>
                    </div>
                  </div>

                  {/* Tab 2 */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}>
                    <div>
                      <div style={{ fontWeight: 700, color: "white", fontSize: "1.1rem" }}>Sarah Smith</div>
                      <div style={{ fontSize: "0.85rem", color: "#94A3B8", display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "0.25rem" }}>
                        <CreditCard size={14} /> Amex ending in 1004
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 800, color: "white", fontSize: "1.2rem" }}>₹32.50</div>
                      <div style={{ fontSize: "0.75rem", color: "#94A3B8", background: "rgba(255,255,255,0.1)", padding: "0.15rem 0.5rem", borderRadius: "100px", marginTop: "0.25rem" }}>Auth: ₹50.00</div>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Happy Hour Automation (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <CalendarClock size={20} /> Happy Hour Scheduling
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Pricing That Shifts Automatically.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Stop relying on bartenders to remember when discounts start and end. Set up complex pricing rules (e.g., "50% off all Draft Beer on Tuesdays between 4 PM and 7 PM") that activate and deactivate precisely based on the system clock.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Percent size={18} color="#F59E0B" /> Rule-Based Discounts
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Apply rules to specific categories (e.g., well drinks) or individual items.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Clock size={18} color="#F59E0B" /> To-The-Minute Accuracy
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>The moment the clock strikes 7:01 PM, full prices are restored instantly.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  
                  <div style={{ background: "#FEF3C7", border: "1px solid #FDE68A", borderRadius: "16px", padding: "1.5rem", marginBottom: "1.5rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <div style={{ fontWeight: 800, color: "#92400E", fontSize: "1.2rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <Beer size={20} /> Friday Happy Hour
                      </div>
                      <div style={{ background: "#F59E0B", color: "white", padding: "0.25rem 0.75rem", borderRadius: "100px", fontWeight: 800, fontSize: "0.8rem", animation: "pulse 2s infinite" }}>
                        ACTIVE NOW
                      </div>
                    </div>
                    <div style={{ color: "#B45309", fontWeight: 600, fontSize: "0.9rem" }}>
                      Ends in: 42 minutes (at 7:00 PM)
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    {/* Item 1 */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", borderBottom: "1px solid #E5E7EB" }}>
                      <div style={{ fontWeight: 700, color: "#111827" }}>Stella Artois (Pint)</div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: "1.2rem" }}>₹4.00</div>
                        <div style={{ color: "#9CA3AF", fontSize: "0.85rem", textDecoration: "line-through", fontWeight: 600 }}>₹8.00</div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem" }}>
                      <div style={{ fontWeight: 700, color: "#111827" }}>House Margarita</div>
                      <div style={{ textAlign: "right" }}>
                        <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: "1.2rem" }}>₹6.00</div>
                        <div style={{ color: "#9CA3AF", fontSize: "0.85rem", textDecoration: "line-through", fontWeight: 600 }}>₹12.00</div>
                      </div>
                    </div>

                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Liquid Inventory & Recipes (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#14B8A6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Droplets size={20} /> Liquid Inventory
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Track Every Drop. Stop Pilferage.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Cocktails aren't sold in bottles, they're sold in milliliters. Map your exact cocktail recipes (e.g., 60ml Bourbon, 15ml Syrup) to the POS. Every time an Old Fashioned is sold, the exact liquid volume is deducted from your master stock in real-time.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Martini size={20} color="#14B8A6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Recipe Mapping</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Link sub-ingredients to complex drinks for perfect cost-analysis.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Wine size={20} color="#14B8A6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Variance Reports</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Compare POS sales data against physical bottle counts to spot theft.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", position: "relative" }}>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid #334155", paddingBottom: "1rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Recipe: Old Fashioned</div>
                  <div style={{ color: "#14B8A6", fontSize: "0.9rem", fontWeight: 800 }}>COST: ₹2.14</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {/* Ingredient 1 */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                    <div style={{ color: "white", fontWeight: 600 }}>Maker's Mark Bourbon</div>
                    <div style={{ color: "#5EEAD4", fontWeight: 700 }}>- 60 ML</div>
                  </div>
                  {/* Ingredient 2 */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                    <div style={{ color: "white", fontWeight: 600 }}>Simple Syrup</div>
                    <div style={{ color: "#5EEAD4", fontWeight: 700 }}>- 15 ML</div>
                  </div>
                  {/* Ingredient 3 */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 1rem", background: "rgba(255,255,255,0.05)", borderRadius: "8px" }}>
                    <div style={{ color: "white", fontWeight: 600 }}>Angostura Bitters</div>
                    <div style={{ color: "#5EEAD4", fontWeight: 700 }}>- 2 Dashes</div>
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px dashed #334155" }}>
                  <div style={{ fontSize: "0.85rem", color: "#94A3B8", fontWeight: 700, marginBottom: "0.75rem", textTransform: "uppercase" }}>Live Master Stock Impact</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ color: "white", fontWeight: 700 }}>Maker's Mark (750ml Bottle)</div>
                    <div style={{ background: "rgba(239, 68, 68, 0.2)", color: "#FCA5A5", padding: "0.25rem 0.5rem", borderRadius: "4px", fontSize: "0.8rem", fontWeight: 700 }}>
                      420 ML REMAINING
                    </div>
                  </div>
                  {/* Progress bar */}
                  <div style={{ width: "100%", height: "8px", background: "#334155", borderRadius: "4px", marginTop: "0.75rem", overflow: "hidden" }}>
                    <div style={{ width: "56%", height: "100%", background: "#EF4444" }} />
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Bouncer / Door Management (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ListOrdered size={20} /> Door Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Control the Crowd from the Door.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Equip your security and hosts with mobile POS access. Charge cover fees, verify guest lists, track VIP arrivals, and monitor venue capacity limits in real-time before guests even reach the bar.
              </motion.p>
              
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "300px", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ textAlign: "center", marginBottom: "1.5rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "0.9rem", color: "#6B7280", fontWeight: 700, textTransform: "uppercase" }}>Current Capacity</div>
                    <div style={{ fontSize: "3rem", fontWeight: 900, color: "#111827", lineHeight: 1 }}>142<span style={{ fontSize: "1.5rem", color: "#9CA3AF" }}>/200</span></div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    <button style={{ width: "100%", padding: "1rem", background: "#F3F4F6", border: "1px solid #E5E7EB", borderRadius: "12px", color: "#111827", fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                      General Admission <span>₹20</span>
                    </button>
                    <button style={{ width: "100%", padding: "1rem", background: "rgba(236, 72, 153, 0.1)", border: "1px solid rgba(236, 72, 153, 0.3)", borderRadius: "12px", color: "#BE185D", fontWeight: 700, display: "flex", justifyContent: "space-between", alignItems: "center", cursor: "pointer" }}>
                      VIP List Check-in <span>Free</span>
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
              Keep the Drinks Flowing.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Don't let a slow POS system cost you revenue on your busiest nights. Upgrade to a system designed specifically for high-volume bars and nightclubs.
            </p>
            <Link href="/#demo-form" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#8B5CF6" }}>
              Book a Free Demo
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
