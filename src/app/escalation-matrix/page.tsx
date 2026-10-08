"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "level-1",
    title: "Level 1: Support Helpdesk",
    bg: "#FFFFFF",
    content: (
      <>
        <p
          style={{
            marginBottom: "2rem",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "rgba(0,0,0,0.7)",
          }}
        >
          Your first point of contact for daily operational hurdles, POS-CLIENT
          terminal troubleshooting, and basic billing queries.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong
            style={{
              display: "block",
              color: theme.colors.textDark,
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Scope of Resolution
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            General navigation issues, password resets, menu item configuration
            assistance, printer connectivity issues (LAN/Bluetooth), and
            immediate bug reporting for Web Ordering and in-store terminals.
          </p>
        </div>
        <div>
          <strong
            style={{
              display: "block",
              color: theme.colors.textDark,
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Contact Information
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            <strong>Email:</strong> support@billbite.com
            <br />
            <strong>Phone:</strong> 1800-123-4567 (9 AM - 9 PM IST)
            <br />
            <strong>Expected TAT:</strong> 2 to 4 hours.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "level-2",
    title: "Level 2: Team Lead & Tech",
    bg: "#F9FAFB",
    content: (
      <>
        <p
          style={{
            marginBottom: "2rem",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "rgba(0,0,0,0.7)",
          }}
        >
          For persistent software issues requiring deeper technical
          investigation, API integration failures (POS-NEW), and hardware RMAs.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong
            style={{
              display: "block",
              color: theme.colors.textDark,
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Scope of Resolution
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Aggregator webhook failures (Zomato/Swiggy order drops), database
            sync issues across multi-branch POS-ADMIN setups, severe hardware
            malfunctions requiring replacement dispatch, and unexplainable
            payout discrepancies.
          </p>
        </div>
        <div>
          <strong
            style={{
              display: "block",
              color: theme.colors.textDark,
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Contact Information
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            <strong>Email:</strong> lead.support@billbite.com
            <br />
            <strong>Trigger:</strong> If L1 has not resolved the issue within 24
            hours.
            <br />
            <strong>Expected TAT:</strong> 12 to 24 hours.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "level-3",
    title: "Level 3: Grievance Officer",
    bg: "#FFFFFF",
    content: (
      <>
        <p
          style={{
            marginBottom: "2rem",
            fontSize: "1.15rem",
            lineHeight: 1.8,
            color: "rgba(0,0,0,0.7)",
          }}
        >
          The highest level of escalation, reserved for critical business
          impact, severe SLA breaches, data security concerns, or legal
          disputes.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong
            style={{
              display: "block",
              color: theme.colors.textDark,
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Scope of Resolution
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Complete localized cloud outages affecting trading, disputes
            regarding annual subscription refunds, suspected unauthorized data
            access within your tenant, and unresolved issues exceeding 72 hours.
          </p>
        </div>
        <div>
          <strong
            style={{
              display: "block",
              color: theme.colors.textDark,
              marginBottom: "0.5rem",
              fontSize: "1.1rem",
            }}
          >
            Contact Information
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            <strong>Email:</strong> grievance@billbite.com
            <br />
            <strong>Trigger:</strong> If L2 has not resolved the issue within 72
            hours, or for severe zero-day impact.
            <br />
            <strong>Expected TAT:</strong> Within 48 hours with executive
            oversight.
          </p>
        </div>
      </>
    ),
  },
];

export default function EscalationPage() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = SECTIONS.map((s) =>
        document.getElementById(s.id),
      );
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
    <div
      style={{
        backgroundColor: theme.colors.bgLight,
        minHeight: "100vh",
        color: theme.colors.textDark,
      }}
    >
      <div
        style={{
          paddingTop: "160px",
          paddingBottom: "80px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
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
            Escalation Matrix
          </div>
          <h1
            style={{
              fontSize: "clamp(3rem, 6vw, 4.5rem)",
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              maxWidth: "800px",
            }}
          >
            Unmatched support.
            <br />
            Clear resolution paths.
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.6,
              maxWidth: "650px",
            }}
          >
            We take your restaurant's operational continuity seriously. Follow
            our transparent escalation matrix to ensure your issues reach the
            right experts instantly.
          </p>
        </motion.div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            position: "relative",
          }}
        >
          <div
            className="es-sidebar"
            style={{
              position: "sticky",
              top: "100px",
              width: "320px",
              flexShrink: 0,
              padding: "4rem 3rem 4rem 1.5rem",
              borderRight: "1px solid rgba(0,0,0,0.06)",
              display: "none",
              height: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
          >
            <h4
              style={{
                fontSize: "0.85rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "rgba(0,0,0,0.4)",
                marginBottom: "2rem",
                fontWeight: 700,
              }}
            >
              Matrix Levels
            </h4>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    const el = document.getElementById(s.id);
                    if (el) {
                      const y =
                        el.getBoundingClientRect().top + window.scrollY - 100;
                      window.scrollTo({ top: y, behavior: "smooth" });
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
                    color:
                      activeSection === s.id
                        ? theme.colors.primary
                        : "rgba(0,0,0,0.5)",
                    transition: "all 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: activeSection === s.id ? "1.5rem" : "0px",
                      backgroundColor: theme.colors.primary,
                      borderRadius: "4px",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />
                  {s.title}
                </button>
              ))}
            </div>
          </div>

          <div style={{ flex: 1, paddingBottom: "8rem" }}>
            {SECTIONS.map((section) => (
              <div
                id={section.id}
                key={section.id}
                style={{
                  padding: "5rem 2rem",
                  background: section.bg,
                  borderBottom: "1px solid rgba(0,0,0,0.04)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ maxWidth: "750px" }}
                >
                  <h2
                    style={{
                      fontSize: "2.25rem",
                      fontWeight: 800,
                      marginBottom: "2.5rem",
                      letterSpacing: "-0.02em",
                      color: theme.colors.textDark,
                    }}
                  >
                    {section.title}
                  </h2>
                  {section.content}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @media (min-width: 900px) {
          .es-sidebar { display: block !important; }
        }
      `,
        }}
      />
    </div>
  );
}
