import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { Project } from "@/lib/content";
import { chip, eyebrow, hoverLift, tile } from "@/lib/styles";

/**
 * Text-only project card: eyebrow, name, tags and description, with the
 * destination pinned to the bottom so every card lines up.
 */
export function ProjectTile({ project }: { project: Project }) {
  const href = project.external ?? project.link;

  const card = (
    <>
      <span
        aria-hidden
        className="block h-1 w-14 rounded-full bg-linear-to-r from-accent to-accent-soft"
      />

      <p className={`${eyebrow} mt-7 text-accent-soft`}>{project.intro}</p>
      <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">{project.name}</h3>
      <p className="mt-1 text-sm text-muted">{project.caption}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.details.map((detail) => (
          <li
            key={detail.value}
            className={`${chip} bg-white/[0.06] text-muted ring-1 ring-white/10`}
          >
            {detail.label ? `${detail.label}: ${detail.value}` : detail.value}
          </li>
        ))}
      </ul>

      <p className="mt-5 leading-relaxed text-muted">{project.description}</p>

      {href && (
        <span className="mt-auto flex items-center justify-between gap-4 pt-8">
          <span className="text-sm font-medium text-ink transition-colors group-hover:text-accent-soft">
            {href.replace("https://", "")}
          </span>
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-white/[0.06] text-ink ring-1 ring-white/10 transition-colors group-hover:bg-accent-soft group-hover:text-ground">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </span>
      )}
    </>
  );

  const classes = cn(
    tile("glass", "flex h-full flex-col p-7 sm:p-8"),
    href && `group ${hoverLift}`,
  );

  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
      {card}
    </a>
  ) : (
    <article className={classes}>{card}</article>
  );
}
