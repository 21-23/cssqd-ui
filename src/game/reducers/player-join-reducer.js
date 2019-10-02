import * as Actions from '../actions/player-join-actions';

const initialState = {
    reason: '',
};

export function playerJoinReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.PLAYER_JOIN_FAILURE: {
            return {
                reason: action.payload.reason,
            };
        }

        default:
            return state;
    }
}
