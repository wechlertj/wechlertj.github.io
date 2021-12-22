import React, {useState, useMemo, useEffect} from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom'
import Layout from '@theme/Layout';
import clsx from 'clsx';

import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import ShowcaseTagSelect, {
  readSearchTags,
} from './_components/ShowcaseTagSelect';
import ShowcaseFilterToggle, {
  Operator,
  readOperator,
} from './_components/ShowcaseFilterToggle';
import ShowcaseCard from './_components/ShowcaseCard';
import {sortedUsers, Tags, TagList, User, TagType} from '@site/src/data/users';
import ShowcaseTooltip from './_components/ShowcaseTooltip';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {useLocation} from '@docusaurus/router';
function SingleProject(props) {
    const { id } = props.match.params;
    return(
      <div>
        <h1>{id}</h1>
      </div>
    );
  }
  export default SingleProject;
  