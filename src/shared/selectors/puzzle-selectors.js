import { createSelector } from 'reselect';

export const puzzle = state => state.puzzle.currentPuzzle;
export const puzzlesCount = state => state.puzzle.puzzlesCount;
export const title = createSelector([puzzle], puzzle => puzzle.title);
export const index = createSelector([puzzle], puzzle => puzzle.index);
export const bannedChars = createSelector([puzzle], puzzle => puzzle.bannedChars);
export const markup = createSelector([puzzle], puzzle => puzzle.markup);
export const expectedSelection = createSelector([puzzle], puzzle => puzzle.expectedSelection);
export const timeLimit = createSelector([puzzle], puzzle => puzzle.timeLimit);
export const isLastRound = createSelector([index, puzzlesCount], (index, puzzlesCount) => index === puzzlesCount - 1);
