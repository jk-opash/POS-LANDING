"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { theme } from "@/config/theme";

interface ProductPageProps {
  title: string;
  subtitle: string;
  heroImage?: string;
  features: { title: string; desc: string; icon: string }[];
  benefits: { title: string; desc: string }[];
}

export default function ProductPageTemplate({ title, subtitle, heroImage, features, benefits }: ProductPageProps) {
  return (
    <div style={{ flex: 1, backgroundColor: theme.colors.bgLight, paddingBottom: "5rem" }}>
      {/* Hero */}
      <section style={{ backgroundColor: theme.colors.bgDark, paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center" }}>
        <div className="pp-wrap">
          <h1 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginBottom: "1.5rem" }}>
            {title}
          </h1>
          <p style={{ color: "#9EAAB4", maxWidth: "700px", margin: "0 auto 2.5rem", fontSize: "1.25rem", lineHeight: 1.6 }}>
            {subtitle}
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <Link href="/#demo-form" className="btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
              Book a Free Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{ padding: "5rem 0", background: theme.colors.bgLight }}>
        <div className="pp-wrap">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "2.5rem", color: "#111827" }}>
              Key Features
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {features.map((f, i) => (
              <div key={i} className="bento-card" style={{ background: theme.colors.bgSurface }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{f.icon}</div>
                <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.75rem" }}>
                  {f.title}
                </h3>
                <p style={{ color: "#4B5564", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: "5rem 0", background: theme.colors.bgSurface }}>
        <div className="pp-wrap">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
            <div style={{ flex: "1 1 400px" }}>
              <h2 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "2.5rem", color: "#111827", marginBottom: "2rem" }}>
                Why choose BillBite {title}?
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {benefits.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem" }}>
                    <div style={{ color: "#10B981", fontSize: "1.5rem" }}>✓</div>
                    <div>
                      <h4 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", fontSize: "1.1rem", marginBottom: "0.25rem" }}>{b.title}</h4>
                      <p style={{ color: "#4B5564" }}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ flex: "1 1 400px", background: theme.colors.bgLight, borderRadius: "1.5rem", minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${theme.colors.border}` }}>
               {/* Placeholder for dashboard screenshot */}
               <p style={{ color: "#9CA3AF", fontWeight: 600 }}>[ {title} Interface ]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
