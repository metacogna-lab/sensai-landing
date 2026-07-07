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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#F6F5F0",
          padding: "60px 80px",
        }}
      >
        <img
          src={imgSrc}
          width={260}
          height={260}
          style={{ objectFit: "contain", marginBottom: 36 }}
          alt=""
        />
        <div
          style={{
            fontSize: 76,
            fontWeight: 900,
            color: "#16181D",
            letterSpacing: "-0.02em",
            lineHeight: 1,
            marginBottom: 20,
            fontFamily: "serif",
          }}
        >
          Sensai Studio
        </div>
        <div
          style={{
            fontSize: 26,
            fontWeight: 400,
            color: "#3A4258",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            fontFamily: "sans-serif",
          }}
        >
          High Performance AI Excellence
        </div>
      </div>
    ),
    { ...size }
  );
}
