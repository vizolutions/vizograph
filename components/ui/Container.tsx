import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centres content at the page width and holds the horizontal padding. */
export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-page px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
