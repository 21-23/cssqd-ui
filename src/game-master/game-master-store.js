import { createStore, applyMiddleware } from 'redux';
import { gameMasterReducer } from './reducers/game-master-reducer.js';
import { sharedMiddlewares } from '../shared/middlewares/index';
import { phoenixGMMiddleware } from './middlewares/phoenix-gm-middleware';

const store = createStore(
    gameMasterReducer,
    applyMiddleware(
        ...sharedMiddlewares,
        phoenixGMMiddleware,
    ),
);

if (process.env.NODE_ENV !== 'production') {
    window.store = store;
}

export { store };
