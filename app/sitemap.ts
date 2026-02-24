export default function sitemap() {
  const base = "https://hairbyhanna.com";
  const routes = [
    "",
    "/services",
    "/gallery",
    "/about",
    "/contact",
    "/reviews",
    "/hair-color-west-newton-ma",
    "/highlights-newton-ma",
    "/haircuts-west-newton-ma"
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}