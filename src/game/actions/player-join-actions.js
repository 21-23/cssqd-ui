import { createAction } from 'redux-actions';

export const PLAYER_JOIN_FAILURE = 'PLAYER_JOIN_FAILURE';
export const playerJoinFailure = createAction(PLAYER_JOIN_FAILURE);
