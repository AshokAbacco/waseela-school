/** ABOUT PAGE — sections in display order (files in src/components/about/). */
import AboutHero from "../components/about/AboutHero";
import AtAGlanceSection from "../components/about/AtAGlanceSection";
import StorySection from "../components/about/StorySection";
import MottoSection from "../components/about/MottoSection";
import LearningJourneySection from "../components/about/LearningJourneySection";
import ValuesSection from "../components/about/ValuesSection";
import EducatorsSection from "../components/about/EducatorsSection";
import ParentsPromiseSection from "../components/about/ParentsPromiseSection";
import FacilitiesGrid from "../components/shared/FacilitiesGrid";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";
import ClassesSection from "../components/home/ClassesSection";

export default function About() {
  useSeo({ ...seo.about, path: "/about" });
  return (
    <>
      <AboutHero />
      <AtAGlanceSection />
      <StorySection />
      <MottoSection />
      <LearningJourneySection />
      <ValuesSection />
      <EducatorsSection />
      <ClassesSection />
      <ParentsPromiseSection />
      <FacilitiesGrid
        tone="cream"
        label="Life at Waseela"
        heading="A Campus Built Around Children"
        text="From the classroom to the playground, the library to the dining hall — every space supports learning and growth."
      />
      <AdmissionCTA />
    </>
  );
}
