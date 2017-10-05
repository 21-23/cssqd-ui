import { createStore } from 'redux';
import { gameReducer } from './reducers/game-reducer.js';

const store = createStore(gameReducer);
window.store = store;

export { store };
