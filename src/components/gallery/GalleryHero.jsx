/** GALLERY › PAGE HEADER */
import PageHero from "../ui/PageHero";
import { photos } from "../../data/schoolData";

export default function GalleryHero() {
  return (
    <PageHero
      crumb="Gallery"
      label="School Gallery"
      heading="Moments That Make Us Proud"
      text="A look around our campus, classrooms and everyday school life. Tap any photo to view it full screen."
      image={photos.studentsGroup}
      imageAlt="Smiling Waseela students holding books"
    />
  );
}
