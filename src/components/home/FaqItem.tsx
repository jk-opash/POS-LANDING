import React, { useRef, useState, useEffect } from "react";
import { theme } from "@/config/theme";
import { Plus, Minus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const showCardStyle = isOpen || isHovered;

  return (
    <div
      className="fade-up"
      style={{
        background: showCardStyle ? theme.colors.bgSurface : "transparent",
        borderRadius: "24px",
        border: "1px solid transparent",
        borderBottom: showCardStyle ? "1px solid transparent" : "1px solid rgba(0,0,0,0.06)",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        boxShadow: showCardStyle ? "0 20px 40px -15px rgba(0,0,0,0.05)" : "none",
        transform: isHovered && !isOpen ? "translateX(6px)" : "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          gap: "1rem"
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.heading,
            fontWeight: 700,
            fontSize: "1.15rem",
            color: isOpen ? theme.colors.accent : theme.colors.textDark,
            transition: "color 0.3s ease",
            lineHeight: 1.4
          }}
        >
          {question}
        </span>
        <span
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: isOpen ? theme.colors.accent : "rgba(0,0,0,0.04)",
            color: isOpen ? theme.colors.textLight : theme.colors.textDark,
            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"
          }}
        >
          {isOpen ? <Minus size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
        </span>
      </button>
      <div
        style={{
          height,
          opacity: isOpen ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div ref={contentRef} style={{ padding: "0 1.5rem 1.5rem", paddingRight: "4rem" }}>
          <p style={{ color: theme.colors.textMuted, lineHeight: 1.6, fontSize: "1.05rem" }}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
