import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function CancellationRefundPage() {
  return (
    <LegalPageTemplate
      title="Refund & Cancellation Policy"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>Cancellations</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            You may cancel your subscription at any time. Your cancellation will take effect at the end of your current billing cycle.
          </p>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>Refunds</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Refunds are handled on a case-by-case basis and are typically granted only if there has been a failure of service delivery per our SLA.
          </p>
        </div>
      }
    />
  );
}
