// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          id:'grundlagen',
          path:'latex/grundlagen',
          routeBasePath:'grundlagen',
          sidebarPath: require.resolve('./sidebarsGrundlagen.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'vorlagen',
        path: 'latex/vorlagen',
        routeBasePath: 'vorlagen',
        sidebarPath: require.resolve('./sidebarsVorlagen.js'),
        // // editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        admonitions: {},
        // // remarkPlugins: [math],
        // // rehypePlugins: [katex],
        include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
        docLayoutComponent:'@theme/DocPage',
      },
    ],
    '@docusaurus/plugin-ideal-image',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'einleitung',
            docsPluginId: 'grundlagen',
            position: 'left',
            label: 'Grundlagen',
          },
          {
            type: 'doc',
            docId: 'uebersicht',
            docsPluginId: 'vorlagen',
            position: 'left',
            label: 'Vorlagen',
          },
          {to: '/formelsammlung', label: 'Formelsammlung', position: 'left'},
          {to: '/contact', label: 'Kontakt', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/wechlertj',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        // logo: {
        //   alt: 'Facebook Open Source Logo',
        //   src: 'img/oss_logo.png',
        //   href: 'https://opensource.facebook.com',
        //   width: 160,
        //   height: 51,
        // },
        links: [
          {
            title: 'LaTeX',
            items: [
              {
                label: 'Grundlagen',
                to: 'grundlagen/einleitung',
              },
              {
                label: 'Vorlagen',
                to: 'vorlagen/uebersicht',
              },
              {
                label: 'Formelsammlung',
                to: 'formelsammlung/id',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                 label: 'Kontakt',
                  href: '/contact',
              },
          //     {
          //       label: 'Youtube',
          //        href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Instagram',
          //        href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Website',
          //       href: 'https://twitter.com/docusaurus',
          //     },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wechlertj',
              },
              {
                label: 'Website',
                href:'a'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
