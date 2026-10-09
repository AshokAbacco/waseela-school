/**
 * PRIVACY POLICY PAGE — sections in display order (files in src/components/privacy/).
 * All policy wording lives in src/data/privacyData.js.
 */
import PrivacyHero from "../components/privacy/PrivacyHero";
import PromiseSection from "../components/privacy/PromiseSection";
import TopicBar from "../components/privacy/TopicBar";
import AppDataSections from "../components/privacy/AppDataSections";
import SafetySections from "../components/privacy/SafetySections";
import RightsSections from "../components/privacy/RightsSections";
import ContactSections from "../components/privacy/ContactSections";
import { useSeo } from "../hooks/useSeo";
import { seo } from "../data/schoolData";

export default function Privacy() {
  useSeo({ ...seo.privacy, path: "/privacy" });
  return (
    <>
      <PrivacyHero />
      <PromiseSection />
      <TopicBar />
      <AppDataSections />
      <SafetySections />
      <RightsSections />
      <ContactSections />
    </>
  );
}
