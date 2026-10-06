import ProductPageTemplate from "@/components/ProductPageTemplate";
import { Building2, Users, Truck, DollarSign, ShieldCheck, Headphones } from "lucide-react";
import { theme } from "@/config/theme";

export default function Platform() {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff", paddingBottom: "5rem" }}>
      {/* Hero */}
      <section style={{ backgroundColor: "#09151F", paddingTop: "8rem", paddingBottom: "6rem", textAlign: "center" }}>
        <div className="pp-wrap">
          <h1 style={{ fontFamily: theme.fonts.heading, fontWeight: 700, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#fff", marginBottom: "1.5rem" }}>
            The BillBite Platform
          </h1>
          <p style={{ color: "#9EAAB4", maxWidth: "700px", margin: "0 auto 2.5rem", fontSize: "1.25rem", lineHeight: 1.6 }}>
            A complete suite of modules to manage multi-branch operations, roles, suppliers, finances, and security—all in one place.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section style={{ padding: "5rem 0", background: "#F9FAFB" }}>
        <div className="pp-wrap">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            
            {/* Multi-Branch */}
            <div className="bento-card" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}><Building2 size={40} /></div>
              <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Multi-Branch Operations</h3>
              <p style={{ color: "#4B5564", lineHeight: 1.6 }}>One login, every outlet. Manage per-branch taxes, currencies, timezones, and operating hours centrally.</p>
            </div>

            {/* Staff & Role */}
            <div className="bento-card" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}><Users size={40} /></div>
              <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Staff & Role Management</h3>
              <p style={{ color: "#4B5564", lineHeight: 1.6 }}>Four-level hierarchy (Owner → Admin → Manager → Staff), PIN quick-login, and role-scoped access.</p>
            </div>

            {/* Supplier Management */}
            <div className="bento-card" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}><Truck size={40} /></div>
              <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Supplier Management</h3>
              <p style={{ color: "#4B5564", lineHeight: 1.6 }}>Maintain a central vendor directory, track performance scores, manage contracts, and keep a communication log.</p>
            </div>

            {/* Finance Tracking */}
            <div className="bento-card" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}><DollarSign size={40} /></div>
              <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Finance Tracking</h3>
              <p style={{ color: "#4B5564", lineHeight: 1.6 }}>Log and track daily petty cash, utility bills, raw material expenses, and cash withdrawals directly from the POS.</p>
            </div>

            {/* Security & Audit Logs */}
            <div className="bento-card" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}><ShieldCheck size={40} /></div>
              <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Security & Audit Logs</h3>
              <p style={{ color: "#4B5564", lineHeight: 1.6 }}>Every sensitive action (voids, discounts, stock edits) is logged with who performed it, when, and its severity level.</p>
            </div>

            {/* Support & Help */}
            <div className="bento-card" style={{ background: "#fff", border: "1px solid #E5E7EB" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}><Headphones size={40} /></div>
              <h3 style={{ fontSize: "1.25rem", fontFamily: theme.fonts.heading, fontWeight: 700, color: "#111827", marginBottom: "0.5rem" }}>Support & Self-Serve</h3>
              <p style={{ color: "#4B5564", lineHeight: 1.6 }}>In-app ticketing with SLA tracking, searchable help center, and proactive in-app notifications for system updates.</p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
