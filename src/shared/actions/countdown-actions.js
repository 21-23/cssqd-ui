import { createAction } from 'redux-actions';

export const SET_TIME_REMAINING = 'SET_TIME_REMAINING';
export const setTimeRemaining = createAction(SET_TIME_REMAINING, time => time, (_, force) => ({ force }));
