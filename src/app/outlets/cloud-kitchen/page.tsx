import ProductPageTemplate from "@/components/ProductPageTemplate";
import { RefreshCw, Building2, Bike } from "lucide-react";

export default function CloudKitchen() {
  return (
    <ProductPageTemplate
      title="POS for Cloud Kitchens"
      subtitle="Consolidate orders from Zomato, Swiggy, and direct channels into a single, high-speed dispatch screen."
      features={[
        { title: "Aggregator Integration", desc: "Zomato, Swiggy, MagicPin, and more—all orders flow directly into one POS screen.", icon: <RefreshCw /> },
        { title: "Multi-Brand Support", desc: "Manage multiple kitchen brands from a single POS and kitchen location.", icon: <Building2 /> },
        { title: "Dispatch Management", desc: "Track order preparation times and assign delivery partners efficiently.", icon: <Bike /> },
      ]}
      benefits={[
        { title: "No More Tablet Hell", desc: "Replace the clutter of multiple aggregator tablets with one unified system." },
        { title: "Perfect Inventory", desc: "Track raw material usage across multiple virtual brands accurately." },
        { title: "Centralized Menu Push", desc: "Update prices and mark items out of stock across all platforms in one click." },
      ]}
    />
  );
}
