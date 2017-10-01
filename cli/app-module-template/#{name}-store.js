import { createStore } from 'redux';
import { #{camelCaseName}Reducer } from './reducers/#{name}-reducer.js';

const store = createStore(#{camelCaseName}Reducer);
export { store };
