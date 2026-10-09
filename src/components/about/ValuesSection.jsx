/** ABOUT › WHAT GUIDES US — cards come from `about.values` in data/schoolData.js. */
import FeatureCard from "../ui/FeatureCard";
import SectionHeading from "../ui/SectionHeading";
import { about } from "../../data/schoolData";

export default function ValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="section bg-cream">
      <div className="container-site">
        <SectionHeading
          id="values-heading"
          label="What Guides Us"
          heading="The Heart of a Waseela Education"
          text="Learning, character and confidence — growing together."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {about.values.map((v, i) => (
            <FeatureCard key={v.title} {...v} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}
