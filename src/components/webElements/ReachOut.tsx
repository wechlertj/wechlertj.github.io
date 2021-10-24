import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './ReachOut.module.css';



export default function ReachOut(props) {
    return (
        <div className={styles.getStarted}>
            <h1>{props.title}</h1>
            <p className={styles.lead}>
            {props.content}
            </p>
            <Link className={styles.btnprimary} to={props.link}>{props.linkText}</Link>
        </div>        
    );
  }