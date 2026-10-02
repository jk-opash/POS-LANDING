import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Cafe() {
  return (
    <ProductPageTemplate
      title="POS for Cafes & QSRs"
      subtitle="Handle rush hours effortlessly with lightning-fast counter billing and dynamic combo management."
      features={[
        { title: "Quick Billing", desc: "Punch orders in under 3 clicks with a highly optimized touchscreen interface.", icon: "⚡" },
        { title: "Combo Management", desc: "Easily create and sell dynamic meals (e.g., Burger + Fries + Coke) with auto-pricing.", icon: "🍔" },
        { title: "Customer Display", desc: "Show customers their order details and QR codes for instant UPI payments.", icon: "📺" },
      ]}
      benefits={[
        { title: "Bust the Queues", desc: "Serve customers faster during peak hours and maximize your counter throughput." },
        { title: "Upsell Effectively", desc: "System prompts cashiers to suggest add-ons and larger sizes." },
        { title: "Loyalty Integration", desc: "Reward frequent customers with points and digital coupons directly from the POS." },
      ]}
    />
  );
}
