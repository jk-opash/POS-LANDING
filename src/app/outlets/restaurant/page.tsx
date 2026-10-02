import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Restaurant() {
  return (
    <ProductPageTemplate
      title="POS for Fine Dine & Casual Restaurants"
      subtitle="Deliver exceptional dining experiences with seamless table management, KOT routing, and multi-device billing."
      features={[
        { title: "Captain App", desc: "Let your stewards take orders on tablets right at the table. KOTs fire straight to the kitchen.", icon: "📱" },
        { title: "Table Management", desc: "Visual floor plan to manage seating, track table turnaround times, and handle reservations.", icon: "🪑" },
        { title: "Split Billing", desc: "Easily split bills by item, seat, or amount when large groups want to pay separately.", icon: "🧾" },
      ]}
      benefits={[
        { title: "Faster Table Turnaround", desc: "Digital KOTs and quick billing mean guests don't wait, allowing you to serve more tables." },
        { title: "Fewer Order Errors", desc: "No more illegible handwritten KOTs. Clear, printed instructions for the kitchen." },
        { title: "Delightful Guest Experience", desc: "Focus on hospitality while BillBite handles the operational heavy lifting." },
      ]}
    />
  );
}
