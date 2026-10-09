"use client";

import React, { useRef } from "react";
import {
  Utensils,
  Coffee,
  Store,
  Layers,
  Clock,
  Split,
  Zap,
  Receipt,
  ShieldCheck,
  Flame,
  Sparkles,
  LayoutGrid,
  Send,
  CreditCard,
  Tag,
  Boxes,
  TrendingUp,
  CheckCheck,
} from "lucide-react";
import { theme } from "@/config/theme";
import { SOLUTIONS } from "@/constants/home";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Variant = "accent" | "dark" | "light";

interface Point {
  icon: React.ReactNode;
  title: string;
  text: string;
}

interface Stage {
  variant: Variant;
  icon: React.ReactNode;
  name: string;
  headline: string;
  headlineHighlight: string;
  desc: string;
  metricLabel: string;
  metricValue: string;
  highlights: Point[]; // left side
  workflow: (Point & { badge: string })[]; // right side
}

const STAGES: Stage[] = [
  {
    variant: "accent",
    icon: <Utensils size={18} />,
    name: "Restaurant",
    headline: "Turn tables faster with",
    headlineHighlight: "frictionless operations.",
    desc: "Table layout, kitchen tickets and split bills in one place.",
    metricLabel: "Table turnaround",
    metricValue: "+35% faster",
    highlights: [
      {
        icon: <Layers size={18} />,
        title: "Visual seating",
        text: "Live floor occupancy",
      },
      {
        icon: <Clock size={18} />,
        title: "Instant KOT",
        text: "No lost kitchen slips",
      },
      {
        icon: <Split size={18} />,
        title: "Split bills",
        text: "By item, seat or tender",
      },
    ],
    workflow: [
      {
        icon: <LayoutGrid size={18} />,
        title: "Table seating",
        text: "Floor map with live timers",
        badge: "Floor map",
      },
      {
        icon: <Send size={18} />,
        title: "Kitchen KOT",
        text: "Fire courses to each station",
        badge: "Routing",
      },
      {
        icon: <Split size={18} />,
        title: "Bill splitting",
        text: "By seat, item or percentage",
        badge: "3-way",
      },
      {
        icon: <CreditCard size={18} />,
        title: "Multi-tender pay",
        text: "UPI, card, cash and voucher",
        badge: "Multi-pay",
      },
    ],
  },
  {
    variant: "dark",
    icon: <Coffee size={18} />,
    name: "Café & QSR",
    headline: "Built for the counter rush,",
    headlineHighlight: "zero lag.",
    desc: "Clear long lines fast, print GST receipts, and stock automatically.",
    metricLabel: "Invoice time",
    metricValue: "under 2s",
    highlights: [
      {
        icon: <Zap size={18} />,
        title: "Fast billing",
        text: "Touch keypad, 1.2s bills",
      },
      {
        icon: <Receipt size={18} />,
        title: "GST invoices",
        text: "Instant thermal print",
      },
      {
        icon: <ShieldCheck size={18} />,
        title: "Live stock",
        text: "Recipe-level deduction",
      },
    ],
    workflow: [
      {
        icon: <Zap size={18} />,
        title: "One-tap billing",
        text: "Category shortcuts for peak hours",
        badge: "1.2s",
      },
      {
        icon: <Receipt size={18} />,
        title: "GST invoicing",
        text: "Auto tax and fast receipt print",
        badge: "Auto tax",
      },
      {
        icon: <Tag size={18} />,
        title: "Discounts",
        text: "Manager overrides, promos, combos",
        badge: "Promos",
      },
      {
        icon: <Boxes size={18} />,
        title: "Recipe stock",
        text: "Ingredients deduct on every sale",
        badge: "Auto stock",
      },
    ],
  },
  {
    variant: "light",
    icon: <Store size={18} />,
    name: "Cloud Kitchen",
    headline: "One screen for every order,",
    headlineHighlight: "every brand.",
    desc: "Merge all apps into one kitchen display with live cost tracking.",
    metricLabel: "Order sync",
    metricValue: "zero drops",
    highlights: [
      {
        icon: <Store size={18} />,
        title: "One queue",
        text: "Swiggy and Zomato synced",
      },
      {
        icon: <Flame size={18} />,
        title: "Cost per dish",
        text: "Live margin check",
      },
      {
        icon: <Sparkles size={18} />,
        title: "Payout audit",
        text: "Commission checks",
      },
    ],
    workflow: [
      {
        icon: <Store size={18} />,
        title: "Unified feed",
        text: "All aggregators on one KDS",
        badge: "1 queue",
      },
      {
        icon: <Boxes size={18} />,
        title: "Shared stock",
        text: "Ingredients tracked across brands",
        badge: "Multi-brand",
      },
      {
        icon: <TrendingUp size={18} />,
        title: "Dish margins",
        text: "Ingredient cost vs selling price",
        badge: "Live",
      },
      {
        icon: <CheckCheck size={18} />,
        title: "Payout audits",
        text: "Match settlements to orders",
        badge: "Reconciled",
      },
    ],
  },
];

function palette(v: Variant) {
  const t = theme.colors;
  if (v === "accent") {
    // Stage 1: charcoal
    return {
      bg: t.bgDark,
      title: t.textLight,
      body: t.whiteAlpha.a70,
      highlight: t.accent,
      icon: t.accent,
      line: t.borderLight,
      iconBg: t.accentLight,
      panel: t.whiteAlpha.a04,
    };
  }
  if (v === "dark") {
    // Stage 2: slate
    return {
      bg: t.secondary,
      title: t.textLight,
      body: t.whiteAlpha.a80,
      highlight: "#FFC4AD",
      icon: "#FFC4AD",
      line: t.whiteAlpha.a20,
      iconBg: t.blackAlpha.a15,
      panel: t.blackAlpha.a15,
    };
  }
  // Stage 3: off-white
  return {
    bg: t.bgLight,
    title: t.textDark,
    body: t.textMuted,
    highlight: "#C23A00",
    icon: "#C23A00",
    line: t.border,
    iconBg: t.accentLight,
    panel: t.bgSurface,
  };
}

export default function Solutions() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const clip1 = useTransform(
    scrollYProgress,
    [0, 0.45],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const clip2 = useTransform(
    scrollYProgress,
    [0.5, 0.95],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
  );
  const bar1 = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const bar2 = useTransform(scrollYProgress, [0.5, 0.95], [0, 1]);

  const clips = [undefined, clip1, clip2];

  return (
    <section
      ref={ref}
      aria-label="Solutions"
      style={{
        position: "relative",
        height: "300vh",
        background: theme.colors.bgDark,
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100svh",
          overflow: "hidden",
        }}
      >
        {STAGES.map((stage, i) => (
          <motion.div
            key={stage.name}
            style={{
              position: "absolute",
              inset: 0,
              background: palette(stage.variant).bg,
              clipPath: clips[i],
              zIndex: i * 10,
            }}
          >
            <Panel
              stage={stage}
              label={SOLUTIONS[i]?.label ?? stage.name}
              bars={[bar1, bar2]}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Panel({
  stage,
  label,
  bars,
}: {
  stage: Stage;
  label: string;
  bars: MotionValue<number>[];
}) {
  const c = palette(stage.variant);

  return (
    <div style={{ position: "relative", height: "100%", width: "100%" }}>
      <div
        className="pp-wrap"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          paddingTop: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            columnGap: "4rem",
            rowGap: "3rem",
            width: "100%",
            alignItems: "center",
          }}
        >
          {/* LEFT: story */}
          <div
            className="col-span-12 lg:col-span-6"
            style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                color: c.icon,
              }}
            >
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: c.iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {stage.icon}
              </span>
              <span
                style={{
                  color: c.highlight,
                  fontWeight: 600,
                  fontSize: "0.95rem",
                }}
              >
                {stage.name}
              </span>
            </div>

            <h2
              style={{
                fontFamily: theme.fonts.heading,
                fontWeight: 800,
                fontSize: "clamp(2.1rem, 3.6vw, 3.2rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.025em",
                margin: 0,
              }}
            >
              <span style={{ color: c.title }}>{stage.headline} </span>
              <span style={{ color: c.highlight }}>
                {stage.headlineHighlight}
              </span>
            </h2>

            <p
              style={{
                color: c.body,
                fontSize: "1.05rem",
                lineHeight: 1.6,
                maxWidth: 480,
                margin: 0,
              }}
            >
              {stage.desc}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  color: c.highlight,
                  fontSize: "1.6rem",
                  fontWeight: 800,
                }}
              >
                {stage.metricValue}
              </span>
              <span style={{ color: c.body, fontSize: "0.9rem" }}>
                {stage.metricLabel}
              </span>
            </div>

            {/* highlights: plain rows, no boxes */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
                marginTop: "0.5rem",
              }}
            >
              {stage.highlights.map((h) => (
                <div
                  key={h.title}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <span style={{ color: c.icon, display: "flex" }}>
                    {h.icon}
                  </span>
                  <span
                    style={{
                      color: c.title,
                      fontWeight: 700,
                      fontSize: "1rem",
                    }}
                  >
                    {h.title}
                  </span>
                  <span style={{ color: c.body, fontSize: "0.9rem" }}>
                    {h.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: workflow list */}
          <div className="col-span-12 lg:col-span-6">
            <div
              style={{
                background: c.panel,
                border: `1px solid ${c.line}`,
                borderRadius: 24,
                padding: "2.25rem 2.5rem",
              }}
            >
              <div
                style={{
                  color: c.title,
                  fontWeight: 700,
                  fontSize: "1.15rem",
                  fontFamily: theme.fonts.heading,
                }}
              >
                {label}
              </div>
              <div
                style={{
                  color: c.body,
                  fontSize: "0.85rem",
                  marginTop: "0.25rem",
                }}
              >
                How it works
              </div>

              <div style={{ marginTop: "1.75rem" }}>
                {stage.workflow.map((w, i) => (
                  <div
                    key={w.title}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.25rem",
                      padding: "1.25rem 0",
                      borderTop: i === 0 ? "none" : `1px solid ${c.line}`,
                    }}
                  >
                    <span
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: c.iconBg,
                        color: c.icon,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {w.icon}
                    </span>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          color: c.title,
                          fontWeight: 700,
                          fontSize: "1rem",
                        }}
                      >
                        {w.title}
                      </div>
                      <div
                        style={{
                          color: c.body,
                          fontSize: "0.85rem",
                          marginTop: "0.2rem",
                          lineHeight: 1.4,
                        }}
                      >
                        {w.text}
                      </div>
                    </div>

                    <span
                      style={{
                        color: c.highlight,
                        fontWeight: 700,
                        fontSize: "0.85rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {w.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress footer: colors follow each stage, so it is always readable */}
      <div
        className="pp-wrap"
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        {STAGES.map((s, i) => (
          <React.Fragment key={s.name}>
            <span
              style={{
                color: s.name === stage.name ? c.title : c.body,
                fontSize: "0.85rem",
                fontWeight: s.name === stage.name ? 700 : 500,
                whiteSpace: "nowrap",
              }}
            >
              {SOLUTIONS[i]?.label ?? s.name}
            </span>
            {i < STAGES.length - 1 && (
              <div
                style={{
                  flex: 1,
                  height: 2,
                  background: c.line,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  style={{
                    scaleX: bars[i],
                    position: "absolute",
                    inset: 0,
                    transformOrigin: "left",
                    background: c.icon,
                  }}
                />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
