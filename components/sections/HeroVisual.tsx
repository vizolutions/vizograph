const accent = "var(--color-accent)";
const accentSoft = "var(--color-accent-soft)";
const amber = "var(--color-amber)";
const line = "var(--color-line)";

const bars = [38, 62, 48, 80, 55, 92, 70];

// Each slice carries the offset of the slices before it, so nothing is
// mutated while rendering.
const donut = [
  { value: 46, color: accentSoft },
  { value: 28, color: accent },
  { value: 16, color: amber },
  { value: 10, color: line },
].map((slice, i, all) => ({
  ...slice,
  offset: all.slice(0, i).reduce((sum, s) => sum + s.value, 0),
}));

/** Placeholder row in the mockup's sidebar. */
function Row({ w }: { w: string }) {
  return <span className="block h-2 rounded-full bg-ink/10" style={{ width: w }} />;
}

/**
 * A dashboard mockup built entirely in code — the kind of thing we design,
 * not a screenshot of a real product.
 */
export function HeroVisual() {
  return (
    <div
      aria-hidden
      className="relative w-full overflow-hidden rounded-[2rem] p-3 shadow-panel ring-1 ring-ink/10 glass sm:p-4"
    >
      <div className="grid gap-3 sm:grid-cols-[13rem_1fr]">
        {/* Sidebar */}
        <div className="hidden flex-col gap-4 rounded-3xl bg-ink/[0.03] p-5 ring-1 ring-ink/8 sm:flex">
          <div className="flex items-center gap-2">
            <span className="size-6 rounded-lg bg-linear-to-br from-accent to-accent-soft" />
            <Row w="66%" />
          </div>
          <div className="mt-2 flex flex-col gap-3">
            <span className="flex items-center gap-2 rounded-xl bg-ink/[0.06] px-3 py-2">
              <span className="size-2 rounded-full bg-accent-soft" />
              <Row w="60%" />
            </span>
            {["52%", "44%", "58%", "38%"].map((w) => (
              <span key={w} className="flex items-center gap-2 px-3 py-2">
                <span className="size-2 rounded-full bg-ink/15" />
                <Row w={w} />
              </span>
            ))}
          </div>
        </div>

        {/* Panels */}
        <div className="grid gap-3">
          <div className="grid gap-3 sm:grid-cols-[1fr_1.4fr]">
            {/* Bar chart */}
            <div className="rounded-3xl bg-ink/[0.03] p-5 ring-1 ring-ink/8">
              <Row w="45%" />
              <svg viewBox="0 0 160 90" className="mt-5 w-full">
                {bars.map((h, i) => (
                  <rect
                    key={h + i}
                    x={i * 22 + 4}
                    y={90 - h}
                    width="12"
                    height={h}
                    rx="4"
                    fill={i === 5 ? accentSoft : "rgb(11 18 32 / 0.10)"}
                  />
                ))}
              </svg>
            </div>

            {/* Line chart */}
            <div className="rounded-3xl bg-ink/[0.03] p-5 ring-1 ring-ink/8">
              <Row w="35%" />
              <svg viewBox="0 0 260 90" className="mt-5 w-full overflow-visible">
                {[22, 45, 68].map((y) => (
                  <line key={y} x1="0" x2="260" y1={y} y2={y} stroke={line} strokeWidth="1" />
                ))}
                <path
                  d="M0 68 C 30 62, 45 40, 70 44 S 110 70, 135 52 S 175 18, 200 30 S 240 16, 260 12"
                  fill="none"
                  stroke={accentSoft}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 78 C 35 74, 52 66, 78 70 S 120 84, 150 72 S 190 52, 215 58 S 245 46, 260 42"
                  fill="none"
                  stroke={accent}
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <circle cx="200" cy="30" r="4" fill={amber} />
              </svg>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-[1.2fr_1fr]">
            {/* Donut + legend */}
            <div className="flex items-center gap-5 rounded-3xl bg-ink/[0.03] p-5 ring-1 ring-ink/8">
              <svg viewBox="0 0 100 100" className="size-24 shrink-0 -rotate-90">
                {donut.map((slice) => (
                  <circle
                    key={slice.color}
                    cx="50"
                    cy="50"
                    r="34"
                    fill="none"
                    stroke={slice.color}
                    strokeWidth="14"
                    pathLength="100"
                    strokeDasharray={`${slice.value} ${100 - slice.value}`}
                    strokeDashoffset={-slice.offset}
                  />
                ))}
              </svg>
              <div className="flex w-full flex-col gap-2.5">
                {donut.map((slice) => (
                  <span key={slice.color} className="flex items-center gap-2">
                    <span className="size-2 rounded-full" style={{ background: slice.color }} />
                    <Row w={`${slice.value + 30}%`} />
                  </span>
                ))}
              </div>
            </div>

            {/* Sparkline tiles */}
            <div className="grid gap-3">
              {[accentSoft, amber].map((color) => (
                <div
                  key={color}
                  className="flex items-center justify-between gap-4 rounded-3xl bg-ink/[0.03] p-5 ring-1 ring-ink/8"
                >
                  <span className="flex flex-col gap-2">
                    <Row w="3.5rem" />
                    <span
                      className="block h-4 w-16 rounded-md"
                      style={{ background: color, opacity: 0.85 }}
                    />
                  </span>
                  <svg viewBox="0 0 90 40" className="h-10 w-24">
                    <path
                      d="M0 32 L15 26 L30 30 L45 14 L60 20 L75 8 L90 12"
                      fill="none"
                      stroke={color}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
