import React from "react";
import {
  useCurrentFrame,
  interpolate,
  AbsoluteFill,
} from "remotion";
import { COLORS, FONTS } from "../theme";
import { Logo, Watermark } from "../components/Logo";
import { OrangeLine } from "../components/OrangeLine";
import { Background } from "../components/Background";

/**
 * PORTADA — Escena 1 (0:00 - 0:04 = 120 frames @ 30fps)
 *
 * - Fondo blanco puro con gradiente sutil
 * - Logo centrado con fade-in suave (0.8s = 24 frames)
 * - Titulo "Introduccion" debajo, bold 800, azul marino
 * - Subrayado naranja animado expandiéndose de izquierda a derecha
 * - Watermark esquina inferior derecha
 */
export const CoverScene: React.FC = () => {
  const frame = useCurrentFrame();

  // Logo fade-in: frames 0-24 (0.8s)
  // Title appears after logo: starts at frame 28
  const titleOpacity = interpolate(frame, [28, 46], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [28, 46], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Subtle pulse on idle (after everything is visible)
  const pulse = interpolate(
    frame,
    [80, 100, 120],
    [1, 1.008, 1],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill>
      <Background>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transform: `scale(${pulse})`,
          }}
        >
          {/* Logo */}
          <Logo fadeInDuration={24} size={340} />

          {/* Titulo "Introduccion" */}
          <div
            style={{
              marginTop: 32,
              opacity: titleOpacity,
              transform: `translateY(${titleY}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                fontFamily: FONTS.heading,
                fontWeight: 800,
                fontSize: 64,
                color: COLORS.navy,
                margin: 0,
                letterSpacing: 2,
              }}
            >
              Introducción
            </h1>

            {/* Linea divisoria naranja: expande a partir del frame 40 */}
            <OrangeLine startAt={40} duration={18} maxWidth={280} height={4} />
          </div>
        </div>

        <Watermark />
      </Background>
    </AbsoluteFill>
  );
};
