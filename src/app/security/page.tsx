import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function SecurityPage() {
  return (
    <LegalPageTemplate
      title="Security"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>1. Data Encryption</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            All data transmitted between the BillBite POS client and our servers is encrypted using industry-standard TLS. Your data at rest is encrypted using AES-256 encryption.
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>2. Access Controls</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We implement strict Role-Based Access Control (RBAC) to ensure that only authorized personnel can access production environments. We enforce multi-factor authentication (MFA) for all internal systems.
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>3. Vulnerability Management</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We conduct regular vulnerability scans and engage third-party security firms to perform penetration testing at least annually.
          </p>
        </div>
      }
    />
  );
}
