/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    env: {
    title: "Sloovi task Manager",
    tagline: "The task managetr app For you",
    titleDescription: "Sloovi Task Manager"
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
