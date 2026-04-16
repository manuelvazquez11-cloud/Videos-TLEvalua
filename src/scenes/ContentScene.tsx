import React from "react";
import {
  useCurrentFrame,
  interpolate,
  AbsoluteFill,
} from "remotion";
import { COLORS, FONTS } from "../theme";
import { Watermark } from "../components/Logo";
import { OrangeLine } from "../components/OrangeLine";
import { Background } from "../components/Background";

type ContentSceneProps = {
  title: string;
  bullets: string[];
  icon?: string;
};

/**
 * Generic content scene with title + bullet points.
 * Used for mid-video informational slides.
 */
export const ContentScene: React.FC<ContentSceneProps> = ({
  title,
  bullets,
  icon,
}) => {
  const frame = useCurrentFrame();

  // Title fade-in
  const titleOpacity = interpolate(frame, [0, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleX = interpolate(frame, [0, 18], [-40, 0], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Background>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "80px 140px",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Icon (emoji placeholder) */}
          {icon && (
            <div
              style={{
                fontSize: 56,
                marginBottom: 12,
                opacity: titleOpacity,
              }}
            >
              {icon}
            </div>
          )}

          {/* Title */}
          <div
            style={{
              opacity: titleOpacity,
              transform: `translateX(${titleX}px)`,
            }}
          >
            <h2
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 800,
                fontSize: 56,
                color: COLORS.navy,
                margin: 0,
              }}
            >
              {title}
            </h2>
            <OrangeLine startAt={10} duration={14} maxWidth={200} height={4} />
          </div>

          {/* Bullets */}
          <div style={{ marginTop: 48 }}>
            {bullets.map((bullet, i) => {
              const bulletStart = 30 + i * 20;
              const bulletOpacity = interpolate(
                frame,
                [bulletStart, bulletStart + 14],
                [0, 1],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );
              const bulletX = interpolate(
                frame,
                [bulletStart, bulletStart + 14],
                [30, 0],
                { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
              );

              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 24,
                    opacity: bulletOpacity,
                    transform: `translateX(${bulletX}px)`,
                  }}
                >
                  {/* Orange bullet dot */}
                  <div
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 7,
                      backgroundColor: COLORS.orange,
                      marginRight: 20,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: FONTS.body,
                      fontWeight: 500,
                      fontSize: 36,
                      color: COLORS.navy,
                      margin: 0,
                      lineHeight: 1.4,
                    }}
                  >
                    {bullet}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <Watermark />
      </Background>
    </AbsoluteFill>
  );
};
