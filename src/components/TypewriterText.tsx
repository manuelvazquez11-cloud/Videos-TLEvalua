import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS, FONTS } from "../theme";

type TypewriterTextProps = {
  text: string;
  startAt?: number;
  /** Frames per character */
  speed?: number;
  fontSize?: number;
  color?: string;
  fontWeight?: number;
  textAlign?: "left" | "center" | "right";
  maxWidth?: number;
};

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  startAt = 0,
  speed = 2,
  fontSize = 48,
  color = COLORS.navy,
  fontWeight = 700,
  textAlign = "center",
  maxWidth = 1400,
}) => {
  const frame = useCurrentFrame();
  const localFrame = frame - startAt;
  if (localFrame < 0) return null;

  const charsVisible = Math.min(
    text.length,
    Math.floor(localFrame / speed) + 1
  );

  const opacity = interpolate(localFrame, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        fontSize,
        fontWeight,
        fontFamily: FONTS.heading,
        color,
        textAlign,
        maxWidth,
        lineHeight: 1.3,
        opacity,
      }}
    >
      {text.slice(0, charsVisible)}
      {charsVisible < text.length && (
        <span style={{ opacity: 0.4 }}>|</span>
      )}
    </div>
  );
};
