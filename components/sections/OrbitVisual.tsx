import { about } from "@/lib/content";

/**
 * A glowing data sphere with the story's milestones set on its orbit.
 * Decorative: the same dates are listed as real text in the cards below.
 */
export function OrbitVisual() {
  const positions = [
    "top-[2%] left-1/2 -translate-x-1/2",
    "top-[62%] left-[1%] sm:left-[4%]",
    "top-[62%] right-[1%] sm:right-[4%]",
  ];

  // Columns of falling data inside the sphere.
  const columns = Array.from({ length: 22 }, (_, i) => ({
    x: 6 + i * 4.3,
    cells: Array.from({ length: 9 }, (_, j) => ({
      y: 6 + j * 10.5 + (i % 3) * 3,
      on: (i + j) % 4 === 0,
    })),
  }));

  return (
    <div aria-hidden className="relative mx-auto aspect-square w-[min(88vw,32rem)]">
      {/* orbit rings */}
      <div className="absolute inset-[4%] rounded-full border border-white/[0.08]" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-white/[0.06]" />

      {/* halo */}
      <div className="absolute inset-[22%] rounded-full bg-accent/25 blur-3xl" />

      <svg viewBox="0 0 100 100" className="absolute inset-[24%]">
        <defs>
          <radialGradient id="sphere-face" cx="35%" cy="28%">
            <stop offset="0%" stopColor="#0f1a2c" />
            <stop offset="70%" stopColor="#070b14" />
            <stop offset="100%" stopColor="#05070d" />
          </radialGradient>
          <linearGradient id="sphere-rim" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--color-accent-soft)" />
            <stop offset="55%" stopColor="var(--color-accent)" />
            <stop offset="100%" stopColor="var(--color-accent-deep)" />
          </linearGradient>
          <clipPath id="sphere-clip">
            <circle cx="50" cy="50" r="46" />
          </clipPath>
        </defs>

        <circle cx="50" cy="50" r="46" fill="url(#sphere-face)" />

        {/* data rain */}
        <g clipPath="url(#sphere-clip)">
          {columns.map((column) =>
            column.cells.map((cell) => (
              <rect
                key={`${column.x}-${cell.y}`}
                x={column.x}
                y={cell.y}
                width="1.6"
                height="4"
                rx="0.8"
                fill={cell.on ? "var(--color-accent-soft)" : "var(--color-accent)"}
                opacity={cell.on ? 0.55 : 0.16}
              />
            )),
          )}
        </g>

        {/* rim light */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#sphere-rim)"
          strokeWidth="2.5"
          opacity="0.95"
        />
        <circle cx="50" cy="50" r="46" fill="none" stroke="var(--color-ground)" strokeWidth="0.5" />
      </svg>

      {/* milestone pills on the ring */}
      {about.timeline.map((item, i) => (
        <span
          key={item.date}
          className={`absolute glass ${positions[i]} rounded-full px-4 py-2 text-sm font-medium text-ink ring-1 ring-white/15`}
        >
          {item.date}
        </span>
      ))}
    </div>
  );
}
