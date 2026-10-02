import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function MenuManagement() {
  return (
    <ProductPageTemplate
      title="Centralized Menu Management"
      subtitle="Manage categories, variants, custom add-ons, and prices across all your outlets from one dashboard."
      features={[
        { title: "Variants & Add-ons", desc: "Create Half/Full variants and custom add-on groups with min/max selection rules.", icon: "📋" },
        { title: "Centralized Updates", desc: "Change a price or mark an item out of stock once, and it updates across all outlets and aggregators.", icon: "🌐" },
        { title: "Dietary Tags & Photos", desc: "Add spice-level toggles, dietary tags (Veg/Non-Veg/Vegan), and high-quality item photos.", icon: "🌶️" },
      ]}
      benefits={[
        { title: "Save Hours of Work", desc: "Stop updating Excel sheets and calling individual branches to change the menu." },
        { title: "Brand Consistency", desc: "Ensure pricing and descriptions are identical across your entire franchise." },
        { title: "Increase Order Value", desc: "Strategic add-on prompts help your cashiers upsell effortlessly." },
      ]}
    />
  );
}
