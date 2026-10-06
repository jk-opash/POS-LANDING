import ProductPageTemplate from "@/components/ProductPageTemplate";
import { BarChart3, Pizza, FileText } from "lucide-react";

export default function Reports() {
  return (
    <ProductPageTemplate
      title="Advanced Analytics & Reports"
      subtitle="Get real-time insights into your business from anywhere. Over 80+ actionable reports to help you grow."
      features={[
        { title: "Live Dashboard", desc: "Track live sales, discounts, and footfall from your smartphone.", icon: <BarChart3 /> },
        { title: "Item-wise Sales", desc: "Identify your best-sellers and dead inventory to optimize your menu.", icon: <Pizza /> },
        { title: "GST & Tax Reports", desc: "1-click export of sales data formatted directly for your CA and GST filing.", icon: <FileText /> },
      ]}
      benefits={[
        { title: "Data-Driven Decisions", desc: "Stop guessing. Make operational decisions based on hard data." },
        { title: "Multi-Outlet Control", desc: "Compare performance across all your branches on a single screen." },
        { title: "Automated Daily Emails", desc: "Wake up to yesterday's complete business summary in your inbox." },
      ]}
    />
  );
}
