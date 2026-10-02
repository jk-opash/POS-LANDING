import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function EscalationPage() {
  return (
    <LegalPageTemplate
      title="Escalation Matrix"
      content={
        <div>
          <p style={{ marginBottom: "2rem" }}>
            At BillBite, we are committed to providing you with the best possible support. If you face any issues, please follow our escalation matrix to ensure a quick resolution.
          </p>
          
          <div style={{ background: "#F9FAFB", padding: "2rem", borderRadius: "1rem", border: "1px solid #E5E7EB", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#111827", marginBottom: "0.5rem" }}>Level 1: Support Helpdesk</h3>
            <p style={{ marginBottom: "1rem" }}>For all technical queries and general issues.</p>
            <p><strong>Email:</strong> support@billbite.com</p>
            <p><strong>Phone:</strong> 1800-123-4567 (9 AM - 9 PM)</p>
          </div>

          <div style={{ background: "#F9FAFB", padding: "2rem", borderRadius: "1rem", border: "1px solid #E5E7EB", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#111827", marginBottom: "0.5rem" }}>Level 2: Team Lead</h3>
            <p style={{ marginBottom: "1rem" }}>If your issue is not resolved within 24 hours.</p>
            <p><strong>Email:</strong> lead.support@billbite.com</p>
          </div>

          <div style={{ background: "#F9FAFB", padding: "2rem", borderRadius: "1rem", border: "1px solid #E5E7EB", marginBottom: "1.5rem" }}>
            <h3 style={{ color: "#111827", marginBottom: "0.5rem" }}>Level 3: Grievance Officer</h3>
            <p style={{ marginBottom: "1rem" }}>For unresolved issues beyond 72 hours or critical business impact.</p>
            <p><strong>Email:</strong> grievance@billbite.com</p>
          </div>
        </div>
      }
    />
  );
}
