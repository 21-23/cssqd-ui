import * as Actions from '../actions/gm-ready-state-actions';
import * as ReadyState from '../constants/ready-states';

const initialState = null;

export function gmReadyStateReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_READY_STATE:
            if (action.payload === true) {
                return ReadyState.READY;
            } else {
                return ReadyState.WAITING;
            }

        default:
            return state;
    }
}
