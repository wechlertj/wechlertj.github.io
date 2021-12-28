import React from 'react';
import clsx from 'clsx';

import FavoriteIcon from '@site/src/components/svgIcons/FavoriteIcon';
import ShowcaseCard from '../ShowcaseCard';
import { sortedUsers } from '@site/src/data/users';

import { useFilteredUsers, useSelectedTags } from '../utils/jsutils';

import styles from './styles.module.css';

const favoriteUsers = sortedUsers.filter((user) =>
    user.tags.includes('favorite'),
);

const otherUsers = sortedUsers.filter(
    (user) => !user.tags.includes('favorite'),
);

export default function ShowcaseCards() {
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
                    {favoriteUsers[0] == null ? ('') : (
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
                    )}
                    <div className="container margin-top--lg">
                        <h2 className={styles.showcaseHeader}>Alle Formelsammlungen</h2>
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