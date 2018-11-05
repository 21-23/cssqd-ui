import { MESSAGE } from 'phoenix-middleware';
import { protocol, parseMessage } from 'message-factory';
import { receivePlayerScore } from '../actions/player-score-actions';

const playerScoreMiddleware = () => next => action => {
    if (action.type !== MESSAGE) {
        return next(action);
    }

    let finalAction = action;
    const { message } = parseMessage(action.payload.data);

    if (message.name === protocol.ui.MESSAGE_NAME.playerScore) {
        finalAction = receivePlayerScore({
            score: message.score,
            meta: message.meta,
        });
    }

    return next(finalAction);
};

export { playerScoreMiddleware };
