import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";
import { hoverLift, tile } from "@/lib/styles";

export function TeamGrid() {
  return (
    <Section id="team">
      <SectionHeader
        eyebrow={team.eyebrow}
        title={team.heading}
        subtitle={team.subheading}
        className="mb-14"
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {team.members.map((member) => (
          <li key={member.name} className={tile("panel", "p-3")}>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-card">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="px-3 pt-4 pb-2">
              <h3 className="font-display text-lg font-medium tracking-tight">{member.name}</h3>
              <p className="mt-0.5 text-sm text-muted">{member.role}</p>
            </div>
          </li>
        ))}

        <li>
          <a
            href="#contact"
            className={`${tile("accent", "group flex h-full min-h-56 flex-col justify-between p-7")} ${hoverLift}`}
          >
            <span className="font-pixel text-xs tracking-wider uppercase">Join in</span>
            <span className="flex items-end justify-between gap-4">
              <span className="font-display text-2xl leading-tight font-medium tracking-tight">
                Want to work with us?
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink text-white">
                <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
