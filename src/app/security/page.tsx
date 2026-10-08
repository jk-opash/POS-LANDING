"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "infrastructure",
    title: "Cloud & Network Security",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          The foundation of our POS ecosystem is built on enterprise-grade cloud infrastructure designed to withstand high-volume, mission-critical operations. We employ a defense-in-depth strategy to secure your data at every layer.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Encryption in Transit & At Rest</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            All communication between POS-CLIENT terminals, POS-ADMIN dashboards, and our cloud APIs is encrypted using TLS 1.3 with Perfect Forward Secrecy. Data at rest—including customer databases, financial logs, and API tokens—is encrypted using AES-256 block-level encryption.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Edge Protection & WAF</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Our Web Ordering and POS-NEW API layers are shielded by an intelligent Web Application Firewall (WAF) and distributed DDoS mitigation networks. This ensures that massive traffic spikes or malicious botnets cannot impact your restaurant's ability to accept orders.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-client",
    title: "Terminal Security (POS-CLIENT)",
    bg: "#F9FAFB",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          In-store terminals are heavily exposed to physical environments. We secure POS-CLIENT instances through zero-trust principles and robust hardware lockdown policies.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Kiosk & Terminal Lockdown</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            POS-CLIENT instances operate in strict kiosk mode. The underlying operating system is hardened to prevent unauthorized USB access, physical tampering, or the sideloading of unverified applications. This prevents malware from infiltrating the restaurant's local network.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Local Network Segmentation</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            We strongly enforce network segmentation, ensuring that POS terminals, Kitchen Display Systems (KDS), and payment terminals operate on a dedicated subnet, completely isolated from public guest Wi-Fi or back-office administration networks.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-admin",
    title: "Identity & Access (POS-ADMIN)",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Internal fraud and unauthorized data access are severe risks in the hospitality industry. POS-ADMIN provides granular controls to ensure absolute accountability.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Granular Role-Based Access (RBAC)</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Permissions are highly segregated. A cashier cannot view inventory costs, and a kitchen manager cannot access payroll data. Every action taken on POS-CLIENT and POS-ADMIN is cryptographically tied to a specific employee PIN or biometric login.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Immutable Audit Logging</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Critical actions such as voiding receipts, processing refunds, or altering menu prices trigger an immutable audit log. These logs are write-once-read-many (WORM) compliant, guaranteeing that financial records cannot be retroactively altered to cover shrinkage.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-new",
    title: "API Security (POS-NEW)",
    bg: "#F8FAFC",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          As your restaurant integrates with third-party aggregators and loyalty platforms through POS-NEW, we ensure these external bridges do not compromise your core system.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Webhook Validation & Signing</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            All incoming payloads from aggregators like Swiggy or Zomato are cryptographically verified using HMAC signatures. This ensures that malicious actors cannot inject fraudulent orders or alter payment statuses within your POS.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>API Key Rotation & Scoping</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Merchant API keys issued for custom integrations can be scoped strictly to specific endpoints (e.g., read-only access to menu items). Our dashboard supports instant key revocation and automated rotation to prevent credential leakage.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Aggregator Traffic Isolation</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Third-party API traffic is routed through dedicated, containerized worker nodes. This architectural isolation ensures that a sudden surge in delivery orders during peak hours cannot exhaust the resources needed for local in-store POS-CLIENT operations.
          </p>
        </div>
      </>
    ),
  },
];

export default function SecurityPage() {
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
            Security & Trust
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: theme.fonts.heading, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "800px" }}>
            Defense in depth.<br />Zero compromises.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: "650px" }}>
            We protect your operational data as fiercely as you protect your business. Explore our enterprise-grade security practices across hardware, networks, and APIs.
          </p>
        </motion.div>
      </div>

      {/* SPLIT LAYOUT */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "flex-start", position: "relative" }}>
          
          {/* STICKY SIDEBAR NAVIGATION */}
          <div 
            className="security-sidebar"
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
          .security-sidebar {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
