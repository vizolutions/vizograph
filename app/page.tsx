import { StructuredData } from "@/components/layout/StructuredData";
import { ClosingBand } from "@/components/sections/ClosingBand";
import { ContactDetails } from "@/components/sections/ContactDetails";
import { Hero } from "@/components/sections/Hero";
import { ProjectsBento } from "@/components/sections/ProjectsBento";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { StoryTimeline } from "@/components/sections/StoryTimeline";
import { TeamGrid } from "@/components/sections/TeamGrid";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesBento />
      <ProjectsBento />
      <StoryTimeline />
      <TeamGrid />
      <ClosingBand />
      <ContactDetails />
      <StructuredData />
    </>
  );
}
