import { combineReducers } from 'redux';
import { sharedReducers } from '../../shared/reducers';

import { solutionReducer } from './solution-reducer';
import { playerScoreReducer } from './player-score-reducer';

const gameReducer = combineReducers({
    ...sharedReducers,
    solution: solutionReducer,
    score: playerScoreReducer,
});

export { gameReducer };
