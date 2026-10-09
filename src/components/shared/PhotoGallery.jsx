/** SHARED › PHOTO GALLERY GRID + full-screen viewer. Used on the Gallery page. */
import { useState } from "react";
import { Expand } from "lucide-react";
import Lightbox from "../ui/Lightbox";
import SectionHeading from "../ui/SectionHeading";

/** Masonry gallery with lightbox. Renders nothing until real photos are supplied. */
export default function PhotoGallery({ photos }) {
  const real = photos.filter((p) => p.src);
  const [open, setOpen] = useState(null);
  if (real.length === 0) return null;
  return (
    <section aria-labelledby="gallery-heading" className="section bg-white">
      <div className="container-site">
        <SectionHeading
          id="gallery-heading"
          label="Photos"
          heading="Life at Waseela"
          text="Our campus, classrooms and students."
        />
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {real.map((p, i) => (
            <li key={p.key}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                aria-label={`Open ${p.title} in full screen`}
                className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-cream shadow-card"
              >
                <img
                  src={p.src}
                  alt={p.caption}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy-950/80 via-navy-950/0 to-transparent p-4 text-left text-white">
                  <span className="text-sm font-semibold">{p.title}</span>
                  <Expand className="h-5 w-5 text-gold-light" aria-hidden />
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open !== null && (
        <Lightbox photos={real} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </section>
  );
}
