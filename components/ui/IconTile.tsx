import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

const tileSizes = {
  sm: "size-12",
  md: "size-14",
} as const;

const iconSizes = {
  sm: "size-5",
  md: "size-6",
} as const;

/** Rounded gradient tile holding a single icon. */
export function IconTile({
  icon: Icon,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof tileSizes;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "grid place-items-center rounded-2xl bg-linear-to-br from-accent-soft to-accent text-ink shadow-accent-sm",
        tileSizes[size],
        className,
      )}
    >
      <Icon className={iconSizes[size]} aria-hidden />
    </span>
  );
}
