/**
 * HOME › FACILITIES ROW
 * Shows five facility cards. Change which ones appear in `HOME_FACILITIES`;
 * card text/images come from `facilities` (data/schoolData.js).
 */
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Eyebrow from "../ui/Eyebrow";
import FacilityCard from "../ui/FacilityCard";
import { facilities } from "../../data/schoolData";

const HOME_FACILITIES = ["classroom", "library", "computer-lab", "bus", "playground"];

export default function FacilitiesSection() {
  return (
    <section aria-labelledby="home-facilities-heading" className="bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="container-site">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <Eyebrow>Our Facilities</Eyebrow>
            <h2
              id="home-facilities-heading"
              className="mt-3 text-[1.9rem] font-bold leading-[1.15] sm:text-[2.2rem]"
            >
              A Modern Campus for a Brighter Learning Experience
            </h2>
          </div>
          <Link to="/facilities" className="btn-outline-gold !min-h-[42px] shrink-0 !px-5 text-xs">
            View All Facilities <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <ul className="-mx-5 mt-10 flex snap-x gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 lg:grid-cols-5 [&::-webkit-scrollbar]:hidden">
          {HOME_FACILITIES.map((key, i) => {
            const f = facilities.find((x) => x.key === key);
            if (!f) return null;
            return (
              <li key={key} className="w-[240px] shrink-0 snap-start sm:w-auto">
                <FacilityCard {...f} compact delay={i * 70} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
