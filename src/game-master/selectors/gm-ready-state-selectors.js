import * as ReadyState from '../constants/ready-states';

export const isReady = state => state.readyState === ReadyState.READY;
export const isWaiting = state => state.readyState === ReadyState.WAITING;
