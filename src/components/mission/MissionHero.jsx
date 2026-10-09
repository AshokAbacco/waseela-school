/** MISSION › PAGE HEADER — heading from `mission.heroHeading` in data/schoolData.js. */
import PageHero from "../ui/PageHero";
import { mission, photos, school } from "../../data/schoolData";

export default function MissionHero() {
  return (
    <PageHero
      crumb="Mission"
      label="Our Mission"
      heading={mission.heroHeading}
      text={`${school.pillars.join(" | ")} — put into practice every day.`}
      image={photos.studentWriting}
      imageAlt="A Waseela student writing in class"
    />
  );
}
