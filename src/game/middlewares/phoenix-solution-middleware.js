import { SEND, MESSAGE } from 'phoenix-middleware';
import { protocol, parseMessage } from 'message-factory';

import { SET_SELECTOR, setSelection, setSelector, clearSelector } from '../actions/solution-actions';
import { setTimeRemaining, SET_TIME_REMAINING } from '../../shared/actions/countdown-actions';
import { isCorrect as isCorrectSolution } from '../selectors/solution-selectors';
import * as RoundPhase from '../../shared/constants/round-phase';

const { MESSAGE_NAME } = protocol.ui;
const CORRECT_SOLUTION_KEY = 'correct';

export const phoenixSolutionMiddleware = store => next => action => {
    const state = store.getState();

    if (action.type === SET_SELECTOR) {
        store.dispatch({
            type: SEND,
            payload: protocol.frontService.solution(action.payload),
        });
    }

    if (action.type === SET_TIME_REMAINING && isCorrectSolution(state) && !action.meta.force) {
        if (action.meta.force) {
            return next({
                ...action,
                meta: { force: false },
            });
        }

        return state;
    }

    if (action.type !== MESSAGE) {
        return next(action);
    }

    const { message } = parseMessage(action.payload.data);

    if (message.name === MESSAGE_NAME.solutionEvaluated) {
        const isCorrect = message.correct === CORRECT_SOLUTION_KEY;

        const selectionAction = setSelection({
            isCorrect,
            selection: JSON.parse(message.result) || [],
        });

        store.dispatch(selectionAction);

        if (isCorrect) {
            const timeRemainingAction = setTimeRemaining(Math.round(message.time), true);
            store.dispatch(timeRemainingAction);
        }
    }

    if (message.name === MESSAGE_NAME.roundPhaseChanged && message.roundPhase === RoundPhase.COUNTDOWN) {
        const clearSelectorAction = clearSelector();
        store.dispatch(clearSelectorAction);
    }

    if (
        message.name === MESSAGE_NAME.playerSessionState &&
        message.solution &&
        message.roundPhase === RoundPhase.IN_PROGRESS
    ) {
        const isCorrect = message.solution.correct === CORRECT_SOLUTION_KEY;

        const actions = [
            setSelection({ isCorrect }),
            setSelector(message.solution.code),
            isCorrect && setTimeRemaining(Math.round(message.solution.time), true),
        ].filter(Boolean);

        actions.forEach(store.dispatch);
    }

    return next(action);
};
