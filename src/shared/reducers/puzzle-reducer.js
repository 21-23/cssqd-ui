import * as Actions from '../actions/puzzle-actions';

const initialState = {
    currentPuzzle: {
        markup: '',
        bannedChars: [],
        expectedSelection: [],
        title: '',
        index: -1,
    },
    puzzlesCount: 0,
};

export function puzzleReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.RECEIVE_PUZZLE:
            return {
                ...state,
                currentPuzzle: {
                    title: action.payload.title,
                    index: action.payload.index,
                    markup: action.payload.markup,
                    bannedChars: action.payload.bannedChars,
                    expectedSelection: action.payload.expectedSelection,
                }
            };

        case Actions.RECEIVE_PUZZLES_COUNT:
            return {
                ...state,
                puzzlesCount: action.payload,
            };

        default: return state;
    }
}
