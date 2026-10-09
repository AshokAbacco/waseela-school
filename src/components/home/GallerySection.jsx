/**
 * HOME › GALLERY STRIP  ("Moments That Make Us Proud")
 * Photos come from `galleryPhotos` (data/schoolData.js). Tap a photo to open the full-screen viewer.
 */
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import Lightbox from "../ui/Lightbox";
import { galleryPhotos } from "../../data/schoolData";

/** "Moments That Make Us Proud" — scrollable photo strip with arrows and a full-screen viewer. */
export default function GallerySection() {
  const ref = useRef(null);
  const [open, setOpen] = useState(null);
  if (galleryPhotos.length === 0) return null;
  const scroll = (dir) =>
    ref.current?.scrollBy({ left: dir * ref.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <section
      aria-labelledby="gallery-strip-heading"
      className="relative overflow-hidden bg-peach py-14 sm:py-16"
    >
      <div className="container-site grid grid-cols-[minmax(0,1fr)] items-center gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <div>
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-dark">School Gallery</p>
          <h2 id="gallery-strip-heading" className="mt-3 text-[2rem] font-bold leading-[1.1]">
            Moments That Make Us Proud
          </h2>
          <Link to="/gallery" className="btn-outline-gold mt-6 !min-h-[42px] !px-5 text-xs">
            View Gallery
          </Link>
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => scroll(-1)}
            aria-label="Scroll gallery left"
            className="absolute -left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lift transition hover:bg-gold sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <ul
            ref={ref}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {galleryPhotos.map((p, i) => (
              <li key={p.key} className="w-[200px] shrink-0 snap-start sm:w-[220px]">
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  aria-label={`Open photo: ${p.title}`}
                  className="group relative block aspect-[3/2] w-full overflow-hidden rounded-xl bg-white shadow-card"
                >
                  <img
                    src={p.src}
                    alt={p.caption}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 flex items-end justify-between bg-gradient-to-t from-navy-950/75 via-transparent p-3 text-left text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    {p.title}
                    <Expand className="h-4 w-4 text-gold-light" aria-hidden />
                  </span>
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => scroll(1)}
            aria-label="Scroll gallery right"
            className="absolute -right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-navy-900 shadow-lift transition hover:bg-gold sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      {open !== null && (
        <Lightbox photos={galleryPhotos} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </section>
  );
}
