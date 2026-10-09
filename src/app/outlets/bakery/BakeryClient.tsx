"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Croissant, 
  CalendarClock, 
  AlertTriangle, 
  Package, 
  Printer, 
  Coffee,
  CheckCircle2,
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

export default function BakeryClient() {
  return (
    <div style={{ flex: 1, backgroundColor: "var(--pp-bg-light)" }}>
      
      {/* 1. Hero Section (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", paddingTop: "8rem", paddingBottom: "6rem", position: "relative", overflow: "hidden" }}>
        <div className="glow-bg" style={{ top: "-300px", left: "50%", transform: "translateX(-50%)", background: "radial-gradient(circle, rgba(217, 119, 6, 0.15) 0%, rgba(217, 119, 6, 0) 70%)" }} />
        <div className="pp-wrap" style={{ position: "relative", zIndex: 1 }}>
          <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={staggerContainer}
            style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
          >
            <motion.div variants={fadeUpVariant} style={{ marginBottom: "1.5rem" }}>
              <span className="badge-outline-white" style={{ color: "#F59E0B", borderColor: "rgba(245, 158, 11, 0.2)", background: "rgba(245, 158, 11, 0.1)" }}>Bakeries, Pâtisseries & Cake Shops</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Master the <span style={{ color: "#F59E0B" }}>Morning Rush</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Manage complex custom cake pre-orders, track raw ingredient inventory like flour and yeast, and easily bundle morning coffee and pastry combos.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#F59E0B", color: "#111827" }}>
                Start Free Trial
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Advance Pre-orders (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <CalendarClock size={20} /> Pre-Order Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Custom Cakes, Scheduled.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Don't lose custom cake details on sticky notes. Take a 50% advance payment today, attach custom text requests ("Happy Birthday John"), and schedule the kitchen ticket to print automatically on Friday morning.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                <div style={{ border: "2px solid #3B82F6", borderRadius: "12px", padding: "1.5rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ fontWeight: 800, color: "#1E3A8A", fontSize: "1.1rem" }}>Custom 2-Tier Cake</div>
                      <div style={{ color: "#3B82F6", fontSize: "0.85rem", fontWeight: 700 }}>Pickup: Friday, 10:00 AM</div>
                    </div>
                    <div style={{ background: "#DBEAFE", color: "#1D4ED8", padding: "0.25rem 0.75rem", borderRadius: "100px", fontSize: "0.85rem", fontWeight: 800, height: "fit-content" }}>
                      ADVANCE PAID
                    </div>
                  </div>
                  <div style={{ background: "#F3F4F6", padding: "1rem", borderRadius: "8px", fontSize: "0.9rem", color: "#4B5563", marginBottom: "1rem" }}>
                    <strong>Message:</strong> "Happy 10th Anniversary!" (Blue icing)
                  </div>
                  <button style={{ width: "100%", background: "#3B82F6", color: "white", border: "none", padding: "0.75rem", borderRadius: "8px", fontWeight: 700 }}>
                    Print Bakery Ticket
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Waste Management (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EF4444", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <AlertTriangle size={20} /> End of Day Waste
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Track What Doesn't Sell.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Fresh bread doesn't last forever. Our End-Of-Day wizard allows managers to log unsold items as "Waste" or "Donation", accurately adjusting inventory and logging the financial loss for your P&L reports.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ fontWeight: 700, color: "white", fontSize: "1.2rem", marginBottom: "1.5rem", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "1rem" }}>
                  EOD Discard Log
                </div>
                <div style={{ display: "grid", gap: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(239, 68, 68, 0.1)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                    <div>
                      <div style={{ color: "white", fontWeight: 700 }}>Sourdough Loaves</div>
                      <div style={{ color: "#FCA5A5", fontSize: "0.85rem" }}>Reason: Stale (Waste)</div>
                    </div>
                    <div style={{ color: "#EF4444", fontWeight: 800 }}>- 4 Units</div>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "12px" }}>
                    <div>
                      <div style={{ color: "white", fontWeight: 700 }}>Blueberry Muffins</div>
                      <div style={{ color: "#9CA3AF", fontSize: "0.85rem" }}>Reason: Food Bank Donation</div>
                    </div>
                    <div style={{ color: "white", fontWeight: 800 }}>- 12 Units</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Recipe Inventory (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Package size={20} /> Recipe Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Track Flour, Not Just Bread.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                When you bake a batch of 50 croissants, the system automatically deducts exactly 2kg of flour, 1kg of butter, and 50g of yeast from your raw material inventory.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 800, color: "#111827", marginBottom: "1rem", fontSize: "1.1rem" }}>Production: Butter Croissant</div>
                  <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                    <div style={{ flex: 1, background: "#F3F4F6", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 700 }}>Flour</div>
                      <div style={{ color: "#EF4444", fontWeight: 800 }}>- 2.0 KG</div>
                    </div>
                    <div style={{ flex: 1, background: "#F3F4F6", padding: "1rem", borderRadius: "8px", textAlign: "center" }}>
                      <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 700 }}>Butter</div>
                      <div style={{ color: "#EF4444", fontWeight: 800 }}>- 1.0 KG</div>
                    </div>
                  </div>
                  <div style={{ background: "#10B981", color: "white", padding: "1rem", borderRadius: "8px", textAlign: "center", fontWeight: 700 }}>
                    <CheckCircle2 size={18} style={{ display: "inline", verticalAlign: "text-bottom", marginRight: "0.5rem" }}/>
                    Batch Logged (+50 Croissants)
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Custom Label Printing (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#A855F7", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Printer size={20} /> Packaging Labels
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Print Retail Barcodes.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Packing cookies into retail boxes? Generate custom SKUs and print barcode labels directly from the POS to your Zebra or TSC label printer so customers can grab-and-go.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", maxWidth: "350px", padding: "2rem", background: "white", borderRadius: "4px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", border: "1px solid #E5E7EB", textAlign: "center" }}>
                <div style={{ border: "2px solid #111827", padding: "1.5rem" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "#111827", textTransform: "uppercase", marginBottom: "0.5rem" }}>Choc Chip Cookies</div>
                  <div style={{ fontSize: "0.85rem", color: "#374151", fontWeight: 600, marginBottom: "1rem" }}>Pack of 6 • Baked Today</div>
                  <div style={{ width: "100%", height: "60px", background: "repeating-linear-gradient(90deg, #111827, #111827 3px, transparent 3px, transparent 6px, #111827 6px, #111827 8px, transparent 8px, transparent 12px)", marginBottom: "0.5rem" }} />
                  <div style={{ fontFamily: "monospace", fontSize: "0.9rem", color: "#111827", letterSpacing: "2px", marginBottom: "1rem" }}>849201992011</div>
                  <div style={{ fontSize: "2rem", fontWeight: 900, color: "#111827" }}>₹8.50</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Combos (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Tag size={20} /> Combo Offers
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Coffee + Croissant Deals.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Increase morning ticket sizes. Set up dynamic combos where any coffee + any pastry automatically discounts the total by ₹1.00 at checkout without cashier intervention.
              </motion.p>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ background: "#F9FAFB", border: "1px solid #E5E7EB", padding: "1.5rem", borderRadius: "12px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem", color: "#111827", fontWeight: 600 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Coffee size={16}/> Flat White</span>
                      <span>₹4.00</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", color: "#111827", fontWeight: 600 }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><Croissant size={16}/> Almond Croissant</span>
                      <span>₹5.50</span>
                    </div>
                    <div style={{ borderTop: "1px dashed #D1D5DB", paddingTop: "1rem", display: "flex", justifyContent: "space-between", color: "#059669", fontWeight: 700 }}>
                      <span>Auto-Combo Discount applied!</span>
                      <span>-₹1.00</span>
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
