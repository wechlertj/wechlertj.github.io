//const math = require('remark-math');
//const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Willkommen',
  tagline: '',
  url: 'https://wechlertj.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wechlertj', // Usually your GitHub org/user name.
  projectName: 'wechlertj.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Startseite',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'uebersicht',
         // path:'latexdoc',
          position: 'left',
          label: 'LaTeX Vorlagen',
        
        },
       // {to: 'sammlung', label: 'Formelsammlung', position: 'left'},
       // {to: 'help', label: 'Hilfe', position: 'left'},
        {
          to: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          /*title: 'Docs',
          items: [
            {
              label: 'LaTeX',
              to: 'latex/uebersicht',
            },
            /*{
              label: 'Formelsammlung',
              to: 'sammlung',
            },
         ],*/
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Youtube',
              to: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Instagram',
              to: 'https://discordapp.com/invite/docusaurus',
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tim-Jonas Wechler. Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ['latex'],

    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'latex',
          routeBasePath: 'latex',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          /*editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',*/
          admonitions: {},
          //remarkPlugins: [math],
          //rehypePlugins: [katex]
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          /*editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',*/
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    /*[
      '@docusaurus/plugin-content-docs',
      {
        id: 'sammlung',
        path: 'sammlung',
        routeBasePath: 'sammlung',
        sidebarPath: require.resolve('./sidebarsSammlung.js'),
        editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        admonitions: {},
        remarkPlugins: [math],
        rehypePlugins: [katex],
        //include: ['/*.{js,jsx,ts,tsx,md,mdx}'],
        docLayoutComponent:'@theme/DocPage',
        
      },
      
    ],*/
    '@docusaurus/plugin-ideal-image'
  ],
  stylesheets: [
    {
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css",
        integrity: "sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc",
        crossorigin: "anonymous",
    },
  ],
};
