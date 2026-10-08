import React from "react";
import { theme } from "@/config/theme";

export default function LegalPageTemplate({
  title,
  content,
}: {
  title: string;
  content: React.ReactNode;
}) {
  return (
    <div
      style={{
        flex: 1,
        backgroundColor: theme.colors.bgLight,
        paddingBottom: "5rem",
      }}
    >
      <section
        style={{
          backgroundColor: theme.colors.bgDark,
          paddingTop: "8rem",
          paddingBottom: "4rem",
          textAlign: "center",
        }}
      >
        <div className="pp-wrap">
          <h1
            style={{
              fontFamily: theme.fonts.heading,
              fontWeight: 700,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              color: "#fff",
            }}
          >
            {title}
          </h1>
        </div>
      </section>

      <section style={{ padding: "4rem 0" }}>
        <div
          className="pp-wrap"
          style={{
            maxWidth: "800px",
            color: theme.colors.textDark,
            lineHeight: 1.8,
            fontSize: "1.05rem",
          }}
        >
          {content}
        </div>
      </section>
    </div>
  );
}
