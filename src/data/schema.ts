import { site } from "./site";
import { typeLabels, type Product } from "./catalog";

export const businessId = `${site.url}/#business`;

export const localBusiness = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": businessId,
  name: site.name,
  alternateName: site.legalName,
  url: site.url + "/",
  logo: `${site.url}/apple-touch-icon.png`,
  image: `${site.url}/og.png`,
  description: site.description,
  telephone: site.phones.map((p) => p.e164),
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
  hasMap: site.mapsUrl,
  areaServed: { "@type": "Country", name: "Україна" },
  brand: site.brands.map((name) => ({ "@type": "Brand", name })),
};

export const webSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url + "/",
  inLanguage: "uk",
  publisher: { "@id": businessId },
};

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: site.url + it.path,
    })),
  };
}

export function productSchema(p: Product, imageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    url: `${site.url}/assortment/${p.slug}/`,
    image: imageUrl,
    description: p.description.join(" "),
    category: typeLabels[p.type],
    brand: { "@type": "Brand", name: p.brand },
    ...(p.viscosity.length && {
      additionalProperty: p.viscosity.map((v) => ({ "@type": "PropertyValue", name: "В'язкість SAE", value: v })),
    }),
    seller: { "@id": businessId },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}
