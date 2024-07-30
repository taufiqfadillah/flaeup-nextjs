/** @type {import('next').NextConfig} */
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
