/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
