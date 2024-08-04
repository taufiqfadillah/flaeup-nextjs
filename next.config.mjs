/** @type {import('next').NextConfig} */

// import bundleAnalyzer from '@next/bundle-analyzer';

// // Enable bundle analyzer if the 'ANALYZE' environment variable is true
// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// Define the Next.js configuration
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
      },
      {
        protocol: 'https',
        hostname: 'hleygwpdcquuyjyxogqd.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'lottiefiles.com',
      },
    ],
  },
};

export default nextConfig;
