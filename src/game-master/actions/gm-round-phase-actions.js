import { createAction } from 'redux-actions';

export const TRIGGER_ROUND_START = 'TRIGGER_ROUND_START';
export const triggerRoundStart = createAction(TRIGGER_ROUND_START);

export const TRIGGER_ROUND_END = 'TRIGGER_ROUND_END';
export const triggerRoundEnd = createAction(TRIGGER_ROUND_END);
