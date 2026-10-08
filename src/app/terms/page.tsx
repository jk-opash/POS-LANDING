"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "acceptable-use",
    title: "Service & Acceptable Use",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          By deploying the POS-CLIENT application or our Web Ordering modules, you agree to utilize our services strictly for legal, commercial food service operations. We maintain strict guidelines to ensure the stability of the platform for all merchants.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>In-Store Hardware & Software Deployment</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            The POS-CLIENT software must only be installed on authorized, supported hardware. Any attempt to reverse-engineer, decompile, or bypass the licensing mechanisms on your local terminals is strictly prohibited and will result in immediate termination of service.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Web Ordering & Fraud Prevention</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Merchants are responsible for fulfilling orders received via the Web Ordering platform. While we provide automated fraud-detection heuristics (such as rate-limiting and device fingerprinting), the ultimate liability for chargebacks resulting from fraudulent end-user transactions remains with the merchant.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "subscriptions",
    title: "Subscriptions & Licensing",
    bg: "#F9FAFB",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Access to the POS-ADMIN dashboard and the broader cloud ecosystem is licensed on a recurring subscription basis. We strive for total transparency in our billing architecture.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Billing Cycles & Seat Limits</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Subscriptions are billed in advance on a monthly or annual cycle. Your license is bound to a specific number of terminal seats or physical locations. Expanding your operations by adding new physical branches or POS-CLIENT registers requires a corresponding upgrade to your subscription tier.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Lapsed Accounts & Data Retention</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            In the event of payment failure, a 14-day grace period is provided. Following this, active terminal syncing and POS-NEW API access will be suspended. However, your historical data will remain securely vaulted in POS-ADMIN for 90 days, allowing you to export your data even if you choose not to renew.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "ecosystem-api",
    title: "Ecosystem & API Limits",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Our POS-NEW architecture allows you to integrate with third-party aggregators and custom applications. To ensure high availability for all merchants, strict fair-use policies apply to our API gateways.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Third-Party Aggregators</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Connections to aggregators (e.g., Zomato, Swiggy) are provided "as-is." While we guarantee the uptime of our POS-NEW endpoints, we are not liable for outages, missed orders, or pricing desynchronizations caused by the external aggregator's API downtime or unannounced schema changes.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Rate Limiting & Abuse</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Custom integrations utilizing merchant API keys are subject to standard rate limiting (e.g., 100 requests per minute). Scripts or external applications that aggressively poll our servers, attempt to bypass pagination limits, or trigger internal DDoS protections will have their API keys revoked automatically.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "sla-liability",
    title: "SLA & Liability",
    bg: "#F8FAFC",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          We understand that your POS is mission-critical. Our engineering teams work tirelessly to ensure the highest possible uptime, but we must establish clear legal boundaries regarding liability.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Uptime Guarantees (SLA)</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            We guarantee a 99.9% uptime for the POS-ADMIN cloud dashboard and POS-NEW API endpoints. Scheduled maintenance windows (typically performed during low-traffic overnight hours) do not count against this SLA. In the event of an SLA breach, affected merchants may be eligible for pro-rated subscription credits.
          </p>
        </div>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Offline Mode Operations</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            The POS-CLIENT application is designed to continue functioning during local internet outages (Offline Mode). However, merchants acknowledge that credit card processing and real-time inventory syncing cannot occur offline. We are not liable for data conflicts or uncaptured payments that occur during local network failures.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Limitation of Liability</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            In no event shall our company, directors, or employees be liable for any indirect, incidental, special, or consequential damages, including loss of profits, revenue, or data, arising out of your use of the platform, even if we have been advised of the possibility of such damages.
          </p>
        </div>
      </>
    ),
  },
];

export default function TermsPage() {
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
            Terms of Service
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: theme.fonts.heading, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "800px" }}>
            Clear expectations.<br />Fair partnerships.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: "650px" }}>
            We build tools to help your restaurant succeed. Here are the simple, clear guidelines governing the use of our software, APIs, and hardware ecosystems.
          </p>
        </motion.div>
      </div>

      {/* SPLIT LAYOUT */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "flex-start", position: "relative" }}>
          
          {/* STICKY SIDEBAR NAVIGATION */}
          <div 
            className="terms-sidebar"
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
          .terms-sidebar {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
