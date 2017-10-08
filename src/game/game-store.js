import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { gameReducer } from './reducers/game-reducer.js';

const store = createStore(
    gameReducer,
    applyMiddleware(logger),
);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
