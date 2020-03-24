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
        {to: 'docs/intro', label: 'Docs', position: 'left'},
        {href: 'https://radicle.community', label: 'Community', position: 'left'},
        {href: 'https://radicle.xyz/towards-decentralized-code-collaboration.html', label: 'Blog', position: 'left'},
        {to: 'docs/faq', label: 'FAQ', position: 'left'},
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
              to: 'docs/intro',
            },
            {
              label: 'Why Radicle?',
              to: 'docs/why',
            },
            {
              label: 'The Radicle Network',
              to: 'docs/network',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/radicle',
            },
            {
              label: 'Community forum',
              href: 'https://radicle.community/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://radicle.xyz/towards-decentralized-code-collaboration.html',
            },
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
