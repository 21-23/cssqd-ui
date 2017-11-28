import * as Actions from '../actions/score-actions';
import { ScoreType } from '../constants/score-types';

const initialState = {
    visibleScore: ScoreType.ROUND,
};

export function scoreReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.TOGGLE_VISIBLE_SCORE_TYPE:
            return {
                ...state,
                visibleScore: state.visibleScore === ScoreType.ROUND ? ScoreType.AGGREGATE : ScoreType.ROUND,
            };

        default:
            return state;
    }
}
