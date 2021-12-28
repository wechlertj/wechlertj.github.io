import { useState, useMemo, useEffect } from 'react';

import {readSearchTags,} from '../ShowcaseTagSelect';
import { Operator, readOperator,} from '../ShowcaseFilterToggle';

import { sortedUsers, User, TagType } from '@site/src/data/users';
import { useLocation } from '@docusaurus/router';

type UserState = {
  scrollTopPosition: number;
  focusedElementId: string | undefined;
};

export function restoreUserState(userState: UserState | null) {
  const { scrollTopPosition, focusedElementId } = userState ?? {
    scrollTopPosition: 0,
    focusedElementId: undefined,
  };
  // //@ts-expect-error: if focusedElementId is undefined it returns null
  document.getElementById(focusedElementId)?.focus();
  window.scrollTo({ top: scrollTopPosition });
}

export function useFilteredUsers() {
  const selectedTags = useSelectedTags();
  const location = useLocation<UserState>();
  const [operator, setOperator] = useState<Operator>('ODER');
  useEffect(() => {
    setOperator(readOperator(location.search));
    restoreUserState(location.state);
  }, [location]);
  return useMemo(
    () => filterUsers(sortedUsers, selectedTags, operator),
    [selectedTags, operator],
  );
}

export function useSelectedTags() {
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
    if (operator === 'UND') {
      return selectedTags.every((tag) => user.tags.includes(tag));
    } else {
      return selectedTags.some((tag) => user.tags.includes(tag));
    }
  });
}