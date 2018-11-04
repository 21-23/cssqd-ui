import * as Actions from '../actions/solution-actions';

const initialState = {
    selector: '',
    selection: [],
    isCorrect: false,
};

export function solutionReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_SELECTOR:
            return {
                ...state,
                selector: action.payload,
            };

        case Actions.CLEAR_SELECTOR:
            return initialState;

        case Actions.SET_SELECTION:
            return {
                ...state,
                selection: action.payload.selection,
                isCorrect: action.payload.isCorrect,
            };

        default:
            return state;
    }
}
