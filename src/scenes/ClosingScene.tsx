import React from "react";
import {
  useCurrentFrame,
  interpolate,
  AbsoluteFill,
} from "remotion";
import { COLORS, FONTS } from "../theme";
import { Logo } from "../components/Logo";
import { OrangeLine } from "../components/OrangeLine";
import { Background } from "../components/Background";

/**
 * ESCENA DE CIERRE
 *
 * - Fondo blanco puro
 * - Logo T&L Guerrero centrado, version a color completa
 * - "Consultoria · Juridico · Contable" en azul marino
 * - Linea animada naranja inferior
 * - Fade-out suave al final
 */
export const ClosingScene: React.FC<{ durationInFrames: number }> = ({
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  // Fade-in at start
  const fadeIn = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  // Fade-out at end (last 30 frames = 1s)
  const fadeOut = interpolate(
    frame,
    [durationInFrames - 30, durationInFrames],
    [1, 0],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  const opacity = Math.min(fadeIn, fadeOut);

  // Tagline reveal
  const taglineOpacity = interpolate(frame, [24, 42], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const taglineY = interpolate(frame, [24, 42], [14, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ opacity }}>
      <Background>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Logo a color completa */}
          <Logo fadeInDuration={20} size={360} />

          {/* Tagline */}
          <div
            style={{
              marginTop: 36,
              opacity: taglineOpacity,
              transform: `translateY(${taglineY}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 600,
                fontSize: 36,
                color: COLORS.navy,
                margin: 0,
                letterSpacing: 6,
              }}
            >
              CONSULTORÍA &nbsp;·&nbsp; JURÍDICO &nbsp;·&nbsp; CONTABLE
            </p>

            {/* Linea animada naranja inferior */}
            <OrangeLine startAt={36} duration={22} maxWidth={520} height={4} />
          </div>
        </div>
      </Background>
    </AbsoluteFill>
  );
};
