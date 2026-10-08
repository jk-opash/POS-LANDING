"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

export default function ContactPage() {
  const [activeSection, setActiveSection] = useState("book-demo");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUCCESS");
  };

  const SECTIONS = [
    {
      id: "book-demo",
      title: "Book a Demo",
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
            See exactly how the BillBite ecosystem (POS-CLIENT, POS-ADMIN,
            POS-NEW) can streamline your restaurant's operations. Drop your
            details below.
          </p>

          {status === "SUCCESS" ? (
            <div
              style={{
                padding: "3rem",
                background: "#F9FAFB",
                borderRadius: "1rem",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "center",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: theme.colors.textDark,
                  marginBottom: "1rem",
                }}
              >
                Request Sent!
              </h3>
              <p style={{ color: "rgba(0,0,0,0.6)", marginBottom: "2rem" }}>
                We've received your request and will be in touch shortly to
                schedule your demo.
              </p>
              <button
                onClick={() => setStatus("")}
                style={{
                  color: theme.colors.primary,
                  background: "none",
                  border: "none",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Book another demo
              </button>
            </div>
          ) : (
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                maxWidth: "600px",
              }}
              onSubmit={handleSubmit}
            >
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  style={{
                    flex: "1 1 200px",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid rgba(0,0,0,0.1)",
                    background: "#F9FAFB",
                    fontSize: "1rem",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  style={{
                    flex: "1 1 200px",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    border: "1px solid rgba(0,0,0,0.1)",
                    background: "#F9FAFB",
                    fontSize: "1rem",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Restaurant Name"
                required
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "#F9FAFB",
                  fontSize: "1rem",
                }}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                required
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(0,0,0,0.1)",
                  background: "#F9FAFB",
                  fontSize: "1rem",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "1rem 2rem",
                  background: theme.colors.primary,
                  color: "#FFF",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "1.1rem",
                  marginTop: "1rem",
                }}
              >
                Submit Request
              </button>
            </form>
          )}
        </>
      ),
    },
    {
      id: "contact-info",
      title: "Direct Lines",
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
            Need immediate assistance or prefer speaking directly with our sales
            architects? Reach out via our priority channels.
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
              Call Us
            </strong>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.65)",
                margin: 0,
              }}
            >
              +91 99999 99999 (Available Mon-Sat, 9 AM - 7 PM IST)
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
              Email Inquiries
            </strong>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.65)",
                margin: 0,
              }}
            >
              Sales: sales@billbite.com
              <br />
              Support: support@billbite.com
            </p>
          </div>
        </>
      ),
    },
    {
      id: "partnerships",
      title: "API & Partnerships",
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
            Looking to integrate your service (Loyalty, Delivery, ERP) with the
            POS-NEW ecosystem?
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
              Developer Sandbox Access
            </strong>
            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.7,
                color: "rgba(0,0,0,0.65)",
                margin: 0,
              }}
            >
              We provide full REST API documentation and a dedicated staging
              sandbox for verified tech partners. Email{" "}
              <strong>partners@billbite.com</strong> with your company profile
              to request a developer token.
            </p>
          </div>
        </>
      ),
    },
  ];

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
  }, [SECTIONS]);

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
            Connect With Us
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
            Let's talk about
            <br />
            your operations.
          </h1>
          <p
            style={{
              fontSize: "1.25rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.6,
              maxWidth: "650px",
            }}
          >
            Ready to upgrade your restaurant's technology stack? Book a demo,
            reach out to sales, or explore partnership integrations.
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
            className="contact-sidebar"
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
              Directories
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
          .contact-sidebar { display: block !important; }
        }
      `,
        }}
      />
    </div>
  );
}
