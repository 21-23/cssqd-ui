import { createSelector } from 'reselect';

export const puzzle = state => state.puzzle;
export const bannedChars = createSelector([puzzle], puzzle => puzzle.bannedChars);
export const markup = createSelector([puzzle], puzzle => puzzle.markup);
export const expectedSelection = createSelector([puzzle], puzzle => puzzle.expectedSelection);
