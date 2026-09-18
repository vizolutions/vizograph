import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";
import { eyebrow, pageGutter } from "@/lib/styles";
import { HeroVisual } from "./HeroVisual";
import { StreakField } from "./StreakField";

export function Hero() {
  const [first, second, third] = hero.heading;

  return (
    <section id="home" className={`${pageGutter} pt-3 sm:pt-4`}>
      <div className="relative isolate overflow-hidden rounded-[2.5rem] ring-1 ring-ink/8 glow-field">
        <StreakField className="top-[-14%] h-[92%] opacity-60" />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 grid-field [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)] opacity-[0.45]"
        />

        <Container className="relative pt-32 pb-16 text-center sm:pt-40 lg:pt-44">
          <p className={`${eyebrow} text-accent-soft`}>{hero.eyebrow}</p>

          <h1 className="mx-auto mt-6 max-w-4xl font-display text-[clamp(2.75rem,6vw,4.75rem)] leading-[1.02] font-semibold tracking-tight text-balance">
            {first} {second}{" "}
            <span className="bg-linear-to-r from-accent-ink via-accent-deep-ink to-accent-soft-ink bg-clip-text text-transparent">
              {third}
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
            {hero.subheading}
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden />
            </Button>
            <Button href={hero.secondaryCta.href} variant="glass" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>

          {/* Dashboard mockup */}
          <div className="relative mx-auto mt-16 max-w-5xl lg:mt-20">
            <div
              aria-hidden
              className="absolute inset-x-8 -top-6 h-24 rounded-full bg-accent/20 blur-3xl"
            />
            <HeroVisual />
          </div>
        </Container>
      </div>
    </section>
  );
}
