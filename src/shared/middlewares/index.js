import logger from 'redux-logger';
import createPhoenixMiddleware from 'phoenix-middleware';

import { phoenixReceiverMiddleware } from './phoenix-receiver-middleware';

const hostname = window.location.hostname;
const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';

const phoenixMiddleware = createPhoenixMiddleware({
    uri: `${protocol}://${hostname}:3001/`,
    timeout: 500,
});

const sharedMiddlewares = [phoenixMiddleware, phoenixReceiverMiddleware];

if (process.env.NODE_ENV !== 'production') {
    sharedMiddlewares.push(logger);
}

export { sharedMiddlewares };
