import { SEND, MESSAGE } from 'phoenix-middleware';
import { protocol, parseMessage } from 'message-factory';

import { SET_PUZZLE_INDEX, setPuzzleIndex } from '../actions/gm-puzzle-actions';
import { TRIGGER_ROUND_START, TRIGGER_ROUND_END } from '../actions/gm-round-phase-actions';
import {
    joinParticipant,
    receiveParticipants,
    removeParticipant,
    setParticipantSolution,
    resetSolutions,
    syncSolutions,
} from '../actions/participant-actions';

import { setReadyState } from '../actions/gm-ready-state-actions';
import * as ReadyState from '../constants/ready-states';

const { MESSAGE_NAME } = protocol.ui;

export const phoenixGMMiddleware = store => next => action => {
    handleClientAction(store, action);

    if (action.type === MESSAGE) {
        const { message } = parseMessage(action.payload.data);
        handleServerMessage(store, message);
    }

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

function handleServerMessage(store, message) {
    let action;

    if (MESSAGE_NAME.gameMasterSessionState && message.puzzleIndex === null) {
        store.dispatch(setPuzzleIndex(0));
    }

    switch (message.name) {
        case MESSAGE_NAME.gameMasterSessionState:
            store.dispatch(setReadyState(message.sandboxStatus === ReadyState.READY));

        case MESSAGE_NAME.score: {
            action = receiveParticipants(message.players);
            break;
        }

        case MESSAGE_NAME.participantJoined: {
            action = joinParticipant({
                displayName: message.displayName,
                participantId: message.participantId,
            });
            break;
        }

        case MESSAGE_NAME.participantLeft: {
            action = removeParticipant({ participantId: message.participantId });
            break;
        }

        case MESSAGE_NAME.participantSolution: {
            action = setParticipantSolution({
                participantId: message.participantId,
                correct: message.correct,
                time: message.time,
                length: message.length,
            });
            break;
        }

        case MESSAGE_NAME.puzzle: {
            action = resetSolutions();
            break;
        }

        case MESSAGE_NAME.solutionSync: {
            action = syncSolutions(message.solutions);
            break;
        }

        case MESSAGE_NAME.sandboxStatus: {
            action = setReadyState(message.status === 'ready');
            break;
        }
    }

    action && store.dispatch(action);
}
