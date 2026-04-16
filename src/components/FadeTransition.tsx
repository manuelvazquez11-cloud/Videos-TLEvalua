import React from "react";
import { useCurrentFrame, interpolate, AbsoluteFill } from "remotion";

type FadeTransitionProps = {
  children: React.ReactNode;
  durationInFrames: number;
  /** Transition duration in frames (default 15 = 0.5s) */
  transitionFrames?: number;
};

/**
 * Wraps a scene with smooth fade-through-white transitions.
 * Fades in at start, fades out at end.
 */
export const FadeTransition: React.FC<FadeTransitionProps> = ({
  children,
  durationInFrames,
  transitionFrames = 15,
}) => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, transitionFrames], [0, 1], {
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(
    frame,
    [durationInFrames - transitionFrames, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  return <AbsoluteFill style={{ opacity }}>{children}</AbsoluteFill>;
};
