import { combineReducers } from 'redux';
import { sharedReducers } from '../../shared/reducers';

const gameMasterReducer = combineReducers({
    ...sharedReducers,
});

export { gameMasterReducer };
