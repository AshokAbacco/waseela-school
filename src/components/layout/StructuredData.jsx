import { useEffect } from "react";
import { contact, school, SITE_URL } from "../../data/schoolData";

/** EducationalOrganization JSON-LD built only from supplied facts. */
export default function StructuredData() {
  useEffect(() => {
    const data = {
      "@context": "https://schema.org",
      "@type": ["EducationalOrganization", "School"],
      name: school.name,
      slogan: school.tagline,
      url: SITE_URL,
      logo: `${SITE_URL}/apple-touch-icon.png`,
      image: `${SITE_URL}/og-image.jpg`,
      email: contact.emails[0],
      telephone: contact.phones.map((p) => p.tel),
      parentOrganization: { "@type": "Organization", name: school.foundation },
      address: {
        "@type": "PostalAddress",
        streetAddress: contact.street,
        addressLocality: contact.locality,
        addressRegion: contact.region,
        postalCode: contact.postalCode,
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: contact.geo.lat, longitude: contact.geo.lng },
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.text = JSON.stringify(data);
    document.head.appendChild(el);
    return () => {
      el.remove();
    };
  }, []);
  return null;
}
