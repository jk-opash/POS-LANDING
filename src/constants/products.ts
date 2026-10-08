import { IMAGES } from "../assets";

export const PRODUCTS = [
  {
    id: "pos",
    title: "Billing & POS",
    desc: "Manage dine-in and takeaway from one screen. Multiple payment methods, and GST-compliant invoices.",
    subFeatures: [
      { title: "Split & Merge", desc: "Easily split by item or seat with a single tap." },
      { title: "Multi-Payment", desc: "Accept Cash, UPI, Cards, and Split Payments." },
      { title: "Offline Mode", desc: "Keep billing even when internet is down, auto-sync later." },
    ],
    btn: "Explore Billing",
    img: IMAGES.posBilling,
  },
  {
    id: "inventory",
    title: "Inventory",
    desc: "Real-time stock tracking, reorder alerts, recipe-linked auto-deductions, and a complete movement ledger.",
    subFeatures: [
      { title: "Recipe Management", desc: "Link ingredients for precise auto-deductions." },
      { title: "Low Stock Alerts", desc: "Get notified before you run out of essentials." },
      { title: "Wastage Tracking", desc: "Log spills to keep food cost under control." },
      { title: "Vendor POs", desc: "Auto-generate purchase orders on par levels." }
    ],
    btn: "Track Stock",
    img: IMAGES.posInventory,
  },
  {
    id: "floor",
    title: "Table & Floor Plan",
    desc: "A drag-and-drop floor editor with real table positions, zones, and merging — not just a list. Live status at a glance.",
    subFeatures: [
      { title: "Drag-and-Drop", desc: "Design floor layout exactly as it is in real life." },
      { title: "Live Table Status", desc: "See ordered, eating, or paying via color coding." },
      { title: "Zone Management", desc: "Divide into AC, Non-AC, Rooftop for service." },
      { title: "Table Transfers", desc: "Move guests and orders to another table seamlessly." }
    ],
    btn: "Design Your Floor",
    img: IMAGES.posFloorPlan,
  },
  {
    id: "kot",
    title: "KOT & Kitchen Display",
    desc: "Add another round anytime without closing the bill — each round prints its own numbered ticket, tracked Sent to Served.",
    subFeatures: [
      { title: "Station Routing", desc: "Send drinks to bar and food to kitchen automatically." },
      { title: "Live Prep Timers", desc: "Color-coded KOTs turn red if prep time exceeds limit." },
      { title: "Waiter App Sync", desc: "Captains get instant ping when food is ready." },
      { title: "Digital Bump Bar", desc: "Mark items cooked or served with a single tap." }
    ],
    btn: "See Kitchen Flow",
    img: IMAGES.posKOT,
  },
];
