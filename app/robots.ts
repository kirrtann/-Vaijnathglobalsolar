import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vaijnathglobalsolar.com";

  return {
    rules: [
      // Google Bot - Most permissive, fastest crawl
      {
        userAgent: "Googlebot",
        allow: ["/", "/services", "/about", "/contact", "/solar-calculator"],
        disallow: [
          "/admin",
          "/_next",
          "/*.json$",
          "/api/",
          "/private/",
          "/*?*",
          "/*&*",
          "*?sort=",
          "*?page=",
        ],
        crawlDelay: 0,

      },
      // Bing Bot
      {
        userAgent: "Bingbot",
        allow: ["/", "/services", "/about", "/contact", "/solar-calculator"],
        disallow: ["/admin", "/_next", "/*.json$", "/api/", "/private/"],
        crawlDelay: 1,
      },
      // Other bots
      {
        userAgent: [
          "Yandexbot",
          "AhrefsBot",
          "SemrushBot",
          "DotBot",
          "MJ12bot",
        ],
        allow: "/",
        disallow: ["/admin", "/_next", "/*.json$", "/api/"],
        crawlDelay: 2,
      },
      // Block bad bots
      {
        userAgent: ["AdsBot-Google", "MrPiggyBot", "360Spider", "SitelockSpider"],
        disallow: "/",
      },
      // Default for all other bots
      {
        userAgent: "*",
        allow: ["/", "/services", "/about", "/contact", "/solar-calculator"],
        disallow: [
          "/admin",
          "/_next",
          "/*.json$",
          "/api/",
          "/private/",
          "*?*",
        ],
        crawlDelay: 2,
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-index.xml`,
    ],
    host: baseUrl,
  };
}
