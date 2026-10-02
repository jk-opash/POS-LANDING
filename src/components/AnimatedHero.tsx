"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const PRODUCTS = [
  {
    id: "pos",
    title: "Billing & POS",
    desc: "Manage dine-in, takeaway, and delivery from one screen. Split bills, multiple payment methods, and GST-compliant auto-generated invoices.",
    btn: "Explore Billing",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
  {
    id: "inventory",
    title: "Inventory",
    desc: "Real-time stock tracking, reorder alerts, recipe-linked auto-deductions, and a complete movement ledger.",
    btn: "Track Stock",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider2.png?fm=auto&w=900&q=85",
  },
  {
    id: "online",
    title: "Online Orders",
    desc: "Accept and reject Zomato & Swiggy orders directly in your POS. Built-in reconciliation tracks gross vs net payouts.",
    btn: "Sync Aggregators",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider3.png?fm=auto&w=900&q=85",
  },
  {
    id: "reports",
    title: "Live Reports",
    desc: "Live dashboards for sales, inventory, and staff performance. Multi-branch analytics let you compare outlet performance instantly.",
    btn: "View Analytics",
    img: "https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85",
  },
];

export default function AnimatedHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Stage 1 (0 to 0.3): Initial Hero text fades out and slides up
  const text1Opacity = useTransform(smoothProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.15, 0.25], [0, 0, -50]);

  // Dashboard image shrinks and slides down
  const dashboardScale = useTransform(smoothProgress, [0, 0.4], [1, 0.8]);
  const dashboardY = useTransform(
    smoothProgress,
    [0, 0.2, 0.4, 0.6],
    [0, 50, 200, 800],
  );

  // Stage 2 (0.3 to 0.6): Second Hero text fades in
  const text2Opacity = useTransform(
    smoothProgress,
    [0.3, 0.4, 0.9, 1],
    [0, 1, 1, 1],
  );
  const text2Y = useTransform(smoothProgress, [0.3, 0.4], [50, 0]);

  // Stage 3 (0.5 to 0.8): White panel slides up from bottom
  const panelY = useTransform(smoothProgress, [0.5, 0.75], ["100%", "0%"]);

  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <div ref={containerRef} style={{ height: "400vh", position: "relative" }}>
      {/* Sticky container offset by Header height (64px) */}
      <div
        style={{
          position: "sticky",
          top: "64px",
          height: "calc(100vh - 64px)",
          overflow: "hidden",
          padding: "1rem",
        }}
      >
        {/* Main Background Container */}
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "2rem",
            overflow: "hidden",
            position: "relative",
            backgroundColor: "#e2e8f0", // Fallback color
          }}
        >
          {/* Static Background Image */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/hero_pos_bg.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "bottom center",
            }}
          />

          {/* Text Stage 1 */}
          <motion.div
            style={{
              position: "absolute",
              top: "10%",
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: text1Opacity,
              y: text1Y,
              zIndex: 10,
              padding: "0 1rem",
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.1,
                color: "#171717",
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: 500,
                textShadow: "0 4px 20px rgba(255,255,255,0.5)",
              }}
            >
              Run Every Outlet Like You're Standing in All of Them.
            </h1>
          </motion.div>

          {/* Text Stage 2 */}
          <motion.div
            style={{
              position: "absolute",
              top: "12%",
              left: 0,
              right: 0,
              textAlign: "center",
              opacity: text2Opacity,
              y: text2Y,
              zIndex: 10,
              padding: "0 1rem",
            }}
          >
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                lineHeight: 1.1,
                color: "#171717",
                maxWidth: "900px",
                margin: "0 auto",
                fontWeight: 500,
                textShadow: "0 4px 20px rgba(255,255,255,0.5)",
              }}
            >
              Multi-branch POS, GST-ready billing, and complete stock audit.
            </h1>
          </motion.div>

          {/* Dashboard Mockup Image */}
          <motion.div
            style={{
              position: "absolute",
              bottom: "-5%",
              left: "50%",
              width: "800px",
              height: "auto",
              marginLeft: "-400px",
              background: "#171717",
              borderRadius: "1.5rem",
              boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
              padding: "0.5rem",
              zIndex: 5,
              overflow: "hidden",
              scale: dashboardScale,
              y: dashboardY,
            }}
          >
            <img
              src="https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?fm=auto&w=900&q=85"
              alt="BillBite Dashboard"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "1rem",
              }}
            />
          </motion.div>

          {/* Sliding White Panel (Split Layout) */}
          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "65%",
              background: "#fff",
              zIndex: 20,
              y: panelY,
              borderTopLeftRadius: "2rem",
              borderTopRightRadius: "2rem",
              boxShadow: "0 -20px 40px rgba(0,0,0,0.05)",
              display: "flex",
              padding: "3rem",
            }}
          >
            {/* Split Content Area */}
            <div style={{ flex: 1, display: "flex", gap: "4rem" }}>
              {/* Left Side: Tabs & Content */}
              <div
                style={{ flex: 1, display: "flex", flexDirection: "column" }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    borderBottom: "1px solid rgba(0,0,0,0.1)",
                    paddingBottom: "1rem",
                    marginBottom: "3rem",
                  }}
                >
                  {PRODUCTS.map((tab, i) => (
                    <div
                      key={i}
                      onClick={() => setActiveTab(i)}
                      style={{
                        cursor: "pointer",
                        position: "relative",
                        color: activeTab === i ? "#171717" : "#888",
                        transition: "color 0.3s",
                      }}
                    >
                      <div
                        style={{
                          fontWeight: 600,
                          fontSize: "1rem",
                          marginBottom: "0.25rem",
                        }}
                      >
                        {tab.title}
                      </div>
                      {activeTab === i && (
                        <motion.div
                          layoutId="activeTab"
                          style={{
                            position: "absolute",
                            bottom: "-1rem",
                            left: 0,
                            right: 0,
                            height: "2px",
                            background: "#FF5A1F",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div style={{ flex: 1, position: "relative" }}>
                  <motion.h2
                    key={activeTab + "-h2"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: 400,
                      fontFamily: "'Playfair Display', serif",
                      marginBottom: "1rem",
                    }}
                  >
                    {PRODUCTS[activeTab].title}
                  </motion.h2>
                  <motion.p
                    key={activeTab + "-p"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                      fontSize: "1.05rem",
                      color: "#666",
                      lineHeight: 1.6,
                      maxWidth: "450px",
                      marginBottom: "2.5rem",
                    }}
                  >
                    {PRODUCTS[activeTab].desc}
                  </motion.p>
                  <motion.button
                    key={activeTab + "-btn"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                      background: "#FF5A1F",
                      color: "#fff",
                      padding: "1rem 2.5rem",
                      borderRadius: "100px",
                      fontWeight: 600,
                      border: "none",
                      cursor: "pointer",
                      boxShadow: "0 10px 25px rgba(255,90,31,0.3)",
                    }}
                  >
                    {PRODUCTS[activeTab].btn}
                  </motion.button>
                </div>
              </div>

              {/* Right Side: Visual Context */}
              <div
                style={{
                  flex: 1,
                  position: "relative",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  background: "#F9FAFB",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: "url(/feature_cafe_bg.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Floating UI specific to tab (Using real images) */}
                <motion.div
                  key={activeTab + "-img"}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "85%",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
                    border: "4px solid rgba(255,255,255,0.5)",
                    background: "#fff",
                  }}
                >
                  <img
                    src={PRODUCTS[activeTab].img}
                    alt={PRODUCTS[activeTab].title}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
