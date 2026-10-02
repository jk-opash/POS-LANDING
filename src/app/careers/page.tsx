import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function CareersPage() {
  return (
    <LegalPageTemplate
      title="Careers at BillBite"
      content={
        <div>
          <h2 style={{ color: "#111827", marginTop: "2rem", marginBottom: "1rem" }}>Join the Team</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            We are always looking for passionate engineers, designers, and sales professionals who want to change how the food and beverage industry operates in India.
          </p>
          <p style={{ marginBottom: "1.5rem", color: "#C52031", fontWeight: 600 }}>
            Currently, we have no open positions. Please check back later!
          </p>
        </div>
      }
    />
  );
}
