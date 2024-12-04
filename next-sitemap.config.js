/** @type {import('next').NextConfig} */

const siteUrl = 'https://platmosphere.com'

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  sitemapSize: 1000000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' }
    ],
  },
}