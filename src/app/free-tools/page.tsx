"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "recipe-costing",
    title: "Recipe Costing Calculator",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Taken directly from the core engine of POS-ADMIN, our free recipe costing tool helps you calculate exact plate costs and dial in your margins.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Yield Management</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Account for trim, shrinkage, and cooking loss. Input your raw ingredient weights and let the calculator automatically adjust the true cost of the usable product in your final dish.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Dynamic Food Cost %</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Instantly see how supplier price fluctuations impact your bottom line. Enter your target food cost percentage, and the tool will automatically suggest the optimal menu selling price.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "menu-engineering",
    title: "Menu Engineering Matrix",
    bg: "#F9FAFB",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Stop guessing what sells. Use the same analytical frameworks built into our premium enterprise reporting to categorize and optimize your menu items.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Profit vs. Popularity</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Map your dishes onto a classic Boston Consulting Group matrix. Quickly identify your "Stars" (high profit, high volume) and your "Dogs" (low profit, low volume) to make data-driven menu cuts.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Menu Placement Strategy</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Learn where to place "Puzzles" (high margin, low volume) on your physical or digital menus to draw the eye, leveraging the psychology of menu design to increase overall ticket sizes.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "qr-generator",
    title: "Dine-In QR Generator",
    bg: "#FFFFFF",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          A stripped-down version of our robust Web Ordering ecosystem, allowing you to quickly deploy contactless menus without a full POS integration.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Table-Specific Routing</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Generate unique QR codes for every table in your restaurant. While the free tool won't sync directly to the POS-CLIENT, it provides a seamless PDF or mobile-web menu experience for your guests.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>High-Res Vector Export</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Download print-ready SVG or high-resolution PNG codes. Perfect for embedding into custom acrylic table tents, window stickers, or promotional flyers without pixelation.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "staff-scheduling",
    title: "Staff Scheduling Planner",
    bg: "#F8FAFC",
    content: (
      <>
        <p style={{ marginBottom: "2rem", fontSize: "1.15rem", lineHeight: 1.8, color: "rgba(0,0,0,0.7)" }}>
          Managing shifts shouldn't require a whiteboard. We've extracted the core of our POS-ADMIN payroll module into a standalone scheduling utility.
        </p>
        <div style={{ marginBottom: "2rem" }}>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Labor Cost Forecasting</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Input hourly wages and build your weekly roster. The tool automatically calculates projected daily labor costs, helping you avoid accidental overtime and keeping labor percentages in check.
          </p>
        </div>
        <div>
          <strong style={{ display: "block", color: theme.colors.textDark, marginBottom: "0.5rem", fontSize: "1.1rem" }}>Shift Swaps & Coverage</strong>
          <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "rgba(0,0,0,0.65)", margin: 0 }}>
            Export clean, readable PDF schedules to pin on the kitchen board, or share directly to staff WhatsApp groups. Ensure Front-of-House (FOH) and Back-of-House (BOH) coverage is balanced for peak hours.
          </p>
        </div>
      </>
    ),
  },
];

export default function FreeToolsPage() {
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
            Resources & Utilities
          </div>
          <h1 style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", fontFamily: theme.fonts.heading, fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "1.5rem", maxWidth: "800px" }}>
            Free tools for<br />restaurant growth.
          </h1>
          <p style={{ fontSize: "1.25rem", color: "rgba(0,0,0,0.6)", lineHeight: 1.6, maxWidth: "650px" }}>
            We've extracted some of the best features from our core POS engine and made them completely free to use. Calculate costs, engineer your menu, and generate QR codes instantly.
          </p>
        </motion.div>
      </div>

      {/* SPLIT LAYOUT */}
      <div style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexDirection: "row", alignItems: "flex-start", position: "relative" }}>
          
          {/* STICKY SIDEBAR NAVIGATION */}
          <div 
            className="freetools-sidebar"
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
              Available Tools
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
          .freetools-sidebar {
            display: block !important;
          }
        }
      `}} />
    </div>
  );
}
