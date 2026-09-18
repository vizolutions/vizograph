import { contact, site } from "@/lib/content";

/** Tells search engines who the company is, in schema.org format. */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    description: site.description,
    logo: `${site.url}/images/logo/vizograph-logo-with-text.png`,
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.addressParts.street,
      addressLocality: contact.addressParts.locality,
      addressRegion: contact.addressParts.region,
      postalCode: contact.addressParts.postalCode,
      addressCountry: contact.addressParts.country,
    },
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
