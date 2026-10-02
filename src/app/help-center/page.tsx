import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function HelpCenterPage() {
  return (
    <LegalPageTemplate
      title="Help Center"
      content={<p style={{ textAlign: "center", marginTop: "2rem" }}>Welcome to the Help Center. Our knowledge base is currently being updated. For immediate assistance, please contact support.</p>}
    />
  );
}
