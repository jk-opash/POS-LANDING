import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { theme } from "@/config/theme";

/* ─── Number Ticker ───────────────────────────────────────── */
const NumberTicker = ({
  value,
  label,
  img,
}: {
  value: string;
  label: string;
  img?: string;
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
          background: theme.colors.whiteAlpha.a06,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "0 auto 1rem",
          fontSize: "1.75rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {img && (
          <Image src={img} alt={label} fill style={{ objectFit: "cover" }} />
        )}
      </div>
      <p
        style={{
          fontFamily: theme.fonts.heading,
          fontWeight: 800,
          fontSize: "2.5rem",
          color: theme.colors.textLight,
          lineHeight: 1,
        }}
      >
        {count === 0 ? "0" : count.toLocaleString()}
        {suffix}
      </p>
      <p
        style={{
          color: theme.colors.textMuted,
          fontSize: "0.9rem",
          marginTop: "0.4rem",
        }}
      >
        {label}
      </p>
    </div>
  );
};

export default NumberTicker;
