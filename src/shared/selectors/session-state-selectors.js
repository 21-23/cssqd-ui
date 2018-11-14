import * as SessionState from '../constants/session-state';

export const isSessionFinished = state => state.sessionState === SessionState.SESSION_FINISHED;
