import { createSelector } from 'reselect';

const puzzle = state => state.puzzle;
const solution = state => state.solution;

export const selector = createSelector([solution], solution => solution.selector);
export const bannedChars = createSelector([puzzle], puzzle => puzzle.bannedChars);

export const highlightedBannedChars = createSelector(
    [bannedChars, selector],
    (bannedChars, selector) => selector
        .split('')
        .filter(char => bannedChars.indexOf(char) !== -1)
);
