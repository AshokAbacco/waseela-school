/** MISSION PAGE — sections in display order (files in src/components/mission/). */
import MissionHero from "../components/mission/MissionHero";
import PromisesSection from "../components/mission/PromisesSection";
import FacilitiesGrid from "../components/shared/FacilitiesGrid";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Mission() {
  useSeo({ ...seo.mission, path: "/mission" });
  return (
    <>
      <MissionHero />
      <PromisesSection />
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
