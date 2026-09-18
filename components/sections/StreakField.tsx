import { cn } from "@/lib/cn";

/**
 * The converging light streaks behind the hero and the closing panel.
 * Pure SVG: a fan of curves drawn in the logo's colours, blurred and faded.
 */
export function StreakField({
  className,
  flip = false,
}: {
  className?: string;
  /** Point the fan downwards instead of upwards. */
  flip?: boolean;
}) {
  // Curves fan out from a single point; each gets its own colour and opacity.
  const streaks = Array.from({ length: 24 }, (_, i) => {
    const spread = (i - 11.5) / 11.5; // -1 … 1
    const endX = 600 + spread * 900;
    const control = 600 + spread * 180;
    const color =
      i % 7 === 0
        ? "var(--color-amber)"
        : i % 3 === 0
          ? "var(--color-accent-soft)"
          : "var(--color-accent)";
    return {
      d: `M600 640 C ${control} 420, ${control + spread * 120} 220, ${endX} -40`,
      color,
      opacity: 0.2 + (1 - Math.abs(spread)) * 0.65,
      width: 1.2 + (1 - Math.abs(spread)) * 2.6,
    };
  });

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <svg
        viewBox="0 0 1200 640"
        preserveAspectRatio="xMidYMax slice"
        className={cn("h-full w-full animate-drift", flip && "rotate-180")}
      >
        <defs>
          <filter id="streak-blur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" />
          </filter>
          <linearGradient id="streak-fade" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="white" stopOpacity="0.9" />
            <stop offset="55%" stopColor="white" stopOpacity="0.35" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id="streak-mask">
            <rect width="1200" height="640" fill="url(#streak-fade)" />
          </mask>
        </defs>
        <g mask="url(#streak-mask)" filter="url(#streak-blur)" fill="none">
          {streaks.map((streak) => (
            <path
              key={streak.d}
              d={streak.d}
              stroke={streak.color}
              strokeWidth={streak.width}
              opacity={streak.opacity}
              strokeLinecap="round"
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
