"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, 
  Pizza, 
  FileText, 
  TrendingUp, 
  Mail, 
  Download, 
  AlertCircle,
  Activity,
  Building2,
  PieChart,
  ShieldAlert,
  Users,
  Wallet,
  Scale,
  Percent,
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

export default function ReportsClient() {
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
              <span className="badge-outline-white" style={{ color: "#F472B6", borderColor: "rgba(244, 114, 182, 0.2)", background: "rgba(244, 114, 182, 0.1)" }}>80+ Actionable Reports</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Advanced <span style={{ color: "#F472B6" }}>Analytics & Reports</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Stop guessing. Get real-time insights into your restaurant's performance from anywhere. Track live sales, audit employee theft, monitor food cost variances, and export GST data for your CA in one click.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#EC4899" }}>
                View Sample Reports
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Dashboard
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Live Dashboard & Multi-Outlet (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Activity size={20} /> Real-Time Tracking
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Live Dashboard For Every Outlet.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Whether you have 1 location or 50, track your entire empire from your smartphone. Compare gross vs net sales, footfall, and discounts across all branches instantly. Monitor online aggregator contributions (Zomato/Swiggy) vs Dine-in in real-time.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Live Gross & Net Sales ticker.",
                  "Multi-branch comparative analytics.",
                  "Channel-wise breakdown (Dine-in, Takeaway, Aggregators)."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <BarChart3 color="#EC4899" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, fontSize: "1.2rem" }}>
                    <Building2 size={20} color="#EC4899" /> Total Revenue (Today)
                  </div>
                  <div className="badge-outline" style={{ color: "#10B981", borderColor: "rgba(16, 185, 129, 0.2)", background: "rgba(16, 185, 129, 0.1)" }}>+12% vs Last Week</div>
                </div>
                
                {/* Abstract Dashboard UI */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ fontSize: "2.5rem", fontWeight: 800, color: "#111827", lineHeight: 1 }}>₹14,250.00</div>
                  
                  {/* Branch Comparison Bars */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { name: "Downtown Branch", value: "₹6,500", percent: "80%", color: "#EC4899" },
                      { name: "Airport Terminal 2", value: "₹4,200", percent: "60%", color: "#8B5CF6" },
                      { name: "Eastside Mall", value: "₹3,550", percent: "50%", color: "#3B82F6" },
                    ].map((branch, i) => (
                      <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                          <span style={{ fontWeight: 600, color: "var(--pp-text-muted)" }}>{branch.name}</span>
                          <span style={{ fontWeight: 700, color: "#111827" }}>{branch.value}</span>
                        </div>
                        <div style={{ width: "100%", height: "8px", background: "var(--pp-bg-light)", borderRadius: "100px", overflow: "hidden" }}>
                          <div style={{ width: branch.percent, height: "100%", background: branch.color, borderRadius: "100px" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Item-Wise & Menu Engineering (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <PieChart size={20} /> Menu Engineering
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Identify Stars & Dead Weight.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Know exactly what sells. Item-wise sales reports help you identify your most profitable dishes and highlight underperforming inventory that is wasting freezer space.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <TrendingUp size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Top Sellers</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Find the dishes driving your revenue and promote them heavily.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <AlertCircle size={20} color="#EF4444" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Dead Inventory</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Flag items that aren't selling to prevent food waste and spoilage.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Item Performance (This Month)</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { name: "Truffle Fries", sold: "1,240 Sold", rev: "₹8,680", status: "Star Item", icon: <TrendingUp size={16} color="#10B981" /> },
                    { name: "Classic Cheeseburger", sold: "950 Sold", rev: "₹11,400", status: "Star Item", icon: <TrendingUp size={16} color="#10B981" /> },
                    { name: "Spicy Wings (6pc)", sold: "820 Sold", rev: "₹7,380", status: "Consistent", icon: <TrendingUp size={16} color="#3B82F6" /> },
                    { name: "Kale & Quinoa Salad", sold: "14 Sold", rev: "₹168", status: "Dead Weight", icon: <AlertCircle size={16} color="#EF4444" /> }
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "rgba(0,0,0,0.2)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)" }}>
                      <div>
                        <div style={{ fontWeight: 600, color: "white", marginBottom: "0.25rem" }}>{item.name}</div>
                        <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>{item.sold} • {item.rev}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.8)" }}>
                        {item.icon} <span style={{ display: "none", "@media (min-width: 400px)": { display: "inline" } } as any}>{item.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Security & Fraud Audits (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EF4444", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ShieldAlert size={20} /> Fraud & Security Audits
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Catch Employee Theft Instantly.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Internal pilferage kills restaurant margins. Our security audits track every void, KOT cancellation, and unapproved discount. Know exactly which cashier is repeatedly cancelling items after they've been cooked.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Receipt size={18} color="#EF4444" /> Post-KOT Voids
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Track items removed from a bill after the kitchen has already prepared them.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Percent size={18} color="#EF4444" /> Discount Audits
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Monitor 100% comp bills or excessive manager discounts applied during a shift.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#111827" }}>Security Alerts</div>
                    <div className="badge-outline" style={{ color: "#EF4444", borderColor: "rgba(239, 68, 68, 0.2)", background: "rgba(239, 68, 68, 0.1)" }}>Today</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ padding: "1rem", borderRadius: "12px", border: "1px solid #FECACA", background: "#FEF2F2", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <AlertCircle size={20} color="#DC2626" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: 700, color: "#991B1B", marginBottom: "0.25rem" }}>Post-KOT Void Detected</div>
                        <div style={{ fontSize: "0.9rem", color: "#B91C1C", marginBottom: "0.5rem" }}>Cashier 'John D.' cancelled 'Large Pizza' (Bill #1420) 15 mins after print.</div>
                        <div style={{ fontSize: "0.8rem", color: "#DC2626", fontWeight: 600 }}>Value: ₹24.00</div>
                      </div>
                    </div>
                    
                    <div style={{ padding: "1rem", borderRadius: "12px", border: "1px solid #FDE68A", background: "#FFFBEB", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                      <ShieldAlert size={20} color="#D97706" style={{ marginTop: "2px", flexShrink: 0 }} />
                      <div>
                        <div style={{ fontWeight: 700, color: "#92400E", marginBottom: "0.25rem" }}>Suspicious Discount</div>
                        <div style={{ fontSize: "0.9rem", color: "#B45309", marginBottom: "0.5rem" }}>Manager Pin used to apply 100% Comp on Bill #1405 (Table 12).</div>
                        <div style={{ fontSize: "0.8rem", color: "#D97706", fontWeight: 600 }}>Value: ₹85.00</div>
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Food Costing & Variance (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#A78BFA", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Scale size={20} /> Inventory Variances
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Theoretical vs Actual Consumption.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Are your chefs over-portioning? Our food costing reports calculate exactly how much raw material *should* have been used based on your recipes and sales, comparing it directly to physical stock checks.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#A78BFA" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Prevent Over-Portioning</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Ensure 100g of cheese is used per pizza, not 120g.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#F472B6" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Real Cost of Variance</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>See exactly how many dollars you lose to shrinkage every week.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Variance Report (Weekly)</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "1rem", paddingBottom: "0.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>
                    <div>Ingredient</div>
                    <div>System</div>
                    <div>Actual</div>
                    <div style={{ textAlign: "right" }}>Loss</div>
                  </div>
                  
                  {[
                    { name: "Mozzarella", sys: "45.0 kg", act: "40.2 kg", diff: "-4.8 kg", cost: "-₹42.00", color: "#EF4444" },
                    { name: "Tomatoes", sys: "30.0 kg", act: "29.5 kg", diff: "-0.5 kg", cost: "-₹1.50", color: "#F59E0B" },
                    { name: "Flour (Type 00)", sys: "120 kg", act: "120 kg", diff: "0 kg", cost: "₹0.00", color: "#10B981" }
                  ].map((row, i) => (
                    <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "1rem", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                      <div style={{ fontWeight: 600, color: "white", fontSize: "0.95rem" }}>{row.name}</div>
                      <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>{row.sys}</div>
                      <div style={{ color: "white", fontSize: "0.9rem" }}>{row.act}</div>
                      <div style={{ textAlign: "right", color: row.color, fontWeight: 700, fontSize: "0.9rem" }}>{row.cost}</div>
                    </div>
                  ))}
                  <div style={{ marginTop: "1rem", background: "rgba(239, 68, 68, 0.1)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(239, 68, 68, 0.3)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ color: "#FCA5A5", fontWeight: 600 }}>Total Weekly Shrinkage</div>
                    <div style={{ color: "#EF4444", fontWeight: 800, fontSize: "1.2rem" }}>-₹43.50</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Staff & Shifts (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Users size={20} /> Shift & Staff Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Cash Drawer Control.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Enforce strict shift closures. Cashiers must reconcile their opening cash, daily cash sales, and payouts. Any shortages are flagged instantly in the manager's report. Track waiter performance to reward your best upsellers.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Wallet size={18} color="#3B82F6" /> Shift Closures
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Track petty cash, vendor payouts, and calculate cash drawer shortages.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Users size={18} color="#3B82F6" /> Waiter Leaderboard
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>See which servers are turning tables fastest and generating the highest bills.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid var(--pp-border)" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#111827" }}>Cashier Shift Report</div>
                    <div className="badge-outline" style={{ color: "#3B82F6", borderColor: "rgba(59, 130, 246, 0.2)", background: "rgba(59, 130, 246, 0.1)" }}>Shift A - Closed</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.95rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--pp-text-muted)" }}>Opening Cash Balance</span>
                      <span style={{ fontWeight: 600 }}>₹200.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--pp-text-muted)" }}>Total Cash Sales</span>
                      <span style={{ fontWeight: 600 }}>+₹850.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <span style={{ color: "var(--pp-text-muted)" }}>Vendor Payouts (Ice Delivery)</span>
                      <span style={{ fontWeight: 600, color: "#EF4444" }}>-₹30.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "0.75rem", borderTop: "1px dashed var(--pp-border)", marginTop: "0.5rem" }}>
                      <span style={{ color: "#111827", fontWeight: 700 }}>System Expected Cash</span>
                      <span style={{ fontWeight: 800 }}>₹1,020.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem", background: "#FEF2F2", borderRadius: "8px", border: "1px solid #FECACA", marginTop: "0.5rem" }}>
                      <span style={{ color: "#991B1B", fontWeight: 700 }}>Actual Cash Entered</span>
                      <span style={{ fontWeight: 800, color: "#DC2626" }}>₹1,010.00</span>
                    </div>
                    <div style={{ textAlign: "right", color: "#EF4444", fontWeight: 700, fontSize: "0.85rem" }}>
                      Shortage: -₹10.00
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 7. Tax, Exports & Emails (Dark) - Changed from light to dark to maintain alternating pattern */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <FileText size={20} /> Compliance & Communcation
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-light)", lineHeight: 1.2 }}>
                Make Your CA Happy.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Filing taxes is a breeze with automated GST and VAT reports formatted exactly how accountants need them. Plus, wake up every morning to a complete "End of Day" summary email in your inbox.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Download size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>1-Click Exports</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Export data to Excel, CSV, or directly format it for Tally ERP.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Mail size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Daily Emails</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Automated reports covering total sales, cash collected, and discounts.</p>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  
                  {/* Mock Email UI */}
                  <div style={{ border: "1px solid var(--pp-border)", borderRadius: "12px", overflow: "hidden" }}>
                    <div style={{ background: "var(--pp-bg-light)", padding: "1rem", borderBottom: "1px solid var(--pp-border)", display: "flex", gap: "1rem", alignItems: "center" }}>
                      <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "#10B981", display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
                        <Mail size={20} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "#111827" }}>End of Day Report: Sep 24</div>
                        <div style={{ fontSize: "0.85rem", color: "var(--pp-text-muted)" }}>Automated POS System</div>
                      </div>
                    </div>
                    
                    <div style={{ padding: "1.5rem", background: "white" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px dashed var(--pp-border)" }}>
                        <span style={{ color: "var(--pp-text-muted)", fontWeight: 500 }}>Total Gross Sales</span>
                        <span style={{ fontWeight: 700, color: "#111827" }}>₹4,250.00</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", paddingBottom: "1rem", borderBottom: "1px dashed var(--pp-border)" }}>
                        <span style={{ color: "var(--pp-text-muted)", fontWeight: 500 }}>Total Tax (GST)</span>
                        <span style={{ fontWeight: 700, color: "#111827" }}>₹212.50</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                        <span style={{ color: "var(--pp-text-muted)", fontWeight: 500 }}>Total Discounts</span>
                        <span style={{ fontWeight: 700, color: "#EF4444" }}>-₹120.00</span>
                      </div>
                      
                      <button style={{ width: "100%", padding: "0.75rem", background: "var(--pp-bg-light)", border: "1px solid var(--pp-border)", borderRadius: "8px", fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", cursor: "pointer", color: "#111827" }}>
                        <Download size={16} /> Download Full CSV
                      </button>
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. CTA (Light) */}
      <section style={{ padding: "6rem 0", background: "var(--pp-bg-light)", textAlign: "center" }}>
        <div className="pp-wrap">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            style={{ maxWidth: "700px", margin: "0 auto", background: "white", padding: "4rem 2rem", borderRadius: "32px", border: "1px solid var(--pp-border)", boxShadow: "var(--shadow-xl)" }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)" }}>
              Stop Managing in the Dark.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Make data-driven decisions that actually increase your profit margins. Audit voids, stop theft, and manage your shifts with military precision.
            </p>
            <Link href="/demo" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#EC4899", color: "white" }}>
              Unlock Your Analytics
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
