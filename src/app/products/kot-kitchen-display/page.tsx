import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function KOTKitchenDisplay() {
  return (
    <ProductPageTemplate
      title="KOT & Kitchen Display"
      subtitle="Multiple KOT rounds per order, kitchen-side status tracking, item notes, and variants printed clearly."
      features={[
        { title: "Digital KOT Routing", desc: "Automatically route drinks to the bar and food to the kitchen without manual sorting.", icon: "👨‍🍳" },
        { title: "Status Tracking", desc: "Track every dish from Sent → Accepted → Ready → Served on a live kitchen display.", icon: "⏱️" },
        { title: "Custom Item Notes", desc: "Print clear instructions like 'Less Spicy' or 'No Onion' directly on the ticket.", icon: "📝" },
      ]}
      benefits={[
        { title: "Eliminate Paper Chaos", desc: "No more lost or illegible handwritten KOTs causing kitchen confusion." },
        { title: "Faster Preparation", desc: "Chefs see incoming orders instantly, improving prep times." },
        { title: "Multi-Round Orders", desc: "Easily add multiple rounds to the same table ticket without creating duplicates." },
      ]}
    />
  );
}
