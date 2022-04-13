/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["images.prismic.io"],
  },
  async rewrites() {
    return [
      {
        source: "/articles",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
