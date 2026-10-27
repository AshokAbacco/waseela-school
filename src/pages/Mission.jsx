/** MISSION PAGE — sections in display order (files in src/components/mission/). */
import MissionHero from "../components/mission/MissionHero";
import MissionStatementSection from "../components/mission/MissionStatementSection";
import PromisesSection from "../components/mission/PromisesSection";
import TeachingApproachSection from "../components/mission/TeachingApproachSection";
import MissionNumbersSection from "../components/mission/MissionNumbersSection";
import WholeChildSection from "../components/mission/WholeChildSection";
import FacilitiesGrid from "../components/shared/FacilitiesGrid";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";
import ClassesSection from "../components/home/ClassesSection";

export default function Mission() {
  useSeo({ ...seo.mission, path: "/mission" });
  return (
    <>
      <MissionHero />
      <MissionStatementSection />
      <PromisesSection />
      <TeachingApproachSection />
      <MissionNumbersSection />
      <ClassesSection />
      <WholeChildSection />
      <FacilitiesGrid
        tone="cream"
        label="Mission in Practice"
        heading="How It Shows Up Every Day"
        text="The spaces and services that turn our promises into everyday experience for children."
      />
      <AdmissionCTA />
    </>
  );
}
