// Class strings shared across sections.
// Colors, shadows and the page width live in app/globals.css.

import { cn } from "./cn";

/** Outer gutter of every full-width block, so panels line up down the page. */
export const pageGutter = "px-3 sm:px-4";

/** Surfaces a bento tile can wear. */
export const tileTones = {
  panel: "bg-panel ring-1 ring-black/5",
  card: "bg-card/60 ring-1 ring-black/5",
  dark: "bg-night text-white",
  accent: "bg-linear-to-br from-accent-light via-accent to-accent-strong text-ink",
} as const;

export type TileTone = keyof typeof tileTones;

/** Rounded surface used by every grid tile: tile("dark", "p-8"). */
export const tile = (tone: TileTone = "panel", className?: string) =>
  cn("rounded-4xl", tileTones[tone], className);

/** Hover behaviour for clickable tiles. */
export const hoverLift = "transition duration-300 hover:-translate-y-1 hover:shadow-lift";

/** Small pill label, e.g. "Open source" or "Category: Developer Tools". */
export const chip = "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium";
