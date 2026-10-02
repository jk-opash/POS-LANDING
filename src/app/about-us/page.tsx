import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function AboutUsPage() {
  return (
    <LegalPageTemplate
      title="About BillBite"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>Our Story</h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
            BillBite exists because the gap between a notebook and an enterprise POS is where most Indian restaurants actually live. We studied how restaurants like yours really operate — multiple KOT rounds through a single meal, Zomato and Swiggy orders landing mid-rush, stock that needs to be accountable to the gram — and built the product around that reality.
          </p>
          <h2 style={{ color: "#111827", marginTop: "3rem", marginBottom: "1rem" }}>Our Mission</h2>
          <p style={{ marginBottom: "1.5rem", fontSize: "1.1rem" }}>
            To empower independent restaurant owners with the same level of operational visibility and control that multinational chains enjoy, without the complexity or extreme costs.
          </p>
        </div>
      }
    />
  );
}
