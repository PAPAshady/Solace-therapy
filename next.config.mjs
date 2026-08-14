/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      new URL('https://aeencc.com/**'),
      new URL('https://mahnazarianmanesh.ir/**'),
      new URL('https://dbazargan.ir/**'),
      new URL('https://jananclinic.ir/**'),
      new URL('https://pouralizade.ir/**'),
    ],
  },
};

export default nextConfig;
