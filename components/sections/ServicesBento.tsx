import { Brain, ChartColumn, MonitorSmartphone } from "lucide-react";
import { IconTile } from "@/components/ui/IconTile";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/cn";
import { services } from "@/lib/content";
import { hoverLift, tile } from "@/lib/styles";

const icons = {
  chart: ChartColumn,
  dashboard: MonitorSmartphone,
  ai: Brain,
};

/** Bento rhythm: a wide tile and a narrow one, then a full-width tile. */
const spans = ["lg:col-span-2", "lg:col-span-1", "lg:col-span-3"];

export function ServicesBento() {
  return (
    <Section id="services">
      <SectionHeader
        eyebrow={services.eyebrow}
        title={services.heading}
        subtitle={services.subheading}
        className="mb-14"
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {services.items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <article
              key={item.title}
              className={cn(
                tile("panel", "flex flex-col justify-between gap-12 p-8 sm:p-10"),
                hoverLift,
                spans[i],
              )}
            >
              <div className="flex items-start justify-between gap-6">
                <IconTile icon={Icon} />
                <span className="font-pixel text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
