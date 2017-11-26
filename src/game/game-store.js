import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createPhoenixMiddleware from 'phoenix-middleware';

import { phoenixSolutionMiddleware } from './middlewares/phoenix-solution-middleware';
import { phoenixReceiverMiddleware } from '../shared/middlewares/phoenix-receiver-middleware';

import { gameReducer } from './reducers/game-reducer.js';

const hostname = window.location.hostname;
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';

const phoenixMiddleware = createPhoenixMiddleware({
    uri: `${protocol}://${hostname}:3001/`,
    timeout: 500
});

const store = createStore(
    gameReducer,
    applyMiddleware(
        phoenixMiddleware,
        phoenixSolutionMiddleware,
        phoenixReceiverMiddleware,
        logger,
    ),
);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
