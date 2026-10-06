"use client";

import React, { useState, useEffect } from "react";
import { Utensils, Coffee, Store, Plus, Minus } from "lucide-react";
import { theme } from "@/config/theme";
import { SOLUTIONS } from "@/constants/home";

export default function Solutions() {
  const [activeSol, setActiveSol] = useState(SOLUTIONS[0].id);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isHovering) return;
    const timer = setInterval(() => {
      setActiveSol((prev) => {
        const idx = SOLUTIONS.findIndex((s) => s.id === prev);
        return SOLUTIONS[(idx + 1) % SOLUTIONS.length].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [activeSol, isHovering]);

  const icons: Record<string, React.ReactNode> = {
    restaurant: <Utensils size={24} strokeWidth={2.5} />,
    cafe: <Coffee size={24} strokeWidth={2.5} />,
    cloud: <Store size={24} strokeWidth={2.5} />,
  };

  const accents: Record<string, string> = {
    restaurant: theme.colors.accent,
    cafe: "#f97316", // Vibrant orange
    cloud: "#3b82f6", // Vibrant blue
  };

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgLight,
        padding: "7rem 0",
        overflow: "hidden",
      }}
    >
      <div className="pp-wrap max-w-[740px] mx-auto flex flex-col items-center">
        
        <div className="fade-up w-full" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span
            className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase mb-5"
            style={{
              color: theme.colors.textDark,
              backgroundColor: "rgba(0,0,0,0.04)",
            }}
          >
            Built for your business
          </span>
          <h2
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: theme.colors.textDark,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            One Platform. <br/> Every Food Business.
          </h2>
        </div>

        {/* Shape-shifting Vertical Accordion */}
        <div 
          className="fade-up w-full flex flex-col"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {SOLUTIONS.map((sol) => {
            const isActive = activeSol === sol.id;
            const accent = accents[sol.id] || theme.colors.accent;

            return (
              <div
                key={sol.id}
                onClick={() => setActiveSol(sol.id)}
                className={`relative group cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                  isActive 
                    ? "bg-[#0A0A0C] text-white my-3 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] border border-[#1A1A1E]" 
                    : "bg-transparent text-gray-900 border-b border-gray-200 hover:bg-gray-50/50"
                }`}
                style={{
                  padding: isActive ? "2.5rem 3rem" : "1.5rem 1rem",
                }}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between z-10 relative">
                  <div className="flex items-center gap-5">
                    <div 
                      className={`flex items-center justify-center transition-colors duration-500 ${
                        isActive ? "" : "text-gray-400 group-hover:text-gray-900"
                      }`}
                      style={{ color: isActive ? accent : undefined }}
                    >
                      {icons[sol.id]}
                    </div>
                    <h3 className={`font-h font-extrabold tracking-tight transition-all duration-500 ${
                      isActive ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
                    }`}>
                      {sol.label}
                    </h3>
                  </div>

                  <div 
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? "bg-white/10 text-white rotate-180" 
                        : "bg-gray-100 text-gray-400 group-hover:bg-gray-200 group-hover:text-gray-900"
                    }`}
                  >
                    {isActive ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </div>

                {/* Expandable Content Area using CSS Grid Trick */}
                <div 
                  className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    opacity: isActive ? 1 : 0,
                    marginTop: isActive ? "2rem" : "0",
                  }}
                >
                  <div className="overflow-hidden">
                    <p className="text-xl md:text-2xl text-gray-300 font-bold leading-snug mb-10 max-w-[95%] tracking-tight">
                      {sol.sub}
                    </p>

                    {/* Timeline-style Points */}
                    <div className="flex flex-col gap-6 relative ml-1">
                      {/* Connecting Line */}
                      <div className="absolute left-[11px] top-3 bottom-3 w-[2px] bg-white/10 z-0" />
                      
                      {sol.points.map((pt, i) => (
                        <div key={i} className="flex items-center gap-6 relative z-10 group/point">
                           <div 
                             className="w-6 h-6 rounded-full shrink-0 border-[4px] border-[#0A0A0C] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] transition-transform duration-300 group-hover/point:scale-125"
                             style={{ backgroundColor: accent }}
                           />
                           <span className="text-[15px] md:text-[16px] font-medium tracking-wide text-gray-300 group-hover/point:text-white transition-colors">
                             {pt}
                           </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle ambient glow when active */}
                {isActive && (
                   <div 
                     className="absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] opacity-20 pointer-events-none rounded-full"
                     style={{ backgroundColor: accent }}
                   />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
