import { createAction } from 'redux-actions';

export const RECEIVE_PUZZLE = 'RECEIVE_PUZZLE';
export const receivePuzzle = createAction(RECEIVE_PUZZLE);

export const RECEIVE_PUZZLES_COUNT = 'RECEIVE_PUZZLES_COUNT';
export const receivePuzzlesCount = createAction(RECEIVE_PUZZLES_COUNT);
