// @ts-check

const path = require("path");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = {
  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
  images: {
    domains: ["images.prismic.io", "images.unsplash.com"],
  },
};
