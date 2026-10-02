import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function Bar() {
  return (
    <ProductPageTemplate
      title="POS for Bars & Lounges (Coming Soon)"
      subtitle="We are actively building specialized features for high-volume nightlife venues, including strict liquid inventory control, happy hour automation, and fast tab management."
      features={[
        { title: "Happy Hour Automation", desc: "Coming soon: Automatically switch pricing menus based on time and day of the week.", icon: "🍻" },
        { title: "Liquid Inventory", desc: "Coming soon: Track alcohol consumption by the peg or ML to prevent pilferage and spillage.", icon: "🍾" },
        { title: "Tab Management", desc: "Coming soon: Keep tabs open securely and merge them seamlessly when closing the bill.", icon: "💳" },
      ]}
      benefits={[
        { title: "Early Access", desc: "Get on the waitlist to be the first to experience our dedicated bar features." },
      ]}
    />
  );
}
