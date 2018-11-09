import { createStore, applyMiddleware } from 'redux';
import { gameReducer } from '../game/reducers/game-reducer.js';
import { demoGameMiddleware } from './middlewares/demo-game-middleware.js';
import { demoGameInitMiddleware } from './middlewares/demo-game-init-middleware.js';

const store = createStore(gameReducer, applyMiddleware(demoGameMiddleware, demoGameInitMiddleware));

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
