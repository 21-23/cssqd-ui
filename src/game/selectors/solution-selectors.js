import { createSelector } from 'reselect';

export const solution = state => state.solution;
export const selector = createSelector([solution], solution => solution.selector);
export const selection = createSelector([solution], solution => solution.selection);
