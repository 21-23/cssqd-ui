import { createStore } from 'redux';
import { gameReducer } from './reducers/game-reducer.js';

const store = createStore(gameReducer);
export { store };
