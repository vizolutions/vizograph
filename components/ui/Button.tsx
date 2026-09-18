import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-[background-color,box-shadow,filter,color] disabled:opacity-60";

const variants = {
  /** Main call to action: the logo's cyan-to-teal gradient. */
  accent:
    "bg-linear-to-r from-accent via-accent-deep to-accent-soft text-ground shadow-glow-accent hover:brightness-110",
  /** Bright pill on the dark ground. */
  light: "bg-ink text-ground shadow-panel hover:bg-white",
  /** Quiet frosted button. */
  glass: "glass text-ink ring-1 ring-white/15 hover:ring-white/30",
  /** Amber accent, used sparingly. */
  amber:
    "bg-linear-to-r from-amber-soft to-amber text-ground shadow-glow-amber hover:brightness-110",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
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
export function Button({ variant = "accent", size = "md", className, ...props }: ButtonProps) {
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
