import React, { useState } from "react";
import { Utensils, Coffee, Store } from "lucide-react";
import { theme } from "@/config/theme";
import { SOLUTIONS } from "@/constants/home";

export default function Solutions() {
  const [activeSol, setActiveSol] = useState("restaurant");

  return (
    <>
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
                borderColor: theme.colors.border,
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
              const icons: Record<string, React.ReactNode> = {
                restaurant: <Utensils size={20} />,
                cafe: <Coffee size={20} />,
                cloud: <Store size={20} />,
              };
              const accents: Record<string, string> = {
                restaurant: theme.colors.accent,
                cafe: theme.colors.semantic.cafe,
                cloud: theme.colors.semantic.cloud,
              };
              const accent = accents[sol.id] || theme.colors.accent;

              return (
                <div
                  key={sol.id}
                  onClick={() => setActiveSol(sol.id)}
                  className={`relative  rounded-[1.75rem] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer
                    ${
                      isActive
                        ? "flex-[1] lg:flex-[1_1_100%] h-[560px] lg:h-auto"
                        : "flex-[1] lg:flex-[0_0_88px] h-[88px] lg:h-auto hover:bg-gray-100"
                    }
                  `}
                  style={{
                    boxShadow: isActive ? theme.shadows.lg : "none",
                    background: isActive
                      ? theme.colors.bgDark
                      : theme.colors.bgLight,
                    border: isActive
                      ? `1px solid ${theme.colors.whiteAlpha.a10}`
                      : `1px solid ${theme.colors.border}`,
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
                          background: `linear-gradient(135deg, ${theme.colors.bgDark} 0%, transparent 40%, transparent 100%)`,
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

    </>
  );
}
