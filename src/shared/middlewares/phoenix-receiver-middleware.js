import { MESSAGE } from 'phoenix-middleware';
import { protocol } from 'message-factory';
import { startCountdown, startRound, finishRound } from '../actions/round-phase-actions';
import { setTimeRemaining } from '../actions/countdown-actions';
import { receivePuzzle, receivePuzzlesCount } from '../actions/puzzle-actions';
import { receiveUser } from '../actions/user-actions';
import { puzzle } from '../selectors/puzzle-selectors';

const { MESSAGE_NAME } = protocol.ui;

const roundPhaseToActionMap = {
    'countdown': startCountdown,
    'in-progress': startRound,
    'end': finishRound,
};

export const phoenixReceiverMiddleware = store => next => action => {
    if (action.type !== MESSAGE) {
        return next(action);
    }

    const { message } = JSON.parse(action.payload.data);

    let newAction;
    const state = store.getState();

    switch (message.name) {
        case MESSAGE_NAME.roundPhaseChanged: {
            const creator = roundPhaseToActionMap[message.roundPhase];
            newAction = creator && creator();
            break;
        }

        case MESSAGE_NAME.startCountdownChanged: {
            newAction = setTimeRemaining(message.startCountdown);
            break;
        }

        case MESSAGE_NAME.roundCountdownChanged: {
            newAction = setTimeRemaining(message.roundCountdown);
            break;
        }

        case MESSAGE_NAME.puzzleChanged: {
            const currentPuzzle = puzzle(state);

            newAction = receivePuzzle({
                ...currentPuzzle,
                title: message.puzzleName,
                index: message.puzzleIndex + 1,
                bannedChars: message.puzzleOptions.bannedCharacters,
            });
            break;
        }

        case MESSAGE_NAME.puzzle: {
            const currentPuzzle = puzzle(state);

            newAction = receivePuzzle({
                ...currentPuzzle,
                markup : message.input,
                bannedChars: message.puzzleOptions.bannedCharacters,
                expectedSelection: JSON.parse(message.expected),
            });
            break;
        }

        case MESSAGE_NAME.playerSessionState: {
            spreadSessionState(store, message);
            break;
        }
    }

    if (newAction) {
        store.dispatch(newAction);
    }
}

function spreadSessionState(store, message) {
    const actions = [
        receiveUser(message.displayName),
        message.roundCountdown && setTimeRemaining(message.roundCountdown),
        message.startCountdown && setTimeRemaining(message.startCountdown),
        roundPhaseToActionMap[message.roundPhase] && roundPhaseToActionMap[message.roundPhase](),
        message.puzzle && receivePuzzle({
            markup : message.puzzle.input,
            bannedChars: message.puzzle.options.bannedCharacters,
            expectedSelection: JSON.parse(message.puzzle.expected),
            title: message.puzzle.name,
            index: message.puzzleIndex + 1,
        }),
        receivePuzzlesCount(message.puzzleCount),
    ]
    .filter(Boolean);

    actions.forEach(store.dispatch);
}
