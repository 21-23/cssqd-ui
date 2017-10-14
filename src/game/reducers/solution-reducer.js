import * as Actions from '../actions/solution-actions';

const initialState = {
    selector: '',
    isCorrect: false,
};

export function solutionReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_SELECTOR:
            return {
                ...state,
                selector: action.payload,
            };

        default: return state;
    }
}
