/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://docs.nxbr.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [],
  },
};
