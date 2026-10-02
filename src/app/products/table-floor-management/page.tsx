import ProductPageTemplate from "@/components/ProductPageTemplate";

export default function TableFloorManagement() {
  return (
    <ProductPageTemplate
      title="Table & Floor Management"
      subtitle="Visual drag-and-drop floor-plan editor, real positioning and rotation, zones, table merging, and live occupancy status."
      features={[
        { title: "Visual Floor Plan", desc: "Replicate your exact restaurant layout with drag-and-drop tables, zones, and sections.", icon: "🪑" },
        { title: "Live Occupancy Status", desc: "Instantly see which tables are vacant, occupied, or waiting for the bill.", icon: "🚦" },
        { title: "Merge & Split Tables", desc: "Easily accommodate large groups by merging tables, or split them for separate billing.", icon: "↔️" },
      ]}
      benefits={[
        { title: "Optimize Seating", desc: "Never leave a table empty for too long. Seat walk-ins faster with real-time status." },
        { title: "Avoid Confusion", desc: "Waiters always know exactly where to deliver the food, reducing errors." },
        { title: "Better Guest Experience", desc: "Manage reservations and waitlists smoothly during peak hours." },
      ]}
    />
  );
}
