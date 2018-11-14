import * as Actions from '../actions/session-state-actions';
import * as SessionState from '../constants/session-state';

const initialState = null;

export function sessionStateReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_SESSION_FINISHED:
            if (action.payload === true) {
                return SessionState.SESSION_FINISHED;
            } else {
                return SessionState.SESSION_IN_PROGRESS;
            }

        default:
            return state;
    }
}
