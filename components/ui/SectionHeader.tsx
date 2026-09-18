import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { eyebrow as eyebrowClass } from "@/lib/styles";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  /** Most section headings are centred; left is used where a row needs balance. */
  align?: "center" | "left";
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
  className,
}: Props) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        centered
          ? "flex flex-col items-center text-center"
          : "flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between",
        className,
      )}
    >
      <div className={cn(centered ? "max-w-3xl" : "max-w-2xl")}>
        <p className={cn(eyebrowClass, "text-accent-ink")}>{eyebrow}</p>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed text-muted",
              centered && "mx-auto max-w-2xl",
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className={cn(centered && "mt-8")}>{action}</div>}
    </div>
  );
}
