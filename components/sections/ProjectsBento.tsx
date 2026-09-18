import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/lib/content";
import { ProjectTile } from "./ProjectTile";

export function ProjectsBento() {
  return (
    <Section id="work">
      <SectionHeader
        eyebrow={projects.eyebrow}
        title={projects.heading}
        subtitle={projects.subheading}
        className="mb-14"
      />

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.items.map((project) => (
          <li key={project.slug} className="flex">
            <ProjectTile project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
