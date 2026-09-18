import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/cn";

// A code-built illustration of floating chart objects, echoing the products.
// Colors come from the theme in app/globals.css, so it restyles with the site.
// Each object floats gently; the rotation sits on an inner wrapper so it
// survives when animations are switched off (prefers-reduced-motion).

const colors = {
  accent: "var(--color-accent)",
  accentSoft: "var(--color-accent-soft)",
  ink: "var(--color-ink)",
  light: "var(--color-wordmark)",
  line: "var(--color-line)",
  muted: "var(--color-muted)",
} as const;

function Floating({
  className,
  rotate,
  delay = 0,
  children,
}: {
  className: string;
  rotate: number;
  delay?: number;
  children: ReactNode;
}) {
  const style: CSSProperties = { animationDelay: `${delay}s` };
  return (
    <div className={cn("absolute animate-float", className)} style={style}>
      <div className="h-full w-full" style={{ transform: `rotate(${rotate}deg)` }}>
        {children}
      </div>
    </div>
  );
}

const card = "h-full w-full shadow-float";

export function HeroVisual() {
  return (
    <div aria-hidden className="relative aspect-square w-[min(86vw,460px)] xl:w-[min(33vw,520px)]">
      {/* Line chart card (behind) */}
      <Floating className="top-[6%] left-0 z-0 aspect-[4/3] w-[34%]" rotate={-12} delay={-1.5}>
        <div className={cn(card, "rounded-2xl bg-white p-[9%]")}>
          <div className="h-1.5 w-1/2 rounded-full bg-card" />
          <div className="mt-1.5 h-1.5 w-1/3 rounded-full bg-card" />
          <svg viewBox="0 0 100 50" className="mt-[10%] w-full overflow-visible">
            <polyline
              points="0,42 16,34 30,38 46,20 62,26 78,10 100,14"
              fill="none"
              stroke={colors.accent}
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="78" cy="10" r="5" fill={colors.ink} />
          </svg>
        </div>
      </Floating>

      {/* Sankey card (behind) */}
      <Floating className="bottom-[10%] left-[1%] z-0 aspect-[4/3] w-[40%]" rotate={7} delay={-4}>
        <div className={cn(card, "rounded-2xl bg-night p-[8%]")}>
          <svg viewBox="0 0 120 90" className="h-full w-full">
            <rect x="0" y="6" width="6" height="26" rx="2" fill={colors.accentSoft} />
            <rect x="0" y="38" width="6" height="18" rx="2" fill={colors.light} />
            <rect x="0" y="62" width="6" height="22" rx="2" fill={colors.muted} />
            <rect x="114" y="10" width="6" height="40" rx="2" fill={colors.accentSoft} />
            <rect x="114" y="56" width="6" height="26" rx="2" fill={colors.light} />
            <g fill="none">
              <path
                d="M6 19C60 19 60 30 114 30"
                stroke={colors.accentSoft}
                strokeWidth="24"
                opacity="0.75"
              />
              <path
                d="M6 47C60 47 60 22 114 22"
                stroke={colors.light}
                strokeWidth="14"
                opacity="0.35"
              />
              <path
                d="M6 73C60 73 60 69 114 69"
                stroke={colors.light}
                strokeWidth="20"
                opacity="0.55"
              />
              <path
                d="M6 50C60 50 60 64 114 64"
                stroke={colors.muted}
                strokeWidth="6"
                opacity="0.8"
              />
            </g>
          </svg>
        </div>
      </Floating>

      {/* Main device with a bar chart */}
      <Floating className="top-[20%] left-[15%] z-10 aspect-[5/4] w-[70%]" rotate={-7}>
        <div className="relative h-full w-full rounded-3xl bg-linear-to-br from-accent-light via-accent to-accent-strong shadow-device">
          <div className="absolute inset-[8%] overflow-hidden rounded-2xl bg-screen shadow-screen">
            <div className="flex gap-1.5 px-[6%] pt-[5%]">
              <span className="size-2 rounded-full bg-accent" />
              <span className="size-2 rounded-full bg-card" />
              <span className="size-2 rounded-full bg-card" />
            </div>
            <svg viewBox="0 0 200 120" className="mt-[3%] w-full px-[6%]">
              {[20, 50, 80, 110].map((y) => (
                <line
                  key={y}
                  x1="0"
                  x2="200"
                  y1={y}
                  y2={y}
                  stroke={colors.line}
                  strokeWidth="1.5"
                />
              ))}
              {[
                { x: 8, h: 45, fill: colors.ink },
                { x: 40, h: 70, fill: colors.accent },
                { x: 72, h: 55, fill: colors.ink },
                { x: 104, h: 92, fill: colors.accent },
                { x: 136, h: 64, fill: colors.ink },
                { x: 168, h: 100, fill: colors.accent },
              ].map((bar) => (
                <rect
                  key={bar.x}
                  x={bar.x}
                  y={110 - bar.h}
                  width="22"
                  height={bar.h}
                  rx="4"
                  fill={bar.fill}
                />
              ))}
            </svg>
          </div>
        </div>
      </Floating>

      {/* Donut chart (front) */}
      <Floating className="top-[3%] right-[1%] z-20 aspect-square w-[30%]" rotate={10} delay={-2.5}>
        <div className={cn(card, "grid place-items-center rounded-3xl bg-white")}>
          <svg viewBox="0 0 100 100" className="w-[72%] -rotate-90">
            <circle cx="50" cy="50" r="34" fill="none" stroke={colors.line} strokeWidth="16" />
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke={colors.accent}
              strokeWidth="16"
              pathLength="100"
              strokeDasharray="55 45"
            />
            <circle
              cx="50"
              cy="50"
              r="34"
              fill="none"
              stroke={colors.ink}
              strokeWidth="16"
              pathLength="100"
              strokeDasharray="25 75"
              strokeDashoffset="-55"
            />
          </svg>
        </div>
      </Floating>

      {/* Org tree (front) */}
      <Floating
        className="right-[3%] bottom-[5%] z-20 aspect-square w-[31%]"
        rotate={-8}
        delay={-5.5}
      >
        <div className={cn(card, "rounded-3xl bg-screen p-[12%]")}>
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path
              d="M50 18V36M50 36H22V56M50 36H78V56M22 56H10V80M22 56H34V80M78 56H66V80M78 56H90V80"
              stroke={colors.ink}
              strokeWidth="3"
              fill="none"
            />
            <circle cx="50" cy="16" r="10" fill={colors.accent} />
            <circle cx="22" cy="54" r="7" fill={colors.ink} />
            <circle cx="78" cy="54" r="7" fill={colors.ink} />
            {[10, 34, 66, 90].map((cx) => (
              <circle
                key={cx}
                cx={cx}
                cy="84"
                r="6"
                fill={colors.light}
                stroke={colors.ink}
                strokeWidth="3"
              />
            ))}
          </svg>
        </div>
      </Floating>

      {/* Accent ring */}
      <Floating className="bottom-[1%] left-[36%] z-10 aspect-[4/1] w-[28%]" rotate={-4} delay={-3}>
        <div className="h-full w-full rounded-[50%] border-[10px] border-accent shadow-ring" />
      </Floating>

      {/* Pixel confetti */}
      <Floating className="top-[2%] left-[46%] z-10 size-4" rotate={0} delay={-1}>
        <div className="h-full w-full bg-accent" />
      </Floating>
      <Floating className="top-[58%] left-[-3%] z-10 size-3" rotate={0} delay={-2}>
        <div className="h-full w-full bg-ink" />
      </Floating>
      <Floating className="top-[48%] right-[-2%] z-10 size-5" rotate={0} delay={-3.5}>
        <div className="h-full w-full bg-accent-soft" />
      </Floating>
    </div>
  );
}
