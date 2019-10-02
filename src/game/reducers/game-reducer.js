import { combineReducers } from 'redux';
import { sharedReducers } from '../../shared/reducers';

import { solutionReducer } from './solution-reducer';
import { playerScoreReducer } from './player-score-reducer';
import { playerJoinReducer } from './player-join-reducer';

const gameReducer = combineReducers({
    ...sharedReducers,
    solution: solutionReducer,
    score: playerScoreReducer,
    join: playerJoinReducer,
});

export { gameReducer };
