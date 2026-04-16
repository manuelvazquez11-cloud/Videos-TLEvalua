import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS } from "../theme";

/** Subtle white-to-light-gray gradient background with slow zoom */
export const Background: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [0, 300], [1.0, 1.03], {
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(180deg, ${COLORS.white} 0%, rgba(240,240,245,0.5) 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: `scale(${scale})`,
        overflow: "hidden",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
};
