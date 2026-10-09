/** FACILITIES PAGE — header in src/components/facilities/; cards & transport are shared sections. */
import FacilitiesHero from "../components/facilities/FacilitiesHero";
import FacilitiesGrid from "../components/shared/FacilitiesGrid";
import TransportBoarding from "../components/shared/TransportBoarding";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Facilities() {
  useSeo({ ...seo.facilities, path: "/facilities" });
  return (
    <>
      <FacilitiesHero />
      <FacilitiesGrid
        heading="Spaces Designed for Growing Minds"
        text="Every space on our campus supports learning, play and care."
      />
      <TransportBoarding />
      <AdmissionCTA />
    </>
  );
}
