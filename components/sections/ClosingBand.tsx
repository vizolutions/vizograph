import { ArrowChip } from "@/components/ui/ArrowChip";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { closingBand } from "@/lib/content";
import { pageGutter } from "@/lib/styles";

/** The teal panel that closes the page, before the contact details. */
export function ClosingBand() {
  return (
    <section className={`${pageGutter} pt-8`}>
      <div className="relative isolate overflow-hidden rounded-[2.5rem] deep-panel">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <span className="absolute top-[14%] left-[8%] size-20 rotate-12 rounded-2xl bg-panel/[0.06]" />
          <span className="absolute right-[10%] bottom-[12%] size-28 -rotate-6 rounded-3xl bg-panel/[0.06]" />
        </div>

        <Container className="relative py-20 text-center lg:py-24">
          <h2 className="mx-auto max-w-3xl font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-panel sm:text-5xl">
            {closingBand.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-panel/75">
            {closingBand.text}
          </p>
          <div className="mt-9 flex justify-center">
            <Button href={closingBand.cta.href} variant="onDeep" size="pill">
              {closingBand.cta.label}
              <ArrowChip />
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
