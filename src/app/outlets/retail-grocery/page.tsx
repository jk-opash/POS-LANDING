import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function RetailGrocery() {
  return (
    <ProductPageTemplate
      title="Retail & Grocery POS (Coming Soon)"
      subtitle="We are currently adapting our fast-billing engine for retail environments. Expect barcode scanning, shelf-label printing, and expiry-date tracking very soon."
      features={[
        { title: "Barcode Scanning", desc: "Coming soon: Instantly add items to the bill using any standard USB or Bluetooth barcode scanner.", icon: "🛒" },
        { title: "Expiry Tracking", desc: "Coming soon: Track batch numbers and expiry dates to automatically discount or discard aging stock.", icon: "📅" },
        { title: "Shelf Label Printing", desc: "Coming soon: Generate and print barcode labels directly from the inventory dashboard.", icon: "🖨️" },
      ]}
      benefits={[
        { title: "Early Access", desc: "Get on the waitlist to be the first to experience our dedicated retail features." },
      ]}
    />
  );
}
