import { combineReducers } from 'redux';
import { sharedReducers } from '../../shared/reducers';

import { solutionReducer } from './solution-reducer';


const gameReducer = combineReducers({
    ...sharedReducers,
    solution: solutionReducer,
});

export { gameReducer };
