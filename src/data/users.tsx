/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* eslint-disable global-require */

import {sortBy} from '@site/src/utils/jsUtils';

/*
 * ADD YOUR SITE TO THE DOCUSAURUS SHOWCASE:
 *
 * Requirements for adding your site to our showcase:
 * - It is a production-ready site with real content and decent customizations (different from the init templates)
 * - It is NOT a work-in-progress with empty pages
 * - It has a stable domain name (a Netlify/Vercel deploy preview is not allowed)
 *
 * Instructions:
 * - Add your site in the json array below
 * - Add a local image preview (decent screenshot of your Docusaurus site)
 * - Use relevant tags to qualify your site (read the tag descriptions below)
 * - The image MUST be added to the GitHub repository, and use `require("image")`
 * - Open a PR and check for reported CI errors
 *
 * Example PR: https://github.com/facebook/docusaurus/pull/3976
 *
 * If you edit this file through the Github interface, you can:
 * - Submit first your users.js edit PR
 * - This will create a branch on your Docusaurus fork (usually "patch-1")
 * - Go to https://github.com/<username>/docusaurus/tree/<branch>/website/src/data/showcase
 * - Drag-and-drop an image here to add it to your existing PR
 *
 * Please help us maintain this showcase page data:
 * - Update sites with wrong data
 * - Ensure site tags remains correct over time
 * - Remove sites not using Docusaurus anymore
 * - Add missing Docusaurus sites (if the site owner agreed)
 *
 */

export type Tag = {
  label: string;
  description: string;
  color: string;
};

export type TagType =
  | 'favorite'
  | 'opensource'
  | 'product'
  | 'design'
  | 'i18n'
  | 'versioning'
  | 'large'
  | 'meta'
  | 'rtl'
  | 'personal'
  | 'semester1'
  | 'semester2'
  | 'semester3'
  | 'semester4'
  | 'semester5'
  | 'semester6';

export type User = {
  title: string;
  description: string;
  preview: any;
  website: string;
  source: string | null;
  tags: TagType[];
};

// LIST OF AVAILABLE TAGS
// Available tags to assign to your site
// Please choose widely, we'll remove unappropriate tags
export const Tags: Record<TagType, Tag> = {
  // DO NOT USE THIS TAG: we choose sites to add to favorites
  favorite: {
    label: 'Favoriten',
    description:
      'Diese Formelsammlung wirst du immer wieder in deinem Studium brauchen!',
    color: '#e9669e',
  },

  // For open-source sites, a link to the source code is required
  opensource: {
    label: 'Open-Source',
    description: 'Open-Source Docusaurus sites can be useful for inspiration!',
    color: '#39ca30',
  },

  product: {
    label: 'Product',
    description: 'Docusaurus sites associated to a commercial product!',
    color: '#dfd545',
  },

  design: {
    label: 'Design',
    description:
      'Beautiful Docusaurus sites, polished and standing out from the initial template!',
    color: '#a44fb7',
  },

  i18n: {
    label: 'I18n',
    description:
      'Translated Docusaurus sites using the internationalization support with more than 1 locale.',
    color: '#127f82',
  },

  versioning: {
    label: 'Versioning',
    description:
      'Docusaurus sites using the versioning feature of the docs plugin to manage multiple versions.',
    color: '#fe6829',
  },

  // Large Docusaurus sites, with a lot of content (> 200 pages, excluding versions)
  large: {
    label: 'Large',
    description:
      'Very large Docusaurus sites, including much more pages than the average!',
    color: '#8c2f00',
  },

  meta: {
    label: 'Meta',
    description: 'Docusaurus sites of Meta (formerly Facebook) projects',
    color: '#4267b2', // Facebook blue
  },
  personal: {
    label: 'Personal',
    description:
      'Personal websites, blogs and digital gardens built with Docusaurus',
    color: '#14cfc3',
  },
  rtl: {
    label: 'RTL Direction',
    description:
      'Docusaurus sites using the right-to-left reading direction support.',
    color: '#ffcfc3',
  },
  semester1:{
    label: 'Semester 1',
    description:
    '',
    color: '#fb4232'
  }, 
  semester2:{
    label: 'Semester 2',
    description:
    '',
    color: '#fb4232'
  }, 
  semester3:{
    label: 'Semester 3',
    description:
    '',
    color: '#fb4232'
  },
  semester4:{
    label: 'Semester 4',
    description:
    '',
    color: '#fb4232'
  },
  semester5:{
    label: 'Semester 5',
    description:
    '',
    color: '#fb4232'
  },
  semester6:{
    label: 'Semester 6',
    description:
    '',
    color: '#fb4232'
  }
};

// Add your site to this list
// prettier-ignore
const Users: User[] = [
  {
    title: 'Aide Jeune',
    description:
      'French Discord server that helps young people who have been bullied or feel bad about themselves',
    preview: require('./showcase/aide_jeune.png'),
    website: 'das',
    source: 'https://github.com/AideJeune',
    tags: ['favorite',
      'opensource','semester1'],
  },
  {
    title: 'AgileTs',
    description: 'Global State and Logic Framework for reactive Applications',
    preview: require('./showcase/agilets.png'),
    website: 'agi',
    source: 'https://github.com/agile-ts/documentation',
    tags: ['opensource', 'favorite',
      'design'],
  },
  {
    title: 'AI-Speaker',
    description: 'Local, reliable, fast and private Audio and IoT gate.',
    preview: require('./showcase/aispeaker.png'),
    website: 'https://ai-speaker.com/',
    source: 'https://github.com/sviete/AIS-WWW',
    tags: ['opensource','favorite',
    ],
  },
  {
    title: 'Algolia Docsearch',
    description:
      'The best search experience for docs, integrates in minutes, for free',
    preview: require('./showcase/algolia.png'),
    website: 'All',
    source: 'https://github.com/algolia/docsearch-website',
    tags: ['favorite',
     'opensource', 'product'],
  },
  {
    title: 'Amphora Data',
    description: 'Connecting the world’s real-time information',
    preview: require('./showcase/amphora.png'),
    website: 'https://www.amphoradata.com/',
    source: 'https://github.com/amphoradata/amphoradata.github.io',
    tags: ['opensource', 'product'],
  },
  {
    title: 'IOTA-Wiki',
    description: 'Documantation and wiki for the IOTA project',
    preview: require('./showcase/iota-wiki.png'),
    website: 'https://wiki.iota.org',
    source: 'https://github.com/iota-community/iota-wiki',
    tags: ['favorite',
     'opensource'],
  },
  {
    title: 'Jest',
    description:
      'Jest is a delightful JavaScript Testing Framework with a focus on simplicity.',
    preview: require('./showcase/jest.png'),
    website: 'https://jestjs.io/',
    source: 'https://github.com/facebook/jest/tree/master/website',
    tags: ['favorite',
     'opensource', 'design', 'i18n', 'versioning'],
  },
  {
    title: 'Mint Metrics',
    description:
      'Conversion optimisation and web analytics agency from Melbourne, Australia.',
    preview: require('./showcase/mintmetrics.png'),
    website: 'https://mintmetrics.io/',
    source: null,
    tags: ['design'],
  },
  {
    title: 'Motion Layout',
    description:
      'Create beautiful immersive React.js animations using shared components',
    preview: require('./showcase/motion-layout.png'),
    website: 'https://motion-layout.azurewebsites.net',
    source: 'https://github.com/jeffersonlicet/react-motion-layout',
    tags: ['opensource'],
  },
  {
    title: 'nanos world documentation',
    description:
      'nanos world is the next-generation multiplayer open world sandbox game.',
    preview: require('./showcase/nanos-world.png'),
    website: 'https://docs.nanos.world/',
    source: 'https://github.com/nanos-world/docs',
    tags: ['opensource', 'versioning', 'i18n', 'product'],
  },
  {
    title: 'netboot.xyz',
    description: 'Your favorite operating systems in one place!',
    preview: require('./showcase/netbootxyz.png'),
    website: 'https://netboot.xyz',
    source: 'https://github.com/netbootxyz/netboot.xyz-docs/',
    tags: ['opensource'],
  },
  {
    title: 'Netdata Learn',
    description:
      'An educational site for monitoring and troubleshooting systems',
    preview: require('./showcase/netdata.png'),
    website: 'https://learn.netdata.cloud',
    source: 'https://github.com/netdata/netdata-learn-docusaurus',
    tags: ['opensource', 'product', 'large'],
  },
  {
    title: 'Neutron JS',
    description: 'An open source CLI to work with Redux + Redux Saga',
    preview: require('./showcase/neutronjs.png'),
    website: 'https://www.neutronjs.com/',
    source: 'https://github.com/neutronjs/neutron-cli',
    tags: ['opensource', 'versioning'],
  },
  {
    title: 'NextAuth.js',
    description: 'An open source serverless authentication library for next.js',
    preview: require('./showcase/nextauthjs.png'),
    website: 'https://next-auth.js.org/',
    source: 'https://github.com/nextauthjs/next-auth',
    tags: ['opensource', 'design'],
  },
  {
    title: 'Node SerialPort',
    description: 'Talk to your Serial devices',
    preview: require('./showcase/node-serialport.png'),
    website: 'https://serialport.io',
    source: 'https://github.com/serialport/node-serialport',
    tags: ['opensource', 'versioning'],
  },
  {
    title: 'Nodify',
    description:
      'High-performance WPF node editor component designed for MVVM.',
    preview: require('./showcase/nodify.png'),
    website: 'https://miroiu.github.io/nodify/',
    source: 'https://github.com/miroiu/nodify',
    tags: ['opensource', 'design'],
  },
  {
    title: 'OCPeasy',
    description:
      'Open-source software provisioning, configuration management, and application-deployment tool enabling infrastructure as code on OpenShift.',
    preview: require('./showcase/ocpeasy.png'),
    website: 'https://www.ocpeasy.org',
    source: 'https://github.com/ocpeasy/website',
    tags: ['opensource'],
  },
  {
    title: 'QuantCDN',
    description:
      'An all-in-one Static Web solution and global Content Delivery Network',
    preview: require('./showcase/quantcdn.png'),
    website: 'https://docs.quantcdn.io',
    source: 'https://github.com/quantcdn/docs',
    tags: ['opensource', 'product'],
  },
  {
    title: 'QuestDB',
    description:
      'An open source SQL database designed to process time series data',
    preview: require('./showcase/questdb.png'),
    website: 'https://questdb.io',
    source: 'https://github.com/questdb/questdb.io',
    tags: ['opensource', 'favorite', 
    'design', 'large'],
  },
 
  {
    title: 'React Native',
    description: 'A framework for building native apps using React',
    preview: require('./showcase/reactnative.png'),
    website: 'https://reactnative.dev',
    source: 'https://github.com/facebook/react-native-website',
    tags: [
      'opensource',
      'meta',
      'large',
     'favorite',
      'design',
      'versioning',
      
    ],
  },
  
  /*
  Pro Tip: add your site in alphabetical order.
  Appending your site here (at the end) is more likely to produce Git conflicts.
   */
];

export const TagList = Object.keys(Tags) as TagType[];
function sortUsers() {
  let result = Users;
  // Sort by site name
  result = sortBy(result, (user) => user.title.toLowerCase());
  // Sort by favorite tag, favorites first
  result = sortBy(result, (user) => !user.tags.includes('favorite'));
  return result;
}

export const sortedUsers = sortUsers();
