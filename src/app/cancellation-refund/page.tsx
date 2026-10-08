"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "software-cancellations",
    title: "Software Cancellations (POS-ADMIN)",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Our POS-ADMIN cloud services and operational modules operate on transparent billing cycles. We make canceling your services straightforward without hidden lock-ins.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Subscription Terminations</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            You may request a cancellation of your POS-ADMIN subscription at any time. For monthly plans, the cancellation takes effect at the end of the current paid billing cycle. No further charges will be incurred, and your account will remain fully operational until that cycle concludes.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Annual Plan Early Exit</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            If you terminate an annual commitment prematurely, a standard early termination fee (equivalent to one month of service) will be deducted from any remaining prorated balance. Exceptions are made if the cancellation is driven by documented technical failures failing to meet our Service Level Agreement (SLA).
          </p>
        </div>
      </>
    ),
  },
  {
    id: "hardware-refunds",
    title: "Hardware & Terminal Refunds",
    bg: "#F9FAFB",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Because physical POS-CLIENT hardware requires specialized shipping, provisioning, and refurbishment, our refund policies differ slightly from software.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>The 14-Day Return Window</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            All direct hardware purchases (KDS screens, receipt printers, payment terminals) can be returned within 14 days of delivery. The hardware must be unblemished, unregistered, and returned in its original packaging. A 15% restocking and wipe fee applies to all non-defective units.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Defective & DOA Equipment</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            If a terminal arrives Dead on Arrival (DOA) or suffers a catastrophic failure not caused by negligence (e.g., liquid damage), we will process an immediate Return Merchandise Authorization (RMA) and issue a full refund or free replacement.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "api-integrations",
    title: "Integrations & API Subscriptions",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Cancellations relating to third-party aggregators and our POS-NEW API layer are handled distinctly due to external dependencies.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Aggregator Disconnection (POS-NEW)</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            If you choose to cancel a premium aggregator integration module (e.g., Zomato, Swiggy), your webhook feeds will be disabled immediately upon the end of the billing cycle. Note that you must separately close your merchant accounts with those third-party providers.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>API Overage Non-Refundability</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Any usage-based charges incurred from API overages or high-volume transactional bursting prior to the date of cancellation are strictly non-refundable, as the compute and network resources were already consumed.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "offboarding",
    title: "The Offboarding Process",
    bg: "#F8FAFC",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          We ensure that canceling your service does not mean abruptly losing your historical business data.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>90-Day Data Vaulting</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Upon final cancellation and processing of any prorated refunds, your POS-ADMIN account transitions to a read-only "Vaulted" state for 90 days. This allows your accounting team to safely export CSVs and PDFs of your historical sales, inventory, and payroll data before final termination.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Final Cryptographic Deletion</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Once the 90-day vaulting period expires, all operational data associated with your restaurant is permanently and cryptographically destroyed in accordance with our data sovereignty policies.
          </p>
        </div>
      </>
    ),
  },
];

export default function CancellationRefundPage() {
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
            Cancellations & Refunds
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: theme.fonts.heading, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "800px" }}>
            Fair policies.<br />Transparent processing.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: "650px" }}>
            Whether it's a cloud software cancellation, physical terminal refund, or API offboarding, here is a clear guide on how we handle subscription terminations gracefully.
          </p>
        </motion.div>
      </div>

      {/* SPLIT LAYOUT */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "flex-start", position: "relative" }}>
          
          {/* STICKY SIDEBAR NAVIGATION */}
          <div 
            className="cancel-sidebar"
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
          .cancel-sidebar {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
