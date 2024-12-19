/** @type {import('next').NextConfig} */


const siteUrl = 'https://localhost:3000'

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