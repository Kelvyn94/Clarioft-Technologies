import { ImageResponse } from "next/og";

export const alt =
  "Clarioft Technologies — Business Systems and Software Engineering";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px",
          background: "#0b1725",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-100px",
            top: "-180px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "2px solid rgba(25,198,177,0.18)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "66px",
              height: "66px",
              borderRadius: "16px",
              background: "#101f30",
              border: "2px solid rgba(25,198,177,0.4)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#19c6b1",
              fontSize: "42px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "-1px",
            }}
          >
            clarioft
            <span
              style={{
                fontSize: "11px",
                color: "#19c6b1",
                letterSpacing: "5px",
                marginTop: "3px",
              }}
            >
              TECHNOLOGIES
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "950px",
            gap: "22px",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#19c6b1",
              fontSize: "19px",
              fontWeight: 700,
              letterSpacing: "4px",
            }}
          >
            BUSINESS SYSTEMS · SOFTWARE ENGINEERING
          </div>
          <div
            style={{
              fontSize: "66px",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "-2px",
            }}
          >
            Software built around the way your business works.
          </div>
          <div
            style={{
              fontSize: "25px",
              lineHeight: 1.5,
              color: "#aab7c4",
              maxWidth: "850px",
            }}
          >
            Practical business systems, custom software and intelligent
            workflows.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.16)",
            paddingTop: "24px",
            color: "#aab7c4",
            fontSize: "18px",
          }}
        >
          <span>Business understanding meets technology.</span>
          <span style={{ color: "#19c6b1" }}>CLARIOFT TECHNOLOGIES</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
