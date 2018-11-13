import { createSelector } from 'reselect';

import { participants } from './participants-selectors';
import { roundStarted } from '../../shared/selectors/round-phase-selectors';

const CORRECT_SOLUTION = 'correct';

const root = state => state.score;
export const visibleScore = createSelector(
    [root],
    score => score.visibleScore
);

export const aggregateScore = createSelector(
    [participants],
    participants =>
        participants.map(participant => ({
            displayName: participant.displayName,
            participantId: participant.participantId,
            aggregateScore: participant.aggregateScore,
        }))
);

export const roundScore = createSelector(
    [participants, roundStarted],
    (participants, roundStarted) =>
        participants.map(({ displayName, participantId, inputLength, solution }) => ({
            displayName: displayName,
            participantId: participantId,
            code: roundStarted ? inputLength : (solution && solution.code) || '',
            correct: solution && solution.correct,
            time: roundStarted ? (solution && solution.correct === CORRECT_SOLUTION && solution.time) || 0 : null,
        }))
);
