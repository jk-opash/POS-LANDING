import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function CompliancePage() {
  return (
    <LegalPageTemplate
      title="Trust & Compliance Center"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>GST Compliance</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            BillBite is fully compliant with all Indian GST regulations. All generated invoices include correct HSN/SAC codes, state/central tax splits, and proper sequencing.
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>Data Security & Compliance</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Your data is stored securely on servers located in Mumbai, India, in compliance with data residency requirements. We conduct regular penetration testing and audits to ensure your operations stay online and protected.
          </p>
        </div>
      }
    />
  );
}
