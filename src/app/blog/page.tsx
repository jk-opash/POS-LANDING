"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import { theme } from "@/config/theme";

const ALL_POSTS = [
  {
    id: 1,
    title: "The Future of Restaurant Automation: AI and Analytics",
    excerpt:
      "Discover how artificial intelligence and deep analytics are reshaping the restaurant industry, reducing waste, and increasing profitability for forward-thinking owners. Learn the strategies top brands use to scale effectively without losing the personal touch.",
    category: "Industry Trends",
    date: "Oct 12, 2026",
    readTime: "8 min read",
    slug: "#",
    area: "feat",
    color: "#E23744",
  },
  {
    id: 2,
    title: "5 Strategies to Optimize Your Cloud Kitchen Workflow",
    excerpt:
      "Cloud kitchens operate differently. Learn how to streamline your operations from order intake to delivery dispatch.",
    category: "Operations",
    date: "Oct 5, 2026",
    readTime: "5 min read",
    slug: "#",
    area: "p2",
    color: "#FC8019",
  },
  {
    id: 3,
    title: "Mastering Inventory Management to Reduce Waste",
    excerpt:
      "Food waste is a silent profit killer. Implement these techniques.",
    category: "Management",
    date: "Sep 28, 2026",
    readTime: "6 min read",
    slug: "#",
    area: "p3",
    color: "#2CA01C",
  },
  {
    id: 4,
    title: "Enhancing Customer Loyalty with Data-Driven Rewards",
    excerpt:
      "See how utilizing customer data creates personalized reward systems.",
    category: "Marketing",
    date: "Sep 15, 2026",
    readTime: "4 min read",
    slug: "#",
    area: "p4",
    color: "#FFE01B",
  },
  {
    id: 5,
    title: "How to Train Your Staff on New POS Systems Fast",
    excerpt:
      "Transitioning to a new POS can be daunting. Follow this step-by-step guide to get your team up to speed in no time and avoid operational hiccups.",
    category: "Guides",
    date: "Sep 02, 2026",
    readTime: "7 min read",
    slug: "#",
    area: "p5",
    color: "#0063A7",
  },
  {
    id: 6,
    title: "Why Centralization is Essential for Growth",
    excerpt: "Expanding your restaurant footprint requires central oversight.",
    category: "Growth",
    date: "Aug 20, 2026",
    readTime: "5 min read",
    slug: "#",
    area: "p6",
    color: theme.colors.accent,
  },
  {
    id: 7,
    title: "Understanding Payout Reconciliation for Cash Flow",
    excerpt: "Don't let missing payouts hurt your bottom line.",
    category: "Finance",
    date: "Aug 10, 2026",
    readTime: "6 min read",
    slug: "#",
    area: "p7",
    color: "#8B5CF6",
  },
];

export default function BlogPage() {
  const [showTop, setShowTop] = useState(false);
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
        padding: "8rem 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Inject custom CSS grid for the Editorial layout */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .editorial-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: 350px 350px 350px;
          gap: 1.5rem;
          grid-template-areas: 
            "feat feat p2 p2"
            "feat feat p3 p4"
            "p5 p5 p6 p7";
          width: 100%;
        }
        
        .card-feat { grid-area: feat; }
        .card-p2 { grid-area: p2; }
        .card-p3 { grid-area: p3; }
        .card-p4 { grid-area: p4; }
        .card-p5 { grid-area: p5; }
        .card-p6 { grid-area: p6; }
        .card-p7 { grid-area: p7; }

        @media (max-width: 1200px) {
          .editorial-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: auto;
            grid-template-areas: 
              "feat feat feat"
              "p2 p2 p2"
              "p3 p4 p6"
              "p5 p5 p7";
          }
          .editorial-grid > div { min-height: 300px; }
        }
        
        @media (max-width: 768px) {
          .editorial-grid {
            display: flex;
            flex-direction: column;
          }
          .editorial-grid > div { min-height: 250px; }
        }
      `,
        }}
      />

      {/* Cinematic Ambient Background */}
      <div
        style={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "120vw",
          height: "800px",
          background: `radial-gradient(ellipse at top, ${theme.colors.accent}15 0%, transparent 60%)`,
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div className="pp-wrap relative z-10">
        {/* Header Section */}
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
            BillBite Journal
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
            Insights for{" "}
            <span
              style={{
                background: `linear-gradient(135deg, #fff 0%, ${theme.colors.accent} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Growth.
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
            The latest news, industry trends, and practical guides to help you
            run your restaurant more efficiently and profitably.
          </p>
        </div>

        {/* Editorial Grid Presentation */}
        <div className="fade-up editorial-grid">
          {ALL_POSTS.map((post) => {
            const isFeat = post.area === "feat";
            const isWide = post.area === "p2" || post.area === "p5";
            const isSquare = !isFeat && !isWide;

            return (
              <Link
                key={post.id}
                href={post.slug}
                style={{
                  textDecoration: "none",
                  display: "block",
                  height: "100%",
                }}
                className={`card-${post.area}`}
              >
                <div
                  style={{
                    background: isFeat
                      ? "linear-gradient(145deg, rgba(30,30,30,0.8) 0%, rgba(15,15,15,0.9) 100%)"
                      : "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "32px",
                    padding: isFeat ? "3.5rem" : "2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                    gap: "1.5rem",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    cursor: "pointer",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform =
                      "translateY(-8px) scale(1.01)";
                    e.currentTarget.style.borderColor = post.color + "60";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.borderColor =
                      "rgba(255,255,255,0.06)";
                  }}
                >
                  {/* Dynamic Abstract Glow in Background */}
                  <div
                    className="card-glow"
                    style={{
                      position: "absolute",
                      top: isFeat ? "0%" : "50%",
                      right: isFeat ? "0%" : "50%",
                      transform: isFeat
                        ? "translate(30%, -30%)"
                        : "translate(50%, -50%)",
                      width: isFeat ? "500px" : "200px",
                      height: isFeat ? "500px" : "200px",
                      background: post.color,
                      borderRadius: "50%",
                      filter: "blur(100px)",
                      opacity: 0,
                      transition: "opacity 0.5s ease",
                      pointerEvents: "none",
                      zIndex: 0,
                    }}
                  />

                  {/* Top content wrapper */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      flex: "none",
                      height: "auto",
                      justifyContent: "flex-start",
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
                      <span
                        style={{
                          color: post.color,
                          fontSize: "0.8rem",
                          fontWeight: 800,
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          padding: "0.3rem 0.8rem",
                          background: `${post.color}15`,
                          borderRadius: "100px",
                          border: `1px solid ${post.color}30`,
                        }}
                      >
                        {post.category}
                      </span>
                      {isFeat && (
                        <span
                          style={{
                            color: theme.colors.textMuted,
                            fontSize: "0.85rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <Clock size={14} /> {post.readTime}
                        </span>
                      )}
                    </div>

                    <h2
                      style={{
                        fontFamily: theme.fonts.heading,
                        fontWeight: 800,
                        fontSize: isFeat
                          ? "clamp(2rem, 4vw, 3.5rem)"
                          : isWide
                            ? "1.8rem"
                            : "1.4rem",
                        color: theme.colors.textLight,
                        lineHeight: 1.15,
                        letterSpacing: "-0.02em",
                        marginBottom: isFeat ? "1.5rem" : "1rem",
                      }}
                    >
                      {post.title}
                    </h2>

                    {(!isSquare || isFeat) && (
                      <p
                        style={{
                          color: theme.colors.textMuted,
                          fontSize: isFeat ? "1.2rem" : "1rem",
                          lineHeight: 1.6,
                          maxWidth: "100%",
                          display: "-webkit-box",
                          WebkitLineClamp: isWide ? 3 : 5,
                          WebkitBoxOrient: "vertical",
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>
                    )}
                  </div>

                  {/* Bottom / Right content wrapper */}
                  <div
                    style={{
                      position: "relative",
                      zIndex: 2,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      flex: "none",
                      alignItems: "stretch",
                    }}
                  >
                    {!isFeat && (
                      <div
                        style={{
                          alignSelf: "flex-start",
                          marginBottom: "1.5rem",
                          color: theme.colors.textMuted,
                          fontSize: "0.85rem",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.4rem",
                        }}
                      >
                        <Clock size={14} /> {post.readTime}
                      </div>
                    )}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginTop: "auto",
                        borderTop: isWide
                          ? "none"
                          : "1px solid rgba(255,255,255,0.05)",
                        paddingTop: isWide ? "0" : "1.5rem",
                      }}
                    >
                      <span
                        style={{
                          color: theme.colors.textMuted,
                          fontSize: "0.9rem",
                          fontWeight: 500,
                        }}
                      >
                        {post.date}
                      </span>

                      <div
                        className="post-arrow"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.05)",
                          transition:
                            "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                      >
                        <ArrowRight size={18} color={theme.colors.textLight} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
