import { MESSAGE, DISCONNECT } from 'phoenix-middleware';
import { protocol, parseMessage } from 'message-factory';
import { playerJoinFailure } from '../actions/player-join-actions';
import { init } from '../../shared/actions/init-actions';

const playerJoinMiddleware = () => next => action => {
    if (action.type !== MESSAGE) {
        return next(action);
    }

    const state = store.getState();
    const { message } = parseMessage(action.payload.data);
    let finalAction = action;

    if (message.name === protocol.ui.MESSAGE_NAME.playerJoinFailure) {
        store.dispatch({ type: DISCONNECT, payload: {} });
        store.dispatch(init());
        finalAction = playerJoinFailure({ reason: message.reason });
    }

    return next(finalAction);
};

export { playerJoinMiddleware };
