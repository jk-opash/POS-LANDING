"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "pos-client",
    title: "Client POS & Web Ordering",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          The POS-CLIENT application and our integrated Web Ordering modules form the frontline of your customer interactions. We are deeply committed to ensuring that the data collected here is handled with absolute security and transparency.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>In-Store Transactions & Kitchen Routing</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            When staff process orders, we capture line-item details, applied discounts, modifier selections, and tax calculations. This telemetry ensures that Kitchen Display Systems (KDS) receive accurate, instantaneous updates. All local network traffic between terminals is heavily encrypted to prevent internal sniffing.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Customer-Facing Interfaces (Kiosks & QR)</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            For self-service kiosks and table-side QR ordering, we process temporary device identifiers and local session states. This is strictly to prevent order duplication and ensure a smooth checkout flow. We do not track users across third-party sites or applications.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Payment Processing & PCI Compliance</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            End-to-end encryption is utilized for all card-present and card-not-present transactions. We absolutely do not store raw magnetic stripe, EMV, or CVV data on our servers. All tokenization and vaulting are handled securely via our PCI-DSS Level 1 certified gateway partners.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-admin",
    title: "Admin & Operational Intelligence",
    bg: "#F9FAFB",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          POS-ADMIN serves as the central nervous system for your back-office operations. It handles highly sensitive business metrics, and we treat your operational data as strictly confidential trade secrets.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Workforce Management & Payroll</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            We log employee clock-ins, clock-outs, break durations, and register assignments. This data empowers owners with labor cost analysis and payroll exports. Access to this data is governed by strict Role-Based Access Control (RBAC), ensuring staff privacy.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Financial Audit Trails</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Every void, comp, discount, and cash drawer open event is meticulously logged with manager approval timestamps. This creates a secure, immutable audit trail designed to prevent shrinkage and internal fraud without compromising authorized flexibility.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Inventory & Procurement Secrets</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Supplier details, invoice records, and recipe costings are securely stored. We recognize that your proprietary recipes, ingredient margins, and vendor agreements are the lifeblood of your business, and they are mathematically isolated from all other tenants in our cloud.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-new",
    title: "Ecosystem & Integrations",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Our modern POS-NEW architecture allows your restaurant to connect seamlessly with the broader food-tech ecosystem. Data sharing across these bridges is strictly governed by the principle of least privilege.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Aggregator Bridges (Zomato, Swiggy, etc.)</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Orders flowing in from third-party delivery platforms pass through our secure API layer. We only retain the specific order payload necessary for kitchen fulfillment, tax calculation, and financial reconciliation. We do not share your internal menu velocity metrics back to aggregators.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>CRM & Loyalty Programs</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            If you utilize our built-in CRM, customer purchase histories and loyalty point accruals are stored safely. This data belongs exclusively to the merchant; we explicitly do not cross-market, pool, or sell this customer data to other restaurants or external data brokers.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Open API & Webhooks</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Merchants can generate API keys for custom integrations (e.g., automated accounting syncs). We log API request metadata (IP addresses, endpoints accessed, timestamps) solely for rate-limiting, anomaly detection, and vital security auditing.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "sovereignty",
    title: "Data Sovereignty & Compliance",
    bg: "#F8FAFC",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          We believe you should have complete autonomy over your store's data. We provide the comprehensive tools necessary to ensure your compliance with global data protection regulations.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Right to Erasure & Portability</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Authorized owners can initiate full exports of historical sales data via the POS-ADMIN dashboard at any time. Additionally, you can request the permanent anonymization of specific employee or customer records, or securely archive outdated business data.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Data Localization</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Where required by regional laws (e.g., GDPR, PDPA), our primary databases and read-replicas are strictly geofenced to specific cloud regions. We utilize enterprise-grade cloud infrastructure to ensure high availability while maintaining localized compliance.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Incident Response</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            In the highly unlikely event of a data breach, our automated SIEM (Security Information and Event Management) protocols will immediately isolate affected shards and notify all relevant administrators with a detailed impact assessment and mitigation plan within 72 hours.
          </p>
        </div>
      </>
    ),
  },
];

export default function PrivacyPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 300; 

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ backgroundColor: theme.colors.bgLight, minHeight: "100vh", color: theme.colors.textDark }}>
      {/* HERO SECTION */}
      <div style={{ paddingTop: "160px", paddingBottom: "80px", paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.4rem 1rem",
              borderRadius: "100px",
              background: "rgba(255, 69, 0, 0.08)",
              color: theme.colors.primary,
              fontWeight: 700,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            Privacy & Data Governance
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: theme.fonts.heading, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "800px" }}>
            Total transparency.<br />Zero compromises.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: "650px" }}>
            We process millions of transactions across our POS ecosystem daily. Learn exactly how we collect, secure, and empower you with complete control over your business data.
          </p>
        </motion.div>
      </div>

      {/* SPLIT LAYOUT */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "flex-start", position: "relative" }}>
          
          {/* STICKY SIDEBAR NAVIGATION */}
          <div 
            className="privacy-sidebar"
            style={{
              position: "sticky",
              top: "100px",
              width: "320px",
              flexShrink: 0,
              padding: "4rem 3rem 4rem 1.5rem",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              display: "none", 
              height: "calc(100vh - 100px)",
              overflowY: "auto"
            }}
          >
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(0,0,0,0.4)", marginBottom: "2rem", fontWeight: 700 }}>
              Contents
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    const el = document.getElementById(s.id);
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  style={{
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    padding: 0,
                    margin: 0,
                    cursor: "pointer",
                    fontSize: "1rem",
                    fontWeight: activeSection === s.id ? 700 : 500,
                    color: activeSection === s.id ? theme.colors.primary : "rgba(0,0,0,0.5)",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem"
                  }}
                >
                  <span style={{ 
                    width: "4px", 
                    height: activeSection === s.id ? "1.5rem" : "0px", 
                    backgroundColor: theme.colors.primary, 
                    borderRadius: "4px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
                  }} />
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT AREA */}
          <div style={{ flex: 1, paddingBottom: "8rem" }}>
            {SECTIONS.map((section) => (
              <div 
                id={section.id} 
                key={section.id}
                style={{
                  padding: "5rem 2rem",
                  background: section.bg,
                  borderBottom: "1px solid rgba(0,0,0,0.04)"
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ maxWidth: "750px" }}
                >
                  <h2 style={{ fontSize: "2.25rem", fontWeight: 800, marginBottom: "2.5rem", letterSpacing: "-0.02em", color: theme.colors.textDark }}>
                    {section.title}
                  </h2>
                  {section.content}
                </motion.div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 900px) {
          .privacy-sidebar {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
