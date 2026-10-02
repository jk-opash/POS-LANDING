import React from "react";
import { theme } from "@/config/theme";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div style={{ flex: 1, backgroundColor: theme.colors.bgLight, paddingBottom: "5rem" }}>
      {/* Hero */}
      <section style={{ backgroundColor: theme.colors.bgDark, paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center" }}>
        <div className="pp-wrap">
          <h1 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginBottom: "1.5rem" }}>
            Solutions by Industry
          </h1>
          <p style={{ color: "#9EAAB4", maxWidth: "700px", margin: "0 auto", fontSize: "1.25rem", lineHeight: 1.6 }}>
            Built for the reality of Indian food businesses.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0" }}>
        <div className="pp-wrap" style={{ maxWidth: "1000px", display: "flex", flexDirection: "column", gap: "3rem" }}>
          
          {/* Restaurant */}
          <div className="bento-card" style={{ display: "flex", flexDirection: "row", padding: 0, overflow: "hidden", background: theme.colors.bgSurface }}>
            <div style={{ padding: "3rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1rem" }}>Restaurants</h2>
              <p style={{ color: theme.colors.textDark, opacity: 0.8, fontSize: "1.1rem", marginBottom: "2rem", fontStyle: "italic" }}>
                "From the host stand to the kitchen, one system. Seat a table, send a round to the kitchen, add another round when they order more, split the bill three ways at the end — all without a single paper ticket changing hands."
              </p>
              <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", color: theme.colors.accent, fontWeight: 700 }}>
                See it in action <ArrowRight style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }} />
              </Link>
            </div>
            <div style={{ flex: 1, background: theme.colors.bgLight, borderLeft: `1px solid ${theme.colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }}>
              <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>Restaurant POS & KOT</span>
            </div>
          </div>

          {/* Cafe */}
          <div className="bento-card" style={{ display: "flex", flexDirection: "row-reverse", padding: 0, overflow: "hidden", background: theme.colors.bgSurface }}>
             <div style={{ padding: "3rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1rem" }}>Cafés</h2>
              <p style={{ color: theme.colors.textDark, opacity: 0.8, fontSize: "1.1rem", marginBottom: "2rem", fontStyle: "italic" }}>
                "Built for speed at the counter. A simpler menu, a faster ticket, GST-correct billing every time."
              </p>
               <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", color: theme.colors.accent, fontWeight: 700 }}>
                Explore Café features <ArrowRight style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }} />
              </Link>
            </div>
            <div style={{ flex: 1, background: theme.colors.bgLight, borderRight: `1px solid ${theme.colors.border}`, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }}>
              <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>Café Fast-Billing</span>
            </div>
          </div>

          {/* Cloud Kitchen */}
          <div className="bento-card" style={{ display: "flex", flexDirection: "row", padding: 0, overflow: "hidden", background: theme.colors.bgSurface, border: `2px solid ${theme.colors.accent}`, boxShadow: "var(--shadow-accent)" }}>
            <div style={{ padding: "3rem", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h2 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1rem" }}>Cloud Kitchens</h2>
              <p style={{ color: theme.colors.textDark, opacity: 0.8, fontSize: "1.1rem", marginBottom: "2rem", fontStyle: "italic" }}>
                "One screen for every order, every platform. Zomato and Swiggy orders land right alongside your own takeaway orders — accept, prep, and reconcile the payout without juggling three different tablets."
              </p>
               <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", color: theme.colors.accent, fontWeight: 700 }}>
                See Cloud Kitchen setup <ArrowRight style={{ marginLeft: "0.5rem", width: "1rem", height: "1rem" }} />
              </Link>
            </div>
            <div style={{ flex: 1, background: "rgba(255, 90, 31, 0.05)", borderLeft: "1px solid rgba(255, 90, 31, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: "300px" }}>
              <span style={{ color: theme.colors.accent, fontWeight: 600, opacity: 0.5 }}>Aggregator Unified Screen</span>
            </div>
          </div>

          {/* Others */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {["Bar/Lounge", "Retail", "Grocery"].map((ind) => (
              <div key={ind} className="bento-card" style={{ background: theme.colors.bgSurface, padding: "3rem", textAlign: "center", alignItems: "center", justifyContent: "center" }}>
                <h3 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "1.5rem", marginBottom: "1rem", color: theme.colors.textDark }}>{ind}</h3>
                <span className="badge-outline">Coming Soon</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
