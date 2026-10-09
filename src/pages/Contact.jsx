/** CONTACT PAGE — sections in display order (files in src/components/contact/). */
import ContactHero from "../components/contact/ContactHero";
import ContactCardsSection from "../components/contact/ContactCardsSection";
import TransportEnquirySection from "../components/contact/TransportEnquirySection";
import VisitSection from "../components/contact/VisitSection";
import AdmissionSteps from "../components/shared/AdmissionSteps";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Contact() {
  useSeo({ ...seo.contact, path: "/contact" });
  return (
    <>
      <ContactHero />
      <ContactCardsSection />
      <TransportEnquirySection />
      <VisitSection />
      <AdmissionSteps />
      <AdmissionCTA />
    </>
  );
}
