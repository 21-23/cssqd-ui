import * as Actions from '../actions/user-actions';

const initialState = '';

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.RECEIVE_USER:
            return action.payload;
        default: return state;
    }
}
