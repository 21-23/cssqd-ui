import { combineReducers } from 'redux';
import { sharedReducers } from '../../shared/reducers';
import { participantsReducer } from './participants-reducer';
import { scoreReducer } from './score-reducer';
import { gmReadyStateReducer } from './gm-ready-state-reducer';

const gameMasterReducer = combineReducers({
    ...sharedReducers,
    participants: participantsReducer,
    score: scoreReducer,
    readyState: gmReadyStateReducer,
});

export { gameMasterReducer };
