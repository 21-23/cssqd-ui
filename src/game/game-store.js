import { createStore, applyMiddleware } from 'redux';

import { phoenixSolutionMiddleware } from './middlewares/phoenix-solution-middleware';
import { playerScoreMiddleware } from './middlewares/player-score-middleware';

import { gameReducer } from './reducers/game-reducer.js';
import { sharedMiddlewares } from '../shared/middlewares/index';

const store = createStore(
    gameReducer,
    applyMiddleware(phoenixSolutionMiddleware, playerScoreMiddleware, ...sharedMiddlewares)
);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
