// @ts-check

const path = require("path");
const { withPlaiceholder } = require("@plaiceholder/next");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withPlaiceholder({
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
  },
});
