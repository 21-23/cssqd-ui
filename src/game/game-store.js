import { createStore } from 'redux';
import { gameReducer } from './reducers/game-reducer.js';

const store = createStore(gameReducer);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
