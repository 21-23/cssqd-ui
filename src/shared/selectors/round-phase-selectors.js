import { createSelector } from 'reselect';
import * as RoundPhase from '../constants/round-phase';

export const phase = state => state.roundPhase;
export const roundStarted = createSelector([phase], phase => phase === RoundPhase.IN_PROGRESS);
export const roundFinished = createSelector([phase], phase => phase === RoundPhase.FINISHED);
export const isWaiting = createSelector([phase], phase => phase === null || phase === RoundPhase.FINISHED);
