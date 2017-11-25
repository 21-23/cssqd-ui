import { SEND } from 'phoenix-middleware';
import { protocol } from 'message-factory';

import { SET_SELECTOR } from '../actions/solution-actions';

export const phoenixSolutionMiddleware = state => next => action => {
    if (action.type === SET_SELECTOR) {
        store.dispatch({
            type: SEND,
            payload: protocol.frontService.solution(action.payload),
        });
    }

    return next(action);
}
