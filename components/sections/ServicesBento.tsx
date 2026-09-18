"use client";

import { Brain, ChartColumn, MonitorSmartphone } from "lucide-react";
import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { services } from "@/lib/content";
import { eyebrow, tile } from "@/lib/styles";

const icons = {
  chart: ChartColumn,
  dashboard: MonitorSmartphone,
  ai: Brain,
};

type ServiceKind = keyof typeof icons;

const accent = "var(--color-accent-soft)";
const cyan = "var(--color-accent)";
const amber = "var(--color-amber)";

/** A small illustration per service, drawn in code. */
function ServiceVisual({ kind }: { kind: ServiceKind }) {
  if (kind === "chart") {
    return (
      <svg viewBox="0 0 220 150" className="w-full" aria-hidden>
        {[40, 75, 110].map((y) => (
          <line key={y} x1="10" x2="210" y1={y} y2={y} stroke="var(--color-line)" strokeWidth="1" />
        ))}
        {[
          { x: 20, h: 54, c: cyan },
          { x: 58, h: 86, c: accent },
          { x: 96, h: 40, c: cyan },
          { x: 134, h: 104, c: accent },
          { x: 172, h: 68, c: amber },
        ].map((bar) => (
          <rect
            key={bar.x}
            x={bar.x}
            y={130 - bar.h}
            width="24"
            height={bar.h}
            rx="8"
            fill={bar.c}
            opacity="0.9"
          />
        ))}
      </svg>
    );
  }

  if (kind === "dashboard") {
    return (
      <svg viewBox="0 0 220 150" className="w-full" aria-hidden>
        <rect x="10" y="12" width="200" height="126" rx="14" fill="rgb(255 255 255 / 0.04)" />
        <rect x="22" y="26" width="60" height="44" rx="10" fill={cyan} opacity="0.85" />
        <rect x="90" y="26" width="108" height="44" rx="10" fill="rgb(255 255 255 / 0.08)" />
        <path
          d="M96 60 C 112 44, 126 56, 140 46 S 170 30, 192 36"
          fill="none"
          stroke={accent}
          strokeWidth="3"
          strokeLinecap="round"
        />
        <rect x="22" y="80" width="176" height="12" rx="6" fill="rgb(255 255 255 / 0.08)" />
        <rect x="22" y="80" width="104" height="12" rx="6" fill={accent} opacity="0.8" />
        <rect x="22" y="102" width="176" height="12" rx="6" fill="rgb(255 255 255 / 0.08)" />
        <rect x="22" y="102" width="62" height="12" rx="6" fill={amber} opacity="0.85" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 150" className="w-full" aria-hidden>
      <g stroke="var(--color-line)" strokeWidth="1.5" fill="none">
        <path d="M110 34V62M110 62H62v26M110 62h48v26M62 114v-8M158 114v-8M110 88v26" />
      </g>
      <circle cx="110" cy="28" r="14" fill={accent} />
      <circle cx="62" cy="96" r="10" fill={cyan} opacity="0.9" />
      <circle cx="158" cy="96" r="10" fill={cyan} opacity="0.9" />
      <circle cx="110" cy="122" r="10" fill={amber} />
      {[36, 84, 132, 180].map((x) => (
        <circle key={x} cx={x} cy="140" r="4" fill="rgb(255 255 255 / 0.25)" />
      ))}
    </svg>
  );
}

export function ServicesBento() {
  const [active, setActive] = useState(0);

  return (
    <Section id="services">
      <SectionHeader
        eyebrow={services.eyebrow}
        title={services.heading}
        subtitle={services.subheading}
        className="mb-14"
      />

      <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
        {/* Selectable list */}
        <ul className="flex flex-col gap-3">
          {services.items.map((item, i) => {
            const Icon = icons[item.icon];
            const selected = i === active;
            return (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-expanded={selected}
                  className={cn(
                    tile(
                      "glass",
                      "group relative isolate w-full overflow-hidden p-6 text-left sm:p-7",
                    ),
                    "transition-[box-shadow,transform] duration-500 ease-out",
                    selected ? "shadow-glow-accent" : "hover:-translate-y-0.5 hover:ring-accent/40",
                  )}
                >
                  {/* the gradient fades in behind the content instead of swapping */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute inset-0 -z-10 bg-linear-to-br from-accent via-accent-deep to-accent-soft transition-opacity duration-500 ease-out",
                      selected ? "opacity-100" : "opacity-0",
                    )}
                  />

                  <span className="flex items-center gap-4">
                    <span
                      className={cn(
                        "grid size-11 shrink-0 place-items-center rounded-2xl transition-colors duration-500",
                        selected ? "bg-ground/15 text-ground" : "bg-white/[0.06] text-accent-soft",
                      )}
                    >
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span
                      className={cn(
                        "font-display text-lg font-semibold tracking-tight transition-colors duration-500 sm:text-xl",
                        selected ? "text-ground" : "text-ink",
                      )}
                    >
                      {item.title}
                    </span>
                  </span>

                  {/* the description slides open; max-height is generous enough
                      for the longest copy at narrow widths */}
                  <span
                    className={cn(
                      "block overflow-hidden transition-[max-height,opacity] duration-500 ease-out",
                      selected ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                    )}
                  >
                    <span className="mt-4 block max-w-lg leading-relaxed text-ground/80">
                      {item.text}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Visual for the selected service: all three are rendered and cross-faded */}
        <div className={tile("card", "relative isolate overflow-hidden p-8 sm:p-10")}>
          <div
            aria-hidden
            className="absolute -top-20 -right-16 size-56 rounded-full bg-accent/20 blur-3xl"
          />

          <div className="relative grid">
            {services.items.map((item, i) => (
              <div
                key={item.title}
                aria-hidden={i !== active}
                className={cn(
                  "col-start-1 row-start-1 transition-[opacity,transform] duration-500 ease-out",
                  i === active
                    ? "translate-y-0 opacity-100"
                    : "pointer-events-none translate-y-3 opacity-0",
                )}
              >
                <p className={`${eyebrow} text-accent-soft`}>{item.title}</p>
                <div className="mt-8">
                  <ServiceVisual kind={item.icon} />
                </div>
                <p className="mt-8 max-w-md leading-relaxed text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
