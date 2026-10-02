"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import AnimatedHero from "@/components/AnimatedHero";
import { theme } from "@/config/theme";

/* ─── Product Tabs ─────────────────────────────────────────── */
const PRODUCTS = [
  {
    id: "pos",
    label: "Billing & POS",
    heading: "Fast, touch-based billing for every outlet.",
    desc: "Manage dine-in, takeaway, and delivery from one screen. Split bills, multiple payment methods (Cash/Card/UPI), GST-compliant auto-generated invoices, and order-level discounts.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
  {
    id: "inventory",
    label: "Inventory Management",
    heading: "Full stock movement ledger.",
    desc: "Real-time stock tracking, reorder alerts, recipe-linked auto-deductions, and a complete movement ledger so you know exactly where your raw materials go.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
  {
    id: "online",
    label: "Online Ordering",
    heading: "Zomato & Swiggy orders on one screen.",
    desc: "Accept and reject orders directly in your POS. Built-in reconciliation tracks gross, deductions, and net payouts per platform and flags discrepancies.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
  {
    id: "tables",
    label: "Table & Floor Plan",
    heading: "Visual drag-and-drop floor management.",
    desc: "Real positioning and rotation, custom zones, table merging, and live occupancy status to keep your dining room running smoothly.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
  {
    id: "reports",
    label: "Reports",
    heading: "Data that drives real decisions.",
    desc: "Live dashboards for sales, inventory, and staff performance. Multi-branch analytics let you compare outlet performance instantly.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
];

/* ─── Marquee Brands ───────────────────────────────────────── */
const BRANDS = [
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
const BENTO = [
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
const STATS = [
  { value: "50+", label: "Outlets onboarded", icon: "🏢" },
  { value: "10,000+", label: "Orders processed", icon: "🍽️" },
  { value: "99.9%", label: "Uptime guaranteed", icon: "⚡" },
];

/* ─── Ecosystem Products ──────────────────────────────────── */
const ECOSYSTEM = [
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
const SOLUTIONS = [
  {
    id: "restaurant",
    label: "Restaurant (Fine Dine)",
    sub: "From the host stand to the kitchen, one seamless system.",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=600&q=80",
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
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=600&q=80",
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
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=600&q=80",
    points: [
      "Zomato and Swiggy alongside takeaway",
      "Recipe-linked inventory deductions",
      "Know true cost-per-dish",
      "Platform payout reconciliation",
    ],
  },
];
/* ─── FAQs ────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Does BillBite integrate with Zomato and Swiggy?",
    a: "Yes! All Zomato and Swiggy orders appear directly on your POS screen, right alongside your dine-in and takeaway orders.",
  },
  {
    q: "How does payout reconciliation work?",
    a: "Our system automatically tracks gross sales, deductions, and net payouts for every aggregator order so you can easily spot discrepancies.",
  },
  {
    q: "Can I use BillBite without an internet connection?",
    a: "Yes. BillBite works fully offline for billing and KOT printing. All your data automatically syncs to the cloud when your connection is restored.",
  },
  {
    q: "Does it work with my existing thermal printer?",
    a: "BillBite is compatible with almost all standard thermal receipt and KOT printers (USB, LAN, and Bluetooth).",
  },
];

/* ─── Testimonials ────────────────────────────────────────── */
const TESTIS = [
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

/* ─── Number Ticker ───────────────────────────────────────── */
const NumberTicker = ({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: string;
}) => {
  const [count, setCount] = useState(0);
  const target = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9,\.]/g, "");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          timer = setInterval(() => {
            start += Math.ceil(target / (duration / 50));
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 50);
        }
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [target]);

  return (
    <div
      ref={ref}
      className="stats-cell fade-up"
      style={{ textAlign: "center" }}
    >
      <div
        style={{
          width: "4.5rem",
          height: "4.5rem",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
          fontSize: "1.75rem",
        }}
      >
        {icon}
      </div>
      <p
        style={{
          fontFamily: theme.fonts.heading,
          fontWeight: 800,
          fontSize: "2.5rem",
          color: "#fff",
          lineHeight: 1,
        }}
      >
        {count === 0 ? "0" : count.toLocaleString()}
        {suffix}
      </p>
      <p style={{ color: "#9EAAB4", fontSize: "0.9rem", marginTop: "0.4rem" }}>
        {label}
      </p>
    </div>
  );
};

/* ─── COMPONENT ───────────────────────────────────────────── */
export default function HomePage() {
  const [activeTab, setActiveTab] = useState("pos");
  const [activeSol, setActiveSol] = useState("restaurant");
  const [testiIdx, setTestiIdx] = useState(0);
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [showTop, setShowTop] = useState(false);
  const [products, setProducts] = useState<string[]>(["Billing & POS"]);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    business: "",
  });
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const fadeRefs = useRef<HTMLElement[]>([]);

  /* scroll observer for fade-up elements */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-up").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* auto-rotate products in hero */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const idx = PRODUCTS.findIndex((p) => p.id === prev);
        const nextIdx = (idx + 1) % PRODUCTS.length;
        return PRODUCTS[nextIdx].id;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  /* back-to-top */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const curProduct = PRODUCTS.find((p) => p.id === activeTab)!;
  const curSolution = SOLUTIONS.find((s) => s.id === activeSol)!;

  const toggleProduct = (p: string) =>
    setProducts((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p],
    );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, products }),
      });
      if (res.ok) {
        setFormSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ flex: 1 }}>
      {/* ════════════════════════════════════════════════════
          1. HERO — full dark navy, centered, large heading
      ════════════════════════════════════════════════════ */}
      <AnimatedHero />

      {/* ════════════════════════════════════════════════════
          2. TRUSTED BRANDS MARQUEE
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: "3rem 0",
          backgroundColor: theme.colors.bgLight,
          borderBottom: `1px solid ${theme.colors.border}`,
          overflow: "hidden",
        }}
      >
        <div className="pp-wrap" style={{ marginBottom: "1.75rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div
              style={{ flex: 1, height: "1px", background: theme.colors.border }}
            />
            <p
              style={{
                fontFamily: theme.fonts.body,
                fontWeight: 500,
                fontSize: "0.875rem",
                color: theme.colors.textDark,
                whiteSpace: "nowrap",
              }}
            >
              Trusted by{" "}
              <strong style={{ color: theme.colors.primary }}>1,50,000+</strong>{" "}
              businesses across the globe
            </p>
            <div
              style={{ flex: 1, height: "1px", background: theme.colors.border }}
            />
          </div>
        </div>

        <div
          style={{ position: "relative", maxWidth: "100%", margin: "0 auto" }}
        >
          {/* Gradient Masks for smooth fading edges */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              bottom: 0,
              width: "150px",
              background:
                `linear-gradient(to right, ${theme.colors.bgLight}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              width: "150px",
              background:
                `linear-gradient(to left, ${theme.colors.bgLight}, transparent)`,
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              gap: "2rem",
              width: "max-content",
              animation: "scrollX 30s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {[...BRANDS, ...BRANDS].map((b, i) => (
              <div
                key={i}
                style={{
                  padding: "0.75rem 2rem",
                  background: "#fff",
                  borderRadius: "0.5rem",
                  border: "1px solid #E5E7EB",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.02)",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#374151",
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                  opacity: 0.6,
                  filter: "grayscale(100%)",
                  transition: "all 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.filter = "grayscale(0%)";
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.color = theme.colors.accent;
                  e.currentTarget.style.borderColor = theme.colors.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.6";
                  e.currentTarget.style.filter = "grayscale(100%)";
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.color = "#374151";
                  e.currentTarget.style.borderColor = "#E5E7EB";
                }}
              >
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          3. WHY OUR CLIENTS LOVE US — dark bento grid
      ════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: theme.colors.bgDark, padding: "5rem 0" }}
      >
        <div className="pp-wrap">
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <span
              className="badge-outline-white"
              style={{
                marginBottom: "1.25rem",
                display: "inline-block",
                color: theme.colors.bgSurface,
                border: `1px solid ${theme.colors.bgSurface}`,
                padding: "0.25rem 0.75rem",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              WHY RESTAURANTS CHOOSE BILLBITE
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 3.25rem)",
                color: "#fff",
                lineHeight: 1.1,
                maxWidth: "680px",
                margin: "1.25rem auto 1rem",
              }}
            >
              Purpose-Built for Indian F&B
            </h2>
            <p
              style={{
                color: "#9EAAB4",
                maxWidth: "560px",
                margin: "0 auto",
                fontSize: "1rem",
                lineHeight: 1.7,
              }}
            >
              We know exactly where the friction is—lost KOTs, untracked
              inventory, and aggregator payout mismatches. BillBite is designed
              to eliminate these blind spots.
            </p>
          </div>

          {/* Bento Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: "1.25rem",
            }}
          >
            {/* Card 1: One Screen for All Orders — spans 7 cols */}
            <div
              className="bento-card fade-up"
              style={{ gridColumn: "span 7" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3 className="bento-card-title">{BENTO[0].title}</h3>
                  <p className="bento-card-body">{BENTO[0].body}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: "10rem",
                      height: "10rem",
                      borderRadius: "50%",
                      background: "rgba(255,90,31,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "4rem",
                    }}
                  >
                    📱
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Full Stock Ledger — spans 5 cols */}
            <div
              className="bento-card fade-up"
              style={{ gridColumn: "span 5" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3 className="bento-card-title">{BENTO[1].title}</h3>
                  <p className="bento-card-body">{BENTO[1].body}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "8rem",
                      height: "8rem",
                      borderRadius: "50%",
                      background: "rgba(255,90,31,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                    }}
                  >
                    📦
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Multiple KOTs per Order — spans 4 cols */}
            <div
              className="bento-card fade-up"
              style={{ gridColumn: "span 4" }}
            >
              <h3 className="bento-card-title">{BENTO[2].title}</h3>
              <p className="bento-card-body">{BENTO[2].body}</p>
              <div
                style={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: "6rem",
                    height: "6rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "2.5rem",
                  }}
                >
                  🧾
                </div>
              </div>
            </div>

            {/* Card 4: Reconciliation Built-in — spans 8 cols */}
            <div
              className="bento-card fade-up"
              style={{ gridColumn: "span 8" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1.5rem",
                  alignItems: "center",
                }}
              >
                <div>
                  <h3 className="bento-card-title">{BENTO[3].title}</h3>
                  <p className="bento-card-body">{BENTO[3].body}</p>
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "9rem",
                      height: "9rem",
                      borderRadius: "50%",
                      background: "rgba(255,90,31,0.08)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3.5rem",
                    }}
                  >
                    💸
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Switch Section (Replacing Table) */}
          <div
            className="fade-up"
            style={{ marginTop: "6rem", marginBottom: "2rem" }}
          >
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span
                className="badge-outline-white"
                style={{ marginBottom: "1rem" }}
              >
                The BillBite Difference
              </span>
              <h3
                style={{
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4vw, 2.75rem)",
                  color: "#fff",
                  lineHeight: 1.2,
                  marginTop: "1rem",
                }}
              >
                Stop settling for{" "}
                <span style={{ opacity: 0.5, textDecoration: "line-through" }}>
                  average POS
                </span>
              </h3>
              <p
                style={{
                  color: "#9EAAB4",
                  marginTop: "1rem",
                  fontSize: "1.1rem",
                }}
              >
                See why growing restaurants are moving to BillBite.
              </p>
            </div>

            <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
              {/* Header row for Desktop */}
              <div
                className="hidden md:grid"
                style={{
                  gridTemplateColumns: "1fr auto 1fr",
                  gap: "2rem",
                  padding: "0 2rem 1rem",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  marginBottom: "1rem",
                }}
              >
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 700,
                  }}
                >
                  The Old Way
                </p>
                <div style={{ width: "32px" }}></div>
                <p
                  style={{
                    color: theme.colors.accent,
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    fontWeight: 700,
                  }}
                >
                  The BillBite Way
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {[
                  {
                    old: "One KOT per order, massive confusion on repeat rounds.",
                    new: "Multiple KOTs per order as rounds get added — same bill, numbered tickets.",
                  },
                  {
                    old: "Inventory is a black box once stock leaves the shelf.",
                    new: "Full stock movement ledger — every single change logged with who did it.",
                  },
                  {
                    old: "Flat 'staff' accounts with identical permissions.",
                    new: "Owner → Admin → Manager → Staff hierarchy with PIN quick-login.",
                  },
                  {
                    old: "Separate tablets for dine-in, Zomato, and Swiggy.",
                    new: "One single screen accepts and rejects every single order source.",
                  },
                ].map((comp, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:grid"
                    style={{
                      gridTemplateColumns: "1fr auto 1fr",
                      gap: "1.5rem",
                      alignItems: "center",
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: "1rem",
                      padding: "1.5rem 2rem",
                      transition:
                        "transform 0.3s, background 0.3s, border-color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor = "rgba(255,90,31,0.3)";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {/* Old Way */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                        opacity: 0.6,
                      }}
                    >
                      <div
                        style={{
                          color: "#EF4444",
                          fontSize: "1.25rem",
                          marginTop: "-0.2rem",
                        }}
                      >
                        ✕
                      </div>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "1rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {comp.old}
                      </p>
                    </div>

                    {/* Arrow separator (hidden on mobile, shown on md) */}
                    <div
                      className="hidden md:flex"
                      style={{
                        color: "rgba(255,255,255,0.2)",
                        fontSize: "1.5rem",
                        width: "32px",
                        justifyContent: "center",
                      }}
                    >
                      →
                    </div>

                    {/* Arrow separator for mobile */}
                    <div
                      className="md:hidden"
                      style={{
                        color: theme.colors.accent,
                        fontSize: "1.25rem",
                        textAlign: "center",
                        width: "100%",
                        padding: "0.5rem 0",
                      }}
                    >
                      ↓
                    </div>

                    {/* New Way */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          color: theme.colors.accent,
                          fontSize: "1.25rem",
                          marginTop: "-0.2rem",
                        }}
                      >
                        ✓
                      </div>
                      <p
                        style={{
                          color: "#fff",
                          fontSize: "1rem",
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        {comp.new}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          4. ECOSYSTEM — "What we do" (BENTO GRID)
      ════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: theme.colors.bgLight, padding: "6rem 0" }}
      >
        <div className="pp-wrap">
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <span className="badge-outline" style={{ marginBottom: "1.25rem" }}>
              THE BILLBITE ECOSYSTEM
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: theme.colors.textDark,
                lineHeight: 1.15,
                maxWidth: "700px",
                margin: "1rem auto",
              }}
            >
              Integrated solutions to run your entire restaurant empire
            </h2>
            <p
              style={{
                color: "#6B7280",
                maxWidth: "600px",
                margin: "0 auto",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              From front-of-house to back-office, our ecosystem connects every
              dot so you can focus on food and experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {ECOSYSTEM.map((eco, idx) => {
              // Asymmetric grid spanning logic
              const isLarge = idx === 0 || idx === 3;
              const spanClass = isLarge ? "md:col-span-7" : "md:col-span-5";
              // We'll map the eco.color which is a subtle background, into a slightly deeper version for the gradient

              return (
                <div
                  key={eco.name}
                  className={`${spanClass} fade-up group relative overflow-hidden`}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "1.5rem",
                    border: "1px solid #E5E7EB",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.03)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 30px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = theme.colors.accent;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow =
                      "0 4px 20px rgba(0,0,0,0.03)";
                    e.currentTarget.style.borderColor = "#E5E7EB";
                  }}
                >
                  {/* Decorative background element */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                      width: "200px",
                      height: "200px",
                      background: `radial-gradient(circle, ${eco.color} 0%, transparent 70%)`,
                      transition:
                        "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                      zIndex: 0,
                    }}
                    className="group-hover:scale-[1.8]"
                  />

                  <div
                    style={{
                      padding: "2.5rem",
                      position: "relative",
                      zIndex: 1,
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginBottom: "1.5rem",
                      }}
                    >
                      <div
                        style={{
                          width: "3.5rem",
                          height: "3.5rem",
                          borderRadius: "0.75rem",
                          background: eco.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "1.75rem",
                          border: "1px solid rgba(0,0,0,0.05)",
                        }}
                      >
                        {eco.icon}
                      </div>
                      <h3
                        style={{
                          fontFamily: theme.fonts.heading,
                          fontWeight: 700,
                          fontSize: "1.3rem",
                          color: theme.colors.textDark,
                        }}
                      >
                        {eco.name}
                      </h3>
                    </div>

                    <p
                      style={{
                        color: "#4B5564",
                        fontSize: "1rem",
                        lineHeight: 1.6,
                        marginBottom: "2rem",
                        flex: 1,
                      }}
                    >
                      {eco.desc}
                    </p>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: isLarge ? "1fr 1fr" : "1fr",
                        gap: "1rem",
                        marginTop: "auto",
                      }}
                    >
                      {eco.features.map((f, i) => (
                        <div
                          key={i}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            fontSize: "0.95rem",
                            color: "#374151",
                            fontWeight: 500,
                          }}
                        >
                          <div
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "50%",
                              background: "rgba(255,90,31,0.1)",
                              color: theme.colors.accent,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              fontSize: "0.75rem",
                              fontWeight: 800,
                            }}
                          >
                            ✓
                          </div>
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Interactive subtle bottom line */}
                  <div
                    style={{
                      height: "4px",
                      width: "100%",
                      background: "#E5E7EB",
                      transition: "background 0.3s",
                    }}
                    className="group-hover:!bg-[#FF5A1F]"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          5. STATS — "Amplifying The Key Metrics That Matter"
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: theme.colors.bgDark }}>
        <div className="pp-wrap">
          <div className="stats-grid">
            {/* Left: heading */}
            <div className="stats-cell">
              <p
                style={{
                  color: "#9EAAB4",
                  fontSize: "0.875rem",
                  marginBottom: "0.5rem",
                }}
              >
                Performance at Scale
              </p>
              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                  color: "#fff",
                  lineHeight: 1.15,
                }}
              >
                Built for Volume & Reliability
              </h2>
            </div>
            {/* Stat cells */}
            {STATS.map((s) => (
              <NumberTicker
                key={s.label}
                value={s.value}
                label={s.label}
                icon={s.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6. SOLUTIONS — "What our solutions can do for you"
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: theme.colors.bgLight,
          padding: "8rem 0",
          overflow: "hidden",
        }}
      >
        <div className="pp-wrap">
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "4rem" }}
          >
            <span
              className="badge-outline"
              style={{
                marginBottom: "1.25rem",
                borderColor: "rgba(0,0,0,0.1)",
                color: theme.colors.textDark,
              }}
            >
              BUILT FOR YOUR BUSINESS
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 800,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: theme.colors.textDark,
                lineHeight: 1.1,
                maxWidth: "700px",
                margin: "0 auto",
                letterSpacing: "-0.02em",
              }}
            >
              One Platform. <br /> Every Food Business.
            </h2>
            <p
              style={{
                color: theme.colors.textMuted,
                maxWidth: "540px",
                margin: "1.5rem auto 0",
                fontSize: "1.1rem",
                lineHeight: 1.6,
              }}
            >
              Whether you run a 50-table fine dine or a delivery-only cloud
              kitchen, BillBite adapts to your workflow seamlessly.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-3 h-auto lg:h-[560px] w-full max-w-6xl mx-auto fade-up">
            {SOLUTIONS.map((sol) => {
              const isActive = activeSol === sol.id;
              const icons: Record<string, string> = {
                restaurant: "🍷",
                cafe: "☕",
                cloud: "🛵",
              };
              const accents: Record<string, string> = {
                restaurant: "#FF5A1F",
                cafe: "#3B82F6",
                cloud: "#8B5CF6",
              };
              const accent = accents[sol.id] || "#FF5A1F";

              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSol(sol.id)}
                  className={`relative  rounded-[1.75rem] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer
                    ${
                      isActive
                        ? "flex-[1] lg:flex-[1_1_100%] h-[560px] lg:h-auto shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                        : "flex-[1] lg:flex-[0_0_88px] h-[88px] lg:h-auto hover:bg-gray-100"
                    }
                  `}
                  style={{
                    background: isActive ? "#1A1A1A" : "#F5F5F5",
                    border: isActive
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid #E5E7EB",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className={`absolute inset-0 flex lg:flex-col items-center justify-start transition-all duration-500 z-20
                    ${isActive ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"}`}
                    style={{ padding: "2rem 1.25rem" }}
                  >
                    <div className="w-11 h-11 rounded-2xl bg-white shadow-sm border border-black/5 flex items-center justify-center text-lg shrink-0">
                      {icons[sol.id]}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 mt-4">
                      <h3
                        className="font-h font-bold text-gray-400 text-lg tracking-[0.2em] uppercase whitespace-nowrap"
                        style={{
                          writingMode: "vertical-rl",
                          transform: "rotate(180deg)",
                        }}
                      >
                        {sol.label}
                      </h3>
                    </div>
                    <div className="lg:hidden">
                      <h3 className="font-h font-bold text-gray-400 text-lg tracking-[0.15em] uppercase">
                        {sol.label}
                      </h3>
                    </div>
                  </div>

                  <div
                    className={`absolute inset-0 transition-all duration-700 delay-100 flex flex-col lg:flex-row
                    ${isActive ? "opacity-100 translate-y-0 pointer-events-auto z-10" : "opacity-0 translate-y-6 pointer-events-none z-0"}`}
                  >
                    {/* LEFT — Text Content */}
                    <div
                      className="w-full lg:w-[55%] h-[55%] lg:h-full gap-5 flex flex-col justify-center rounded-l-[1.75rem]"
                      style={{ padding: "2.5rem 3.5rem" }}
                    >
                      {/* Category Pill */}
                      <div className="flex items-center gap-2.5 mb-6">
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center text-lg shrink-0"
                          style={{ background: `${accent}20` }}
                        >
                          {icons[sol.id]}
                        </div>
                        <span
                          className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase"
                          style={{ color: accent }}
                        >
                          {sol.label}
                        </span>
                      </div>

                      {/* Headline */}
                      <h3 className="text-2xl sm:text-2xl lg:text-3xl font-extrabold text-white font-h leading-[1.15] tracking-[-0.02em] mb-3">
                        {sol.label}
                      </h3>

                      {/* Sub */}
                      <p className="text-gray-500 text-sm sm:text-[0.95rem] leading-relaxed mb-6 max-w-md">
                        {sol.sub}
                      </p>

                      {/* Feature Points */}
                      <div className="flex flex-col gap-2.5 mb-8">
                        {sol.points.map((pt, idx) => (
                          <div
                            key={pt}
                            className="flex items-center gap-3 group"
                          >
                            <div
                              className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-black shrink-0 transition-transform duration-300 group-hover:scale-110"
                              style={{
                                background: `${accent}18`,
                                color: accent,
                              }}
                            >
                              {String(idx + 1).padStart(2, "0")}
                            </div>
                            <span className="text-gray-600 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* RIGHT — Image */}
                    <div className="w-full h-[45%] lg:h-full relative flex items-center justify-center overflow-hidden">
                      {/* Gradient overlay */}
                      <div
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background: `linear-gradient(135deg, #1A1A1A 0%, transparent 40%, transparent 100%)`,
                        }}
                      />
                      {/* Accent glow */}
                      <div
                        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-[80px] opacity-20 z-0"
                        style={{ background: accent }}
                      />
                      <img
                        src={sol.img}
                        alt={sol.label}
                        className="relative z-[5] w-full h-full object-contain p-6 sm:p-8 lg:p-10 transition-transform duration-1000 hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6A. PRICING TEASER
      ════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: theme.colors.bgDark, padding: "5rem 0" }}
      >
        <div className="pp-wrap">
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "3.5rem" }}
          >
            <span
              className="badge-outline-white"
              style={{
                marginBottom: "1.25rem",
                display: "inline-block",
                color: theme.colors.bgSurface,
                border: `1px solid ${theme.colors.bgSurface}`,
                padding: "0.25rem 0.75rem",
                borderRadius: "100px",
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.05em",
              }}
            >
              SIMPLE PRICING
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                color: "#fff",
                lineHeight: 1.1,
                maxWidth: "600px",
                margin: "1.25rem auto 1rem",
              }}
            >
              Transparent Plans for Every Stage
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                maxWidth: "600px",
                margin: "0 auto 2rem",
                fontSize: "1.1rem",
              }}
            >
              No hidden fees, no surprise charges. Upgrade or downgrade at any
              time as your business grows.
            </p>

            {/* Toggle */}
            <div
              style={{
                display: "inline-flex",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "2rem",
                padding: "0.25rem",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <button
                onClick={() => setBilling("monthly")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "2rem",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  background:
                    billing === "monthly" ? theme.colors.accent : "transparent",
                  color:
                    billing === "monthly" ? "#fff" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setBilling("yearly")}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "2rem",
                  border: "none",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  background:
                    billing === "yearly" ? theme.colors.accent : "transparent",
                  color:
                    billing === "yearly" ? "#fff" : "rgba(255,255,255,0.7)",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                Yearly (Save 20%)
              </button>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {/* Starter */}
            <div
              className="bento-card-dark fade-up"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "2rem",
                borderRadius: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Starter
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Everything you need to run one outlet without spreadsheets.
              </p>
              <div
                style={{
                  margin: "2rem 0",
                  padding: "1.5rem 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "2.5rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                  }}
                >
                  {billing === "yearly" ? "₹999" : "₹1,249"}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 400,
                    }}
                  >
                    /month
                  </span>
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                  GST
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Core Billing & POS
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Offline Support
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Standard Reports
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Email Support
                </li>
              </ul>
              <Link
                href="/#demo-form"
                className="btn-outline-pill"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Growth */}
            <div
              className="bento-card fade-up"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: `2px solid ${theme.colors.accent}`,
                position: "relative",
                padding: "2rem",
                borderRadius: "2rem",
                overflow: "visible",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: theme.colors.accent,
                  color: "#fff",
                  padding: "0.25rem 1rem",
                  borderRadius: "1rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                  whiteSpace: "nowrap",
                  zIndex: 10,
                }}
              >
                MOST POPULAR
              </div>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Growth
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Add outlets, inventory, and aggregator orders without adding
                chaos.
              </p>
              <div
                style={{
                  margin: "2rem 0",
                  padding: "1.5rem 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "2.5rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                  }}
                >
                  {billing === "yearly" ? "₹2,499" : "₹3,124"}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 400,
                    }}
                  >
                    /mo/outlet
                  </span>
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                  GST
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Everything in Starter
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Online Order Sync
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Inventory Management
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Multi-branch Dashboard
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Phone & Chat Support
                </li>
              </ul>
              <Link
                href="/#demo-form"
                className="btn-primary"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                }}
              >
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div
              className="bento-card-dark fade-up"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "2rem",
                borderRadius: "2rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontFamily: theme.fonts.heading,
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                Professional
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  marginTop: "0.5rem",
                  fontSize: "0.9rem",
                }}
              >
                Full visibility into every branch, every platform, every rupee.
              </p>
              <div
                style={{
                  margin: "2rem 0",
                  padding: "1.5rem 0",
                  borderTop: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "2.5rem",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 800,
                  }}
                >
                  {billing === "yearly" ? "₹4,999" : "₹6,249"}
                  <span
                    style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 400,
                    }}
                  >
                    /mo/outlet
                  </span>
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "0.75rem",
                    marginTop: "0.25rem",
                  }}
                >
                  Billed {billing === "yearly" ? "annually" : "monthly"} + 18%
                  GST
                </p>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                  padding: 0,
                }}
              >
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Everything in Growth
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Payout Reconciliation
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Advanced Supplier Mgmt
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Custom Roles & Audit Logs
                </li>
                <li
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      color: theme.colors.accent,
                      fontWeight: "bold",
                      marginRight: "0.5rem",
                      fontSize: "1.1rem",
                    }}
                  >
                    ✓
                  </span>
                  Dedicated Account Manager
                </li>
              </ul>
              <Link
                href="/#demo-form"
                className="btn-outline-pill"
                style={{
                  display: "block",
                  textAlign: "center",
                  color: "#fff",
                  borderColor: "rgba(255,255,255,0.2)",
                }}
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          6B. FAQ
      ════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: theme.colors.bgLight, padding: "5rem 0" }}
      >
        <div className="pp-wrap" style={{ maxWidth: "800px" }}>
          <div
            className="fade-up"
            style={{ textAlign: "center", marginBottom: "3rem" }}
          >
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
                color: theme.colors.textDark,
                lineHeight: 1.1,
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="fade-up"
                style={{
                  background: "#fff",
                  borderRadius: "0.75rem",
                  border: "1px solid #E5E7EB",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: "100%",
                    padding: "1.5rem",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  <span
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 600,
                      fontSize: "1.1rem",
                      color: theme.colors.textDark,
                    }}
                  >
                    {faq.q}
                  </span>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      color: theme.colors.primary,
                      transform: activeFaq === idx ? "rotate(180deg)" : "none",
                      transition: "transform 0.3s",
                    }}
                  >
                    ↓
                  </span>
                </button>
                <div
                  style={{
                    maxHeight: activeFaq === idx ? "500px" : "0",
                    opacity: activeFaq === idx ? 1 : 0,
                    transition: "all 0.3s ease-in-out",
                    padding: activeFaq === idx ? "0 1.5rem 1.5rem" : "0 1.5rem",
                  }}
                >
                  <p style={{ color: theme.colors.textMuted, lineHeight: 1.6 }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          7. TESTIMONIALS — "Hear from our clients"
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: theme.colors.bgLight,
          padding: "5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="pp-wrap">
          <div
            style={{ textAlign: "center", marginBottom: "4rem" }}
            className="fade-up"
          >
            <span className="badge-outline" style={{ marginBottom: "1.25rem" }}>
              SUCCESS STORIES
            </span>
            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 700,
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: theme.colors.textDark,
                lineHeight: 1.1,
              }}
            >
              Loved by restaurants.
              <br />
              <span style={{ color: theme.colors.accent }}>
                Trusted by founders.
              </span>
            </h2>
          </div>

          <div className="fade-up grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Card 1 - Span 8 */}
            <div
              className="md:col-span-8 bento-card-dark"
              style={{
                background: theme.colors.bgDark,
                padding: "3rem",
                borderRadius: "2rem",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    color: theme.colors.accent,
                    marginBottom: "1.5rem",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    lineHeight: 1.5,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{TESTIS[0].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  {TESTIS[0].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    {TESTIS[0].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {TESTIS[0].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Span 4 */}
            <div
              className="md:col-span-4 bento-card"
              style={{
                background: theme.colors.accent,
                padding: "3rem",
                borderRadius: "2rem",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: "none",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.6,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{TESTIS[1].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.2)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {TESTIS[1].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#fff",
                    }}
                  >
                    {TESTIS[1].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {TESTIS[1].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 - Span 4 */}
            <div
              className="md:col-span-4 bento-card"
              style={{
                background: theme.colors.bgSurface,
                padding: "3rem",
                borderRadius: "2rem",
                color: theme.colors.textDark,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                border: `1px solid ${theme.colors.border}`,
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <h3
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.6,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{TESTIS[3].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                <div
                  style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    background: "rgba(23, 23, 23, 0.05)",
                    color: theme.colors.textDark,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1rem",
                  }}
                >
                  {TESTIS[3].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: theme.colors.textDark,
                    }}
                  >
                    {TESTIS[3].name}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(0,0,0,0.5)" }}>
                    {TESTIS[3].role}
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4 - Span 8 */}
            <div
              className="md:col-span-8 bento-card-dark"
              style={{
                background: theme.colors.bgDark,
                padding: "3rem",
                borderRadius: "2rem",
                color: "#fff",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                className="glow-bg"
                style={{ top: "-300px", right: "-300px", opacity: 0.5 }}
              ></div>
              <div
                style={{
                  marginBottom: "2rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "0.25rem",
                    color: theme.colors.accent,
                    marginBottom: "1.5rem",
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
                    lineHeight: 1.5,
                    fontFamily: theme.fonts.heading,
                    fontWeight: 500,
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{TESTIS[2].quote}&rdquo;
                </h3>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    background: theme.colors.accent,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: theme.fonts.heading,
                    fontWeight: 700,
                    fontSize: "1.25rem",
                  }}
                >
                  {TESTIS[2].avatar}
                </div>
                <div>
                  <p
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#fff",
                    }}
                  >
                    {TESTIS[2].name}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {TESTIS[2].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          8. DEMO FORM — "Book a Free Demo" (Petpooja exact style)
      ════════════════════════════════════════════════════ */}
      <section
        id="demo-form"
        style={{
          backgroundColor: theme.colors.bgDark,
          padding: "6rem 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="glow-bg"
          style={{ top: "-200px", left: "-200px", opacity: 0.4 }}
        ></div>
        <div
          className="glow-bg"
          style={{ bottom: "-300px", right: "-200px", opacity: 0.2 }}
        ></div>

        <div className="pp-wrap relative z-10">
          <div
            className="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "4rem",
              alignItems: "center",
            }}
          >
            {/* Left: heading & benefits */}
            <div>
              <span
                className="badge-outline-white"
                style={{ marginBottom: "1.25rem" }}
              >
                GET STARTED
              </span>
              <h2
                style={{
                  fontFamily: theme.fonts.heading,
                  fontWeight: 800,
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  color: "#fff",
                  lineHeight: 1.1,
                  marginBottom: "1.5rem",
                }}
              >
                Ready to scale your restaurant?
              </h2>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.1rem",
                  lineHeight: 1.6,
                  marginBottom: "3rem",
                  maxWidth: "450px",
                }}
              >
                Book a personalized 15-minute product tour. See exactly how
                BillBite can streamline your billing, inventory, and online
                orders.
              </p>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  padding: 0,
                }}
              >
                {[
                  "Free complete system audit",
                  "Customized pricing tailored to you",
                  "Zero commitment required",
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      color: "#fff",
                      fontSize: "1.05rem",
                      fontWeight: 500,
                    }}
                  >
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        background: "rgba(255, 90, 31, 0.2)",
                        color: theme.colors.accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: form */}
            <div
              style={{
                background: theme.colors.bgSurface,
                padding: "clamp(2rem, 4vw, 3rem)",
                borderRadius: "2rem",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {formSent ? (
                <div style={{ textAlign: "center", padding: "3rem 0" }}>
                  <div
                    style={{
                      width: "6rem",
                      height: "6rem",
                      borderRadius: "50%",
                      background: "#D1FAE5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.5rem",
                    }}
                  >
                    <span style={{ color: "#059669", fontSize: "2.5rem" }}>
                      ✓
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1.75rem",
                      color: theme.colors.textDark,
                      marginBottom: "0.5rem",
                    }}
                  >
                    You're booked!
                  </h3>
                  <p
                    style={{
                      color: theme.colors.textMuted,
                      fontSize: "1.05rem",
                    }}
                  >
                    Our product experts will contact you within 2 business
                    hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.25rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: theme.fonts.heading,
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: theme.colors.textDark,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Claim your free demo
                  </h3>

                  {/* Row 1: Name + Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(140px, 1fr))",
                      gap: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        Name*
                      </label>
                      <input
                        type="text"
                        required
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "0.75rem",
                          border: `1px solid ${theme.colors.border}`,
                          background: theme.colors.bgLight,
                          fontSize: "0.95rem",
                          outlineColor: theme.colors.accent,
                        }}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        Email*
                      </label>
                      <input
                        type="email"
                        required
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "0.75rem",
                          border: `1px solid ${theme.colors.border}`,
                          background: theme.colors.bgLight,
                          fontSize: "0.95rem",
                          outlineColor: theme.colors.accent,
                        }}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Row 2: Phone */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.5rem",
                    }}
                  >
                    <label
                      style={{
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        color: theme.colors.textDark,
                      }}
                    >
                      Phone number*
                    </label>
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      <select
                        style={{
                          padding: "0.875rem 0.5rem",
                          borderRadius: "0.75rem",
                          border: `1px solid ${theme.colors.border}`,
                          background: theme.colors.bgLight,
                          fontSize: "0.95rem",
                          outlineColor: theme.colors.accent,
                          width: "110px",
                          flexShrink: 0,
                        }}
                      >
                        <option>IN (+91)</option>
                        <option>UAE (+971)</option>
                        <option>US (+1)</option>
                      </select>
                      <input
                        type="tel"
                        required
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "0.75rem",
                          border: `1px solid ${theme.colors.border}`,
                          background: theme.colors.bgLight,
                          fontSize: "0.95rem",
                          outlineColor: theme.colors.accent,
                          flex: 1,
                        }}
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* Row 3: City + Business */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(140px, 1fr))",
                      gap: "1.25rem",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        City*
                      </label>
                      <input
                        type="text"
                        required
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "0.75rem",
                          border: `1px solid ${theme.colors.border}`,
                          background: theme.colors.bgLight,
                          fontSize: "0.95rem",
                          outlineColor: theme.colors.accent,
                        }}
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.5rem",
                      }}
                    >
                      <label
                        style={{
                          fontSize: "0.85rem",
                          fontWeight: 600,
                          color: theme.colors.textDark,
                        }}
                      >
                        Business Name*
                      </label>
                      <input
                        type="text"
                        required
                        style={{
                          padding: "0.875rem 1rem",
                          borderRadius: "0.75rem",
                          border: `1px solid ${theme.colors.border}`,
                          background: theme.colors.bgLight,
                          fontSize: "0.95rem",
                          outlineColor: theme.colors.accent,
                        }}
                        value={formData.business}
                        onChange={(e) =>
                          setFormData({ ...formData, business: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary"
                    style={{
                      marginTop: "1rem",
                      padding: "1rem",
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      opacity: isSubmitting ? 0.7 : 1,
                      width: "100%",
                    }}
                  >
                    {isSubmitting
                      ? "Submitting Request..."
                      : "Book My Free Demo"}
                  </button>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#9CA3AF",
                      textAlign: "center",
                      marginTop: "0.5rem",
                    }}
                  >
                    By submitting this form, you agree to receive updates from
                    BillBite and accept our{" "}
                    <Link
                      href="/privacy"
                      style={{
                        color: theme.colors.textDark,
                        textDecoration: "underline",
                      }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        style={{
          position: "fixed",
          bottom: "2rem",
          right: "2rem",
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "50%",
          backgroundColor: "#FF5A1F",
          color: "#fff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 10px 25px rgba(255, 90, 31, 0.4)",
          opacity: showTop ? 1 : 0,
          visibility: showTop ? "visible" : "hidden",
          transform: showTop ? "translateY(0) scale(1)" : "translateY(20px) scale(0.9)",
          transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
          zIndex: 999,
        }}
        onMouseEnter={(e) => {
          if (showTop) e.currentTarget.style.transform = "translateY(-5px) scale(1.05)";
        }}
        onMouseLeave={(e) => {
          if (showTop) e.currentTarget.style.transform = "translateY(0) scale(1)";
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          [style*="grid-template-columns: repeat(12, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-column: span 7"],
          [style*="grid-column: span 5"],
          [style*="grid-column: span 4"],
          [style*="grid-column: span 8"] {
            grid-column: span 1 !important;
          }
          [style*="grid-template-columns: 1fr 1.6fr"] {
            grid-template-columns: 1fr !important;
          }
          [style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          .bento-card [style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
