/**
 * A wordless gallery of the kinds of visualization we build: area and line
 * charts, a donut, a radial gauge, a sankey, bars, a hierarchy and a map.
 * Everything is drawn in code from the theme tokens — no labels, no numbers.
 */

const accent = "var(--color-accent)";
const accentSoft = "var(--color-accent-soft)";
const amber = "var(--color-amber)";
const deep = "var(--color-deep)";
const line = "var(--color-line)";

function Panel({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={`flex h-32 items-center justify-center rounded-2xl bg-card/70 p-3 sm:h-40 sm:p-4 lg:h-full ${className}`}
    >
      {children}
    </div>
  );
}

/** Area chart with a second, dashed series. */
function AreaChart() {
  return (
    <svg viewBox="0 0 320 190" className="h-full max-h-56 w-full" aria-hidden>
      <defs>
        <linearGradient id="hv-area" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={accentSoft} stopOpacity="0.38" />
          <stop offset="100%" stopColor={accentSoft} stopOpacity="0" />
        </linearGradient>
      </defs>
      {[38, 82, 126, 170].map((y) => (
        <line key={y} x1="0" x2="320" y1={y} y2={y} stroke={line} strokeWidth="1" />
      ))}
      <path
        d="M0 148 C 28 142, 44 96, 72 106 S 112 152, 140 112 S 182 44, 210 68 S 254 34, 282 42 S 308 16, 320 12 L320 190 L0 190 Z"
        fill="url(#hv-area)"
      />
      <path
        d="M0 148 C 28 142, 44 96, 72 106 S 112 152, 140 112 S 182 44, 210 68 S 254 34, 282 42 S 308 16, 320 12"
        fill="none"
        stroke={accentSoft}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M0 168 C 32 162, 52 146, 84 152 S 128 176, 160 156 S 204 118, 234 128 S 288 104, 320 92"
        fill="none"
        stroke={accent}
        strokeWidth="3"
        strokeDasharray="6 6"
        strokeLinecap="round"
        opacity="0.85"
      />
      <circle cx="282" cy="42" r="5" fill={amber} />
      <circle cx="140" cy="112" r="4" fill={accentSoft} />
    </svg>
  );
}

/** Donut. */
function Donut() {
  const slices = [
    { value: 44, color: accentSoft },
    { value: 26, color: accent },
    { value: 18, color: amber },
    { value: 12, color: line },
  ].map((slice, i, all) => ({
    ...slice,
    offset: all.slice(0, i).reduce((sum, s) => sum + s.value, 0),
  }));

  return (
    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90" aria-hidden>
      {slices.map((slice) => (
        <circle
          key={slice.color}
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke={slice.color}
          strokeWidth="17"
          pathLength="100"
          strokeDasharray={`${slice.value} ${100 - slice.value}`}
          strokeDashoffset={-slice.offset}
        />
      ))}
    </svg>
  );
}

/** Radial gauge. */
function Gauge() {
  return (
    <svg viewBox="0 0 100 70" className="h-full w-full" aria-hidden>
      <path
        d="M12 62 A 38 38 0 0 1 88 62"
        fill="none"
        stroke={line}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <path
        d="M12 62 A 38 38 0 0 1 74 33"
        fill="none"
        stroke={deep}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="74" cy="33" r="5" fill={amber} />
    </svg>
  );
}

/** Sankey ribbons. */
function Sankey() {
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden>
      <g fill="none">
        <path d="M10 26C70 26 70 34 150 34" stroke={accentSoft} strokeWidth="22" opacity="0.85" />
        <path d="M10 58C70 58 70 26 150 22" stroke={accent} strokeWidth="14" opacity="0.7" />
        <path d="M10 82C70 82 70 74 150 78" stroke={amber} strokeWidth="18" opacity="0.8" />
        <path d="M10 62C70 62 70 62 150 60" stroke={line} strokeWidth="8" />
      </g>
      <rect x="2" y="12" width="7" height="30" rx="3" fill={accentSoft} />
      <rect x="2" y="48" width="7" height="22" rx="3" fill={accent} />
      <rect x="2" y="72" width="7" height="22" rx="3" fill={amber} />
      <rect x="151" y="10" width="7" height="30" rx="3" fill={accentSoft} />
      <rect x="151" y="52" width="7" height="34" rx="3" fill={deep} />
    </svg>
  );
}

/** Grouped bars. */
function Bars() {
  const bars = [
    [30, 48],
    [52, 34],
    [40, 62],
    [66, 44],
    [48, 72],
  ];
  return (
    <svg viewBox="0 0 160 100" className="h-full w-full" aria-hidden>
      <line x1="0" x2="160" y1="92" y2="92" stroke={line} strokeWidth="1.5" />
      {bars.map(([a, b], i) => (
        <g key={`${a}-${b}`}>
          <rect x={i * 31 + 6} y={92 - a} width="11" height={a} rx="4" fill={accent} />
          <rect x={i * 31 + 19} y={92 - b} width="11" height={b} rx="4" fill={accentSoft} />
        </g>
      ))}
    </svg>
  );
}

/** Hierarchy / org tree. */
function Tree() {
  return (
    <svg viewBox="0 0 120 100" className="h-full w-full" aria-hidden>
      <g stroke={line} strokeWidth="2.5" fill="none">
        <path d="M60 24V42M60 42H26V58M60 42h34v16M26 58v10M94 58v10M60 58v10" />
      </g>
      <rect x="44" y="8" width="32" height="16" rx="6" fill={deep} />
      <rect x="12" y="58" width="28" height="14" rx="6" fill={accent} />
      <rect x="46" y="58" width="28" height="14" rx="6" fill={accentSoft} />
      <rect x="80" y="58" width="28" height="14" rx="6" fill={accent} />
      {[18, 52, 86].map((x) => (
        <rect key={x} x={x} y="82" width="20" height="10" rx="4" fill={line} />
      ))}
    </svg>
  );
}

/** Choropleth-style hex map. */
function HexMap() {
  const rows = [
    [0, 1, 2, 1, 0],
    [1, 3, 2, 3, 1],
    [2, 2, 3, 1, 2],
    [0, 1, 2, 2, 0],
  ];
  const fills = [line, `color-mix(in oklab, ${accent} 35%, white)`, accent, deep];

  return (
    <svg viewBox="0 0 120 92" className="h-full w-full" aria-hidden>
      {rows.map((row, y) =>
        row.map((level, x) => (
          <rect
            key={`${x}-${y}`}
            x={x * 23 + (y % 2 ? 11 : 0) + 4}
            y={y * 22 + 4}
            width="19"
            height="18"
            rx="6"
            fill={fills[level]}
          />
        )),
      )}
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div
      aria-hidden
      className="w-full overflow-hidden rounded-[2rem] bg-panel p-3 shadow-lift ring-1 ring-ink/8 sm:p-4"
    >
      <div className="grid grid-cols-2 gap-3 lg:auto-rows-fr lg:grid-cols-4">
        <Panel className="col-span-2 h-40 sm:h-52 lg:h-full">
          <AreaChart />
        </Panel>
        <Panel>
          <Donut />
        </Panel>
        <Panel>
          <Gauge />
        </Panel>

        <Panel className="col-span-2 lg:col-span-1">
          <Sankey />
        </Panel>
        <Panel>
          <Bars />
        </Panel>
        <Panel>
          <Tree />
        </Panel>
        <Panel>
          <HexMap />
        </Panel>
      </div>
    </div>
  );
}
