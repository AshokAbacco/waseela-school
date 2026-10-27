/**
 * HOME PAGE — sections in display order.
 * Each section lives in its own file in src/components/home/ (or shared/ if used on other pages).
 * To reorder or hide a section, move or delete its line below.
 */
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import StrengthsSection from "../components/home/StrengthsSection";
import AcademicsSection from "../components/home/AcademicsSection";
import ClassesSection from "../components/home/ClassesSection";
import MottoBannerSection from "../components/home/MottoBannerSection";
import FacilitiesSection from "../components/home/FacilitiesSection";
import GallerySection from "../components/home/GallerySection";
import NewsPrincipalSection from "../components/home/NewsPrincipalSection";
import WhyChooseSection from "../components/home/WhyChooseSection";
import TransportBoarding from "../components/shared/TransportBoarding";
import AppSection from "../components/home/AppSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import AdmissionSteps from "../components/shared/AdmissionSteps";
import VisitCampusSection from "../components/home/VisitCampusSection";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Home() {
  useSeo({ ...seo.home, path: "/" });
  return (
    <>
      <HeroSection />
      <AboutSection />
      <StrengthsSection />
      <AcademicsSection />
      <ClassesSection />
      <MottoBannerSection />
      <FacilitiesSection />
      <GallerySection />
      <NewsPrincipalSection />
      <WhyChooseSection />
      <TransportBoarding />
      <TestimonialsSection />
      <AppSection />
      <AdmissionSteps />
      <VisitCampusSection />
      <AdmissionCTA />
    </>
  );
}
