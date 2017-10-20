import { createSelector } from 'reselect';
import { bannedChars } from '../../shared/selectors/puzzle-selectors';
import { selector } from './solution-selectors';

export const highlightedBannedChars = createSelector(
    [bannedChars, selector],
    (bannedChars, selector) => selector
        .split('')
        .filter(char => bannedChars.indexOf(char) !== -1)
);
