/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'The Unity Party',
  tagline: 'A Hammer in One Hand, A Rose in the Other',
  url: 'https://unityparty.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'risingsunomi', // Usually your GitHub org/user name.
  projectName: 'unityparty.xyz', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'UnityParty',
      logo: {
        alt: 'UPLogo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Who we are',
        },
        {
          type: 'doc',
          docId: 'politics',
          position: 'left',
          label: 'Our Politics',
        },
        {
          type: 'doc',
          docId: 'economicstrade',
          position: 'left',
          label: 'Our Economic & Trade Policies'
        },
        {
          type: 'doc',
          docId: 'socialpolicy',
          position: 'left',
          label: 'Our Social Policies'
        },
        {
          href: 'https://github.com/risingsunomi/unitypartdev',
          label: 'Source',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Docs',
        //   items: [
        //     {
        //       label: 'Tutorial',
        //       to: '/docs/intro',
        //     },
        //   ],
        // },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Blog',
        //       to: '/blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/risingsunomi/unitypartdev',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
