import { createStore } from 'redux';
import { gameMasterReducer } from './reducers/game-master-reducer.js';

const store = createStore(gameMasterReducer);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
