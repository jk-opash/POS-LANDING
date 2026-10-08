"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ChefHat, 
  Timer, 
  FileText, 
  UtensilsCrossed, 
  Coffee, 
  Flame, 
  Monitor,
  Printer,
  CheckSquare,
  AlertTriangle,
  RotateCw,
  Play,
  PauseCircle,
  BellRing,
  ArrowRightLeft,
  XOctagon,
  BookOpen,
  Info,
  Ban,
  Smartphone,
  Undo2,
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

export default function KOTClient() {
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
              <span className="badge-outline-white" style={{ color: "#F87171", borderColor: "rgba(248, 113, 113, 0.2)", background: "rgba(248, 113, 113, 0.1)" }}>Paperless Kitchens</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Smart KOT & <span style={{ color: "#F87171" }}>Kitchen Displays</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              End the kitchen chaos. Digitize your back-of-house operations with smart station routing, allergy alerts, multi-round KOTs, automated 86ing, course management, digital recipe books, and live prep-time tracking screens.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#EF4444" }}>
                Digitize Your Kitchen
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore KDS
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Kitchen Display System (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EF4444", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Monitor size={20} /> Live KDS Board
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Track Prep Times in Real-Time.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Replace messy thermal printers with digital touch-screens. Chefs can see exactly how long a ticket has been waiting, 'bump' items as they are finished, and notify waiters the second food is ready to serve.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Color-coded timers turn red when prep takes too long.",
                  "Bump individual items or entire tickets.",
                  "Two-way sync automatically pages waiters."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <Timer color="#EF4444" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1rem", background: "#111827", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", border: "4px solid #374151", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", padding: "0 0.5rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Main Kitchen Line</div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>14 Pending Tickets</div>
                </div>
                
                {/* Abstract KDS UI */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  
                  {/* Late Ticket (Red) */}
                  <div style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.4)", borderRadius: "12px", padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px dashed rgba(239, 68, 68, 0.3)" }}>
                      <span style={{ fontWeight: 700, color: "white" }}>Table 12</span>
                      <span style={{ color: "#FCA5A5", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}><Timer size={14} /> 24:15</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ color: "white", textDecoration: "line-through", opacity: 0.5 }}>1x Garlic Bread</div>
                      <div style={{ color: "white", fontWeight: 600 }}>2x Truffle Pasta</div>
                      <div style={{ color: "#FCA5A5", fontSize: "0.85rem", paddingLeft: "1rem", borderLeft: "2px solid #EF4444" }}>- Extra Cheese<br/>- NO MUSHROOMS</div>
                    </div>
                  </div>

                  {/* New Ticket (Green) */}
                  <div style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.4)", borderRadius: "12px", padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", paddingBottom: "0.5rem", borderBottom: "1px dashed rgba(16, 185, 129, 0.3)" }}>
                      <span style={{ fontWeight: 700, color: "white" }}>Zomato - #442</span>
                      <span style={{ color: "#6EE7B7", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.25rem" }}><Timer size={14} /> 02:45</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ color: "white", fontWeight: 600 }}>1x Spicy Chicken Wings</div>
                      <div style={{ color: "white", fontWeight: 600 }}>1x Caesar Salad</div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Station Routing (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Printer size={20} /> Station Routing
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Send Items Where They Belong.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Stop yelling across the kitchen. When a waiter punches a large order, the system instantly splits it: drinks fire directly to the Bar printer, pizzas to the oven screen, and steaks to the grill.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Flame size={20} color="#3B82F6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Kitchen Printers</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Automatically route all food items to the hot-line printers.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Coffee size={20} color="#8B5CF6" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Bar Displays</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Cocktails and coffees go straight to the bartender's queue.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                
                {/* Order Input */}
                <div style={{ textAlign: "center", marginBottom: "2rem", paddingBottom: "1.5rem", borderBottom: "1px dashed rgba(255,255,255,0.2)" }}>
                  <div style={{ fontWeight: 700, color: "white", fontSize: "1.1rem", marginBottom: "0.5rem" }}>Captain Submits Order (Table 4)</div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>2x Mojito, 1x Ribeye Steak, 1x Fries</div>
                </div>

                {/* Split Routing UI */}
                <div style={{ display: "flex", gap: "1rem" }}>
                  <div style={{ flex: 1, background: "rgba(139, 92, 246, 0.1)", border: "1px solid rgba(139, 92, 246, 0.3)", borderRadius: "12px", padding: "1rem", textAlign: "center" }}>
                    <Coffee size={24} color="#8B5CF6" style={{ margin: "0 auto 0.5rem" }} />
                    <div style={{ fontWeight: 700, color: "#C4B5FD", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Bar Station</div>
                    <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.5rem", borderRadius: "8px", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>
                      2x Classic Mojito
                    </div>
                  </div>

                  <div style={{ flex: 1, background: "rgba(59, 130, 246, 0.1)", border: "1px solid rgba(59, 130, 246, 0.3)", borderRadius: "12px", padding: "1rem", textAlign: "center" }}>
                    <ChefHat size={24} color="#3B82F6" style={{ margin: "0 auto 0.5rem" }} />
                    <div style={{ fontWeight: 700, color: "#93C5FD", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Grill Station</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.5rem", borderRadius: "8px", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>1x Ribeye Steak</div>
                      <div style={{ background: "rgba(0,0,0,0.3)", padding: "0.5rem", borderRadius: "8px", color: "white", fontSize: "0.85rem", fontWeight: 600 }}>1x French Fries</div>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Course Management (Hold & Fire) (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Play size={20} /> Course Management
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Hold & Fire With Precision.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Fine dining requires perfect timing. Captains can punch the entire order at once but put the Mains on "Hold". When the guests finish their starters, a single tap sends a "Fire" command to the kitchen.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <PauseCircle size={18} color="#F59E0B" /> Hold Tickets
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Prevent food from sitting on the pass getting cold.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Play size={18} color="#F59E0B" /> Fire Commands
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Instantly notify the KDS to start cooking the next course.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "#111827" }}>Captain App: Table 8</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    {/* Course 1 */}
                    <div style={{ border: "1px solid #10B981", borderRadius: "12px", overflow: "hidden" }}>
                      <div style={{ background: "rgba(16, 185, 129, 0.1)", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: 700, color: "#065F46" }}>Course 1: Starters</span>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#10B981" }}>COOKING</span>
                      </div>
                      <div style={{ padding: "1rem", background: "white" }}>
                        <div style={{ fontWeight: 600, color: "#111827" }}>1x Calamari Rings</div>
                        <div style={{ fontWeight: 600, color: "#111827" }}>1x Garlic Bread</div>
                      </div>
                    </div>

                    {/* Course 2 (Hold) */}
                    <div style={{ border: "1px solid #F59E0B", borderRadius: "12px", overflow: "hidden", position: "relative" }}>
                      <div style={{ background: "rgba(245, 158, 11, 0.1)", padding: "0.75rem 1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontWeight: 700, color: "#92400E" }}>Course 2: Mains</span>
                        <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#F59E0B" }}>ON HOLD</span>
                      </div>
                      <div style={{ padding: "1rem", background: "white", opacity: 0.7 }}>
                        <div style={{ fontWeight: 600, color: "#111827" }}>2x Ribeye Steak</div>
                        <div style={{ fontWeight: 600, color: "#111827" }}>1x Truffle Mash</div>
                      </div>
                      {/* Fire Button */}
                      <div style={{ position: "absolute", bottom: "1rem", right: "1rem" }}>
                        <button style={{ background: "#F59E0B", color: "white", border: "none", padding: "0.5rem 1rem", borderRadius: "100px", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", boxShadow: "0 4px 6px -1px rgba(245, 158, 11, 0.4)" }}>
                          <Play size={14} /> FIRE MAINS
                        </button>
                      </div>
                    </div>

                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Expediter / Pass Screen (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <CheckSquare size={20} /> Expediter Screen
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Never Miss a Side Dish.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                The Expediter (Pass) screen acts as the final QA check before food hits the table. Waiters are notified instantly when the entire order is verified and ready for pickup.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#10B981" }} />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Quality Assurance</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Check off items as they arrive from different kitchen stations.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <BellRing size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Waiter Paging</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Ping the exact waiter assigned to the table when the tray is ready.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Expediter Pass</div>
                  <div className="badge-outline-white" style={{ color: "#10B981", borderColor: "rgba(16, 185, 129, 0.4)" }}>Table 4 - Readying</div>
                </div>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  {[
                    { name: "Ribeye Steak", status: "Done", checked: true },
                    { name: "French Fries", status: "Done", checked: true },
                    { name: "Mojito (Bar)", status: "Waiting", checked: false },
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", background: item.checked ? "rgba(16, 185, 129, 0.1)" : "rgba(0,0,0,0.3)", border: `1px solid ${item.checked ? "rgba(16, 185, 129, 0.3)" : "rgba(255,255,255,0.1)"}`, borderRadius: "12px" }}>
                      <div style={{ width: "24px", height: "24px", borderRadius: "6px", background: item.checked ? "#10B981" : "transparent", border: `2px solid ${item.checked ? "#10B981" : "rgba(255,255,255,0.3)"}`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {item.checked && <CheckSquare size={14} color="white" />}
                      </div>
                      <div style={{ flex: 1, fontWeight: 600, color: item.checked ? "white" : "rgba(255,255,255,0.5)", textDecoration: item.checked ? "line-through" : "none" }}>{item.name}</div>
                      <div style={{ fontSize: "0.85rem", color: item.checked ? "#10B981" : "rgba(255,255,255,0.5)", fontWeight: 700 }}>{item.status}</div>
                    </div>
                  ))}
                  
                  <button style={{ width: "100%", padding: "1rem", background: "rgba(255,255,255,0.05)", border: "1px dashed rgba(255,255,255,0.2)", borderRadius: "12px", color: "rgba(255,255,255,0.5)", fontWeight: 700, marginTop: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    <BellRing size={18} /> Page Waiter (Waiting on Bar)
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Voids & Table Transfers (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <XOctagon size={20} /> Voids & Transfers
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Mistakes Handled Gracefully.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Guests change their minds. When a KOT is voided, it instantly alerts the kitchen in bold red to stop cooking. If guests move from Table 4 to Table 10, the KOT simply transfers without losing prep history.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <XOctagon size={18} color="#8B5CF6" /> Void Tickets
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Print cancellation tickets automatically to prevent food waste.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <ArrowRightLeft size={18} color="#8B5CF6" /> Table Transfers
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Seamlessly move running tabs and KOTs between tables.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", maxWidth: "350px", padding: "1.5rem", background: "#FEF2F2", borderRadius: "8px", boxShadow: "0 10px 25px rgba(239,68,68,0.2)", border: "2px dashed #EF4444" }}>
                  <div style={{ textAlign: "center", borderBottom: "2px dashed #FCA5A5", paddingBottom: "1rem", marginBottom: "1rem" }}>
                    <div style={{ fontWeight: 900, fontSize: "1.5rem", color: "#B91C1C", letterSpacing: "0.1em" }}>*** CANCEL KOT ***</div>
                    <div style={{ fontWeight: 700, color: "#991B1B", marginTop: "0.5rem" }}>Table 12</div>
                    <div style={{ fontSize: "0.85rem", color: "#DC2626" }}>Voided at 8:42 PM</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "1.1rem", fontWeight: 700, color: "#7F1D1D" }}>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <span>-1x</span> <span style={{ textDecoration: "line-through" }}>Margherita Pizza</span>
                    </div>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <span>-1x</span> <span style={{ textDecoration: "line-through" }}>Garlic Bread</span>
                    </div>
                  </div>
                  
                  <div style={{ marginTop: "1.5rem", paddingTop: "1rem", borderTop: "2px dashed #FCA5A5", textAlign: "center", color: "#991B1B", fontWeight: 600, fontSize: "0.9rem" }}>
                    Reason: Guest changed mind
                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Recipe Viewer & Training (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#38BDF8", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <BookOpen size={20} /> Built-in Recipe Viewer
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Perfect Consistency, Every Time.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Help junior chefs maintain quality standards. With one tap on the KDS screen, they can pull up the exact ingredients, plating photos, and step-by-step instructions for any dish on the menu.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Info size={20} color="#38BDF8" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Ingredient Lists</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Exact portions tied directly to your inventory management system.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <UtensilsCrossed size={20} color="#38BDF8" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Plating Guides</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Ensure every dish looks identical before it hits the expediter pass.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)", position: "relative" }}>
                {/* Mock KDS Recipe Overlay */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", borderBottom: "1px solid #334155", paddingBottom: "1rem" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Recipe: Truffle Risotto</div>
                  <div style={{ color: "#38BDF8", fontSize: "0.9rem", fontWeight: 600 }}>Prep Time: 18 Min</div>
                </div>
                
                <div style={{ display: "flex", gap: "1.5rem" }}>
                  {/* Ingredients Column */}
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#94A3B8", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.75rem", textTransform: "uppercase" }}>Ingredients (1 Portion)</div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {["150g Arborio Rice", "50g Parmesan (Grated)", "20g Black Truffle Paste", "300ml Veg Stock", "15ml Truffle Oil"].map((ing, i) => (
                        <li key={i} style={{ color: "white", fontSize: "0.9rem", background: "rgba(255,255,255,0.05)", padding: "0.5rem", borderRadius: "6px" }}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Instructions Column */}
                  <div style={{ flex: 1 }}>
                    <div style={{ color: "#94A3B8", fontSize: "0.85rem", fontWeight: 700, marginBottom: "0.75rem", textTransform: "uppercase" }}>Instructions</div>
                    <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                      <ol style={{ paddingLeft: "1.25rem", margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <li>Toast rice in butter for 2 mins.</li>
                        <li>Add stock gradually, stirring constantly.</li>
                        <li>Fold in parmesan and truffle paste off the heat.</li>
                        <li>Garnish with truffle oil and parsley.</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Allergy & Modifiers (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EF4444", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <AlertTriangle size={20} /> Allergy Alerts & Modifiers
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Protect Your Guests.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Don't let a severe allergy get lost in tiny thermal printer font. Our digital KDS highlights critical modifiers, allergies, and cooking preferences (e.g. "Medium Rare") in bold, contrasting colors so chefs never miss them.
              </motion.p>
              
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", maxWidth: "400px", padding: "1.5rem", background: "white", borderRadius: "16px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "0.5rem" }}>
                    <span style={{ fontWeight: 700, color: "#111827", fontSize: "1.1rem" }}>Table 4 - Round 2</span>
                    <span style={{ color: "#6B7280", fontWeight: 600 }}>04:12 PM</span>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    {/* Item 1 */}
                    <div>
                      <div style={{ fontWeight: 700, color: "#111827", fontSize: "1.1rem" }}>1x Pad Thai Noodles</div>
                      {/* Modifier Block */}
                      <div style={{ marginTop: "0.5rem", background: "#FEF2F2", borderLeft: "4px solid #EF4444", padding: "0.75rem", borderRadius: "0 8px 8px 0" }}>
                        <div style={{ color: "#B91C1C", fontWeight: 800, fontSize: "0.95rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <AlertTriangle size={16} /> NO PEANUTS - SEVERE ALLERGY
                        </div>
                        <div style={{ color: "#991B1B", fontWeight: 600, fontSize: "0.85rem", marginTop: "0.25rem" }}>Use separate pan.</div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div>
                      <div style={{ fontWeight: 700, color: "#111827", fontSize: "1.1rem" }}>1x Wagyu Burger</div>
                      <div style={{ marginTop: "0.5rem", background: "#F3F4F6", borderLeft: "4px solid #4B5563", padding: "0.5rem 0.75rem", borderRadius: "0 8px 8px 0" }}>
                        <div style={{ color: "#374151", fontWeight: 600, fontSize: "0.9rem" }}>Cook: Medium Rare</div>
                        <div style={{ color: "#374151", fontWeight: 600, fontSize: "0.9rem" }}>Sub: Sweet Potato Fries</div>
                      </div>
                    </div>

                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. Live 86ing (Out of Stock Sync) (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#EC4899", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Ban size={20} /> Live "86" Sync
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Stop Selling What You Can't Cook.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                When the kitchen runs out of ingredients, the head chef can instantly mark a dish as "86" (Out of Stock) right from the KDS. This instantly greys out the item on all Waiter Captain Apps and Online Ordering menus.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Smartphone size={20} color="#EC4899" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Front-of-House Sync</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Prevent waiters from having to go back to the table to apologize.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <RotateCw size={20} color="#EC4899" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Online Menu Sync</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Automatically removes the item from your Zomato and direct ordering links.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center", gap: "1.5rem" }}
            >
              {/* Chef KDS */}
              <div style={{ width: "240px", padding: "1.5rem", background: "#0F172A", border: "1px solid #1E293B", borderRadius: "16px", textAlign: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase" }}>Kitchen KDS</div>
                <div style={{ background: "rgba(255,255,255,0.05)", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ color: "white", fontWeight: 600, marginBottom: "0.5rem" }}>Truffle Risotto</div>
                  <button style={{ width: "100%", padding: "0.5rem", background: "#EC4899", color: "white", border: "none", borderRadius: "6px", fontWeight: 700, fontSize: "0.85rem", cursor: "pointer" }}>
                    Mark Out of Stock (86)
                  </button>
                </div>
              </div>

              {/* Sync Arrow */}
              <div style={{ display: "flex", alignItems: "center", color: "#EC4899" }}>
                <ArrowRightLeft size={32} />
              </div>

              {/* Captain App */}
              <div style={{ width: "240px", padding: "1.5rem", background: "white", border: "1px solid #E5E7EB", borderRadius: "16px", textAlign: "center", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)" }}>
                <div style={{ fontSize: "0.85rem", color: "#6B7280", fontWeight: 700, marginBottom: "1rem", textTransform: "uppercase" }}>Captain App</div>
                <div style={{ background: "#F3F4F6", padding: "1rem", borderRadius: "12px", border: "1px solid #E5E7EB", opacity: 0.5 }}>
                  <div style={{ color: "#111827", fontWeight: 600, marginBottom: "0.5rem", textDecoration: "line-through" }}>Truffle Risotto</div>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: "0.85rem" }}>SOLD OUT</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. Recall Bumped Tickets (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#14B8A6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Undo2 size={20} /> History & Recall
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Oops, I Didn't Mean To Bump That.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Mistakes happen in a busy kitchen. If a chef accidentally "bumps" or clears a ticket before the food is actually plated, they can jump into the History tab and hit "Recall" to instantly bring the ticket back to the active line.
              </motion.p>
              
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "16px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", borderBottom: "1px solid #E5E7EB", paddingBottom: "1rem" }}>
                    <div style={{ fontWeight: 700, color: "#111827", fontSize: "1.1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <CheckCircle2 color="#14B8A6" size={20} /> Completed Tickets History
                    </div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    
                    {/* Bumped Ticket */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "#F3F4F6", borderRadius: "12px", border: "1px solid #E5E7EB", opacity: 0.7 }}>
                      <div>
                        <div style={{ fontWeight: 700, color: "#374151" }}>Table 12 (Bumped 1m ago)</div>
                        <div style={{ color: "#6B7280", fontSize: "0.9rem", marginTop: "0.25rem" }}>2x Garlic Bread, 1x Truffle Pasta</div>
                      </div>
                      
                      <button style={{ background: "white", border: "1px solid #D1D5DB", padding: "0.5rem 1rem", borderRadius: "8px", color: "#374151", fontWeight: 700, display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer", boxShadow: "0 1px 2px rgba(0,0,0,0.05)" }}>
                        <Undo2 size={16} /> RECALL
                      </button>
                    </div>

                  </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 11. CTA (Dark) */}
      <section style={{ padding: "6rem 0", background: "var(--pp-bg-dark)", textAlign: "center" }}>
        <div className="pp-wrap">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
            style={{ maxWidth: "700px", margin: "0 auto", background: "rgba(255,255,255,0.03)", padding: "4rem 2rem", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-light)" }}>
              Speed Up Your Service.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Whether you rely on traditional thermal printers or want to switch to fully digital touch-screens, our KOT system ensures the kitchen always knows exactly what to cook.
            </p>
            <Link href="/#demo-form" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#EF4444" }}>
              Setup Kitchen Routing
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
