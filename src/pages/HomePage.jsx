import { HeroSection } from "../components/sections/HeroSection";
import { StudioSection } from "../components/sections/StudioSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { ServicesSection } from "../components/sections/ServicesSection";
import { MaterialitySection } from "../components/sections/MaterialitySection";
import { JournalSection } from "../components/sections/JournalSection";
import { ClientReflectionSection } from "../components/sections/ClientReflectionSection";
import { ContactSection } from "../components/sections/ContactSection";

export function HomePage({ onOpenEnquiry, onSelectProject, onSelectArticle }) {
  return (
    <>
      <HeroSection onOpenEnquiry={onOpenEnquiry} />

      <StudioSection onOpenMonograph={() => {}} />

      <ProjectsSection onSelectProject={onSelectProject} />

      <ServicesSection onOpenEnquiry={onOpenEnquiry} />

      <MaterialitySection />

      <JournalSection onSelectArticle={onSelectArticle} />

      <ClientReflectionSection />

      <ContactSection />
    </>
  );
}
