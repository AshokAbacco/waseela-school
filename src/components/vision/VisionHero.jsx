/** VISION › PAGE HEADER — heading from `vision.heroHeading` in data/schoolData.js. */
import PageHero from "../ui/PageHero";
import { images, vision } from "../../data/schoolData";

export default function VisionHero() {
  return (
    <PageHero
      crumb="Vision"
      label="Our Vision"
      heading={vision.heroHeading}
      text="Where every child grows in knowledge, character and confidence."
      image={images.playground}
      imageAlt="Illustration of Waseela students playing together on the school ground"
    />
  );
}
