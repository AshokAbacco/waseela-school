/** ABOUT › PAGE HEADER — heading/text come from `about` in data/schoolData.js. */
import PageHero from "../ui/PageHero";
import { about, photos } from "../../data/schoolData";

export default function AboutHero() {
  return (
    <PageHero
      crumb="About Us"
      label="About Waseela"
      heading={about.heroHeading}
      text={about.heroText}
      image={photos.campusStudents}
      imageAlt="Waseela students at the school entrance"
    />
  );
}
