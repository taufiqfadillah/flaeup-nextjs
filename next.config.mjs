/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.microlink.io",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
