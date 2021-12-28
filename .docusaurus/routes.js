
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug','3d6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config','914'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content','c28'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry','0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes','244'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog','520'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive','f4c'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post','6c7'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post','f06'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post','bee'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags','e13'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus','ddf'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook','ede'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello','4c2'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola','752'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome','bfa'),
    exact: true
  },
  {
    path: '/contact/',
    component: ComponentCreator('/contact/','b95'),
    exact: true
  },
  {
    path: '/formelsammlung/',
    component: ComponentCreator('/formelsammlung/','328'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page','be1'),
    exact: true
  },
  {
    path: '/grundlagen',
    component: ComponentCreator('/grundlagen','24c'),
    routes: [
      {
        path: '/grundlagen/bibliography',
        component: ComponentCreator('/grundlagen/bibliography','543'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/correct_typography',
        component: ComponentCreator('/grundlagen/correct_typography','b1c'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/dateistruktur',
        component: ComponentCreator('/grundlagen/dateistruktur','ec6'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/dokument_struktur',
        component: ComponentCreator('/grundlagen/dokument_struktur','402'),
        exact: true
      },
      {
        path: '/grundlagen/einleitung',
        component: ComponentCreator('/grundlagen/einleitung','ff7'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/equations',
        component: ComponentCreator('/grundlagen/equations','c06'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/figure',
        component: ComponentCreator('/grundlagen/figure','5e6'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/installation',
        component: ComponentCreator('/grundlagen/installation','e46'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/installation-mactex',
        component: ComponentCreator('/grundlagen/installation-mactex','c0a'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/installation-miktex',
        component: ComponentCreator('/grundlagen/installation-miktex','267'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/installation-texlive',
        component: ComponentCreator('/grundlagen/installation-texlive','452'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/installation-texmaker-texstudio',
        component: ComponentCreator('/grundlagen/installation-texmaker-texstudio','a92'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/installation-vscode',
        component: ComponentCreator('/grundlagen/installation-vscode','c08'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/layout',
        component: ComponentCreator('/grundlagen/layout','ee3'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/listings',
        component: ComponentCreator('/grundlagen/listings','8fc'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/mathematik',
        component: ComponentCreator('/grundlagen/mathematik','92b'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/referenz',
        component: ComponentCreator('/grundlagen/referenz','3a6'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/table',
        component: ComponentCreator('/grundlagen/table','d25'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/text',
        component: ComponentCreator('/grundlagen/text','9c3'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/umgebungen',
        component: ComponentCreator('/grundlagen/umgebungen','a14'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/units',
        component: ComponentCreator('/grundlagen/units','10b'),
        exact: true
      },
      {
        path: '/grundlagen/verzeichnisse',
        component: ComponentCreator('/grundlagen/verzeichnisse','e0a'),
        exact: true,
        'sidebar': "grundlagen"
      },
      {
        path: '/grundlagen/wissenschaftlich',
        component: ComponentCreator('/grundlagen/wissenschaftlich','3fa'),
        exact: true,
        'sidebar': "grundlagen"
      }
    ]
  },
  {
    path: '/vorlagen',
    component: ComponentCreator('/vorlagen','9e2'),
    routes: [
      {
        path: '/vorlagen/anschreiben',
        component: ComponentCreator('/vorlagen/anschreiben','29d'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/brief',
        component: ComponentCreator('/vorlagen/brief','8f7'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/formelsammlung/dokument_struktur',
        component: ComponentCreator('/vorlagen/formelsammlung/dokument_struktur','a1f'),
        exact: true
      },
      {
        path: '/vorlagen/formelsammlung/frames',
        component: ComponentCreator('/vorlagen/formelsammlung/frames','e68'),
        exact: true
      },
      {
        path: '/vorlagen/formelsammlung/funktionsuebersicht',
        component: ComponentCreator('/vorlagen/formelsammlung/funktionsuebersicht','440'),
        exact: true
      },
      {
        path: '/vorlagen/formelsammlung/optionen',
        component: ComponentCreator('/vorlagen/formelsammlung/optionen','b9f'),
        exact: true
      },
      {
        path: '/vorlagen/formelsammlung/pakete',
        component: ComponentCreator('/vorlagen/formelsammlung/pakete','44a'),
        exact: true
      },
      {
        path: '/vorlagen/formelsammlung/uebersicht',
        component: ComponentCreator('/vorlagen/formelsammlung/uebersicht','6f8'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/hand_formelsammlung',
        component: ComponentCreator('/vorlagen/hand_formelsammlung','5c3'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/lebenslauf',
        component: ComponentCreator('/vorlagen/lebenslauf','893'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/praesentation/dokument_struktur',
        component: ComponentCreator('/vorlagen/praesentation/dokument_struktur','089'),
        exact: true
      },
      {
        path: '/vorlagen/praesentation/frames',
        component: ComponentCreator('/vorlagen/praesentation/frames','0d5'),
        exact: true
      },
      {
        path: '/vorlagen/praesentation/funktionsuebersicht',
        component: ComponentCreator('/vorlagen/praesentation/funktionsuebersicht','5a7'),
        exact: true
      },
      {
        path: '/vorlagen/praesentation/optionen',
        component: ComponentCreator('/vorlagen/praesentation/optionen','a19'),
        exact: true
      },
      {
        path: '/vorlagen/praesentation/pakete',
        component: ComponentCreator('/vorlagen/praesentation/pakete','eee'),
        exact: true
      },
      {
        path: '/vorlagen/praesentation/uebersicht',
        component: ComponentCreator('/vorlagen/praesentation/uebersicht','76c'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/tagebuch/anwendung/dokument_struktur',
        component: ComponentCreator('/vorlagen/tagebuch/anwendung/dokument_struktur','ad9'),
        exact: true
      },
      {
        path: '/vorlagen/tagebuch/anwendung/funktionsuebersicht',
        component: ComponentCreator('/vorlagen/tagebuch/anwendung/funktionsuebersicht','c58'),
        exact: true
      },
      {
        path: '/vorlagen/tagebuch/optionen',
        component: ComponentCreator('/vorlagen/tagebuch/optionen','450'),
        exact: true
      },
      {
        path: '/vorlagen/tagebuch/pakete',
        component: ComponentCreator('/vorlagen/tagebuch/pakete','5dd'),
        exact: true
      },
      {
        path: '/vorlagen/tagebuch/uebersicht',
        component: ComponentCreator('/vorlagen/tagebuch/uebersicht','aae'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/thesis/anwendnung',
        component: ComponentCreator('/vorlagen/thesis/anwendnung','e96'),
        exact: true
      },
      {
        path: '/vorlagen/thesis/dokumentenklasse',
        component: ComponentCreator('/vorlagen/thesis/dokumentenklasse','bf1'),
        exact: true
      },
      {
        path: '/vorlagen/thesis/funktionsuebersicht',
        component: ComponentCreator('/vorlagen/thesis/funktionsuebersicht','fe1'),
        exact: true
      },
      {
        path: '/vorlagen/thesis/optionen',
        component: ComponentCreator('/vorlagen/thesis/optionen','720'),
        exact: true
      },
      {
        path: '/vorlagen/thesis/pakete',
        component: ComponentCreator('/vorlagen/thesis/pakete','a3b'),
        exact: true
      },
      {
        path: '/vorlagen/thesis/titleseite',
        component: ComponentCreator('/vorlagen/thesis/titleseite','907'),
        exact: true
      },
      {
        path: '/vorlagen/thesis/uebersicht',
        component: ComponentCreator('/vorlagen/thesis/uebersicht','e4a'),
        exact: true,
        'sidebar': "latex"
      },
      {
        path: '/vorlagen/uebersicht',
        component: ComponentCreator('/vorlagen/uebersicht','09a'),
        exact: true,
        'sidebar': "latex"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/','f49'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
