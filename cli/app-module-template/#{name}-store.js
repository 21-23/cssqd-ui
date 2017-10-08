import { createStore } from 'redux';
import { #{camelCaseName}Reducer } from './reducers/#{name}-reducer.js';

const store = createStore(#{camelCaseName}Reducer);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
