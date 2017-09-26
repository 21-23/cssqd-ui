import { createStore } from 'redux';
import { appReducer } from './reducers/#{name}-reducer.js';

const store = createStore(appReducer);
export { store };
