/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '@theme/Layout';

import ShowcaseHeader from './_components/ShowcaseHeader';
import ShowcaseFilters from './_components/ShowcaseFilters';
import ShowcaseCards from './_components/ShowcaseCards';
import ShowcaseChild from './_components/ShowcaseChild';

import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { useLocation } from '@docusaurus/router';

const TITLE = 'Formelsammlung';
const DESCRIPTION = 'Formelsammlung für Angewandte Physik Hochschule RheinMain';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

export function prepareUserState(): UserState | undefined {
  if (ExecutionEnvironment.canUseDOM) {
    return {
      scrollTopPosition: window.scrollY,
      focusedElementId: document.activeElement?.id,
    };
  }

  return undefined;
}

// A custom hook that builds on useLocation to parse
// the query string for you.
function useQuery() {
  const { search } = useLocation();
  console.log(useLocation());

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function Showcase(): JSX.Element {
  let query = useQuery();

  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        {query.get("name") === null ? (
          <>
            <ShowcaseHeader />
            <ShowcaseFilters />
            <ShowcaseCards />
          </>
        ) : (
          <ShowcaseChild name={query.get("name")} />
        )}
      </main>
    </Layout>

  );
}


export default Showcase;
