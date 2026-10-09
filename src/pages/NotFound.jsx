import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import crest from "../assets/brand/waseela-crest.webp";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found | Waseela English Medium School",
    description: "The page you are looking for could not be found.",
    path: "/404",
    noindex: true,
  });
  return (
    <section className="flex min-h-[70vh] items-center bg-cream py-20">
      <div className="container-site text-center">
        <img src={crest} alt="" aria-hidden className="mx-auto h-28 w-28 object-contain opacity-90" />
        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">This page has wandered off</h1>
        <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted">
          The page you are looking for doesn’t exist or may have moved. Let’s get you back to class.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-navy">
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back to Home
          </Link>
          <Link to="/contact" className="btn-outline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
