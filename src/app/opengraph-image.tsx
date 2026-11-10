import { ImageResponse } from "next/og";

export const alt = "Fantômes — Débusque les abonnements que tu paies sans t’en servir";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#F6F1E7",
          color: "#1B1A17",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          fontFamily: "serif",
        }}
      >
        <div style={{ fontSize: 36, fontWeight: 800 }}>Fantômes</div>
        <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05, display: "flex", flexWrap: "wrap" }}>
          Débusque les abonnements que tu paies&nbsp;
          <span style={{ background: "rgba(194,69,45,0.28)" }}>sans t’en servir.</span>
        </div>
        <div style={{ fontSize: 34, color: "#1F4D3A", fontFamily: "monospace" }}>
          3 oublis à 9,99 € = 360 € par an
        </div>
      </div>
    ),
    size,
  );
}
