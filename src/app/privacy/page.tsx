import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function PrivacyPage() {
  return (
    <LegalPageTemplate
      title="Privacy Policy"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>1. Information We Collect</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We collect information you provide directly to us, such as when you create or modify your account, request on-demand services, contact customer support, or otherwise communicate with us. This information may include: name, email, phone number, postal address, profile picture, payment method, items requested (for delivery services), and other information you choose to provide.
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>2. Use of Information</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We may use the information we collect about you to:
            <ul style={{ listStyleType: "disc", paddingLeft: "2rem", marginTop: "0.5rem" }}>
              <li>Provide, maintain, and improve our Services.</li>
              <li>Perform internal operations.</li>
              <li>Send you communications we think will be of interest to you.</li>
            </ul>
          </p>
          <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#9CA3AF" }}>
            Last Updated: August 2024
          </p>
        </div>
      }
    />
  );
}
