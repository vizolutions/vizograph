import { ArrowRight, ArrowUp, Mouse } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { hero } from "@/lib/content";
import { pageGutter } from "@/lib/styles";
import { HeroVisual } from "./HeroVisual";

const wordmark =
  "pointer-events-none font-pixel text-[clamp(3rem,9.5vw,9.5rem)] leading-[0.8] font-bold text-wordmark uppercase select-none";

export function Hero() {
  const [first, second, third] = hero.heading;

  return (
    <section id="home" className={`${pageGutter} pt-3 sm:pt-4`}>
      <div className="relative isolate flex min-h-[calc(100svh-1.5rem)] flex-col overflow-hidden rounded-4xl hero-panel">
        <Container className="relative flex flex-1 flex-col pt-28 pb-20 sm:pb-24 lg:pt-32">
          {/* Headline and the "since" figure */}
          <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
            <h1 className="font-display text-[clamp(2.75rem,5.6vw,5.75rem)] leading-[0.88] font-medium tracking-tight uppercase">
              <span className="flex items-start gap-6 sm:gap-10">
                <span className="mt-2 max-w-24 font-sans text-xs leading-snug font-normal tracking-widest text-muted uppercase sm:mt-3">
                  {hero.eyebrow}
                </span>
                <span>
                  {first} {second}
                </span>
              </span>
              <span className="block">
                <span
                  aria-hidden
                  className="mr-3 inline-block size-[0.14em] translate-y-[-0.1em] bg-accent align-middle"
                />
                {third}
              </span>
            </h1>

            <div className="max-w-xs lg:text-right">
              <p className="flex items-end gap-3 lg:justify-end">
                <ArrowUp className="mb-2 size-8 text-muted" strokeWidth={1.5} aria-hidden />
                <span className="mb-1 font-display text-xl text-muted uppercase sm:text-2xl">
                  {hero.stat.label}
                </span>
                <span className="font-display text-6xl leading-none font-medium tracking-tight sm:text-7xl">
                  {hero.stat.value}
                </span>
              </p>
              <p className="mt-4 leading-relaxed text-muted">{hero.statText}</p>
            </div>
          </div>

          {/* Floating chart illustration */}
          <div className="relative z-0 mx-auto my-10 xl:pointer-events-none xl:absolute xl:top-1/2 xl:left-[52%] xl:z-1 xl:my-0 xl:translate-x-[-50%] xl:translate-y-[-46%]">
            <HeroVisual />
          </div>

          {/* Pixel wordmark, intro line and buttons */}
          <div className="relative mt-auto">
            <p aria-hidden className={`${wordmark} ml-[-0.04em]`}>
              {hero.wordmark[0]}
            </p>

            <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-end xl:mt-4">
              <div className="relative z-10">
                <p className="max-w-md text-lg leading-relaxed sm:text-xl">{hero.subheading}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={hero.primaryCta.href} size="lg">
                    {hero.primaryCta.label}
                    <ArrowRight className="size-4" aria-hidden />
                  </Button>
                  <Button href={hero.secondaryCta.href} variant="subtle" size="lg">
                    {hero.secondaryCta.label}
                  </Button>
                </div>
              </div>

              <div className="lg:text-right">
                <p className="relative z-10 max-w-xs leading-relaxed text-muted lg:ml-auto">
                  {hero.sideText}
                </p>
                <p aria-hidden className={`${wordmark} mt-4 mr-[-0.04em]`}>
                  {hero.wordmark[1]}
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* Notch cut out of the bottom edge */}
        <a
          href="#work"
          className="group absolute bottom-0 left-1/2 hidden w-64 translate-x-[-50%] sm:block"
          aria-label="Scroll to explore more"
        >
          <svg viewBox="0 0 256 60" className="block w-full fill-ground" aria-hidden>
            <path d="M0 60C38 60 48 46 66 28 84 10 98 0 128 0s44 10 62 28 28 32 66 32Z" />
          </svg>
          <span className="absolute inset-x-0 bottom-2 flex flex-col items-center gap-1 text-xs text-muted transition-colors group-hover:text-ink">
            <Mouse className="size-4" aria-hidden />
            Scroll to explore more
          </span>
        </a>
      </div>
    </section>
  );
}
