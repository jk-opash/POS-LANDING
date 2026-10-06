

export const theme = {
  colors: {
    // Core Brand
    primary: "#171717",         // Primary brand color (Charcoal)
    primaryHover: "#2A2A2A",    // Lighter charcoal for hover states
    primaryLight: "#2A2A2A",    // Very pale secondary Slate/Gray for tinted backgrounds
    primaryMuted: "#171717",    // Softened secondary Slate/Gray for borders/secondary elements
    
    secondary: "#4B5563",    // Secondary Slate/Gray
    secondaryHover: "#6B7280",    // Lighter secondary Slate/Gray for hover states
    secondaryLight: "#F9FAFB",    // Very pale secondary Slate/Gray for tinted backgrounds
    secondaryMuted: "#9CA3AF",    // Softened secondary Slate/Gray for borders/secondary elements

    // Accent (Orange Pop)
    accent: "#FF5A1F",          // Vibrant Orange Pop (Main Accent)
    accentHover: "#E64A12",     // Deeper orange for hover states
    accentLight: "rgba(255, 90, 31, 0.08)",  // Translucent orange for tinted backgrounds
    accentMuted: "rgba(255, 90, 31, 0.3)",     // Translucent orange for borders/secondary elements
    
    // Tertiary
    tertiary: "#FFC700",        // Warm yellow pop (good for food ratings, highlights)
    
    // Backgrounds
    bgDark: "#171717",       // Dark Charcoal
    bgLight: "#FAFAFA",      // Off-white section background
    bgSurface: "#FFFFFF",    // Pure white for cards/panels
    
    // Text
    textDark: "#171717",     // Main text color
    textLight: "#FFFFFF",    // Text on dark backgrounds
    textMuted: "#6B7280",    // Muted text
    
    // UI Elements
    border: "rgba(23, 23, 23, 0.1)",
    borderLight: "rgba(255, 255, 255, 0.1)",
    glassLight: "rgba(255, 255, 255, 0.75)",
    glassDark: "rgba(23, 23, 23, 0.75)",

    // Semantic and Special Branding
    semantic: {
      success: "#059669",
      successBg: "#D1FAE5",
      error: "#EF4444",
      cafe: "#3B82F6",
      cloud: "#8B5CF6",
    },

    // Overlay Alphas
    whiteAlpha: {
      a02: "rgba(255, 255, 255, 0.02)",
      a03: "rgba(255, 255, 255, 0.03)",
      a04: "rgba(255, 255, 255, 0.04)",
      a05: "rgba(255, 255, 255, 0.05)",
      a06: "rgba(255, 255, 255, 0.06)",
      a10: "rgba(255, 255, 255, 0.1)",
      a20: "rgba(255, 255, 255, 0.2)",
      a50: "rgba(255, 255, 255, 0.5)",
      a60: "rgba(255, 255, 255, 0.6)",
      a70: "rgba(255, 255, 255, 0.7)",
      a80: "rgba(255, 255, 255, 0.8)",
      a90: "rgba(255, 255, 255, 0.9)",
    },
    blackAlpha: {
      a02: "rgba(0, 0, 0, 0.02)",
      a03: "rgba(0, 0, 0, 0.03)",
      a05: "rgba(0, 0, 0, 0.05)",
      a08: "rgba(0, 0, 0, 0.08)",
      a10: "rgba(0, 0, 0, 0.1)",
      a15: "rgba(0, 0, 0, 0.15)",
    }
  },
  fonts: {
    heading: "var(--font-lato), sans-serif",
    body: "var(--font-lato), sans-serif",
  },
  
  shadows: {
    sm: "0 2px 10px rgba(0, 0, 0, 0.02)",
    md: "0 4px 20px rgba(0, 0, 0, 0.03)",
    lg: "0 8px 20px rgba(0, 0, 0, 0.15)",
    xl: "0 12px 30px rgba(0, 0, 0, 0.08)",
    accent: "0 8px 30px rgba(255, 90, 31, 0.3)",
  },
  
  spacing: {
    sectionPadding: "5rem 0",
    containerPadding: "0 1.5rem",
  },

  radii: {
    button: "12px",
    card: "20px",
    pill: "100px",
  }
};
