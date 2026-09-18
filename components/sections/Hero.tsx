import { Sparkles } from "lucide-react";
import { ArrowChip } from "@/components/ui/ArrowChip";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";
import { pageGutter } from "@/lib/styles";
import { HeroVisual } from "./HeroVisual";

/** Faint squares drifting across the teal panel, as in the reference. */
function SquareMotif() {
  const squares = [
    "left-[6%] top-[18%] size-16 rotate-12",
    "left-[12%] top-[52%] size-24 -rotate-6",
    "right-[8%] top-[12%] size-20 rotate-6",
    "right-[16%] top-[46%] size-14 -rotate-12",
    "left-[45%] top-[6%] size-10 rotate-45",
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {squares.map((position) => (
        <span key={position} className={`absolute rounded-2xl bg-panel/[0.06] ${position}`} />
      ))}
    </div>
  );
}

export function Hero() {
  const [first, second, third] = hero.heading;

  return (
    <section id="home" className={`${pageGutter} pt-3 sm:pt-4`}>
      {/* The teal panel; the dashboard card below overlaps its bottom edge. */}
      <div className="relative isolate overflow-hidden rounded-[2.5rem] pb-40 deep-panel sm:pb-48 lg:pb-56">
        <SquareMotif />

        <Container className="relative pt-32 pb-4 text-center sm:pt-36 lg:pt-40">
          <Badge icon={Sparkles} tone="onDeep">
            {hero.eyebrow}
          </Badge>

          <h1 className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.5rem,5.4vw,4.25rem)] leading-[1.08] font-semibold tracking-tight text-balance text-panel">
            {first} {second} {third}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-panel/75">
            {hero.subheading}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={hero.primaryCta.href} variant="onDeep" size="pill">
              {hero.primaryCta.label}
              <ArrowChip />
            </Button>
            <Button href={hero.secondaryCta.href} variant="onDeepOutline" size="pill">
              {hero.secondaryCta.label}
              <ArrowChip tone="panel" />
            </Button>
          </div>
        </Container>
      </div>

      {/* Dashboard mockup, pulled up over the panel */}
      <Container className="relative z-10 -mt-32 sm:-mt-40 lg:-mt-48">
        <div className="mx-auto max-w-6xl">
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
