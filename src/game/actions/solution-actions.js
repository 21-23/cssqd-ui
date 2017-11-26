import { createAction } from 'redux-actions';

export const SET_SELECTOR = 'SET_SELECTOR';
export const setSelector = createAction(SET_SELECTOR);

export const SET_SELECTION = 'SET_SELECTION';
export const setSelection = createAction(SET_SELECTION);

export const CLEAR_SELECTOR = 'CLEAR_SELECTOR';
export const clearSelector = createAction(CLEAR_SELECTOR);
