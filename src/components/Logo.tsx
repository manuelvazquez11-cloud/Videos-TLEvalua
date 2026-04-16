import React from "react";
import { Img, staticFile, useCurrentFrame, interpolate } from "remotion";

type LogoProps = {
  fadeInDuration?: number;
  size?: number;
  opacity?: number;
};

export const Logo: React.FC<LogoProps> = ({
  fadeInDuration = 24,
  size = 320,
  opacity: maxOpacity = 1,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, fadeInDuration], [0, maxOpacity], {
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [0, fadeInDuration], [0.92, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity, transform: `scale(${scale})` }}>
      <Img
        src={staticFile("assets/logo.png")}
        style={{ width: size, height: "auto" }}
      />
    </div>
  );
};

/** Small watermark version for bottom-right corner */
export const Watermark: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 40,
        right: 40,
        opacity: 0.7,
        zIndex: 100,
      }}
    >
      <Img
        src={staticFile("assets/logo.png")}
        style={{ width: 90, height: "auto" }}
      />
    </div>
  );
};
