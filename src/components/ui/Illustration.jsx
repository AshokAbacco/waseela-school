/**
 * Themed illustration (or photo) with a soft frame.
 * `ratio` keeps space reserved while loading so the layout never jumps.
 */
export default function Illustration({
  src,
  alt,
  ratio = "4/3",
  className = "",
  eager = false,
  zoom = true,
}) {
  return (
    <div
      className={`group/ill relative overflow-hidden rounded-[22px] bg-cream-deep ${className}`}
      style={{ aspectRatio: ratio }}
    >
      <img
        src={src}
        alt={alt}
        width={1200}
        height={900}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`h-full w-full object-cover transition duration-700 ease-out ${zoom ? "group-hover/ill:scale-[1.04]" : ""}`}
      />
    </div>
  );
}
