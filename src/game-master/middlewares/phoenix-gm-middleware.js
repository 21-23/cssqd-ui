import { SEND, MESSAGE } from 'phoenix-middleware';
import { protocol } from 'message-factory';

import { SET_PUZZLE_INDEX } from '../actions/gm-puzzle-actions';
import { START_COUNTDOWN } from '../../shared/actions/round-phase-actions';
import { TRIGGER_ROUND_START, TRIGGER_ROUND_END } from '../actions/gm-round-phase-actions';

export const phoenixGMMiddleware = store => next => action => {
    handleClientAction(store, action);

    return next(action);
};

function handleClientAction(store, action) {
    const sendAction = send.bind(null, store);

    switch (action.type) {
        case SET_PUZZLE_INDEX: {
            sendAction(protocol.frontService.puzzleIndexSet(action.payload));
            return;
        }

        case TRIGGER_ROUND_START:
            sendAction(protocol.frontService.roundStart());
            return;

        case TRIGGER_ROUND_END:
            sendAction(protocol.frontService.roundStop());
            return;
    }
}

function send(store, payload) {
    store.dispatch({
        type: SEND,
        payload,
    });
}
