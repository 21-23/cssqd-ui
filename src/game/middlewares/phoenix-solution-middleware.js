import { SEND, MESSAGE } from 'phoenix-middleware';
import { protocol, parseMessage } from 'message-factory';

import { SET_SELECTOR, setSelection, setSelector } from '../actions/solution-actions';

const { MESSAGE_NAME } = protocol.ui;
const CORRECT_SOLUTION_KEY = 'correct';

export const phoenixSolutionMiddleware = state => next => action => {
    if (action.type === SET_SELECTOR) {
        store.dispatch({
            type: SEND,
            payload: protocol.frontService.solution(action.payload),
        });
    }

    if (action.type !== MESSAGE) {
        return next(action);
    }

    const { message } = parseMessage(action.payload.data);

    if (message.name === MESSAGE_NAME.solutionEvaluated) {
        const selectionAction = setSelection({
            selection: JSON.parse(message.result) || [],
            isCorrect: message.correct === CORRECT_SOLUTION_KEY,
        });

        store.dispatch(selectionAction);
    }

    if (message.name === MESSAGE_NAME.playerSessionState && message.solution) {
        const actions = [
            setSelection({ isCorrect: message.solution.correct === CORRECT_SOLUTION_KEY }),
            setSelector(message.solution.code),
        ];

        actions.map(store.dispatch);
    }

    return next(action);
}
