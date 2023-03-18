/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com", "images.unsplash.com", "res.cloudinary.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = nextConfig;
