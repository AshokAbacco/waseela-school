import { useCallback, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function Lightbox({ photos, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const prev = useCallback(
    () => onChange((index - 1 + photos.length) % photos.length),
    [index, photos.length, onChange],
  );
  const next = useCallback(() => onChange((index + 1) % photos.length), [index, photos.length, onChange]);
  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, []);
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);
  const photo = photos[index];
  const btn =
    "inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy-950";
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${photo.title} — image ${index + 1} of ${photos.length}`}
      className="fixed inset-0 z-[70] flex flex-col bg-navy-950/95 p-4 backdrop-blur-sm motion-safe:animate-[fadeIn_.25s_ease]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="flex items-center justify-between text-white">
        <p className="text-sm text-white/70">
          {index + 1} / {photos.length}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} className={btn} aria-label="Close gallery">
          <X className="h-5 w-5" />
        </button>
      </div>
      <figure
        className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 py-4"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <img
          key={photo.src}
          src={photo.src}
          alt={`${photo.title} — ${photo.caption}`}
          className="max-h-full max-w-full rounded-lg object-contain"
        />
        <figcaption className="text-center text-white">
          <span className="font-serif text-xl">{photo.title}</span>
        </figcaption>
      </figure>
      {photos.length > 1 && (
        <div className="flex justify-center gap-4 pb-2">
          <button type="button" onClick={prev} className={btn} aria-label="Previous image">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button type="button" onClick={next} className={btn} aria-label="Next image">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  );
}
