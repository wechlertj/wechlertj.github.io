import React from 'react';
import clsx from 'clsx';

import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import ShowcaseTagSelect from '../ShowcaseTagSelect';
import ShowcaseFilterToggle from '../ShowcaseFilterToggle';

import ShowcaseTooltip from '../ShowcaseTooltip';
import { Tags, TagList } from '@site/src/data/users';

import { useFilteredUsers } from '../utils/jsutils';

import styles from './styles.module.css';

export default function ShowcaseFilters() {
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
          {
            TagList.map((tag, i) => {
              const { label, description, color } = Tags[tag];
              const id = `showcase_checkbox_id_${tag}`;
              if (!label.match('Semester')) {
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
              }
            })
          }
        </ul>
        <ul className={styles.checkboxList}>
          {
            TagList.map((tag, i) => {
              const { label, description, color } = Tags[tag];
              const id = `showcase_checkbox_id_${tag}`;
              if (label.match('Semester')) {
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
                          <span
                            style={{
                              backgroundColor: color,
                              width: 10,
                              height: 10,
                              borderRadius: '50%',
                              marginLeft: 8,
                            }}
                          />
                        }
                      />
                    </ShowcaseTooltip>
                  </li>
                );
              }
            })
          }
        </ul>
      </section>
    );
  }