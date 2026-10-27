/** CONTACT PAGE — sections in display order (files in src/components/contact/). */
import ContactHero from "../components/contact/ContactHero";
import ContactCardsSection from "../components/contact/ContactCardsSection";
import EnquiryFormSection from "../components/contact/EnquiryFormSection";
import OfficeHoursSection from "../components/contact/OfficeHoursSection";
import VisitSection from "../components/contact/VisitSection";
import TransportEnquirySection from "../components/contact/TransportEnquirySection";
import AdmissionSteps from "../components/shared/AdmissionSteps";
import AdmissionCTA from "../components/shared/AdmissionCTA";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";
import ClassesSection from "../components/home/ClassesSection";

export default function Contact() {
  useSeo({ ...seo.contact, path: "/contact" });
  return (
    <>
      <ContactHero />
      <ContactCardsSection />
      <ClassesSection />
      <EnquiryFormSection />
      <OfficeHoursSection />
      <VisitSection />
      <TransportEnquirySection />
      <AdmissionSteps />
      <AdmissionCTA />
    </>
  );
}
