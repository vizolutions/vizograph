import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { closingBand } from "@/lib/content";
import { pageGutter } from "@/lib/styles";
import { StreakField } from "./StreakField";

/** The glow-lit panel that closes the page, before the contact details. */
export function ClosingBand() {
  return (
    <section className={`${pageGutter} pt-8`}>
      <div className="relative isolate overflow-hidden rounded-[2.5rem] ring-1 ring-white/10 glow-field">
        <StreakField className="top-auto bottom-[-15%] h-[70%] opacity-70" flip />
        <Container className="relative py-20 text-center lg:py-28">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.5rem]">
            {closingBand.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted">
            {closingBand.text}
          </p>
          <div className="mt-9 flex justify-center">
            <Button href={closingBand.cta.href} variant="light" size="lg">
              {closingBand.cta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
