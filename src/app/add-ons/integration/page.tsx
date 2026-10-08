"use client";

import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  CloudLightning,
  Fingerprint,
  Globe,
  Zap,
} from "lucide-react";
import { theme } from "@/config/theme";

type AppNode = {
  id: string;
  name: string;
  initial: string;
  color: string;
  radius: number;
  duration: number;
  delay: number;
};

const APP_NODES: AppNode[] = [
  {
    id: "z",
    name: "Zomato",
    initial: "Z",
    color: "#E23744",
    radius: 130,
    duration: 20,
    delay: 0,
  },
  {
    id: "s",
    name: "Swiggy",
    initial: "S",
    color: "#FC8019",
    radius: 130,
    duration: 20,
    delay: -10,
  },
  {
    id: "qb",
    name: "QuickBooks",
    initial: "QB",
    color: "#2CA01C",
    radius: 210,
    duration: 30,
    delay: 0,
  },
  {
    id: "t",
    name: "Tally",
    initial: "T",
    color: "#0063A7",
    radius: 210,
    duration: 30,
    delay: -15,
  },
  {
    id: "r",
    name: "Razorpay",
    initial: "R",
    color: "#0B72E7",
    radius: 290,
    duration: 40,
    delay: 0,
  },
  {
    id: "m",
    name: "Mailchimp",
    initial: "M",
    color: "#FFE01B",
    radius: 290,
    duration: 40,
    delay: -20,
  },
];

const FEATURES = [
  {
    title: "Zero-Latency Sync",
    desc: "Orders and inventory updates are pushed in milliseconds via optimized WebSockets.",
    icon: CloudLightning,
  },
  {
    title: "Bank-Grade Encryption",
    desc: "Every data packet is secured with AES-256 encryption during transmission.",
    icon: Fingerprint,
  },
  {
    title: "Universal Mapping",
    desc: "Intelligent auto-mapping of menus, taxes, and accounting ledgers.",
    icon: Globe,
  },
];

export default function IntegrationPage() {
  const [showTop, setShowTop] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);

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

  /* back-to-top */
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgDark,
        padding: "10rem 0 8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Dynamic Background Glows */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vw",
          height: "80vw",
          background: `radial-gradient(circle, ${theme.colors.accent}15 0%, transparent 60%)`,
          borderRadius: "50%",
          filter: "blur(140px)",
          pointerEvents: "none",
        }}
      />

      <div className="pp-wrap relative z-10">
        {/* Top Hero Section */}
        <div
          className="fade-up"
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <span
            style={{
              marginBottom: "1.5rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              color: theme.colors.accent,
              background: `${theme.colors.accent}15`,
              border: `1px solid ${theme.colors.accent}30`,
              padding: "0.5rem 1rem",
              borderRadius: "100px",
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: theme.colors.accent,
                display: "inline-block",
                boxShadow: `0 0 10px ${theme.colors.accent}`,
              }}
            />
            The BillBite Ecosystem
          </span>

          <h1
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 700,
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: theme.colors.textLight,
              lineHeight: 1.1,
              maxWidth: "800px",
              margin: "0 0 1.5rem 0",
              letterSpacing: "-0.02em",
            }}
          >
            Connect everything.
            <br />
            <span
              style={{
                background: `linear-gradient(135deg, ${theme.colors.textLight} 0%, ${theme.colors.accent} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Miss nothing.
            </span>
          </h1>
          <p
            style={{
              color: theme.colors.textMuted,
              maxWidth: "600px",
              fontSize: "1.125rem",
              lineHeight: 1.6,
            }}
          >
            A central nervous system for your restaurant. Unify delivery,
            accounting, and payments into a single, flawless interface.
          </p>
        </div>

        {/* Interactive Planetary Orbital Visualization */}
        <div
          className="fade-up"
          style={{
            position: "relative",
            width: "100%",
            height: "650px",
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
            borderTop: "1px solid rgba(255,255,255,0.05)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            marginBottom: "8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {/* Orbital Rings */}
          {[130, 210, 290].map((radius, i) => (
            <div
              key={`ring-${i}`}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
                borderRadius: "50%",
                border: `1px dashed rgba(255,255,255,0.08)`,
                pointerEvents: "none",
                zIndex: 1,
              }}
            />
          ))}

          {/* Central BillBite Core */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${theme.colors.bgDark} 0%, rgba(20,20,20,1) 100%)`,
              border: `2px solid ${theme.colors.accent}50`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 60px ${theme.colors.accent}20`,
              zIndex: 10,
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "-2px",
                borderRadius: "50%",
                border: `1px solid ${theme.colors.accent}`,
                borderTopColor: "transparent",
                borderBottomColor: "transparent",
                animation: "spinOrbit 8s linear infinite",
              }}
            />
            <Zap size={40} color={theme.colors.textLight} />
          </div>

          {/* Orbiting App Nodes */}
          {APP_NODES.map((node) => (
            <div
              key={node.id}
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 0,
                height: 0,
                animation: `spinOrbit ${node.duration}s linear infinite`,
                animationDelay: `${node.delay}s`,
                animationPlayState: activeNode ? "paused" : "running",
                zIndex: activeNode === node.id ? 20 : 5,
              }}
            >
              {/* Data Flow Line pointing back to center */}
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: 0,
                  width: `${node.radius}px`,
                  height: "2px",
                  background: `linear-gradient(90deg, transparent, ${node.color})`,
                  opacity: activeNode === node.id ? 1 : 0,
                  transition: "opacity 0.4s ease",
                  transformOrigin: "left center",
                  pointerEvents: "none",
                }}
              >
                {/* Moving data packet */}
                <div
                  style={{
                    position: "absolute",
                    top: "-2px",
                    left: 0,
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#fff",
                    boxShadow: `0 0 15px ${node.color}, 0 0 30px ${node.color}`,
                    animation:
                      activeNode === node.id
                        ? `shootData 1.5s ease-in-out infinite`
                        : "none",
                  }}
                />
              </div>

              {/* Node Placed at Radius */}
              <div
                style={{
                  position: "absolute",
                  left: `${node.radius}px`,
                  top: 0,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Counter-rotate to stay upright */}
                <div
                  onMouseEnter={() => setActiveNode(node.id)}
                  onMouseLeave={() => setActiveNode(null)}
                  style={{
                    animation: `spinOrbitReverse ${node.duration}s linear infinite`,
                    animationDelay: `${node.delay}s`,
                    animationPlayState: activeNode ? "paused" : "running",
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(25,25,25,0.95)",
                    border: "1px solid",
                    borderColor:
                      activeNode === node.id
                        ? node.color
                        : "rgba(255,255,255,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: "1.1rem",
                    fontFamily: theme.fonts.heading,
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    boxShadow:
                      activeNode === node.id
                        ? `0 0 40px ${node.color}60`
                        : "0 10px 20px rgba(0,0,0,0.5)",
                    transform:
                      activeNode === node.id ? "scale(1.2)" : "scale(1)",
                    position: "relative",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <span
                    style={{
                      color:
                        activeNode === node.id
                          ? node.color
                          : theme.colors.textLight,
                      transition: "color 0.3s ease",
                    }}
                  >
                    {node.initial}
                  </span>

                  {/* Tooltip */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-40px",
                      background: "rgba(0,0,0,0.8)",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "100px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#fff",
                      whiteSpace: "nowrap",
                      opacity: activeNode === node.id ? 1 : 0,
                      transform:
                        activeNode === node.id
                          ? "translateY(0)"
                          : "translateY(-10px)",
                      transition: "all 0.3s ease",
                      pointerEvents: "none",
                      border: `1px solid ${node.color}50`,
                    }}
                  >
                    {node.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bento Grid Architecture */}
        <div className="fade-up" style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontSize: "clamp(2rem, 4vw, 2.5rem)",
              fontWeight: 800,
              color: theme.colors.textLight,
              textAlign: "center",
              marginBottom: "3rem",
            }}
          >
            Built for scale. Designed for speed.
          </h2>
        </div>

        <div
          className="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "8rem",
          }}
        >
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                style={{
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "24px",
                  padding: "3rem 2rem",
                  position: "relative",
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    opacity: 0.05,
                    transform: "translate(20%, -20%)",
                  }}
                >
                  <Icon size={120} />
                </div>
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.1)",
                    marginBottom: "2rem",
                  }}
                >
                  <Icon size={24} color={theme.colors.accent} />
                </div>
                <h3
                  style={{
                    fontFamily: theme.fonts.heading,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: theme.colors.textLight,
                    marginBottom: "1rem",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: theme.colors.textMuted,
                    lineHeight: 1.6,
                    fontSize: "0.95rem",
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="fade-up"
          style={{
            background: `linear-gradient(90deg, ${theme.colors.accent}15 0%, transparent 100%)`,
            border: "1px solid rgba(255,255,255,0.1)",
            borderLeft: `4px solid ${theme.colors.accent}`,
            borderRadius: "24px",
            padding: "4rem",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: theme.fonts.heading,
                fontSize: "2rem",
                fontWeight: 800,
                color: theme.colors.textLight,
                marginBottom: "0.5rem",
              }}
            >
              Ready to unify your operations?
            </h3>
            <p style={{ color: theme.colors.textMuted, fontSize: "1.1rem" }}>
              Explore the full App Marketplace and connect your first tool
              today.
            </p>
          </div>
          <button
            style={{
              padding: "1rem 2rem",
              background: theme.colors.textLight,
              color: theme.colors.bgDark,
              border: "none",
              borderRadius: "100px",
              fontSize: "1rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = `0 10px 30px ${theme.colors.accent}40`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Visit Marketplace
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.5; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes spinOrbit {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes spinOrbitReverse {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        @keyframes shootData {
          0% { left: 100%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 0%; opacity: 0; }
        }
      `,
        }}
      />
    </section>
  );
}
