import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { team } from "@/lib/content";
import { eyebrow, hoverLift, tile } from "@/lib/styles";

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
          <li key={member.name} className={`${tile("glass", "p-3")} ${hoverLift}`}>
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-black/40 ring-1 ring-white/5">
              <Image
                src={member.image}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ground/80 to-transparent" />
            </div>
            <div className="px-3 pt-4 pb-2">
              <h3 className="font-display text-lg font-semibold tracking-tight">{member.name}</h3>
              <p className="mt-0.5 text-sm text-muted">{member.role}</p>
            </div>
          </li>
        ))}

        <li>
          <a
            href="#contact"
            className={`${tile("amber", "group flex h-full min-h-56 flex-col justify-between p-7")} ${hoverLift}`}
          >
            <span className={eyebrow}>Join in</span>
            <span className="flex items-end justify-between gap-4">
              <span className="font-display text-2xl leading-tight font-semibold tracking-tight">
                Want to work with us?
              </span>
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ground/15 text-ground">
                <ArrowUpRight className="size-4" aria-hidden />
              </span>
            </span>
          </a>
        </li>
      </ul>
    </Section>
  );
}
