import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-[background-color,filter,color] disabled:opacity-60";

const variants = {
  /** Main call to action: the brand gradient. */
  accent: "bg-linear-to-b from-accent-soft to-accent text-ink shadow-accent hover:brightness-105",
  /** Solid dark button. */
  dark: "bg-ink text-white hover:bg-black",
  /** Quiet button on a light background. */
  subtle: "bg-black/8 text-ink ring-1 ring-black/10 backdrop-blur-sm hover:bg-white/70",
} as const;

const sizes = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-6 py-3.5 text-base",
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
