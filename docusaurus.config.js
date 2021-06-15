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
    image: 'img/logo.png',
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'UnityParty',
      logo: {
        alt: 'UPLogo',
        src: 'img/logo.png',
      },
      items: [
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Who We Are',
        // },
        // {
        //   type: 'doc',
        //   docId: 'politics',
        //   position: 'left',
        //   label: 'Politics',
        // },
        // {
        //   type: 'doc',
        //   docId: 'economicstrade',
        //   position: 'left',
        //   label: 'Economics'
        // },
        // {
        //   type: 'doc',
        //   docId: 'socialpolicy',
        //   position: 'left',
        //   label: 'Society'
        // },
        // {
        //   type: 'doc',
        //   docId: 'criminaljustice',
        //   position: 'left',
        //   label: 'Criminal Justice'
        // },
        // {
        //   type: 'doc',
        //   docId: 'indigenouspeoplepolicies',
        //   position: 'left',
        //   label: 'Indigenous'
        // },
        // {
        //   type: 'doc',
        //   docId: 'foreignpolicy',
        //   position: 'left',
        //   label: 'Foreign Policy'
        // },
        // {
        //   type: 'doc',
        //   docId: 'environmentalpolicies',
        //   position: 'left',
        //   label: 'Environment'
        // },
        // {
        //   type: 'doc',
        //   docId: 'howunitypays',
        //   position: 'left',
        //   label: 'How We Unify'
        // },
        // {
        //   href: 'https://github.com/risingsunomi/unitypartdev',
        //   label: 'Source',
        //   position: 'right',
        // },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Politics Discord',
              href: 'https://politics.gg',
            }
          ],
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
