export default function LocalBusinessSchema() {
    const json = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Hair By Hanna",
      url: "https://hairbyhanna.com",
      telephone: "+1-617-965-3012",
      image: "https://hairbyhanna.com/images/about/hanna.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1299 Washington Street",
        addressLocality: "West Newton",
        addressRegion: "MA",
        postalCode: "02465",
        addressCountry: "US",
      },
      areaServed: [
        "West Newton, MA",
        "Newton, MA",
        "Brookline, MA",
        "Waltham, MA",
        "Boston, MA",
      ],
      priceRange: "$$",
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    );
  }