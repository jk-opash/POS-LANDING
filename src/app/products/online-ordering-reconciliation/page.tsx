import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function OnlineOrders() {
  return (
    <ProductPageTemplate
      title="Online Order Sync (Zomato/Swiggy)"
      subtitle="Manage all your Zomato, Swiggy, and direct online orders directly on your POS. No more juggling multiple tablets."
      features={[
        { title: "Direct POS Sync", desc: "Aggregator orders land directly on your POS screen and print straight to the kitchen.", icon: "🔄" },
        { title: "Centralized Menu Push", desc: "Update your prices or mark items out-of-stock across all platforms instantly.", icon: "📱" },
        { title: "Payout Reconciliation", desc: "Automatically match gross sales, platform deductions, and net payouts.", icon: "💰" },
      ]}
      benefits={[
        { title: "Eliminate Manual Entry", desc: "Stop punching aggregator orders manually into the POS. Zero errors." },
        { title: "Faster Dispatch", desc: "Kitchen gets the KOT instantly, reducing preparation and handover times." },
        { title: "Recover Lost Revenue", desc: "Spot discrepancies in aggregator payouts quickly and accurately." },
      ]}
    />
  );
}
