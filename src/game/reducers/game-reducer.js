import { combineReducers } from 'redux';
import { roundPhaseReducer } from '../../shared/reducers/round-phase-reducer';
import { countdownReducer } from '../../shared/reducers/countdown-reducer';
import { puzzleReducer } from '../../shared/reducers/puzzle-reducer';

import { solutionReducer } from './solution-reducer';


const gameReducer = combineReducers({
    roundPhase: roundPhaseReducer,
    countdown: countdownReducer,
    solution: solutionReducer,
    puzzle: puzzleReducer,
});

export { gameReducer };
