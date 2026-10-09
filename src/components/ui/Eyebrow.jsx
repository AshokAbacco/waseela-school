/** Small gold uppercase label shown above section headings. */
export default function Eyebrow({ children, className = "" }) {
  return (
    <p className={`text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-dark ${className}`}>
      {children}
    </p>
  );
}
