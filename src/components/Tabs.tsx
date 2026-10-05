"use client";

import React from "react";
import { motion } from "framer-motion";
import { theme } from "@/config/theme";

export interface TabItem {
  label: string;
}

export interface TabsProps {
  items: TabItem[];
  activeIndex: number;
  onChange: (index: number) => void;
  style?: React.CSSProperties;
}

export function Tabs({ items, activeIndex, onChange, style }: TabsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        borderBottom: `1px solid ${theme.colors.border}`,
        paddingBottom: "1rem",
        marginBottom: "3rem",
        ...style,
      }}
    >
      {items.map((tab, i) => (
        <div
          key={i}
          onClick={() => onChange(i)}
          style={{
            cursor: "pointer",
            position: "relative",
            color: activeIndex === i ? theme.colors.textDark : theme.colors.textMuted,
            transition: "color 0.3s",
            fontFamily: theme.fonts.body,
          }}
        >
          <div
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              marginBottom: "0.25rem",
            }}
          >
            {tab.label}
          </div>
          {activeIndex === i && (
            <motion.div
              layoutId="activeTab"
              style={{
                position: "absolute",
                bottom: "-1rem",
                left: 0,
                right: 0,
                height: "2px",
                background: theme.colors.accent,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
