"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function DemoPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("SUCCESS");
  };

  const BENEFITS = [
    "Personalized walkthrough of POS features",
    "Pricing and onboarding details",
    "Answers to your technical questions",
    "Live Q&A with a product expert",
  ];

  return (
    <div
      style={{
        backgroundColor: theme.colors.bgLight,
        minHeight: "100vh",
        color: theme.colors.textDark,
        paddingTop: "120px",
        paddingBottom: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "4rem",
          alignItems: "center",
        }}
      >
        {/* Left Side: Context & Benefits */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ flex: "1 1 400px" }}
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
            Live Demonstration
          </div>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
              color: theme.colors.textDark,
            }}
          >
            See BillBite in Action.
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              color: "rgba(0,0,0,0.6)",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              maxWidth: "480px",
            }}
          >
            Schedule a free, personalized demo with one of our product experts
            to see how BillBite can transform your restaurant operations and
            boost your bottom line.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {BENEFITS.map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontSize: "1.05rem",
                  color: theme.colors.textDark,
                  fontWeight: 500,
                }}
              >
                <CheckCircle2 size={20} color={theme.colors.accent} />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          style={{ flex: "1 1 450px" }}
        >
          <div
            style={{
              background: "#FFFFFF",
              padding: "3rem",
              borderRadius: "24px",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.05)",
              border: "1px solid rgba(0,0,0,0.04)",
            }}
          >
            {status === "SUCCESS" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    background: "rgba(255, 69, 0, 0.1)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <CheckCircle2 size={32} color={theme.colors.accent} />
                </div>
                <h3
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: theme.colors.textDark,
                    marginBottom: "1rem",
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Request Sent!
                </h3>
                <p
                  style={{
                    color: "rgba(0,0,0,0.6)",
                    marginBottom: "2rem",
                    lineHeight: 1.6,
                  }}
                >
                  We've received your request. One of our experts will contact
                  you shortly to schedule your personalized demo.
                </p>
                <button
                  onClick={() => setStatus("")}
                  style={{
                    padding: "0.875rem 2rem",
                    background: "transparent",
                    color: theme.colors.primary,
                    border: `1px solid ${theme.colors.primary}`,
                    borderRadius: "100px",
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  Book another demo
                </button>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: theme.colors.textDark,
                    marginBottom: "2rem",
                    fontFamily: theme.fonts.heading,
                  }}
                >
                  Book your free demo
                </h3>
                <form
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                  onSubmit={handleSubmit}
                >
                  <div
                    style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}
                  >
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      style={{
                        flex: "1 1 180px",
                        padding: "1rem 1.25rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(0,0,0,0.1)",
                        background: "#F9FAFB",
                        fontSize: "1rem",
                        fontFamily: theme.fonts.body,
                        outline: "none",
                      }}
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      style={{
                        flex: "1 1 180px",
                        padding: "1rem 1.25rem",
                        borderRadius: "12px",
                        border: "1px solid rgba(0,0,0,0.1)",
                        background: "#F9FAFB",
                        fontSize: "1rem",
                        fontFamily: theme.fonts.body,
                        outline: "none",
                      }}
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Work Email"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.25rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: "#F9FAFB",
                      fontSize: "1rem",
                      fontFamily: theme.fonts.body,
                      outline: "none",
                    }}
                  />
                  <input
                    type="text"
                    placeholder="Restaurant or Business Name"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.25rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: "#F9FAFB",
                      fontSize: "1rem",
                      fontFamily: theme.fonts.body,
                      outline: "none",
                    }}
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    required
                    style={{
                      width: "100%",
                      padding: "1rem 1.25rem",
                      borderRadius: "12px",
                      border: "1px solid rgba(0,0,0,0.1)",
                      background: "#F9FAFB",
                      fontSize: "1rem",
                      fontFamily: theme.fonts.body,
                      outline: "none",
                    }}
                  />

                  <button
                    type="submit"
                    style={{
                      padding: "1.1rem 2rem",
                      background: theme.colors.primary,
                      color: "#FFF",
                      border: "none",
                      borderRadius: "100px",
                      fontWeight: 700,
                      cursor: "pointer",
                      fontSize: "1.05rem",
                      marginTop: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      transition: "transform 0.2s, box-shadow 0.2s",
                      boxShadow: `0 10px 20px -5px ${theme.colors.primary}60`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.boxShadow = `0 15px 25px -5px ${theme.colors.primary}80`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.boxShadow = `0 10px 20px -5px ${theme.colors.primary}60`;
                    }}
                  >
                    Schedule Demo
                    <ArrowRight size={18} />
                  </button>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "rgba(0,0,0,0.5)",
                      textAlign: "center",
                      marginTop: "0.5rem",
                    }}
                  >
                    By submitting this form, you agree to our Terms of Service
                    and Privacy Policy.
                  </p>
                </form>
              </>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
