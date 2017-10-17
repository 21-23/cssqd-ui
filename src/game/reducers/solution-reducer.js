import * as Actions from '../actions/solution-actions';

const initialState = {
    selector: '',
    selection: [],
};

export function solutionReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SET_SELECTOR:
            return {
                ...state,
                selector: action.payload,
            };

        case Actions.SET_SELECTION:
            return {
                ...state,
                selection: action.payload,
            };

        default: return state;
    }
}
