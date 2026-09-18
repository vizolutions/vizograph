import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/** The small pill label the reference sets above every heading. */
export function Badge({
  icon: Icon,
  children,
  tone = "light",
  className,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
  /** `onDeep` is the translucent version used on the teal panel. */
  tone?: "light" | "onDeep";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide",
        tone === "light"
          ? "bg-accent-ink/8 text-accent-ink ring-1 ring-accent-ink/15"
          : "bg-panel/15 text-panel ring-1 ring-panel/25",
        className,
      )}
    >
      {Icon && <Icon className="size-3.5" aria-hidden />}
      {children}
    </span>
  );
}
