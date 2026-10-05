import React, { useRef, useState, useEffect } from "react";
import { theme } from "@/config/theme";
import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

export default function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current?.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div
      className="fade-up"
      style={{
        background: theme.colors.bgSurface,
        borderRadius: "0.75rem",
        border: `1px solid ${theme.colors.border}`,
        overflow: "hidden",
        transition: "all 0.3s ease",
        boxShadow: isOpen ? theme.shadows.md : "none",
      }}
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
        }}
      >
        <span
          style={{
            fontFamily: theme.fonts.heading,
            fontWeight: 600,
            fontSize: "1.1rem",
            color: isOpen ? theme.colors.accent : theme.colors.textDark,
            transition: "color 0.3s ease",
          }}
        >
          {question}
        </span>
        <span
          style={{
            color: isOpen ? theme.colors.accent : theme.colors.textMuted,
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronDown size={20} />
        </span>
      </button>
      <div
        style={{
          height,
          opacity: isOpen ? 1 : 0,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <div ref={contentRef} style={{ padding: "0 1.5rem 1.5rem" }}>
          <p style={{ color: theme.colors.textMuted, lineHeight: 1.6 }}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
