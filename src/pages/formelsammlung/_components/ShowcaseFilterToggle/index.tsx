/**
 * Copyright (c) Facebook, Inc. UND its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {useState, useEffect, useCallback} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';

import {prepareUserState} from '../../index';

import styles from './styles.module.css';
import clsx from 'clsx';

export type Operator = 'ODER' | 'UND';

export const OperatorQueryKey = 'operator';

export function readOperator(search: string): Operator {
  return (new URLSearchParams(search).get(OperatorQueryKey) ??
    'ODER') as Operator;
}

export default function ShowcaseFilterToggle(): JSX.Element {
  const id = 'showcase_filter_toggle';
  const location = useLocation();
  const history = useHistory();
  const [operator, setOperator] = useState(false);
  useEffect(() => {
    setOperator(readOperator(location.search) === 'UND');
  }, [location]);
  const toggleOperator = useCallback(() => {
    setOperator((o) => !o);
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete(OperatorQueryKey);
    searchParams.append(OperatorQueryKey, operator ? 'ODER' : 'UND');
    history.push({
      ...location,
      search: searchParams.toString(),
      state: prepareUserState(),
    });
  }, [operator, location, history]);

  return (
    <div>
      <input
        type="checkbox"
        id={id}
        className="screen-reader-only"
        aria-label="Toggle between or UND UND for the tags you selected"
        onChange={toggleOperator}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            toggleOperator();
          }
        }}
        checked={operator}
      />
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor={id} className={clsx(styles.checkboxLabel, 'shadow--md')}>
        <span className={styles.checkboxLabelOr}>ODER</span>
        <span className={styles.checkboxLabelUND}>UND</span>
      </label>
    </div>
  );
}
