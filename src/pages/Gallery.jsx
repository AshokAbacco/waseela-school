/** GALLERY PAGE — photos come from `galleryPhotos` in data/schoolData.js. */
import GalleryHero from "../components/gallery/GalleryHero";
import PhotoGallery from "../components/shared/PhotoGallery";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { galleryPhotos, seo } from "../data/schoolData";

export default function Gallery() {
  useSeo({ ...seo.gallery, path: "/gallery" });
  return (
    <>
      <GalleryHero />
      <PhotoGallery photos={galleryPhotos} />
      <AdmissionCTA />
    </>
  );
}
