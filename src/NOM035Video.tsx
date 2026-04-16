import React from "react";
import {
  AbsoluteFill,
  Audio,
  Sequence,
  staticFile,
} from "remotion";
import { CoverScene } from "./scenes/CoverScene";
import { ContentScene } from "./scenes/ContentScene";
import { ClosingScene } from "./scenes/ClosingScene";
import { FadeTransition } from "./components/FadeTransition";
import { COLORS } from "./theme";

/**
 * NOM-035 Video Institucional — T&L Guerrero
 *
 * Estructura de escenas sincronizadas con audio de narración.
 * Duración total: basada en el audio (~60s estimado, ajustar con TOTAL_FRAMES).
 *
 * Cada escena usa FadeTransition para transiciones suaves fade-through-white.
 */

// ─── Timing (frames @ 30fps) ───────────────────────────────────
// Adjust these once the actual audio duration is known.
const FPS = 30;

const SCENES = [
  { id: "cover", start: 0, duration: 4 * FPS }, // 0:00 - 0:04
  { id: "que-es", start: 4 * FPS, duration: 8 * FPS }, // 0:04 - 0:12
  { id: "objetivo", start: 12 * FPS, duration: 8 * FPS }, // 0:12 - 0:20
  { id: "factores", start: 20 * FPS, duration: 8 * FPS }, // 0:20 - 0:28
  { id: "obligaciones", start: 28 * FPS, duration: 8 * FPS }, // 0:28 - 0:36
  { id: "beneficios", start: 36 * FPS, duration: 8 * FPS }, // 0:36 - 0:44
  { id: "tlguerrero", start: 44 * FPS, duration: 8 * FPS }, // 0:44 - 0:52
  { id: "closing", start: 52 * FPS, duration: 5 * FPS }, // 0:52 - 0:57
] as const;

export const TOTAL_DURATION =
  SCENES[SCENES.length - 1].start + SCENES[SCENES.length - 1].duration;

export const NOM035Video: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.white }}>
      {/* ── Audio narración ───────────────────────────────────── */}
      <Audio src={staticFile("audio/narration.mp3")} volume={1} />

      {/* ── Escena 1: Portada ─────────────────────────────────── */}
      <Sequence from={SCENES[0].start} durationInFrames={SCENES[0].duration}>
        <FadeTransition durationInFrames={SCENES[0].duration}>
          <CoverScene />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 2: ¿Qué es la NOM-035? ────────────────────── */}
      <Sequence from={SCENES[1].start} durationInFrames={SCENES[1].duration}>
        <FadeTransition durationInFrames={SCENES[1].duration}>
          <ContentScene
            title="¿Qué es la NOM-035?"
            bullets={[
              "Norma Oficial Mexicana",
              "Prevención de factores de riesgo psicosocial",
              "Entornos laborales favorables y saludables",
            ]}
          />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 3: Objetivo ────────────────────────────────── */}
      <Sequence from={SCENES[2].start} durationInFrames={SCENES[2].duration}>
        <FadeTransition durationInFrames={SCENES[2].duration}>
          <ContentScene
            title="Objetivo"
            bullets={[
              "Identificar y analizar factores de riesgo psicosocial",
              "Promover un entorno organizacional favorable",
              "Proteger la salud mental de los trabajadores",
            ]}
          />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 4: Factores de Riesgo ──────────────────────── */}
      <Sequence from={SCENES[3].start} durationInFrames={SCENES[3].duration}>
        <FadeTransition durationInFrames={SCENES[3].duration}>
          <ContentScene
            title="Factores de Riesgo"
            bullets={[
              "Cargas de trabajo excesivas",
              "Jornadas laborales prolongadas",
              "Liderazgo y relaciones negativas",
              "Violencia laboral",
            ]}
          />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 5: Obligaciones del Patrón ─────────────────── */}
      <Sequence from={SCENES[4].start} durationInFrames={SCENES[4].duration}>
        <FadeTransition durationInFrames={SCENES[4].duration}>
          <ContentScene
            title="Obligaciones del Patrón"
            bullets={[
              "Establecer una política de prevención",
              "Aplicar cuestionarios y evaluaciones",
              "Implementar medidas de control",
              "Practicar exámenes médicos cuando proceda",
            ]}
          />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 6: Beneficios ──────────────────────────────── */}
      <Sequence from={SCENES[5].start} durationInFrames={SCENES[5].duration}>
        <FadeTransition durationInFrames={SCENES[5].duration}>
          <ContentScene
            title="Beneficios"
            bullets={[
              "Mayor productividad y compromiso",
              "Reducción del ausentismo",
              "Cumplimiento normativo legal",
              "Mejor clima organizacional",
            ]}
          />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 7: T&L Guerrero te acompaña ────────────────── */}
      <Sequence from={SCENES[6].start} durationInFrames={SCENES[6].duration}>
        <FadeTransition durationInFrames={SCENES[6].duration}>
          <ContentScene
            title="T&L Guerrero te acompaña"
            bullets={[
              "Diagnóstico integral de cumplimiento",
              "Aplicación y análisis de cuestionarios",
              "Diseño de políticas de prevención",
              "Acompañamiento legal y contable",
            ]}
          />
        </FadeTransition>
      </Sequence>

      {/* ── Escena 8: Cierre ──────────────────────────────────── */}
      <Sequence from={SCENES[7].start} durationInFrames={SCENES[7].duration}>
        <ClosingScene durationInFrames={SCENES[7].duration} />
      </Sequence>
    </AbsoluteFill>
  );
};
