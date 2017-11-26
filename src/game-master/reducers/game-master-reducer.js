import { combineReducers } from 'redux';
import { sharedReducers } from '../../shared/reducers';
import { participantsReducer } from './participants-reducer';
import { scoreReducer } from './score-reducer';

const gameMasterReducer = combineReducers({
    ...sharedReducers,
    participants: participantsReducer,
    score: scoreReducer,
});

export { gameMasterReducer };
