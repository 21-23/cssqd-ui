import { combineReducers } from 'redux';
import { roundPhaseReducer } from '../../shared/reducers/round-phase-reducer';
import { countdownReducer } from '../../shared/reducers/countdown-reducer';

const gameReducer = combineReducers({
    roundPhase: roundPhaseReducer,
    countdown: countdownReducer,
});

export { gameReducer };
