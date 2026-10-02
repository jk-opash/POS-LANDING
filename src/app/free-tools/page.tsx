import LegalPageTemplate from "@/components/LegalPageTemplate";

export default function FreeToolsPage() {
  return (
    <LegalPageTemplate
      title="Free Tools for Restaurants"
      content={<p style={{ textAlign: "center", marginTop: "2rem" }}>We are building free tools (like a recipe cost calculator and menu engineering sheet). Check back in Phase 2!</p>}
    />
  );
}
