/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // DEV workaround for react-compare-image
  async redirects() {
    return [
      // NAD+ variations → canonical
      {
        source: '/iv-therapy/drips/nad-plus-:dose(100mg|250mg|500mg)',
        destination: '/iv-therapy/drips/nad-plus',
        permanent: true,
      },
      // Other legacy routes → new target
      {
        source: '/iv-therapy/drips/post-party-hub',
        destination: '/iv-therapy/drips/hangover-iv-drip',
        permanent: true,
      },
      {
        source: '/iv-therapy/drips/detox-drip',
        destination: '/iv-therapy/drips/hangover-iv-drip',
        permanent: true,
      },
      {
        source: '/iv-therapy/drips/hydration-hub-express',
        destination: '/iv-therapy/drips',
        permanent: true,
      },
      {
        source: '/peptides/sermorelin-acetate-dubai',
        destination: '/peptides/ser-more-lin-acetate-dubai',
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
