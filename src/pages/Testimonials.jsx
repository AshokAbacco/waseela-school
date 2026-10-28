/**
 * TESTIMONIALS PAGE — sections in display order (files in src/components/testimonials/).
 * All text and photos come from data/testimonialsData.js. To hide a section, delete its line.
 */
import TestimonialsHero from "../components/testimonials/TestimonialsHero";
import FeaturedStoriesSection from "../components/testimonials/FeaturedStoriesSection";
import ThemesSection from "../components/testimonials/ThemesSection";
import OnTeachersSection from "../components/testimonials/OnTeachersSection";
import TeacherVoicesSection from "../components/testimonials/TeacherVoicesSection";
import TestimonialsGrid from "../components/testimonials/TestimonialsGrid";
import ShareStorySection from "../components/testimonials/ShareStorySection";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Testimonials() {
  useSeo({ ...seo.testimonials, path: "/testimonials" });
  return (
    <>
      <TestimonialsHero />
      <FeaturedStoriesSection />
      <ThemesSection />
      <TeacherVoicesSection />
      <OnTeachersSection />
      <TestimonialsGrid />
      <ShareStorySection />
      <AdmissionCTA />
    </>
  );
}
