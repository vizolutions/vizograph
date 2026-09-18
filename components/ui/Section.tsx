import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { pageGutter } from "@/lib/styles";
import { Container } from "./Container";

/** A page section with the standard vertical rhythm and page width. */
export function Section({
  id,
  className,
  children,
}: {
  id: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn(pageGutter, "py-24 lg:py-32", className)}>
      <Container>{children}</Container>
    </section>
  );
}
