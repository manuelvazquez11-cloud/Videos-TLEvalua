import React from "react";
import { useCurrentFrame, interpolate } from "remotion";
import { COLORS } from "../theme";

type OrangeLineProps = {
  /** Frame at which the line starts expanding */
  startAt?: number;
  /** Duration of the expansion in frames */
  duration?: number;
  /** Maximum width as CSS value */
  maxWidth?: number;
  /** Height / thickness in px */
  height?: number;
};

export const OrangeLine: React.FC<OrangeLineProps> = ({
  startAt = 0,
  duration = 18,
  maxWidth = 320,
  height = 4,
}) => {
  const frame = useCurrentFrame();

  const width = interpolate(
    frame,
    [startAt, startAt + duration],
    [0, maxWidth],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <div
      style={{
        width,
        height,
        backgroundColor: COLORS.orange,
        borderRadius: height / 2,
        marginTop: 12,
      }}
    />
  );
};
