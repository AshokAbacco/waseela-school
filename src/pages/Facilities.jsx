/** FACILITIES PAGE — sections in display order (page-only sections in src/components/facilities/). */
import FacilitiesHero from "../components/facilities/FacilitiesHero";
import CampusGlanceSection from "../components/facilities/CampusGlanceSection";
import FacilitiesGrid from "../components/shared/FacilitiesGrid";
import SpotlightSection from "../components/facilities/SpotlightSection";
import SafetyCareSection from "../components/facilities/SafetyCareSection";
import TransportBoarding from "../components/shared/TransportBoarding";
import GallerySection from "../components/home/GallerySection";
import FacilitiesFaqSection from "../components/facilities/FacilitiesFaqSection";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Facilities() {
  useSeo({ ...seo.facilities, path: "/facilities" });
  return (
    <>
      <FacilitiesHero />
      <CampusGlanceSection />
      <FacilitiesGrid
        heading="Spaces Designed for Growing Minds"
        text="Every space on our campus supports learning, play and care."
      />
      <SpotlightSection />
      <SafetyCareSection />
      <TransportBoarding />
      <GallerySection />
      <FacilitiesFaqSection />
      <AdmissionCTA />
    </>
  );
}
