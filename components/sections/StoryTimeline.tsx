import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { about } from "@/lib/content";
import { eyebrow, tile } from "@/lib/styles";
import { OrbitVisual } from "./OrbitVisual";

/** The company story: an orbit visual, then the milestones as cards. */
export function StoryTimeline() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow={about.eyebrow}
        title={about.heading}
        subtitle={about.subheading}
        className="mb-12"
      />

      <OrbitVisual />

      <ol className="mt-12 grid gap-4 md:grid-cols-3">
        {about.timeline.map((item, i) => (
          <li key={item.date} className={tile("glass", "flex flex-col p-7")}>
            <span className="flex items-center justify-between gap-4">
              <span className={`${eyebrow} text-accent-soft`}>{item.date}</span>
              <span className="font-display text-sm text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
