"use client";

import React from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";
import { theme } from "@/config/theme";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'style'> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  shape?: "default" | "pill";
  animated?: boolean;
  motionProps?: HTMLMotionProps<"button">;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  shape = "default",
  animated = false,
  motionProps,
  fullWidth = false,
  style,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const getBackground = () => {
    switch (variant) {
      case "primary": return theme.colors.accent;
      case "secondary": return theme.colors.secondaryLight;
      case "outline":
      case "ghost": return "transparent";
      default: return theme.colors.accent;
    }
  };

  const getColor = () => {
    switch (variant) {
      case "primary": return theme.colors.textLight;
      case "secondary": return theme.colors.textDark;
      case "outline": return theme.colors.accent;
      case "ghost": return theme.colors.textMuted;
      default: return theme.colors.textLight;
    }
  };

  const getPadding = () => {
    switch (size) {
      case "sm": return "0.6rem 1.35rem";
      case "md": return "0.875rem 1.5rem";
      case "lg": return "1rem 2.5rem";
      default: return "0.875rem 1.5rem";
    }
  };

  const baseStyle: React.CSSProperties = {
    background: getBackground(),
    color: getColor(),
    padding: getPadding(),
    fontSize: size === "sm" ? "0.9rem" : size === "lg" ? "1.05rem" : "1rem",
    borderRadius: shape === "pill" ? theme.radii.pill : theme.radii.button,
    fontWeight: 600,
    border: variant === "outline" ? `1px solid ${theme.colors.border}` : "none",
    cursor: "pointer",
    fontFamily: theme.fonts.body,
    boxShadow: variant === "primary" ? theme.shadows.accent : "none",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: fullWidth ? "100%" : "auto",
    transition: "all 0.2s ease",
    ...style,
  };

  if (href) {
    return (
      <Link href={href} style={baseStyle} className={className} onClick={onClick as any} {...(props as any)}>
        {children}
      </Link>
    );
  }

  if (animated) {
    return (
      <motion.button
        style={baseStyle}
        className={className}
        onClick={onClick}
        {...motionProps}
        {...(props as any)}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <button style={baseStyle} className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
