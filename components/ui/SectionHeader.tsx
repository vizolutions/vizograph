import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  /** Buttons or links shown opposite the heading. */
  action?: ReactNode;
  className?: string;
};

/** Heading block used at the top of a section inside a page. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  action,
  className,
}: Props) {
  const dark = tone === "dark";

  return (
    <div
      className={cn("flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between", className)}
    >
      <div className="max-w-2xl">
        <p
          className={cn(
            "font-pixel text-xs tracking-wider uppercase",
            dark ? "text-accent-soft" : "text-accent-ink",
          )}
        >
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-4xl leading-[0.95] font-medium tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {subtitle && (
          <p className={cn("mt-5 text-lg leading-relaxed", dark ? "text-white/70" : "text-muted")}>
            {subtitle}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}
