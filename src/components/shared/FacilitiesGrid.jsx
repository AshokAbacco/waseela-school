/** SHARED › FACILITY CARDS GRID — cards from `facilities` in data/schoolData.js. Used on About, Mission and Facilities. */
import SectionHeading from "../ui/SectionHeading";
import FacilityCard from "../ui/FacilityCard";
import { facilities } from "../../data/schoolData";

/** All facilities as image cards. Pass `only` (array of keys) to show a subset. */
export default function FacilitiesGrid({
  label = "Our Facilities",
  heading = "Everything Your Child Needs to Learn and Grow",
  text = "Comfortable classrooms, hands-on learning spaces, healthy food, transport and boarding — all on one campus.",
  only,
  tone = "white",
}) {
  const list = only ? facilities.filter((f) => only.includes(f.key)) : facilities;
  return (
    <section
      aria-labelledby="facilities-heading"
      className={`section ${tone === "cream" ? "bg-cream" : "bg-white"}`}
    >
      <div className="container-site">
        <SectionHeading id="facilities-heading" label={label} heading={heading} text={text} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f, i) => (
            <FacilityCard key={f.key} {...f} delay={(i % 3) * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
