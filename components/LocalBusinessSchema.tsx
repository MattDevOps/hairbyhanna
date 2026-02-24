export default function LocalBusinessSchema() {
    const json = {
      "@context": "https://schema.org",
      "@type": "HairSalon",
      "@id": "https://hairbyhanna.com/#hair-salon",
      name: "Hair By Hanna",
      url: "https://hairbyhanna.com",
      telephone: "+1-617-965-3012",
      image: "https://hairbyhanna.com/images/about/hanna.jpg",
      priceRange: "$$",
  
      address: {
        "@type": "PostalAddress",
        streetAddress: "1299 Washington Street",
        addressLocality: "West Newton",
        addressRegion: "MA",
        postalCode: "02465",
        addressCountry: "US",
      },
  
      hasMap:
        "https://www.google.com/maps?q=1299%20Washington%20Street,%20West%20Newton,%20MA%2002465",
  
      areaServed: [
        "West Newton, MA",
        "Newton, MA",
        "Brookline, MA",
        "Waltham, MA",
        "Boston, MA",
        "Greater Boston, MA",
      ],
  
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Monday",
          opens: "10:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Tuesday",
          opens: "10:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "10:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Thursday",
          opens: "10:00",
          closes: "17:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "10:00",
          closes: "14:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "00:00",
          closes: "00:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "00:00",
          closes: "00:00",
        },
      ],
  
      sameAs: [
        "https://www.instagram.com/hairbyhannanewton/?igshid=ZWIzMWE5ZmU3Zg%3D%3D",
        "https://www.facebook.com/HairByHanna5",
        "https://www.youtube.com/channel/UCe_uQXh7L2-xB8M94BKuAdQ",
      ],
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
    );
  }