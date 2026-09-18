import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/content";
import { chip, hoverLift, tile } from "@/lib/styles";

/**
 * Every project wears the same dark card: logo, name, tags and description.
 * Cards with a home of their own link out; the rest are plain tiles.
 */
export function ProjectTile({ project }: { project: Project }) {
  const href = project.external ?? project.link;

  const card = (
    <>
      {project.image ? (
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-black/40">
          <Image
            src={project.image}
            alt={`${project.name} logo`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="grid aspect-square place-items-center rounded-3xl bg-black/40 px-4">
          <span
            aria-hidden
            className="font-pixel text-[clamp(1.5rem,3.5vw,2.5rem)] leading-none font-bold text-white uppercase"
          >
            {project.name}
          </span>
        </div>
      )}

      <div className="mt-7 flex flex-1 flex-col">
        <p className="font-pixel text-xs tracking-wider text-accent-soft uppercase">
          {project.intro}
        </p>
        <h3 className="mt-4 font-display text-2xl font-medium tracking-tight">{project.name}</h3>
        <p className="mt-1 text-sm text-white/50">{project.caption}</p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.details.map((detail) => (
            <li key={detail.value} className={`${chip} bg-white/10 text-white/80`}>
              {detail.label ? `${detail.label}: ${detail.value}` : detail.value}
            </li>
          ))}
        </ul>

        <p className="mt-5 leading-relaxed text-white/70">{project.description}</p>

        {href && (
          <span className="mt-auto flex items-center justify-between gap-4 pt-8">
            <span className="text-sm font-medium text-white transition-colors group-hover:text-accent-soft">
              {href.replace("https://", "")}
            </span>
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/10 text-white transition-colors group-hover:bg-accent group-hover:text-ink">
              <ArrowUpRight className="size-4" aria-hidden />
            </span>
          </span>
        )}
      </div>
    </>
  );

  const classes = cn(tile("dark", "flex h-full flex-col p-5 sm:p-6"), href && `group ${hoverLift}`);

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {card}
    </a>
  ) : (
    <article className={classes}>{card}</article>
  );
}
