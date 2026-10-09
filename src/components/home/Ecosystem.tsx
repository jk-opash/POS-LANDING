"use client";

import React, { useState, useEffect } from "react";
import { theme } from "@/config/theme";
import { ECOSYSTEM } from "@/constants/home";

export default function Ecosystem() {
  const [active, setActive] = useState(0);
  const angles = [0, 90, 180, 270];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % ECOSYSTEM.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [active]);

  return (
    <section
      style={{
        backgroundColor: theme.colors.bgLight,
        padding: "8rem 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{ textAlign: "center", marginBottom: "2rem", padding: "0 1rem" }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            background: `${theme.colors.accent}15`,
            border: `1px solid ${theme.colors.accent}30`,
            padding: "0.35rem 1rem",
            borderRadius: "100px",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: theme.colors.accent,
            }}
          />
          <span
            style={{
              color: "#C23A00",
              fontSize: "0.75rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            The Ecosystem
          </span>
        </div>
        <h2
          style={{
            fontFamily: theme.fonts.heading,
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            color: theme.colors.textDark,
            lineHeight: 1.1,
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          An Integrated Universe
        </h2>
        <p
          style={{
            color: theme.colors.textMuted,
            fontSize: "1.15rem",
            maxWidth: "600px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Experience a fully connected suite of tools designed to seamlessly
          power your operations.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "4rem",
          width: "100%",
          maxWidth: "1100px",
        }}
      >
        {/* Left Side: Orbit Navigation */}
        <div
          style={{
            position: "relative",
            width: "450px",
            height: "450px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {/* Orbit Path (Subtle ring background) */}
          <div
            style={{
              position: "absolute",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              border: `1px dashed ${theme.colors.border}`,
              zIndex: 0,
            }}
          />

          {/* Center Orb (Active Icon) */}
          <div
            style={{
              width: "160px",
              height: "160px",
              borderRadius: "50%",
              background: theme.colors.bgSurface,
              boxShadow: `0 30px 60px -15px ${ECOSYSTEM[active].color}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10,
              border: `1px solid ${theme.colors.border}`,
              transition: "box-shadow 0.5s ease",
            }}
          >
            <div
              style={{
                color: ECOSYSTEM[active].color,
                transition: "color 0.3s",
              }}
            >
              {React.cloneElement(
                ECOSYSTEM[active].icon as React.ReactElement<any>,
                { size: 64 },
              )}
            </div>
          </div>

          {/* Orbiting Icons */}
          {ECOSYSTEM.map((eco, i) => {
            const angle = angles[(i - active + 4) % 4];
            const rad = angle * (Math.PI / 180);
            const radius = 180; // half of 360px orbit path
            const x = Math.sin(rad) * radius;
            const y = -Math.cos(rad) * radius;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                style={{
                  position: "absolute",
                  transform: `translate(${x}px, ${y}px)`,
                  transition:
                    "transform 0.8s cubic-bezier(0.16,1,0.3,1), background 0.3s, color 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: i === active ? eco.color : theme.colors.bgSurface,
                  border: `2px solid ${i === active ? "transparent" : theme.colors.border}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: i === active ? "#fff" : theme.colors.textMuted,
                  boxShadow:
                    i === active
                      ? `0 15px 30px -5px ${eco.color}60`
                      : "0 10px 20px rgba(0,0,0,0.05)",
                  zIndex: 20,
                }}
              >
                {React.cloneElement(eco.icon as React.ReactElement<any>, {
                  size: 28,
                })}
              </div>
            );
          })}
        </div>

        {/* Right Side: Content Area */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "2.5rem",
              fontWeight: 800,
              color: theme.colors.textDark,
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {ECOSYSTEM[active].name}
          </h3>

          <p
            style={{
              fontSize: "1.1rem",
              color: theme.colors.textMuted,
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            {ECOSYSTEM[active].desc}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginTop: "1rem",
            }}
          >
            {ECOSYSTEM[active].features.map((f, idx) => (
              <div
                key={idx}
                style={{ display: "flex", alignItems: "center", gap: "1rem" }}
              >
                {/* Custom Upper Arrow/Check Icon */}
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "8px",
                    background: `${ECOSYSTEM[active].color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: ECOSYSTEM[active].color,
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: theme.colors.textDark,
                  }}
                >
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useState } from "react";
// import { theme } from "@/config/theme";
// import { ECOSYSTEM } from "@/constants/home";

// export default function Ecosystem() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section style={{ backgroundColor: theme.colors.bgLight, padding: "5rem 0", display: "flex", flexDirection: "column", alignItems: "center" }}>

//       {/* Super Compact Header */}
//       <div style={{ textAlign: "center", marginBottom: "3rem", padding: "0 1rem" }}>
//         <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${theme.colors.accent}15`, border: `1px solid ${theme.colors.accent}30`, padding: "0.35rem 1rem", borderRadius: "100px", marginBottom: "1rem" }}>
//           <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: theme.colors.accent }} />
//           <span style={{ color: theme.colors.accent, fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em" }}>The Ecosystem</span>
//         </div>
//         <h2 style={{ fontFamily: theme.fonts.heading, fontWeight: 800, fontSize: "clamp(2rem, 3.5vw, 2.75rem)", color: theme.colors.textDark, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
//           Absolute back-office control.
//         </h2>
//       </div>

//       <div className="eco-widget" style={{ width: "100%", maxWidth: "800px", padding: "0 1rem" }}>

//         {/* Flawless Segmented Control */}
//         <div
//           style={{
//             position: "relative",
//             display: "flex",
//             background: theme.colors.bgSurface,
//             borderRadius: "100px",
//             padding: "6px",
//             marginBottom: "2rem",
//             border: `1px solid ${theme.colors.border}`,
//             boxShadow: `0 4px 10px rgba(0,0,0,0.03)`
//           }}
//         >
//           {/* Track for the pill to perfectly align */}
//           <div
//             style={{
//               position: "absolute",
//               top: "6px",
//               bottom: "6px",
//               left: "6px",
//               right: "6px",
//               pointerEvents: "none",
//             }}
//           >
//             <div
//               style={{
//                 width: "25%",
//                 height: "100%",
//                 background: theme.colors.textDark,
//                 borderRadius: "100px",
//                 transform: `translateX(${activeIndex * 100}%)`,
//                 transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
//                 boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
//               }}
//             />
//           </div>

//           {ECOSYSTEM.map((eco, idx) => {
//             const isActive = activeIndex === idx;
//             return (
//               <button
//                 key={idx}
//                 onClick={() => setActiveIndex(idx)}
//                 style={{
//                   flex: 1,
//                   position: "relative",
//                   zIndex: 1,
//                   background: "transparent",
//                   border: "none",
//                   padding: "0.75rem 0.5rem",
//                   color: isActive ? "#fff" : theme.colors.textMuted,
//                   fontFamily: theme.fonts.heading,
//                   fontWeight: 700,
//                   fontSize: "0.9rem",
//                   cursor: "pointer",
//                   transition: "color 0.3s ease",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   gap: "0.5rem",
//                 }}
//               >
//                 {React.cloneElement(eco.icon as React.ReactElement<any>, { size: 16 })}
//                 <span className="hide-mobile">{eco.name.split(" ")[0]}</span>
//               </button>
//             )
//           })}
//         </div>

//         {/* Super Compact Content Window */}
//         <div
//           style={{
//             position: "relative",
//             background: theme.colors.bgSurface,
//             borderRadius: "24px",
//             border: `1px solid ${theme.colors.border}`,
//             boxShadow: `0 30px 60px -15px rgba(0,0,0,0.08)`,
//             minHeight: "360px",
//             overflow: "hidden"
//           }}
//         >
//           {ECOSYSTEM.map((eco, idx) => {
//             const isActive = activeIndex === idx;
//             return (
//               <div
//                 key={idx}
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   padding: "3rem",
//                   opacity: isActive ? 1 : 0,
//                   pointerEvents: isActive ? "auto" : "none",
//                   transform: isActive ? "translateY(0) scale(1)" : "translateY(10px) scale(0.98)",
//                   transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   textAlign: "center",
//                   zIndex: isActive ? 2 : 1
//                 }}
//               >
//                 {/* Subtle Radial Glow */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: "100%",
//                     height: "100%",
//                     background: `radial-gradient(circle at center, ${eco.color}, transparent 60%)`,
//                     opacity: 0.6,
//                     pointerEvents: "none",
//                     zIndex: 0
//                   }}
//                 />

//                 <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "500px" }}>
//                   <div
//                     style={{
//                       width: "64px",
//                       height: "64px",
//                       margin: "0 auto 1.5rem auto",
//                       borderRadius: "16px",
//                       background: theme.colors.bgDark,
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: theme.colors.accent,
//                       border: `1px solid ${theme.colors.accent}40`,
//                       boxShadow: `inset 0 2px 10px rgba(255,255,255,0.05), 0 10px 20px -5px ${theme.colors.accent}40`,
//                     }}
//                   >
//                     {React.cloneElement(eco.icon as React.ReactElement<any>, { size: 30 })}
//                   </div>

//                   <h3
//                     style={{
//                       fontFamily: theme.fonts.heading,
//                       fontWeight: 800,
//                       fontSize: "1.75rem",
//                       color: theme.colors.textDark,
//                       marginBottom: "1rem",
//                       letterSpacing: "-0.02em",
//                     }}
//                   >
//                     {eco.name}
//                   </h3>

//                   <p
//                     style={{
//                       color: theme.colors.textMuted,
//                       fontSize: "1.05rem",
//                       lineHeight: 1.6,
//                       marginBottom: "2rem",
//                     }}
//                   >
//                     {eco.desc}
//                   </p>

//                   <div
//                     style={{
//                       display: "flex",
//                       flexWrap: "wrap",
//                       justifyContent: "center",
//                       gap: "0.75rem",
//                     }}
//                   >
//                     {eco.features.map((f, i) => (
//                       <div
//                         key={i}
//                         style={{
//                           display: "inline-flex",
//                           alignItems: "center",
//                           gap: "0.5rem",
//                           background: "rgba(0,0,0,0.03)",
//                           border: "1px solid rgba(0,0,0,0.05)",
//                           padding: "0.5rem 1rem",
//                           borderRadius: "100px",
//                         }}
//                       >
//                         <div
//                           style={{
//                             color: theme.colors.textDark,
//                             fontSize: "0.75rem",
//                             fontWeight: 800,
//                           }}
//                         >
//                           ✓
//                         </div>
//                         <span
//                           style={{
//                             color: theme.colors.textDark,
//                             fontSize: "0.85rem",
//                             fontWeight: 600,
//                           }}
//                         >
//                           {f}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <style>{`
//         @media (max-width: 600px) {
//           .hide-mobile { display: none; }
//           .eco-widget > div:last-child {
//             min-height: 480px !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// ("use client");

// import React, { useState } from "react";
// import { theme } from "@/config/theme";
// import { ECOSYSTEM } from "@/constants/home";

// export default function Ecosystem() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <section style={{ backgroundColor: theme.colors.bgLight, padding: "5rem 0" }}>
//       <div className="pp-wrap" style={{ maxWidth: "1100px", margin: "0 auto" }}>

//         {/* Compact Header */}
//         <div style={{ textAlign: "center", marginBottom: "4rem" }}>
//           <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: `${theme.colors.accent}15`, border: `1px solid ${theme.colors.accent}30`, padding: "0.35rem 1rem", borderRadius: "100px", marginBottom: "1rem" }}>
//             <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: theme.colors.accent }} />
//             <span style={{ color: theme.colors.accent, fontSize: "0.75rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.15em" }}>The Ecosystem</span>
//           </div>
//           <h2 style={{ fontFamily: theme.fonts.heading, fontWeight: 800, fontSize: "clamp(2.5rem, 4vw, 3.5rem)", color: theme.colors.textDark, lineHeight: 1.1, marginBottom: "1rem", letterSpacing: "-0.02em" }}>
//             Connect every dot.
//           </h2>
//           <p style={{ color: theme.colors.textMuted, fontSize: "1.05rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
//             From multiple branches to deep stock auditing, our ecosystem is designed to give you absolute back-office control in a highly intuitive interface.
//           </p>
//         </div>

//         {/* Accordion Container */}
//         <div className="accordion-container">
//           {ECOSYSTEM.map((eco, idx) => {
//             const isActive = activeIndex === idx;

//             return (
//               <div
//                 key={idx}
//                 className={`accordion-item ${isActive ? "active" : ""}`}
//                 onClick={() => setActiveIndex(idx)}
//                 style={{
//                   position: "relative",
//                   borderRadius: "24px",
//                   overflow: "hidden",
//                   cursor: "pointer",
//                   border: `1px solid ${isActive ? theme.colors.accent + "50" : theme.colors.border}`,
//                   background: isActive ? theme.colors.bgSurface : "rgba(255,255,255,0.01)",
//                   boxShadow: isActive ? `0 30px 60px -15px ${theme.colors.accent}20` : "none",
//                 }}
//               >
//                 {/* Background Glow */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     right: 0,
//                     width: "100%",
//                     height: "100%",
//                     background: isActive ? `radial-gradient(circle at bottom right, ${eco.color}, transparent 60%)` : "transparent",
//                     opacity: isActive ? 1 : 0,
//                     transition: "opacity 0.5s ease",
//                     pointerEvents: "none",
//                   }}
//                 />

//                 {/* Collapsed Content */}
//                 <div
//                   className="collapsed-content"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     opacity: isActive ? 0 : 1,
//                     pointerEvents: isActive ? "none" : "auto",
//                     transition: "opacity 0.2s ease",
//                     padding: "1.5rem",
//                     gap: "2rem",
//                   }}
//                 >
//                   <div
//                     style={{
//                       width: "48px",
//                       height: "48px",
//                       borderRadius: "12px",
//                       background: "rgba(255,255,255,0.03)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       color: theme.colors.textMuted,
//                       border: `1px solid rgba(255,255,255,0.05)`,
//                       transition: "all 0.3s ease",
//                     }}
//                     className="icon-wrap"
//                   >
//                     {React.cloneElement(eco.icon as React.ReactElement<any>, { size: 24 })}
//                   </div>
//                   <div
//                     className="collapsed-text"
//                     style={{
//                       color: theme.colors.textMuted,
//                       fontFamily: theme.fonts.heading,
//                       fontWeight: 700,
//                       fontSize: "1.1rem",
//                       letterSpacing: "0.1em",
//                       writingMode: "vertical-rl",
//                       transform: "rotate(180deg)",
//                       textTransform: "uppercase",
//                     }}
//                   >
//                     {eco.name}
//                   </div>
//                 </div>

//                 {/* Expanded Content */}
//                 <div
//                   className="expanded-content"
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "740px", /* Fixed width prevents nasty text reflows during animation */
//                     height: "100%",
//                     padding: "3rem",
//                     opacity: isActive ? 1 : 0,
//                     pointerEvents: isActive ? "auto" : "none",
//                     transition: "opacity 0.4s ease 0.15s, transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
//                     transform: isActive ? "translateX(0)" : "translateX(20px)",
//                     display: "flex",
//                     flexDirection: "column",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <div className="expanded-inner" style={{ width: "100%" }}>
//                     <div
//                       style={{
//                         width: "60px",
//                         height: "60px",
//                         borderRadius: "16px",
//                         background: theme.colors.bgDark,
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         color: theme.colors.accent,
//                         border: `1px solid ${theme.colors.accent}40`,
//                         marginBottom: "2rem",
//                         boxShadow: `inset 0 2px 10px rgba(255,255,255,0.05), 0 10px 20px -5px ${theme.colors.accent}40`,
//                       }}
//                     >
//                       {React.cloneElement(eco.icon as React.ReactElement<any>, { size: 28 })}
//                     </div>

//                     <h3
//                       style={{
//                         fontFamily: theme.fonts.heading,
//                         fontWeight: 800,
//                         fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
//                         color: theme.colors.textDark,
//                         marginBottom: "1rem",
//                         letterSpacing: "-0.02em",
//                         whiteSpace: "nowrap",
//                       }}
//                     >
//                       {eco.name}
//                     </h3>

//                     <p
//                       style={{
//                         color: theme.colors.textMuted,
//                         fontSize: "1.05rem",
//                         lineHeight: 1.6,
//                         marginBottom: "2.5rem",
//                         maxWidth: "480px",
//                       }}
//                     >
//                       {eco.desc}
//                     </p>

//                     <div
//                       style={{
//                         display: "grid",
//                         gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//                         gap: "1.25rem",
//                         maxWidth: "600px",
//                       }}
//                     >
//                       {eco.features.map((f, i) => (
//                         <div
//                           key={i}
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             gap: "0.75rem",
//                           }}
//                         >
//                           <div
//                             style={{
//                               width: "24px",
//                               height: "24px",
//                               borderRadius: "50%",
//                               background: `${theme.colors.accent}15`,
//                               color: theme.colors.accent,
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               fontSize: "0.75rem",
//                               fontWeight: 800,
//                               flexShrink: 0,
//                             }}
//                           >
//                             ✓
//                           </div>
//                           <span
//                             style={{
//                               color: theme.colors.textDark,
//                               fontSize: "0.95rem",
//                               fontWeight: 600,
//                               whiteSpace: "nowrap",
//                             }}
//                           >
//                             {f}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>

//       <style>{`
//         .accordion-container {
//           display: flex;
//           flex-direction: row;
//           height: 550px;
//           gap: 1rem;
//           width: 100%;
//         }

//         .accordion-item {
//           flex: 0 0 110px;
//           transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
//         }

//         .accordion-item.active {
//           flex: 1 1 auto;
//         }

//         .accordion-item:hover .icon-wrap {
//           color: ${theme.colors.textDark};
//           background: rgba(0,0,0,0.05) !important;
//           border-color: rgba(0,0,0,0.1) !important;
//         }

//         .accordion-item:hover .collapsed-text {
//           color: ${theme.colors.textDark} !important;
//         }

//         @media (max-width: 900px) {
//           .accordion-container {
//             flex-direction: column;
//             height: auto;
//             min-height: 700px;
//           }

//           .accordion-item {
//             flex: 0 0 80px;
//             width: 100%;
//           }

//           .accordion-item.active {
//             flex: 1 1 450px;
//           }

//           .collapsed-content {
//             flex-direction: row !important;
//             justify-content: flex-start !important;
//             padding: 0 2rem !important;
//             gap: 1.5rem !important;
//           }

//           .collapsed-text {
//             transform: none !important;
//             writing-mode: horizontal-tb !important;
//             width: auto !important;
//             text-align: left !important;
//             letter-spacing: 0.05em !important;
//           }

//           .accordion-item .icon-wrap {
//             margin-bottom: 0 !important;
//           }

//           .expanded-content {
//             padding: 2.5rem 1.5rem !important;
//           }

//           .expanded-inner h3 {
//             white-space: normal !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }
