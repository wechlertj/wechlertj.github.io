import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';


const TITLE = 'Docusaurus Site Showcase';
const DESCRIPTION = 'Du hast eine Formelsammlung erstellt und möchtest das sie andere hier finden?';
const EDIT_URL =
  'https://github.com/facebook/docusaurus/edit/main/website/src/data/users.tsx';

export default function ShowcaseHeader() {
    return (
      <section className="margin-top--lg margin-bottom--lg text--center">
        <h1>{TITLE}</h1>
        <p>{DESCRIPTION}</p>
        <a
          className="button button--primary"
          href={EDIT_URL}
          target="_blank"
          rel="noreferrer">
          🙏 Schick sie mir zu!
        </a>
      </section>
    );
  }

