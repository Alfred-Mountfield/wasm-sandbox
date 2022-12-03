/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["./src", "./tests"],
  },
  webpack: (config, { isServer }) => {
    config.experiments.asyncWebAssembly = true;
    if (!isServer) {
      config.output.publicPath = `/_next/`;
    } else {
      config.output.publicPath = `./`;
    }
    config.output.assetModuleFilename = `static/[hash][ext]`;
    config.module.rules.push({
      test: /\.(wasm)$/,
      type: "asset/resource",
    });

    return config;
  },
};
