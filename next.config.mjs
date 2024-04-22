// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
};

const withBundleAnalyzerConfigured = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: false,
});

export default withBundleAnalyzerConfigured(nextConfig);

// import("next").NextConfig;

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
//   openAnalyzer: false,
// });

// const nextConfig = {
//   //   reactStrictMode: false,
//   //   swcMinify: true,
// };

// export default withBundleAnalyzer(nextConfig);

// // export default nextConfig;
