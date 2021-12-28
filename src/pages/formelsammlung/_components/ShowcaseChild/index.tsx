import React from 'react';
import { sortedUsers } from '@site/src/data/users';
import clsx from 'clsx';
import Image from '@theme/IdealImage';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';
import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import Tooltip from '../ShowcaseTooltip';
import {Tags, TagList, TagType, User, Tag} from '@site/src/data/users';
import {sortBy} from '@site/src/utils/jsUtils';



export default function ShowcaseChild({name}){    
    const child = sortedUsers.find(e => e.website === name);
    
    return (
    //   <div>
    //     {child.title ? (
    //       <h3>
    //         The <code>{child.preview}</code> in the query string is &quot;{name}
    //         &quot;
    //       </h3>
    //     ) : (
    //       <h3>There is no name in the query string</h3>
    //     )}
    //   </div>
    <></> );
  }