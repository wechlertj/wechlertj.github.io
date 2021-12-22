/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState, useMemo, useEffect } from 'react';
import {
  BrowserRouter as Router, Link
} from "react-router-dom";

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
import { sortedUsers, Tags, TagList, User, TagType } from '@site/src/data/users';
import ShowcaseTooltip from './_components/ShowcaseTooltip';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useLocation } from '@docusaurus/router';

import styles from './styles.module.css';

const TITLE = 'Docusaurus Site Showcase';
const DESCRIPTION = 'List of websites people are building with Docusaurus';
const EDIT_URL =
  'https://github.com/facebook/docusaurus/edit/main/website/src/data/users.tsx';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // //@ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

function filterUsers(
  users: User[],
  selectedTags: TagType[],
  operator: Operator,
) {
  if (selectedTags.length === 0) {
    return users;
  }
  return users.filter((user) => {
    if (user.tags.length === 0) {
      return false;
    }
    if (operator === 'AND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    } else {
      return selectedTags.some((tag) => user.tags.includes(tag));
    }
  });
}

function useFilteredUsers() {
  const selectedTags = useSelectedTags();
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('OR');
  useEffect(() => {
    setOperator(readOperator(location.search));
    restoreUserState(location.state);
  }, [location]);
  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator),
    [selectedTags, operator],
  );
}

function useSelectedTags() {
  // The search query-string is the source of truth!
  const location = useLocation<UserState>();

  // On SSR / first mount (hydration) no tag is selected
  const [selectedTags, setSelectedTags] = useState<TagType[]>([]);

  // Sync tags from QS to state (delayed on purpose to avoid SSR/Client hydration mismatch)
  useEffect(() => {
    setSelectedTags(readSearchTags(location.search));
    restoreUserState(location.state);
  }, [location]);

  return selectedTags;
}

function ShowcaseHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <h1>{TITLE}</h1>
      <p>{DESCRIPTION}</p>
      <a
        className="button button--primary"
        href={EDIT_URL}
        target="_blank"
        rel="noreferrer">
        🙏 Please add your site
      </a>
    </section>
  );
}

function ShowcaseFilters() {
  const filteredUsers = useFilteredUsers();
  return (
    <section className="container margin-top--l margin-bottom--lg">
      <div className={clsx('margin-bottom--sm', styles.filterCheckbox)}>
        <div>
          <h2>Filter</h2>
          <span>{`(${filteredUsers.length} Formelsammlung${filteredUsers.length > 1 ? 'en' : ''
            })`}</span>
        </div>
        <ShowcaseFilterToggle />
      </div>
      <ul className={styles.checkboxList}>
        {TagList.map((tag, i) => {
          const { label, description, color } = Tags[tag];
          const id = `showcase_checkbox_id_${tag}`;

          return (
            <li key={i} className={styles.checkboxListItem}>
              <ShowcaseTooltip
                id={id}
                text={description}
                anchorEl="#__docusaurus">
                <ShowcaseTagSelect
                  tag={tag}
                  id={id}
                  label={label}
                  icon={
                    tag === 'favorite' ? (
                      <FavoriteIcon svgClass={styles.svgIconFavoriteXs} />
                    ) : (
                      <span
                        style={{
                          backgroundColor: color,
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                          marginLeft: 8,
                        }}
                      />
                    )
                  }
                />
              </ShowcaseTooltip>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

const favoriteUsers = sortedUsers.filter((user) =>
  user.tags.includes('favorite'),
);
const otherUsers = sortedUsers.filter(
  (user) => !user.tags.includes('favorite'),
);

function ShowcaseCards() {
  const selectedTags = useSelectedTags();
  const filteredUsers = useFilteredUsers();

  if (filteredUsers.length === 0) {
    return (
      <section className="margin-top--lg margin-bottom--xl">
        <div className="container padding-vert--md text--center">
          <h2>Leider nichts gefunden</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="margin-top--lg margin-bottom--xl">
      {selectedTags.length === 0 ? (
        <>
          <div className={styles.showcaseFavorite}>
            <div className="container">
              <div
                className={clsx(
                  'margin-bottom--md',
                  styles.showcaseFavoriteHeader,
                )}>
                <h2>Die Favoriten</h2>
                <FavoriteIcon svgClass={styles.svgIconFavorite} />
              </div>
              <ul className={clsx('container', styles.showcaseList)}>
                {favoriteUsers.map((user) => (
                  <ShowcaseCard key={user.title} user={user} />
                ))}
              </ul>
            </div>
          </div>
          <div className="container margin-top--lg">
            <h2 className={styles.showcaseHeader}>All sites</h2>
            <ul className={styles.showcaseList}>
              {otherUsers.map((user) => (
                <ShowcaseCard key={user.title} user={user} />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="container">
          <ul className={styles.showcaseList}>
            {filteredUsers.map((user) => (
              <ShowcaseCard key={user.title} user={user} />
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Showcase(): JSX.Element {
  let query = useQuery();
  
  return(
    
      <Layout title={TITLE} description={DESCRIPTION}>
        <main className="margin-vert--lg">
          {query.get("name") === null ? (
            <>
              
              <ShowcaseHeader />
              <ShowcaseFilters />
              <ShowcaseCards />
            </>
          ) : (
            <Child name={query.get("name")} />
          )}
        </main>
      </Layout>
    
  );
}
function Child({ name }) {
  return (
    <div>
      {name ? (
        <h3>
          The <code>name</code> in the query string is &quot;{name}
          &quot;
        </h3>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
}

export default Showcase;
