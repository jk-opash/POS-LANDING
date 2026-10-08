"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

const SECTIONS = [
  {
    id: "fine-dine",
    title: "Fine Dining & Premium",
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
          Deliver exceptional hospitality with tools designed for complex floor
          plans, multi-course coursing, and high-touch table service.
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
            Table Management & Coursing
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Visual drag-and-drop floor plans. Send items to the kitchen grouped
            by course (Appetizers, Mains, Desserts) and fire them precisely when
            the table is ready.
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
            Guest CRM
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Track VIP preferences, allergies, and past visit history. Empower
            your captains to provide highly personalized recommendations
            directly from the POS-CLIENT terminal.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "cloud-kitchen",
    title: "Cloud Kitchens (Dark Kitchens)",
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
          Built for high-volume delivery. Optimize prep times, manage multiple
          virtual brands, and eliminate tablet clutter.
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
            Virtual Brand Support
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Operate multiple brands out of the same physical kitchen. The
            POS-NEW aggregator hub distinctly tags incoming orders by brand,
            routing them to the correct prep stations seamlessly.
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
            Kitchen Display Systems (KDS)
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Replace paper KOTs with digital screens. Track exact ticket times,
            prioritize delayed orders automatically, and mark items ready for
            rider pickup with a single tap.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "qsr",
    title: "QSRs & Cafés",
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
          Speed is everything. Our system is optimized for rapid checkout,
          self-service kiosks, and high footfall environments.
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
            Lightning Fast Billing
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Optimized UI for minimal clicks per transaction. Support for barcode
            scanners, integrated weight scales, and instant UPI QR generation on
            a secondary customer-facing display.
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
            Self-Serve Kiosks
          </strong>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "rgba(0,0,0,0.65)",
              margin: 0,
            }}
          >
            Deploy standalone ordering terminals utilizing our Web Ordering
            module to bust lines during peak rush hours, increasing average
            ticket sizes through automated upsells.
          </p>
        </div>
      </>
    ),
  },
];

export default function SolutionsPage() {
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
            Industry Solutions
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
            Tailored for your
            <br />
            exact operating model.
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.6,
              maxWidth: "650px",
            }}
          >
            Whether you run a high-touch fine dining restaurant or a high-volume
            cloud kitchen, our ecosystem adapts to your workflow.
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
            className="sol-sidebar"
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
              Use Cases
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
          .sol-sidebar { display: block !important; }
        }
      `,
        }}
      />
    </div>
  );
}
