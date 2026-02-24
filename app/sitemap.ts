export default function sitemap() {
  const base = "https://hairbyhanna.com";
  const routes = ["", "/services", "/gallery", "/videos", "/about", "/reviews", "/contact"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
