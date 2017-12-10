import { roundPhaseReducer } from './round-phase-reducer';
import { countdownReducer } from './countdown-reducer';
import { puzzleReducer } from './puzzle-reducer';
import { userReducer } from './user-reducer';
import { initReducer } from './init-reducer';


export const sharedReducers = {
    roundPhase: roundPhaseReducer,
    countdown: countdownReducer,
    puzzle: puzzleReducer,
    username: userReducer,
    initialized: initReducer,
};
