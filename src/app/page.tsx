import { Navbar }                from "@/components/layout/navbar";
import { SectionIndicator }      from "@/components/layout/section-indicator";
import { Hero }                  from "@/components/sections/hero";
import { About }                 from "@/components/sections/about";
import { EngineeringDashboard }  from "@/components/sections/engineering-dashboard";
import { BentoOverview }         from "@/components/sections/bento-overview";
import { Experience }            from "@/components/sections/experience";
import { Projects }              from "@/components/sections/projects";
import { EngineeringHighlights } from "@/components/sections/engineering-highlights";
import { TechShowcase }          from "@/components/sections/tech-showcase";
import { ArchitectureGallery }   from "@/components/sections/architecture-gallery";
import { CaseStudies }           from "@/components/sections/case-studies";
import { Contact }               from "@/components/sections/contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <SectionIndicator />
      <Hero />
      <About />
      <EngineeringDashboard />
      <BentoOverview />
      <Experience />
      <Projects />
      <EngineeringHighlights />
      <TechShowcase />
      <ArchitectureGallery />
      <CaseStudies />
      <Contact />
    </main>
  );
}
