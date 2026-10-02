import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Inventory() {
  return (
    <ProductPageTemplate
      title="Restaurant Inventory Management"
      subtitle="Stop guessing your food costs. Track every gram of raw material, manage recipes, and auto-deduct stock with every sale."
      features={[
        { title: "Recipe Management", desc: "Map exact raw ingredients to your menu items for precise stock tracking.", icon: "🧾" },
        { title: "Auto Deductions", desc: "Every time a dish is sold, the exact ingredients are deducted from your stock.", icon: "📉" },
        { title: "Supplier & PO Management", desc: "Generate Purchase Orders and track supplier payments from one dashboard.", icon: "🚚" },
      ]}
      benefits={[
        { title: "Cut Food Waste", desc: "Identify over-portioning and spoilage by comparing theoretical vs actual stock." },
        { title: "Low Stock Alerts", desc: "Never run out of key ingredients. Get notified before you hit critical levels." },
        { title: "Better Margins", desc: "Know the exact cost-per-dish in real time to optimize your menu pricing." },
      ]}
    />
  );
}
