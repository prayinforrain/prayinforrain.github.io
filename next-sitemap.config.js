/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl:
    process.env.NEXT_PUBLIC_BASE_URL || "https://prayinforrain.github.io",
  generateRobotsTxt: true,
  sitemapBaseFileName: "sitemaps",
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL}/archived-blog/sitemap.xml`,
    ],
  },
  changefreq: undefined,
  priority: undefined,
  outDir: "./out",
};
