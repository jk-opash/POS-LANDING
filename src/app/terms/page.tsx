import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function TermsPage() {
  return (
    <LegalPageTemplate
      title="Terms of Service"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>1. Acceptance of Terms</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            By accessing or using the BillBite POS service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>2. Subscriptions</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle").
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>3. Data Privacy</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Your use of the service is subject to our Privacy Policy, which details how we collect and use your data.
          </p>
          <p style={{ marginTop: "3rem", fontSize: "0.9rem", color: "#9CA3AF" }}>
            Last Updated: August 2024
          </p>
        </div>
      }
    />
  );
}
