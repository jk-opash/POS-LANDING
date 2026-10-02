import React from "react";
import { CheckCircle2, Store, ReceiptIndianRupee, LineChart, LayoutDashboard, ChefHat, LayoutList, Package, Network, Users, Truck, BarChart3, Wallet, ShieldCheck, CreditCard, HeadphonesIcon } from "lucide-react";
import { theme } from "@/config/theme";

export default function FeaturesPage() {
  return (
    <div style={{ flex: 1, backgroundColor: theme.colors.bgLight, paddingBottom: "5rem" }}>
      {/* Hero */}
      <section style={{ backgroundColor: theme.colors.bgDark, paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center" }}>
        <div className="pp-wrap">
          <h1 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginBottom: "1.5rem" }}>
            The Actual Product, In Full Depth
          </h1>
          <p style={{ color: "#9EAAB4", maxWidth: "700px", margin: "0 auto", fontSize: "1.25rem", lineHeight: 1.6 }}>
            Built from the actual feature set in our codebases — not generic SaaS boilerplate.
          </p>
        </div>
      </section>

      <section style={{ padding: "5rem 0" }}>
        <div className="pp-wrap" style={{ maxWidth: "1200px" }}>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
            
            {/* Feature 1 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
              <div style={{ flex: "1 1 400px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(255, 90, 31, 0.1)", color: theme.colors.accent, marginBottom: "1rem" }}>
                  <ReceiptIndianRupee />
                </div>
                <h3 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1.5rem" }}>1. POS & Billing</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
                  {[
                    "Fast, touch-based billing for Dine-in and Takeaway from one unified screen.",
                    "Split bills by item, by person, or by amount.",
                    "Multiple payment methods on a single bill — Cash, Card, UPI, Due, or Part-payment combinations.",
                    "GST-compliant invoices generated automatically, tax rate configurable per branch.",
                    "Order-level discounts, percentage or flat; due/partial payment tracking."
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle2 style={{ color: theme.colors.accent, width: "1.25rem", height: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }} />
                      <span style={{ color: theme.colors.textDark, opacity: 0.8, lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: "1 1 500px", background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}`, borderRadius: "1.5rem", boxShadow: "var(--shadow-sm)", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>POS Billing Interface</span>
              </div>
            </div>

            {/* Feature 2 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 400px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(255, 90, 31, 0.1)", color: theme.colors.accent, marginBottom: "1rem" }}>
                  <Store />
                </div>
                <h3 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1.5rem" }}>2. Online Order Aggregation</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", marginBottom: "1.5rem" }}>
                  {[
                    "Incoming Zomato and Swiggy orders land in the same screen as dine-in and takeaway — no separate tablet per platform.",
                    "One-tap Accept/Reject on every new order, color-coded by platform so staff know at a glance where it came from.",
                    "Full order detail panel per ticket — items, platform, order ID, time since placed."
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle2 style={{ color: theme.colors.accent, width: "1.25rem", height: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }} />
                      <span style={{ color: theme.colors.textDark, opacity: 0.8, lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ padding: "1rem", background: "rgba(255, 90, 31, 0.05)", border: "1px solid rgba(255, 90, 31, 0.2)", borderRadius: "0.75rem", fontSize: "0.9rem", color: theme.colors.accent, fontWeight: 600 }}>
                  This single feature directly addresses the "three tablets on the counter" complaint almost every multi-channel Indian restaurant has.
                </div>
              </div>
              <div style={{ flex: "1 1 500px", background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}`, borderRadius: "1.5rem", boxShadow: "var(--shadow-sm)", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>Zomato/Swiggy Unified Interface</span>
              </div>
            </div>

            {/* Feature 3 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
              <div style={{ flex: "1 1 400px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(255, 90, 31, 0.1)", color: theme.colors.accent, marginBottom: "1rem" }}>
                  <LineChart />
                </div>
                <h3 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1.5rem" }}>3. Payout Reconciliation</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none", marginBottom: "1.5rem" }}>
                  {[
                    "Tracks gross amount, platform deductions/commission, and net payout per order, per platform (Zomato/Swiggy tabs, plus an 'All Platforms' view).",
                    "Automatically flags discrepancies — orders where what you were paid doesn't match what you were owed.",
                    "Branch-filterable, so a multi-outlet owner can reconcile each location's aggregator payouts separately."
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle2 style={{ color: theme.colors.accent, width: "1.25rem", height: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }} />
                      <span style={{ color: theme.colors.textDark, opacity: 0.8, lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ padding: "1rem", background: "rgba(255, 90, 31, 0.05)", border: "1px solid rgba(255, 90, 31, 0.2)", borderRadius: "0.75rem", fontSize: "0.9rem", color: theme.colors.accent, fontWeight: 600 }}>
                  This is the feature that turns "I think Zomato shorted me" into a number you can actually prove.
                </div>
              </div>
              <div style={{ flex: "1 1 500px", background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}`, borderRadius: "1.5rem", boxShadow: "var(--shadow-sm)", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>Payout Reconciliation View</span>
              </div>
            </div>

            {/* Feature 4 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center", flexDirection: "row-reverse" }}>
              <div style={{ flex: "1 1 400px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(255, 90, 31, 0.1)", color: theme.colors.accent, marginBottom: "1rem" }}>
                  <LayoutDashboard />
                </div>
                <h3 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1.5rem" }}>4. Table & Floor Management</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
                  {[
                    "A true visual, drag-and-drop floor-plan editor — real table positions and rotation, not a plain list.",
                    "Zones/sections (Indoor, Outdoor, Rooftop, AC) to organize tables logically.",
                    "Table merging for large parties, live status (Available/Occupied/Reserved), per-table capacity."
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle2 style={{ color: theme.colors.accent, width: "1.25rem", height: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }} />
                      <span style={{ color: theme.colors.textDark, opacity: 0.8, lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: "1 1 500px", background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}`, borderRadius: "1.5rem", boxShadow: "var(--shadow-sm)", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>Table/zone floor-plan editor</span>
              </div>
            </div>

            {/* Feature 5 */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4rem", alignItems: "center" }}>
              <div style={{ flex: "1 1 400px" }}>
                <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "3rem", height: "3rem", borderRadius: "0.75rem", background: "rgba(255, 90, 31, 0.1)", color: theme.colors.accent, marginBottom: "1rem" }}>
                  <ChefHat />
                </div>
                <h3 style={{ fontFamily: theme.fonts.heading, fontSize: "2rem", fontWeight: 700, color: theme.colors.textDark, marginBottom: "1.5rem" }}>5. KOT & Kitchen Display</h3>
                <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", listStyle: "none" }}>
                  {[
                    "Multiple KOT 'rounds' per order — add more items anytime without closing the original bill; each round prints its own numbered ticket.",
                    "Kitchen-side status per ticket: Sent → Accepted → Ready → Served.",
                    "Item notes and chosen variant/add-ons printed on the ticket, not just the item name."
                  ].map((point, i) => (
                    <li key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <CheckCircle2 style={{ color: theme.colors.accent, width: "1.25rem", height: "1.25rem", flexShrink: 0, marginTop: "0.25rem" }} />
                      <span style={{ color: theme.colors.textDark, opacity: 0.8, lineHeight: 1.6 }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ flex: "1 1 500px", background: theme.colors.bgSurface, border: `1px solid ${theme.colors.border}`, borderRadius: "1.5rem", boxShadow: "var(--shadow-sm)", minHeight: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "rgba(0,0,0,0.3)", fontWeight: 600 }}>KOT receipt / Kitchen display</span>
              </div>
            </div>

          </div>
          
          {/* Lighter Grid for remaining features (6-15) */}
          <div style={{ marginTop: "8rem", paddingTop: "5rem", borderTop: `1px solid ${theme.colors.border}` }}>
            <h3 style={{ textAlign: "center", fontFamily: theme.fonts.heading, fontSize: "2.5rem", fontWeight: 700, marginBottom: "4rem", color: theme.colors.textDark }}>More Powerful Capabilities</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
              {[
                { icon: <LayoutList style={{width: "1.25rem", height: "1.25rem"}}/>, title: "6. Menu Management", desc: "Categories, variants (Half/Full), custom add-on min/max groups, spice-level selectors, and dietary tags (Veg/Non-Veg/Jain)." },
                { icon: <Package style={{width: "1.25rem", height: "1.25rem"}}/>, title: "7. Inventory Management", desc: "Real-time stock, SKU catalogs, composite recipe items that auto-deduct, and a full movement ledger logging every adjustment." },
                { icon: <Network style={{width: "1.25rem", height: "1.25rem"}}/>, title: "8. Multi-Branch Operations", desc: "One login across every outlet. Flexible per-branch tax rates, currency, timezones, and operating hours." },
                { icon: <Users style={{width: "1.25rem", height: "1.25rem"}}/>, title: "9. Staff & Role Management", desc: "4-level hierarchy (Superadmin → Staff), PIN-based quick logins, and full employment records (salary, join date)." },
                { icon: <Truck style={{width: "1.25rem", height: "1.25rem"}}/>, title: "10. Supplier Management", desc: "Vendor directory with performance scoring (quality/pricing), contract tracking, and a running communication log." },
                { icon: <BarChart3 style={{width: "1.25rem", height: "1.25rem"}}/>, title: "11. Reports & Analytics", desc: "Sales by item, category, branch; inventory movement; and staff performance — as live dashboards, not raw exports." },
                { icon: <Wallet style={{width: "1.25rem", height: "1.25rem"}}/>, title: "12. Finance Tracking", desc: "Expense logging by category per branch, utility bill tracking, and cash withdrawal logging tied to specific staff members." },
                { icon: <ShieldCheck style={{width: "1.25rem", height: "1.25rem"}}/>, title: "13. Security & Audit Logs", desc: "Every sensitive action logged (who, severity, terminal, IP). A readable activity trail an owner can scan in minutes." },
                { icon: <CreditCard style={{width: "1.25rem", height: "1.25rem"}}/>, title: "14. Subscription Management", desc: "Self-serve plan and billing-cycle control, per-plan branch limits with overage visibility, and full invoice history." },
                { icon: <HeadphonesIcon style={{width: "1.25rem", height: "1.25rem"}}/>, title: "15. Support & Self-Serve", desc: "Built-in support ticketing with SLA tracking, categorized searchable in-app help center, and targeted in-app notifications." }
              ].map((f, i) => (
                <div key={i} className="bento-card" style={{ padding: "2rem", background: theme.colors.bgSurface }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem", color: theme.colors.accent }}>
                    {f.icon}
                    <h4 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "1.1rem", color: theme.colors.textDark }}>{f.title}</h4>
                  </div>
                  <p style={{ color: theme.colors.textDark, opacity: 0.7, fontSize: "0.95rem", lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
