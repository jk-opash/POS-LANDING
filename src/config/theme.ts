/**
 * Global Theme Configuration
 * 
 * Use this file to maintain consistency across inline styles in React components.
 * These values map directly to the CSS variables defined in src/app/globals.css.
 * 
 * Example usage:
 * <div style={{ backgroundColor: theme.colors.bgLight, fontFamily: theme.fonts.body }}>
 */

export const theme = {
  colors: {
    // Brand Palette (Mono + Pop)
    primary: "var(--pp-primary)",      // #171717 - Primary brand color
    accent: "var(--pp-accent)",        // #FF5A1F - Vibrant Orange Pop
    
    // Backgrounds
    bgDark: "var(--pp-bg-dark)",       // #171717 - Dark Charcoal
    bgLight: "var(--pp-bg-light)",     // #FAFAFA - Off-white section background
    bgSurface: "var(--pp-bg-surface)", // #FFFFFF - Pure white for cards/panels
    
    // Text
    textDark: "var(--pp-text-dark)",   // #171717 - Main text color
    textLight: "var(--pp-text-light)", // #FFFFFF - Text on dark backgrounds
    textMuted: "var(--pp-text-muted)", // #6B7280 - Muted text
    
    // UI Elements
    border: "var(--pp-border)",
    borderLight: "var(--pp-border-light)",
    glassLight: "var(--glass-bg-light)",
    glassDark: "var(--glass-bg-dark)",
  },
  
  fonts: {
    heading: "var(--font-h)",          // 'Poppins', sans-serif
    body: "var(--font-b)",             // 'DM Sans', sans-serif
  },
  
  shadows: {
    sm: "var(--shadow-sm)",
    lg: "var(--shadow-lg)",
    accent: "var(--shadow-accent)",
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
