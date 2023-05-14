// @ts-check

const path = require("path");
const { withPlaiceholder } = require("@plaiceholder/next");
const withTwin = require("./withTwin");

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withTwin(
  withPlaiceholder({
    webpack(config) {
      config.resolve.modules.push(path.resolve("./"));
      return config;
    },
    images: {
      domains: ["images.prismic.io", "images.unsplash.com"],
    },
    experimental: {
      appDir: true,
    },
  })
);
