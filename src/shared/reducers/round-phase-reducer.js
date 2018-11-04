import * as Actions from '../actions/round-phase-actions';
import * as RoundPhase from '../constants/round-phase';

const initialState = null;

export function roundPhaseReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.START_COUNTDOWN:
            return RoundPhase.COUNTDOWN;

        case Actions.START_ROUND:
            return RoundPhase.IN_PROGRESS;

        case Actions.FINISH_ROUND:
            return RoundPhase.FINISHED;

        default:
            return state;
    }
}
