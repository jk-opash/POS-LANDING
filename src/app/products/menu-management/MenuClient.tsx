"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ClipboardList, 
  Globe, 
  Flame, 
  Leaf, 
  Settings2, 
  CheckCircle2, 
  PlusCircle,
  Image as ImageIcon,
  TrendingUp
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

export default function MenuClient() {
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
              <span className="badge-outline-white" style={{ color: "#34D399", borderColor: "rgba(52, 211, 153, 0.2)", background: "rgba(52, 211, 153, 0.1)" }}>Global Catalog</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Centralized <span style={{ color: "#34D399" }}>Menu Management</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Control your entire catalog across infinite outlets and aggregator platforms from a single dashboard. Build complex variants, set upselling rules, and maintain flawless brand consistency.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#10B981" }}>
                Build Your Menu
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Variants & Modifiers (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Settings2 size={20} /> Modifiers & Rules
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Unlimited Variants & Add-ons.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Handle the most complex menus with ease. Configure size variants (Half/Full), mandatory base choices, and optional add-on groups with strict min/max selection rules.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Enforce selection limits (e.g., Choose exactly 2 sides).",
                  "Nested modifiers for extreme customization.",
                  "Auto-upsell prompts for cashiers."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <CheckCircle2 color="#10B981" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
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
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Build Your Burger</div>
                  <div className="badge-outline" style={{ color: "#10B981", borderColor: "rgba(16, 185, 129, 0.2)", background: "rgba(16, 185, 129, 0.1)" }}>₹12.00</div>
                </div>
                
                {/* Abstract Modifier UI */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {/* Group 1 (Required) */}
                  <div style={{ background: "var(--pp-bg-light)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--pp-border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                      <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Choose Bread</span>
                      <span style={{ fontSize: "0.8rem", color: "#EF4444", fontWeight: 600 }}>Required (Select 1)</span>
                    </div>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div style={{ flex: 1, padding: "0.5rem", border: "2px solid #10B981", borderRadius: "8px", background: "rgba(16,185,129,0.1)", textAlign: "center", fontWeight: 600, fontSize: "0.9rem", color: "#065F46" }}>Brioche</div>
                      <div style={{ flex: 1, padding: "0.5rem", border: "1px solid var(--pp-border)", borderRadius: "8px", background: "white", textAlign: "center", fontWeight: 500, fontSize: "0.9rem" }}>Whole Wheat</div>
                    </div>
                  </div>

                  {/* Group 2 (Optional) */}
                  <div style={{ background: "var(--pp-bg-light)", padding: "1rem", borderRadius: "12px", border: "1px solid var(--pp-border)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                      <span style={{ fontWeight: 700, fontSize: "0.95rem" }}>Extra Toppings</span>
                      <span style={{ fontSize: "0.8rem", color: "var(--pp-text-muted)", fontWeight: 600 }}>Optional (Max 3)</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {[
                        { name: "Extra Cheese", price: "+₹1.50", checked: true },
                        { name: "Bacon", price: "+₹2.00", checked: true },
                        { name: "Avocado", price: "+₹1.50", checked: false },
                      ].map((topping, i) => (
                        <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div style={{ width: "18px", height: "18px", borderRadius: "4px", background: topping.checked ? "#10B981" : "white", border: `2px solid ${topping.checked ? "#10B981" : "var(--pp-border)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                              {topping.checked && <CheckCircle2 size={12} color="white" />}
                            </div>
                            <span style={{ fontSize: "0.9rem", fontWeight: 500 }}>{topping.name}</span>
                          </div>
                          <span style={{ fontSize: "0.9rem", color: "var(--pp-text-muted)", fontWeight: 600 }}>{topping.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Global Updates (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Globe size={20} /> Centralized Sync
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Update Everywhere in Seconds.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Stop calling branches to change a price. Edit your master catalog and push updates instantly to every POS terminal, Kiosk, and online aggregator across all your locations.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#3B82F6" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Location Overrides</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Set different pricing for airport outlets vs. high street branches.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#F59E0B" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Out of Stock Push</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Disable an item globally with one click to prevent angry customers.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Sync Menu Push</div>
                  <div style={{ fontSize: "0.85rem", color: "#3B82F6", fontWeight: 700 }}>Publishing...</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {[
                    { location: "Downtown Branch", status: "Synced", color: "#10B981", progress: "100%" },
                    { location: "Airport Terminal 2", status: "Synced", color: "#10B981", progress: "100%" },
                    { location: "Zomato Integration", status: "Syncing...", color: "#3B82F6", progress: "65%" },
                    { location: "Swiggy Integration", status: "Syncing...", color: "#3B82F6", progress: "40%" }
                  ].map((branch, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
                        <span style={{ fontWeight: 600, color: "rgba(255,255,255,0.9)" }}>{branch.location}</span>
                        <span style={{ color: branch.color, fontWeight: 700 }}>{branch.status}</span>
                      </div>
                      <div style={{ width: "100%", height: "6px", background: "rgba(255,255,255,0.1)", borderRadius: "100px", overflow: "hidden" }}>
                        <div style={{ width: branch.progress, height: "100%", background: branch.color, borderRadius: "100px", transition: "width 1s ease" }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Dietary & Visuals (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Leaf size={20} /> Tags & Multimedia
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Rich Visual Menus.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Help cashiers and customers make quick decisions. Attach high-quality images, detailed descriptions, and crucial dietary metadata (Veg, Vegan, Spicy, Gluten-Free) to every item.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Flame size={18} color="#F59E0B" /> Spice Indicators
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Easily flag items so staff can warn customers before ordering.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <ImageIcon size={18} color="#F59E0B" /> Media Gallery
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Sync mouth-watering photos directly to your digital menus and aggregators.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                    {/* Abstract Image Placeholder */}
                    <div style={{ width: "120px", height: "120px", background: "rgba(245, 158, 11, 0.1)", borderRadius: "16px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(245, 158, 11, 0.4)" }}>
                      <ImageIcon size={40} color="#F59E0B" opacity={0.5} />
                    </div>
                    <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Spicy Thai Basil Chicken</h3>
                      <p style={{ fontSize: "0.85rem", color: "var(--pp-text-muted)", lineHeight: 1.5 }}>Minced chicken stir-fried with holy basil, chili, and garlic.</p>
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                    <div style={{ padding: "0.35rem 0.75rem", background: "rgba(239, 68, 68, 0.1)", color: "#EF4444", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <div style={{ width: "10px", height: "10px", background: "#EF4444", borderRadius: "50%" }} /> Non-Veg
                    </div>
                    <div style={{ padding: "0.35rem 0.75rem", background: "rgba(245, 158, 11, 0.1)", color: "#F59E0B", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      <Flame size={12} /> Very Spicy
                    </div>
                    <div style={{ padding: "0.35rem 0.75rem", background: "rgba(139, 92, 246, 0.1)", color: "#8B5CF6", borderRadius: "100px", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}>
                      Contains Peanuts
                    </div>
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA (Dark) */}
      <section style={{ padding: "6rem 0", background: "var(--pp-bg-dark)", textAlign: "center" }}>
        <div className="pp-wrap">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            style={{ maxWidth: "700px", margin: "0 auto", background: "rgba(255,255,255,0.03)", padding: "4rem 2rem", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-light)" }}>
              Take Control of Your Catalog.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Stop using messy spreadsheets. Centralize your menu updates and ensure absolute brand consistency across all your channels.
            </p>
            <Link href="/#demo-form" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#10B981" }}>
              Organize Your Menu Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
