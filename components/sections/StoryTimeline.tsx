import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { about } from "@/lib/content";
import { tile } from "@/lib/styles";

/** The company story: one tile per milestone, image and text swapping sides. */
export function StoryTimeline() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow={about.eyebrow}
        title={about.heading}
        subtitle={about.subheading}
        className="mb-14"
      />

      <ol className="grid gap-4">
        {about.timeline.map((item, i) => (
          <li
            key={item.date}
            className={tile(
              i % 2 === 0 ? "panel" : "card",
              cn(
                "grid items-center gap-8 p-6 sm:p-8 md:gap-12 lg:p-10",
                i % 2 === 0 ? "md:grid-cols-[14rem_1fr]" : "md:grid-cols-[1fr_14rem]",
              ),
            )}
          >
            <div
              className={cn(
                "relative aspect-[4/3] overflow-hidden rounded-3xl md:aspect-square",
                i % 2 === 1 && "md:order-2",
              )}
            >
              <Image
                src={item.image}
                alt=""
                fill
                sizes="(min-width: 768px) 14rem, 100vw"
                className="object-cover"
              />
            </div>
            <div className={cn(i % 2 === 1 && "md:order-1")}>
              <p className="font-pixel text-sm text-accent-ink uppercase">{item.date}</p>
              <h3 className="mt-3 font-display text-2xl font-medium tracking-tight sm:text-3xl lg:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
