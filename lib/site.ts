export const site = {
  name: "Hair By Hanna",
  domain: "https://hairbyhanna.com",
  phoneDisplay: "617-965-3012",
  phoneTel: "+16179653012",
  email: "hairbyhanna@yahoo.com",
  address: {
    street: "1299 Washington Street",
    city: "West Newton",
    region: "MA",
    postalCode: "02465",
    country: "US"
  },
  hours: [
    { day: "Monday", hours: "10:00 AM – 5:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 5:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 5:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 5:00 PM" },
    { day: "Friday", hours: "10:00 AM – 2:00 PM" },
    { day: "Saturday", hours: "Closed" },
    { day: "Sunday", hours: "By appointment" }
  ],
  areasServed: ["West Newton", "Newton", "Waltham", "Brookline", "Greater Boston"]
} as const;

export function mapQuery() {
  const a = site.address;
  return encodeURIComponent(`${a.street}, ${a.city}, ${a.region} ${a.postalCode}`);
}

export function jsonLdHairSalon() {
  const a = site.address;
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: site.name,
    url: site.domain,
    telephone: site.phoneTel,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.city,
      addressRegion: a.region,
      postalCode: a.postalCode,
      addressCountry: a.country
    },
    areaServed: site.areasServed
  };
}
