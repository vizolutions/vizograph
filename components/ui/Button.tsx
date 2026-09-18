import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,box-shadow,filter,color] disabled:opacity-60";

const variants = {
  /** Solid dark pill, the highest-contrast option and the default. */
  contrast: "bg-ink text-panel shadow-panel hover:bg-ink/90",
  /** Quiet frosted button. */
  glass: "glass text-ink ring-1 ring-ink/12 hover:ring-ink/25",
  /** White pill, for use on the teal panel. */
  onDeep: "bg-panel text-ink shadow-panel hover:bg-panel/90",
  /** Outlined pill, for use on the teal panel. */
  onDeepOutline: "text-panel ring-1 ring-panel/40 hover:bg-panel/10",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3 text-base",
  /** Leaves room for the circular arrow chip on the right. */
  pill: "py-2 pr-2 pl-6 text-base",
} as const;

type StyleProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

type ButtonProps = StyleProps &
  (
    | ({ href: string } & ComponentPropsWithoutRef<"a">)
    | ({ href?: never } & ComponentPropsWithoutRef<"button">)
  );

/**
 * Renders a real button, or a link when given `href`.
 * Links inside the site route client-side; external ones are plain anchors.
 */
export function Button({ variant = "contrast", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (typeof props.href === "string") {
    const anchorProps = props as ComponentPropsWithoutRef<"a"> & { href: string };
    const internal = anchorProps.href.startsWith("/") || anchorProps.href.startsWith("#");
    if (internal) return <Link {...anchorProps} className={classes} />;
    return <a className={classes} {...anchorProps} />;
  }

  const { type = "button", ...rest } = props as ComponentPropsWithoutRef<"button">;
  return <button type={type} className={classes} {...rest} />;
}
