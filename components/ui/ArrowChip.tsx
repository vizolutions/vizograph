import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

/** The circular arrow that sits inside a pill button, as in the reference. */
export function ArrowChip({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "panel";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-8 place-items-center rounded-full",
        tone === "ink" ? "bg-ink text-panel" : "bg-panel text-ink",
        className,
      )}
    >
      <ArrowUpRight className="size-4" />
    </span>
  );
}
