import { createSelector } from 'reselect';

import { participants } from './participants-selectors';
import { roundStarted } from '../../shared/selectors/round-phase-selectors';

const root = state => state.score;
export const visibleScore = createSelector([root], score => score.visibleScore);

export const aggregateScore = createSelector([participants], participants =>
    participants.map(participant => ({
        displayName: participant.displayName,
        participantId: participant.participantId,
        aggregateScore: participant.aggregateScore,
    }))
);

export const roundScore = createSelector([participants, roundStarted], (participants, roundStarted) =>
    participants.map(participant => ({
        displayName: participant.displayName,
        participantId: participant.participantId,
        code: roundStarted ? participant.inputLength : (participant.solution && participant.solution.code) || '',
        correct: participant.solution && participant.solution.correct,
        time: roundStarted ? null : (participant.solution && participant.solution.time) || 0,
    }))
);
