import React, { useState } from "react";
import { theme } from "@/config/theme";
import { FAQS } from "@/constants/home";
import FaqItem from "./FaqItem";
import { MessageCircleQuestion, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section style={{ backgroundColor: theme.colors.bgLight, padding: "8rem 0", position: "relative" }}>
      <div className="pp-wrap" style={{ maxWidth: "1200px" }}>
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap",
          gap: "4rem",
          alignItems: "flex-start"
        }}>
          
          {/* Left: Sticky Header Area */}
          <div className="fade-up" style={{ 
            flex: "1 1 350px", 
            position: "sticky", 
            top: "120px" 
          }}>
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(0,0,0,0.03)",
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              marginBottom: "1.5rem",
              border: "1px solid rgba(0,0,0,0.05)"
            }}>
              <MessageCircleQuestion size={16} color={theme.colors.accent} />
              <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: theme.colors.textDark }}>
                Support & FAQs
              </span>
            </div>
            
            <h2 style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.textDark,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem"
            }}>
              Got questions?<br/>
              <span style={{ color: theme.colors.textMuted }}>We've got answers.</span>
            </h2>
            
            <p style={{
              color: theme.colors.textMuted,
              fontSize: "1.1rem",
              lineHeight: 1.6,
              marginBottom: "2.5rem",
              maxWidth: "400px"
            }}>
              Everything you need to know about BillBite, from features and integrations to billing and setup. 
            </p>

            <Link href="/#demo-form" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: theme.colors.primary,
              color: theme.colors.textLight,
              padding: "1rem 2rem",
              borderRadius: "100px",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 10px 20px -5px rgba(0,0,0,0.2)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 25px -5px rgba(0,0,0,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 20px -5px rgba(0,0,0,0.2)";
            }}
            >
              Contact Support <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right: FAQ List */}
          <div style={{ flex: "2 1 600px", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {FAQS.map((faq, idx) => (
              <FaqItem
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={activeFaq === idx}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
