/** FACILITIES › PAGE HEADER */
import PageHero from "../ui/PageHero";
import { photos } from "../../data/schoolData";

export default function FacilitiesHero() {
  return (
    <PageHero
      crumb="Facilities"
      label="Our Facilities"
      heading="A Modern Campus for a Brighter Learning Experience"
      text="Comfortable classrooms, a library, computer and science labs, a spacious playground, healthy food, transport and boarding."
      image={photos.buses}
      imageAlt="Waseela English Medium School buses parked in front of the school building"
    />
  );
}
