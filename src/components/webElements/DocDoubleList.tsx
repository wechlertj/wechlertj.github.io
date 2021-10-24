import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './DocDoubleList.module.css';
import LatexVorlage from '../../../latex/props/_LatexVorlage.mdx';



export default function DocDoubleList(props) {

    console.log(props)

    return (
        <div className={styles.listParent}>
            <div className={styles.listChild}>
                {props.children[0]}
            </div>
            <div className={styles.listChild}>
                {props.children[1]}
            </div>
        </div>
    );
  }
