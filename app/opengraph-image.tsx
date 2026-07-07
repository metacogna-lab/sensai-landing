import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "Sensai Studio — High Performance AI Excellence";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const imgBuffer = fs.readFileSync(
    path.join(process.cwd(), "public", "Gemini_Generated_Image_il23iwil23iwil23.png")
  );
  const imgSrc = `data:image/png;base64,${imgBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#F6F5F0",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Subtle top + bottom border lines */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, backgroundColor: "#16181D", display: "flex" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, backgroundColor: "#16181D", display: "flex" }} />

        {/* Left column — enso image */}
        <div
          style={{
            width: 520,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            paddingLeft: 72,
          }}
        >
          <img
            src={imgSrc}
            width={370}
            height={370}
            style={{ objectFit: "contain", mixBlendMode: "multiply" }}
            alt=""
          />
        </div>

        {/* Vertical divider */}
        <div
          style={{
            width: 1,
            height: 260,
            backgroundColor: "#D8D4C8",
            alignSelf: "center",
            flexShrink: 0,
          }}
        />

        {/* Right column — text */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 72,
            paddingRight: 72,
            gap: 0,
          }}
        >
          {/* Eyebrow */}
          <div
            style={{
              fontSize: 13,
              fontFamily: "sans-serif",
              fontWeight: 400,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#3A4258",
              marginBottom: 28,
            }}
          >
            Sensai Studio
          </div>

          {/* Main headline */}
          <div
            style={{
              fontSize: 62,
              fontWeight: 900,
              color: "#16181D",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
              marginBottom: 32,
            }}
          >
            High{"\n"}Performance{"\n"}AI Excellence
          </div>

          {/* Rule */}
          <div
            style={{
              width: 48,
              height: 2,
              backgroundColor: "#16181D",
              marginBottom: 28,
              display: "flex",
            }}
          />

          {/* URL */}
          <div
            style={{
              fontSize: 15,
              fontFamily: "monospace",
              fontWeight: 400,
              letterSpacing: "0.08em",
              color: "#3A4258",
            }}
          >
            sensaistudio.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
