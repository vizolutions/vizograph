import { twMerge } from "tailwind-merge";

/**
 * Joins class names and lets later ones win over earlier ones:
 * cn("inline-flex", "hidden") -> "hidden", cn("p-4", isBig && "p-8") -> "p-8".
 * Without this, two classes setting the same property fight over CSS order.
 */
export function cn(...classes: (string | false | null | undefined)[]) {
  return twMerge(classes.filter(Boolean).join(" "));
}
