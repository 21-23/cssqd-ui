import * as Actions from '../actions/puzzle-actions';

const initialState = {
    markup: '',
    bannedChars: [],
    expectedSelection: [],
};

export function puzzleReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.RECEIVE_PUZZLE:
            return {
                ...state,
                markup: action.payload.markup,
                bannedChars: action.payload.bannedChars,
                expectedSelection: action.payload.expectedSelection,
            };

        default: return state;
    }
}
