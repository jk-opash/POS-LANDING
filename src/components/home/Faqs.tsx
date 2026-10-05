import React, { useState } from "react";
import { theme } from "@/config/theme";
import { FAQS } from "@/constants/home";
import FaqItem from "./FaqItem";

export default function Faqs() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <>
      {/* ════════════════════════════════════════════════════
          6B. FAQ
      ════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: theme.colors.bgLight, padding: "5rem 0" }}
      >
        <div className="pp-wrap" style={{ maxWidth: "800px" }}>
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: theme.colors.textDark,
                lineHeight: 1.1,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
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
      </section>

    </>
  );
}
