import { IMAGES } from "../assets";

export const PRODUCTS = [
  {
    id: "pos",
    title: "Billing & POS",
    desc: "Manage dine-in, takeaway, and delivery from one screen. Split bills, multiple payment methods, and GST-compliant auto-generated invoices.",
    btn: "Explore Billing",
    img: IMAGES.posBilling,
  },
  {
    id: "inventory",
    title: "Inventory",
    desc: "Real-time stock tracking, reorder alerts, recipe-linked auto-deductions, and a complete movement ledger.",
    btn: "Track Stock",
    img: IMAGES.posInventory,
  },
  {
    id: "floor",
    title: "Table & Floor Plan",
    desc: "A drag-and-drop floor editor with real table positions, zones, and merging — not just a list. Live status at a glance.",
    btn: "Design Your Floor",
    img: IMAGES.posFloorPlan,
  },
  {
    id: "kot",
    title: "KOT & Kitchen Display",
    desc: "Add another round anytime without closing the bill — each round prints its own numbered ticket, tracked Sent to Served.",
    btn: "See Kitchen Flow",
    img: IMAGES.posKOT,
  },
];
