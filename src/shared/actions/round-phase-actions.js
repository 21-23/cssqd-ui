import { createAction } from 'redux-actions';

export const START_COUNTDOWN = 'START_COUNTDOWN';
export const startCountdown = createAction(START_COUNTDOWN);

export const START_ROUND = 'START_ROUND';
export const startRound = createAction(START_ROUND);

export const FINISH_ROUND = 'FINISH_ROUND';
export const finishRound = createAction(FINISH_ROUND);
