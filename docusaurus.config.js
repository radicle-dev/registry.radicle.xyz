module.exports = {
  title: 'Radicle Registry Documentation',
  tagline: 'The Radicle Registry Developer Hub',
  url: 'https://radicle-run.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'radicle-dev', // Usually your GitHub org/user name.
  projectName: 'radicle-run', // Usually your repo name.
  themeConfig: {
    disableDarkMode: true, // Disables darkmode switch
    navbar: {
      title: 'Radicle Registry',
      logo: {
        alt: 'Radicle Logo',
        src: 'img/logo.svg',
      },
      links: [
        {to: '/intro', label: 'Docs', position: 'left'},
        {href: 'https://radicle.community', label: 'Community', position: 'left'},
        {to: '/faq', label: 'FAQ', position: 'left'},
        {
          href: 'https://github.com/radicle-dev',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Intro',
              to: '/intro',
            },
            {
              label: 'Getting started',
              to: '/getting-started',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '#radicle Freenode ',
              href: 'irc://irc.freenode.net/radicle',
            },
            {
              label: 'Forum',
              href: 'https://radicle.community/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/radicle-dev',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/radicle_xyz',
            },
          ],
        },
      ],
      copyright: `supported by monadic.xyz with ♡`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '', // Set to empty string
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/radicle-dev/radicle-run/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
