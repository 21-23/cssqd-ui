import { INIT } from '../actions/init-actions';

export function initReducer(state = false, action) {
    switch (action.type) {
        case INIT:
            return true;
        default:
            return state;
    }
}
