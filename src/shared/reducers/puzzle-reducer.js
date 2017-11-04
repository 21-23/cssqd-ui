import * as Actions from '../actions/puzzle-actions';

const initialState = {
    markup: '',
    bannedChars: [],
    expectedSelection: [],
    title: '',
    index: -1,
};

export function puzzleReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.RECEIVE_PUZZLE:
            return {
                ...state,
                title: action.payload.title,
                index: action.payload.index,
                markup: action.payload.markup,
                bannedChars: action.payload.bannedChars,
                expectedSelection: action.payload.expectedSelection,
            };

        default: return state;
    }
}
