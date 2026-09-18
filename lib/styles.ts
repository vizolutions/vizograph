// Class strings shared across sections.
// Colors, shadows and the page width live in app/globals.css.

import { cn } from "./cn";

/** Outer gutter of every full-width block, so panels line up down the page. */
export const pageGutter = "px-3 sm:px-4";

/** Surfaces a tile can wear. */
export const tileTones = {
  /** Frosted dark card: the default. */
  glass: "glass ring-1 ring-white/10",
  /** Slightly lifted solid card. */
  card: "bg-card ring-1 ring-white/10",
  /** Brand gradient, for the one highlighted item in a group. */
  accent: "bg-linear-to-br from-accent via-accent-deep to-accent-soft text-ground",
  /** Amber gradient, used sparingly. */
  amber: "bg-linear-to-br from-amber-soft to-amber text-ground",
} as const;

export type TileTone = keyof typeof tileTones;

/** Rounded surface used by every grid tile: tile("glass", "p-8"). */
export const tile = (tone: TileTone = "glass", className?: string) =>
  cn("rounded-4xl", tileTones[tone], className);

/** Hover behaviour for clickable tiles. */
export const hoverLift =
  "transition duration-300 hover:-translate-y-1 hover:shadow-lift hover:ring-accent/40";

/** Small pill label. */
export const chip = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";

/** Uppercase label above a heading. */
export const eyebrow = "text-xs font-semibold tracking-[0.2em] uppercase";
