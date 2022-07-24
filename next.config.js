/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    env: {
    title: "Veegil Banking App",
    tagline: "The Banking App For you",
    titleDescription: "Veegil Baking App"
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
   images: {
    domains: ['www.gravatar.com'],
  },
}

module.exports = nextConfig
