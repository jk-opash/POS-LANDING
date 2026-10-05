import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import React from "react";
import { theme } from "@/config/theme";

export const metadata: Metadata = {
  title: "BillBite | All-in-One Restaurant POS & Management Software",
  description:
    "BillBite is India's leading restaurant management software — POS billing, Zomato & Swiggy integration, inventory, payout reconciliation, and multi-branch analytics. Trusted by 1,50,000+ businesses.",
  keywords:
    "restaurant POS software India, billing software, Zomato Swiggy integration, restaurant management, cloud kitchen POS",
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        style={{
          fontFamily: "'DM Sans', sans-serif",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          margin: 0,
        }}
      >
        <Header />
        <main
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.colors.bgSurface,
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
