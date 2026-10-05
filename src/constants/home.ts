import { theme } from "@/config/theme";

/* ─── Marquee Brands ───────────────────────────────────────── */
export const BRANDS = [
  "GST-Ready",
  "Multi-Branch From Day One",
  "Zomato & Swiggy Integrated",
  "GST-Ready",
  "Multi-Branch From Day One",
  "Zomato & Swiggy Integrated",
  "GST-Ready",
  "Multi-Branch From Day One",
  "Zomato & Swiggy Integrated",
  "GST-Ready",
  "Multi-Branch From Day One",
  "Zomato & Swiggy Integrated",
];

/* ─── Bento "Why Clients Love Us" ─────────────────────────── */
export const BENTO = [
  {
    title: "One Screen for All Orders",
    body: "Zomato and Swiggy orders land directly in your POS alongside dine-in and takeaway. No more juggling separate tablets.",
    col: "span 7",
    hasImg: true,
    imgSide: "right",
  },
  {
    title: "Full Stock Ledger",
    body: "No more black box inventory. Every stock movement is logged with exactly who did it.",
    col: "span 5",
    hasImg: true,
    imgSide: "right",
  },
  {
    title: "Multiple KOTs per Order",
    body: "Add rounds easily. Multiple KOTs per order as rounds get added — same bill, numbered tickets to eliminate confusion.",
    col: "span 4",
    hasImg: false,
  },
  {
    title: "Reconciliation Built-in",
    body: "Stop trusting aggregator payout statements blindly. We track gross vs. net vs. discrepancy per platform.",
    col: "span 8",
    hasImg: true,
    imgSide: "right",
  },
];

/* ─── Stats ───────────────────────────────────────────────── */
export const STATS = [
  { value: "10+", label: "Outlets onboarded", img: "/images/stats/outlets.jpg" },
  { value: "2,000+", label: "Orders processed", img: "/images/bento/pos_billing.jpg" },
  { value: "99%", label: "Uptime guaranteed", img: "/images/bento/business_management.jpg" },
];

/* ─── Ecosystem Products ──────────────────────────────────── */
export const ECOSYSTEM = [
  {
    name: "Multi-Branch Operations",
    desc: "One login for every outlet. Manage per-branch tax, currency, timezones, and hours from a central dashboard.",
    color: theme.colors.bgLight,
    accent: theme.colors.primary,
    icon: "🏢",
    features: [
      "Centralized reporting",
      "Branch-level access",
      "Consolidated menus",
      "Live revenue sync",
    ],
  },
  {
    name: "Staff & Roles",
    desc: "Four-level hierarchy (Owner → Admin → Manager → Staff) with PIN quick-login and role-scoped access.",
    color: "rgba(255,90,31,0.05)",
    accent: theme.colors.accent,
    icon: "👥",
    features: [
      "Role-scoped access",
      "PIN quick-login",
      "Audit logs",
      "Employment records",
    ],
  },
  {
    name: "Supplier Management",
    desc: "Maintain a full vendor directory with performance scoring, contracts, and a complete communication log.",
    color: "rgba(255,90,31,0.08)",
    accent: theme.colors.textDark,
    icon: "🤝",
    features: [
      "Vendor directory",
      "Performance scoring",
      "Contract tracking",
      "Comms log",
    ],
  },
  {
    name: "Security & Audit Logs",
    desc: "Every sensitive action is logged with who, when, and severity to ensure total accountability.",
    color: "rgba(255,90,31,0.15)",
    accent: theme.colors.primary,
    icon: "🛡️",
    features: [
      "Action logging",
      "Severity flags",
      "Fraud prevention",
      "Compliance ready",
    ],
  },
];

/* ─── Solutions ───────────────────────────────────────────── */
export const SOLUTIONS = [
  {
    id: "restaurant",
    label: "Restaurant (Fine Dine)",
    sub: "From the host stand to the kitchen, one seamless system.",
    img: "/images/pos_mockup.jpg",
    points: [
      "Seat a table visually",
      "Send multiple rounds to kitchen",
      "Split bills three ways at the end",
      "Accept multiple payment types per bill",
    ],
  },
  {
    id: "cafe",
    label: "Café & QSR",
    sub: "Built for speed at the counter. A simpler menu, a faster ticket.",
    img: "/images/dashboard_mockup.jpg",
    points: [
      "Fast touch-based billing",
      "GST-correct billing every time",
      "Order-level discounts",
      "Live inventory deduction",
    ],
  },
  {
    id: "cloud",
    label: "Cloud Kitchen",
    sub: "One screen for every order, every platform.",
    img: "/images/kitchen_mockup.jpg",
    points: [
      "Zomato and Swiggy alongside takeaway",
      "Recipe-linked inventory deductions",
      "Know true cost-per-dish",
      "Platform payout reconciliation",
    ],
  },
];

/* ─── FAQs ────────────────────────────────────────────────── */
export const FAQS = [
  {
    q: "What is BillBite?",
    a: "BillBite is an all-in-one restaurant POS and management platform that helps you manage billing, orders, tables, menu, inventory, staff, outlets, reports, payments, and day-to-day restaurant operations from one place.",
  },
  {
    q: "Can BillBite manage multiple outlets or branches?",
    a: "Yes. BillBite lets you manage multiple outlets from a single platform. You can view outlet-wise performance, manage staff, inventory, menu items, sales, expenses, and other operations for each branch.",
  },
  {
    q: "Does BillBite support dine-in, takeaway, and online orders?",
    a: "Yes. BillBite supports different order types including dine-in, takeaway, and online orders, allowing your team to manage all orders from a centralized POS system.",
  },
  {
    q: "Can I manage restaurant tables with BillBite?",
    a: "Yes. BillBite provides complete table management with zones, table status, table assignment, table transfers, table merging, and order management directly from the table view.",
  },
  {
    q: "What is KOT and does BillBite support it?",
    a: "Yes. BillBite supports Kitchen Order Tickets (KOT) so orders can be sent to the kitchen for preparation. Kitchen staff can manage incoming orders and track their preparation status through the kitchen workflow.",
  },
  {
    q: "Does BillBite have a Kitchen Display System (KDS)?",
    a: "Yes. BillBite includes a Kitchen Display System that helps kitchen staff view, organize, and manage active orders and KOTs, making kitchen operations faster and easier to track.",
  },
  {
    q: "Can I manage my restaurant menu in BillBite?",
    a: "Yes. You can create and manage menu items, categories, subcategories, food types, availability, pricing, and other menu details. Menu items can also be managed outlet-wise.",
  },
  {
    q: "Does BillBite provide inventory management?",
    a: "Yes. BillBite includes inventory management with stock tracking, stock adjustments, stock transfers, replenishment, quarantine, low-stock and critical-stock monitoring, and inventory audit logs.",
  },
  {
    q: "Can I track stock changes and inventory history?",
    a: "Yes. BillBite maintains inventory adjustment and audit information so you can monitor stock changes and identify differences between system stock and physical inventory.",
  },
  {
    q: "Can I manage suppliers and purchases?",
    a: "Yes. BillBite includes supplier management where you can maintain supplier information and manage supplier-related operations for your restaurant inventory.",
  },
  {
    q: "Does BillBite support restaurant staff management?",
    a: "Yes. BillBite provides staff management features that help you maintain employee information, manage staff access, and monitor staff-related restaurant operations.",
  },
  {
    q: "Can BillBite track staff performance?",
    a: "Yes. BillBite provides staff performance reporting, including information such as sales generated, orders handled, and tables served, helping restaurant owners understand team performance.",
  },
  {
    q: "Does BillBite provide sales and business reports?",
    a: "Yes. BillBite provides detailed reports covering sales, revenue, item-wise sales, taxes, discounts, voids, staff performance, hourly trends, expenses, and stock variance.",
  },
  {
    q: "Can I track expenses and payments?",
    a: "Yes. BillBite provides accounting and payment management features that allow you to track expenses, payments, withdrawals, utilities, and other financial activities related to your outlets.",
  },
  {
    q: "Does BillBite support tax and GST reporting?",
    a: "Yes. BillBite provides tax and GST liability reports to help you review the taxes collected through your restaurant sales and prepare the required financial information.",
  },
  {
    q: "Can I reconcile Zomato and Swiggy settlements?",
    a: "Yes. BillBite includes aggregator reconciliation that helps you compare online-order sales with settlement data. You can review gross amounts, deductions, net payouts, and identify discrepancies or missing settlements.",
  },
  {
    q: "Does BillBite support QR ordering?",
    a: "Yes. BillBite supports QR-based ordering, allowing customers to access the restaurant's digital menu and place orders through the available QR ordering experience.",
  },
  {
    q: "Can I manage takeaway orders separately?",
    a: "Yes. BillBite provides a dedicated takeaway order workflow where staff can create and manage takeaway orders separately and process their payments through the POS.",
  },
  {
    q: "Can BillBite generate invoices and receipts?",
    a: "Yes. BillBite supports invoice and receipt management, including invoice details, payment information, invoice status, and configurable receipt and invoice settings.",
  },
  {
    q: "Can I customize restaurant and business settings?",
    a: "Yes. BillBite provides settings for business details, restaurant configuration, branch information, taxes, receipt and invoice preferences, system preferences, and other operational settings.",
  },
  {
    q: "Can I monitor my restaurant's performance from a dashboard?",
    a: "Yes. The BillBite dashboard provides an overview of important restaurant metrics such as orders, sales, payments, products, taxes, discounts, expenses, online orders, and outlet performance.",
  },
  {
    q: "Can I use BillBite for more than one restaurant outlet?",
    a: "Yes. BillBite is designed for multi-outlet restaurant businesses. You can manage branches from one platform while keeping outlet-level operations and performance organized separately.",
  },
  {
    q: "Does BillBite help identify inventory losses or stock differences?",
    a: "Yes. BillBite includes stock variance reporting and inventory audit tools that help you identify differences between recorded stock and physical inventory.",
  },
  {
    q: "Is BillBite suitable for small and growing restaurants?",
    a: "Yes. BillBite is designed to centralize restaurant operations, making it suitable for individual outlets as well as businesses that are growing into multiple branches.",
  },
];

/* ─── Testimonials ────────────────────────────────────────── */
export const TESTIS = [
  {
    quote:
      "BillBite provides detailed financial reports and analytics for sales and profits, along with exceptional customer service for troubleshooting. The POS is intuitive and our staff adapted in hours. I highly recommend it.",
    name: "Arjun Mehta",
    role: "Co-founder, Burgerama",
    avatar: "AM",
  },
  {
    quote:
      "BillBite simplifies restaurant management by handling online orders, inventory, and menu updates. The user-friendly POS frees up time for brand growth. Invest in automated solutions like BillBite for seamless operations.",
    name: "Aditi Madan",
    role: "Founder, Yangkiez Momos",
    avatar: "AM",
  },
  {
    quote:
      "To run multiple outlets, you need a technological solution that perfectly syncs all processes into one for smooth restaurant operations. BillBite has done a phenomenal job in helping us scale from 2 to 11 outlets.",
    name: "Kabir Advani",
    role: "Managing Partner, Berco's",
    avatar: "KA",
  },
  {
    quote:
      "The payout reconciliation feature alone saved us ₹40,000 in the first month. We had no idea how much we were being shorted by the aggregators. Now we track every rupee.",
    name: "Priya Nair",
    role: "Operations Manager, Urban Cloud Kitchen",
    avatar: "PN",
  },
];
