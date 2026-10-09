/** PRIVACY › PAGE HEADER with last-updated date (date set in data/privacyData.js). */
import { CalendarClock, Trash2 } from "lucide-react";
import PageHero from "../ui/PageHero";
import { images, school, schoolApp } from "../../data/schoolData";
import { privacyPolicy as p } from "../../data/privacyData";

export default function PrivacyHero() {
  return (
    <PageHero
      crumb="Privacy Policy"
      label="Data Privacy"
      heading="Privacy Policy"
      text={`How ${school.shortName} protects the personal information of students, parents and staff in the ${schoolApp.name} app and on this website.`}
      image={images.app}
      imageAlt={`Illustration of the ${schoolApp.name} app on a phone with a privacy shield`}
    >
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-white text-navy-900 px-4 py-2 text-xs font-semibold sm:text-sm">
          <CalendarClock className="h-4 w-4 text-gold-dark" aria-hidden /> Last updated: {p.lastUpdated}
        </p>
        <a
          href="#delete-account"
          className="inline-flex w-fit items-center gap-2 px-1 py-2 text-sm font-semibold text-gold-dark underline-offset-4 hover:underline"
        >
          <Trash2 className="h-4 w-4" aria-hidden /> Request account deletion
        </a>
      </div>
    </PageHero>
  );
}
