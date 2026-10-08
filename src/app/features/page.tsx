"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "pos-client",
    title: "Terminal Billing (POS-CLIENT)",
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
          Built for speed and resilience, our in-store client runs smoothly even
          when the internet drops. Say goodbye to laggy web wrappers.
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
            Unified Dashboard
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Manage dine-in tables, takeaway walk-ins, and online orders from a
            single glass pane. Features split billing, partial payments (Cash +
            UPI + Card), and one-tap KOT generation directly to the kitchen.
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
            Offline-First Architecture
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Local database caching ensures you can continue punching orders and
            printing receipts during ISP outages. Data syncs automatically to
            POS-ADMIN the moment connectivity is restored.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-new",
    title: "Aggregator Hub (POS-NEW)",
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
          Stop juggling three different tablets at your counter. Our Aggregator
          Hub pulls Swiggy, Zomato, and direct Web Orders into one unified
          stream.
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
            Auto-Accept & Dispatch
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Configure rules to automatically accept online orders during
            off-peak hours. Instantly ping rider tracking and mark orders 'Food
            Ready' right from the kitchen display.
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
            Menu Syncing
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Change a price or mark an item out-of-stock in POS-ADMIN, and push
            the update instantly to all connected third-party aggregators with a
            single click.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "pos-admin",
    title: "Back Office (POS-ADMIN)",
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
          The command center for multi-outlet owners. Track inventory, analyze
          sales, and manage payroll across your entire franchise network.
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
            Granular Inventory Control
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Track raw materials down to the gram. Link composite recipes to menu
            items for automatic SKU deduction upon sale. Generate low-stock
            alerts and one-click purchase orders for suppliers.
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
            Reconciliation & Reporting
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Identify discrepancies between expected aggregator payouts and
            actual bank settlements. Generate dynamic heatmaps showing peak
            sales hours and most profitable menu engineering zones.
          </p>
        </div>
      </>
    ),
  },
];

export default function FeaturesPage() {
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
            Product Features
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
            The actual product.
            <br />
            In full depth.
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.6,
              maxWidth: "650px",
            }}
          >
            Built from the true feature set in our codebases — not generic SaaS
            boilerplate. Explore the capabilities of our unified ecosystem.
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
            className="feat-sidebar"
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
              Ecosystem
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
          .feat-sidebar { display: block !important; }
        }
      `,
        }}
      />
    </div>
  );
}
