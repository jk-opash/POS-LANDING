"use client";
import React, { useState } from "react";
import { theme } from "@/config/theme";
import Link from "next/link";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <div style={{ flex: 1, backgroundColor: theme.colors.bgLight, paddingBottom: "5rem" }}>
      {/* Hero */}
      <section style={{ backgroundColor: theme.colors.bgDark, paddingTop: "6rem", paddingBottom: "4rem", textAlign: "center" }}>
        <div className="pp-wrap">
          <h1 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#fff", marginBottom: "1rem" }}>
            Transparent Pricing for Every Kitchen
          </h1>
          <p style={{ color: "#9EAAB4", maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.1rem" }}>
            No hidden fees, no surprise charges. Upgrade or downgrade at any time as your business grows.
          </p>
          
          {/* Toggle */}
          <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.1)", borderRadius: "2rem", padding: "0.25rem" }}>
            <button 
              onClick={() => setBilling("monthly")}
              style={{ padding: "0.75rem 1.5rem", borderRadius: "2rem", border: "none", fontSize: "0.9rem", fontWeight: 600, background: billing === "monthly" ? "#fff" : "transparent", color: billing === "monthly" ? "#111827" : "#fff", cursor: "pointer", transition: "all 0.2s" }}
            >
              Monthly
            </button>
            <button 
              onClick={() => setBilling("yearly")}
              style={{ padding: "0.75rem 1.5rem", borderRadius: "2rem", border: "none", fontSize: "0.9rem", fontWeight: 600, background: billing === "yearly" ? "#fff" : "transparent", color: billing === "yearly" ? "#111827" : "#fff", cursor: "pointer", transition: "all 0.2s" }}
            >
              Yearly (Save 20%)
            </button>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section style={{ marginTop: "-3rem", position: "relative", zIndex: 10 }}>
        <div className="pp-wrap" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
          
          {/* Starter */}
          <div className="bento-card" style={{ background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}` }}>
            <h3 style={{ fontSize: "1.5rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: theme.colors.textDark }}>Starter</h3>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", fontSize: "0.9rem" }}>Everything you need to run one outlet without spreadsheets.</p>
            <div style={{ margin: "2rem 0", padding: "1.5rem 0", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
              <p style={{ color: "#111827", fontSize: "2.5rem", fontFamily: theme.fonts.heading, fontWeight: 800 }}>
                {billing === "yearly" ? "₹999" : "₹1,249"}
                <span style={{ fontSize: "1rem", color: "#6B7280", fontWeight: 400 }}>/month</span>
              </p>
              <p style={{ color: "#9CA3AF", fontSize: "0.75rem", marginTop: "0.25rem" }}>Billed {billing === "yearly" ? "annually" : "monthly"} + 18% GST</p>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Core Billing & POS</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Offline Support</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Standard Reports</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Email Support</li>
            </ul>
            <Link href="/#demo-form" className="btn-secondary" style={{ display: "block", textAlign: "center", width: "100%" }}>Start Free Trial</Link>
          </div>

          {/* Growth */}
          <div className="bento-card" style={{ background: theme.colors.bgSurface, border: `2px solid ${theme.colors.accent}`, boxShadow: "var(--shadow-accent)", position: "relative" }}>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", background: theme.colors.accent, color: "#fff", padding: "0.25rem 1rem", borderRadius: "1rem", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.05em" }}>MOST POPULAR</div>
            <h3 style={{ fontSize: "1.5rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: theme.colors.textDark }}>Growth</h3>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", fontSize: "0.9rem" }}>Add outlets, inventory, and aggregator orders without adding chaos.</p>
            <div style={{ margin: "2rem 0", padding: "1.5rem 0", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
              <p style={{ color: "#111827", fontSize: "2.5rem", fontFamily: theme.fonts.heading, fontWeight: 800 }}>
                {billing === "yearly" ? "₹2,499" : "₹3,124"}
                <span style={{ fontSize: "1rem", color: "#6B7280", fontWeight: 400 }}>/mo/outlet</span>
              </p>
              <p style={{ color: "#9CA3AF", fontSize: "0.75rem", marginTop: "0.25rem" }}>Billed {billing === "yearly" ? "annually" : "monthly"} + 18% GST</p>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Everything in Starter</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Online Order Sync</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Inventory Management</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Multi-branch Dashboard</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Phone & Chat Support</li>
            </ul>
            <Link href="/#demo-form" className="btn-primary" style={{ display: "block", textAlign: "center", width: "100%" }}>Get Started</Link>
          </div>

          {/* Professional */}
          <div className="bento-card" style={{ background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}` }}>
            <h3 style={{ fontSize: "1.5rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: theme.colors.textDark }}>Professional</h3>
            <p style={{ color: "#6B7280", marginTop: "0.5rem", fontSize: "0.9rem" }}>Full visibility into every branch, every platform, every rupee.</p>
            <div style={{ margin: "2rem 0", padding: "1.5rem 0", borderTop: "1px solid #F3F4F6", borderBottom: "1px solid #F3F4F6" }}>
              <p style={{ color: "#111827", fontSize: "2.5rem", fontFamily: theme.fonts.heading, fontWeight: 800 }}>
                {billing === "yearly" ? "₹4,999" : "₹6,249"}
                <span style={{ fontSize: "1rem", color: "#6B7280", fontWeight: 400 }}>/mo/outlet</span>
              </p>
              <p style={{ color: "#9CA3AF", fontSize: "0.75rem", marginTop: "0.25rem" }}>Billed {billing === "yearly" ? "annually" : "monthly"} + 18% GST</p>
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Everything in Growth</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Payout Reconciliation</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Advanced Supplier Mgmt</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Custom Roles & Audit Logs</li>
              <li style={{ color: "#374151", fontSize: "0.9rem" }}><span style={{ color: "#10B981", fontWeight: "bold", marginRight: "0.5rem" }}>✓</span>Dedicated Account Manager</li>
            </ul>
            <Link href="/#demo-form" className="btn-secondary" style={{ display: "block", textAlign: "center", width: "100%" }}>Contact Sales</Link>
          </div>

        </div>
      </section>
      
      {/* Compare features table */}
      <section style={{ padding: "5rem 0", background: theme.colors.bgSurface }}>
        <div className="pp-wrap">
          <h2 style={{ textAlign: "center", fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "2rem", color: "#111827", marginBottom: "3rem" }}>
            Compare All Features
          </h2>
          <div style={{ overflowX: "auto", border: "1px solid #E5E7EB", borderRadius: "1rem" }}>
            <table style={{ width: "100%", minWidth: "700px", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${theme.colors.border}`, background: theme.colors.bgLight }}>
                  <th style={{ padding: "1.5rem 1rem", textAlign: "left", fontSize: "1.1rem", fontFamily: theme.fonts.heading, color: theme.colors.textDark }}>Features</th>
                  <th style={{ padding: "1.5rem 1rem", textAlign: "center", fontSize: "1.1rem", fontFamily: theme.fonts.heading, color: theme.colors.textDark }}>Starter</th>
                  <th style={{ padding: "1.5rem 1rem", textAlign: "center", fontSize: "1.1rem", fontFamily: theme.fonts.heading, color: theme.colors.textDark }}>Growth</th>
                  <th style={{ padding: "1.5rem 1rem", textAlign: "center", fontSize: "1.1rem", fontFamily: theme.fonts.heading, color: theme.colors.textDark }}>Professional</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                  <td style={{ padding: "1.25rem 1rem", color: theme.colors.textDark, fontWeight: 500 }}>Billing & POS</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${theme.colors.border}`, background: theme.colors.bgLight }}>
                  <td style={{ padding: "1.25rem 1rem", color: theme.colors.textDark, fontWeight: 500 }}>Table & Floor Plan</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                  <td style={{ padding: "1.25rem 1rem", color: theme.colors.textDark, fontWeight: 500 }}>Inventory Management</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#9CA3AF" }}>—</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${theme.colors.border}`, background: theme.colors.bgLight }}>
                  <td style={{ padding: "1.25rem 1rem", color: theme.colors.textDark, fontWeight: 500 }}>Online Ordering Sync</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#9CA3AF" }}>—</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${theme.colors.border}` }}>
                  <td style={{ padding: "1.25rem 1rem", color: theme.colors.textDark, fontWeight: 500 }}>Payout Reconciliation</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#9CA3AF" }}>—</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#9CA3AF" }}>—</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                </tr>
                <tr style={{ background: theme.colors.bgLight }}>
                  <td style={{ padding: "1.25rem 1rem", color: theme.colors.textDark, fontWeight: 500 }}>Multi-Branch Central Control</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#9CA3AF" }}>—</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                  <td style={{ padding: "1.25rem 1rem", textAlign: "center", color: "#10B981", fontWeight: 800 }}>✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
