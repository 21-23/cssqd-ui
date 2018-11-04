import * as Actions from '../actions/countdown-actions';

const initialState = null;

export function countdownReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_TIME_REMAINING:
            return action.payload;

        default:
            return state;
    }
}
