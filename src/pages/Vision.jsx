/** VISION PAGE — sections in display order (files in src/components/vision/). */
import VisionHero from "../components/vision/VisionHero";
import StatementSection from "../components/vision/StatementSection";
import FocusSection from "../components/vision/FocusSection";
import PillarsSection from "../components/vision/PillarsSection";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";
import ClassesSection from "../components/home/ClassesSection";

export default function Vision() {
  useSeo({ ...seo.vision, path: "/vision" });
  return (
    <>
      <VisionHero />
      <ClassesSection />
      <StatementSection />
      <FocusSection />
      <PillarsSection />
      <AdmissionCTA />
    </>
  );
}
