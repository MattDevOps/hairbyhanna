import { site } from "@/lib/site";

export default function sitemap() {
  const routes = [
    "",
    "/services",
    "/services/haircuts",
    "/services/hair-color",
    "/services/highlights",
    "/services/brazilian-blowout",
    "/services/treatments",
    "/gallery",
    "/reviews",
    "/about",
    "/contact"
  ];

  return routes.map((path) => ({
    url: `${site.domain}${path}`,
    lastModified: new Date()
  }));
}
