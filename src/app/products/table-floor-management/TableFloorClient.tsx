"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Activity, 
  ArrowLeftRight, 
  Users, 
  Clock, 
  MessageSquare,
  Move3d,
  Combine,
  Phone
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

export default function TableFloorClient() {
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
              <span className="badge-outline-white" style={{ color: "#A78BFA", borderColor: "rgba(167, 139, 250, 0.2)", background: "rgba(167, 139, 250, 0.1)" }}>Dynamic Layouts</span>
            </motion.div>
            <motion.h1 variants={fadeUpVariant} style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.1 }}>
              Smart Table & <span style={{ color: "#A78BFA" }}>Floor Management</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.7)", marginBottom: "3rem", lineHeight: 1.6, maxWidth: "650px", margin: "0 auto 3rem" }}>
              Replicate your exact restaurant layout digitally. Track live occupancy, merge tables for large groups, and optimize your Turnaround Time (TAT) to serve more guests every shift.
            </motion.p>
            <motion.div variants={fadeUpVariant} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/demo" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem", background: "#8B5CF6" }}>
                Map Your Restaurant
              </Link>
              <Link href="#features" className="btn-outline-pill" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
                Explore Floor Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Visual Floor Plan Builder (Light) */}
      <section id="features" style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#8B5CF6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <LayoutDashboard size={20} /> Drag & Drop Editor
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Replicate Your Exact Floor Plan.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                Build your digital dining room in minutes. Place tables precisely where they are in reality, set up different zones (e.g., Patio, Bar, Main Dining), and rotate shapes to match your physical layout.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {[
                  "Support for square, round, and rectangular tables.",
                  "Create multiple floors or zones to filter views easily.",
                  "Intuitive drag-and-drop grid positioning system."
                ].map((item, i) => (
                  <motion.div variants={fadeUpVariant} key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <Move3d color="#8B5CF6" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#111827" }}>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "1.5rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)", position: "relative" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem", paddingBottom: "1rem", borderBottom: "1px solid var(--pp-border)" }}>
                  <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Main Dining Room</div>
                  <div className="badge-outline" style={{ color: "#8B5CF6", borderColor: "rgba(139, 92, 246, 0.2)", background: "rgba(139, 92, 246, 0.1)" }}>Edit Mode</div>
                </div>
                
                {/* Abstract Grid Floor Plan */}
                <div style={{ 
                  background: "var(--pp-bg-light)", 
                  borderRadius: "16px", 
                  height: "300px", 
                  position: "relative",
                  backgroundImage: "linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)",
                  backgroundSize: "20px 20px"
                }}>
                  {/* Square Table */}
                  <div style={{ position: "absolute", top: "40px", left: "40px", width: "60px", height: "60px", background: "white", border: "2px dashed #8B5CF6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#8B5CF6" }}>T1</div>
                  
                  {/* Round Table */}
                  <div style={{ position: "absolute", top: "140px", left: "60px", width: "80px", height: "80px", background: "white", border: "2px dashed #8B5CF6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#8B5CF6" }}>T2</div>
                  
                  {/* Rectangular Table (Moving) */}
                  <div style={{ position: "absolute", top: "80px", right: "60px", width: "100px", height: "60px", background: "rgba(139,92,246,0.1)", border: "2px solid #8B5CF6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, color: "#8B5CF6", boxShadow: "0 10px 25px rgba(139,92,246,0.3)", transform: "rotate(-5deg)" }}>T3 (Dragging)</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Live Occupancy & TAT (Dark) */}
      <section style={{ backgroundColor: "var(--pp-bg-dark)", color: "var(--pp-text-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <Activity size={20} /> Live Status & TAT
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>
                Know Exactly What's Happening.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2rem", lineHeight: 1.7 }}>
                See your entire restaurant at a glance. Color-coded tables show you instantly if a table is vacant, eating, waiting for a bill, or needs cleaning.
              </motion.p>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <Clock size={20} color="#10B981" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>TAT Tracking</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Track Turnaround Time to spot bottlenecks and optimize seating speeds.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="bento-card-dark" style={{ padding: "1.5rem", borderRadius: "16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <MessageSquare size={20} color="#F59E0B" />
                    <h4 style={{ fontSize: "1.1rem", fontWeight: 700 }}>Service Alerts</h4>
                  </div>
                  <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", lineHeight: 1.5 }}>Visual pings on tables when guests scan QR codes to call waiters.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
              <div style={{ width: "100%", padding: "2.5rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", backdropFilter: "blur(20px)" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
                  {/* Occupied Table */}
                  <div style={{ flex: "1 1 45%", background: "rgba(16,185,129,0.1)", border: "2px solid rgba(16,185,129,0.4)", borderRadius: "16px", padding: "1.5rem", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Table 12</span>
                      <Users size={18} color="#10B981" />
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>4 Guests</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#10B981", fontSize: "0.9rem", fontWeight: 700 }}>
                      <Clock size={14} /> 45 mins (Eating)
                    </div>
                  </div>
                  
                  {/* Billed / Waiting Table */}
                  <div style={{ flex: "1 1 45%", background: "rgba(245,158,11,0.1)", border: "2px solid rgba(245,158,11,0.4)", borderRadius: "16px", padding: "1.5rem", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <span style={{ fontWeight: 700, fontSize: "1.2rem", color: "white" }}>Table 04</span>
                      <Users size={18} color="#F59E0B" />
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", marginBottom: "1rem" }}>2 Guests</div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#F59E0B", fontSize: "0.9rem", fontWeight: 700 }}>
                      <Clock size={14} /> 62 mins (Billed)
                    </div>
                    {/* Waiter Ping */}
                    <div style={{ position: "absolute", top: "-10px", right: "-10px", width: "24px", height: "24px", background: "#EF4444", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", border: "3px solid var(--pp-bg-dark)", animation: "float 3s ease infinite" }}>
                       <MessageSquare size={12} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Merge & Waitlist (Light) */}
      <section style={{ backgroundColor: "var(--pp-bg-light)", padding: "7rem 0" }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
              style={{ flex: "1 1 500px" }}
            >
              <motion.div variants={fadeUpVariant} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "#3B82F6", fontWeight: 700, marginBottom: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                <ArrowLeftRight size={20} /> Flexibility & Waitlists
              </motion.div>
              <motion.h2 variants={fadeUpVariant} style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, marginBottom: "1.5rem", color: "var(--pp-text-dark)", lineHeight: 1.2 }}>
                Handle the Friday Night Rush.
              </motion.h2>
              <motion.p variants={fadeUpVariant} style={{ fontSize: "1.125rem", color: "var(--pp-text-muted)", marginBottom: "2rem", lineHeight: 1.7 }}>
                A party of 10 walked in? No problem. Visually merge tables to accommodate large groups. Manage your queue digitally with an integrated waitlist system that alerts guests via SMS.
              </motion.p>
              
              <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Combine size={18} color="#3B82F6" /> Merge & Split
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Join multiple tables to create one master bill, or split a table into separate checks.</p>
                </div>
                <div>
                  <h4 style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem", color: "#111827" }}>
                    <Phone size={18} color="#3B82F6" /> SMS Notifications
                  </h4>
                  <p style={{ color: "var(--pp-text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>Add guests to the waitlist and text them automatically when their table is ready.</p>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant}
              style={{ flex: "1 1 500px", display: "flex", justifyContent: "center" }}
            >
               <div style={{ width: "100%", padding: "2rem", background: "white", borderRadius: "24px", boxShadow: "var(--shadow-lg)", border: "1px solid var(--pp-border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.2rem" }}>Live Waitlist</div>
                    <div className="badge-outline" style={{ color: "#3B82F6", borderColor: "rgba(59, 130, 246, 0.2)", background: "rgba(59, 130, 246, 0.1)" }}>Peak Hours</div>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {[
                      { name: "Rahul Sharma", pax: "4 Pax", wait: "15 mins", status: "Notified via SMS", color: "#10B981" },
                      { name: "Priya Desai", pax: "8 Pax", wait: "22 mins", status: "Merging T4 + T5", color: "#3B82F6" },
                      { name: "Arjun Reddy", pax: "2 Pax", wait: "5 mins", status: "Waiting", color: "#F59E0B" }
                    ].map((guest, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem", background: "var(--pp-bg-light)", borderRadius: "12px", borderLeft: `4px solid ${guest.color}` }}>
                        <div>
                          <div style={{ fontWeight: 700, color: "#111827", marginBottom: "0.25rem" }}>{guest.name} <span style={{ color: "var(--pp-text-muted)", fontSize: "0.85rem", fontWeight: 500 }}>({guest.pax})</span></div>
                          <div style={{ fontSize: "0.85rem", color: guest.color, fontWeight: 700 }}>{guest.status}</div>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--pp-text-muted)", fontSize: "0.9rem", fontWeight: 600 }}>
                          <Clock size={14} /> {guest.wait}
                        </div>
                      </div>
                    ))}
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
              Take the Chaos Out of Seating.
            </h2>
            <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.7)", marginBottom: "2.5rem", lineHeight: 1.6 }}>
              Give your hosts and waiters the tools they need to serve guests faster, reduce errors, and turn over tables efficiently.
            </p>
            <Link href="/demo" className="btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.2rem", borderRadius: "100px", background: "#8B5CF6" }}>
              Build Your Floor Plan
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
