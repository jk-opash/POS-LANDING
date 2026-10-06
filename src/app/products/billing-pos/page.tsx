import ProductPageTemplate from "@/components/ProductPageTemplate";
import { Zap, WifiOff, LayoutDashboard } from "lucide-react";

export default function BillingPOS() {
  return (
    <ProductPageTemplate
      title="Restaurant Billing & POS"
      subtitle="The fastest, most reliable point-of-sale system built for Indian restaurants. Punch orders in 3 clicks, manage tables, and accept any payment method."
      features={[
        { title: "Lightning Fast Billing", desc: "Punch orders in under 3 clicks. Designed for high-volume rush hours.", icon: <Zap /> },
        { title: "Works 100% Offline", desc: "Internet down? No problem. Keep billing and printing KOTs locally, syncs automatically.", icon: <WifiOff /> },
        { title: "Table & Floor Plan", desc: "Visual map of your dining area. Easily merge, split, or transfer tables.", icon: <LayoutDashboard /> },
      ]}
      benefits={[
        { title: "Reduce Wait Times", desc: "Speed up the billing process and serve more customers during peak hours." },
        { title: "Zero Pilferage", desc: "Tight access controls and audit logs prevent unauthorized voids and discounts." },
        { title: "Easy Training", desc: "So intuitive that a new cashier can learn it in less than 30 minutes." },
      ]}
    />
  );
}
