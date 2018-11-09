import { MESSAGE } from 'phoenix-middleware';
import { protocol, parseMessage } from 'message-factory';
import { startCountdown, startRound, finishRound } from '../actions/round-phase-actions';
import { setTimeRemaining } from '../actions/countdown-actions';
import { receivePuzzle, receivePuzzlesCount } from '../actions/puzzle-actions';
import { receiveUser } from '../actions/user-actions';
import { puzzle } from '../selectors/puzzle-selectors';
import * as RoundPhase from '../constants/round-phase';
import { init } from '../actions/init-actions';

const { MESSAGE_NAME } = protocol.ui;

export const roundPhaseToActionMap = {
    [RoundPhase.COUNTDOWN]: startCountdown,
    [RoundPhase.IN_PROGRESS]: startRound,
    [RoundPhase.FINISHED]: finishRound,
};

export const phoenixReceiverMiddleware = store => next => action => {
    if (action.type !== MESSAGE) {
        return next(action);
    }

    const { message } = parseMessage(action.payload.data);

    const state = store.getState();

    switch (message.name) {
        case MESSAGE_NAME.roundPhaseChanged: {
            const creator = roundPhaseToActionMap[message.roundPhase];
            const action = creator && creator();
            action && store.dispatch(action);

            if (message.roundPhase === RoundPhase.COUNTDOWN) {
                const action = setTimeRemaining(3);
                store.dispatch(action);
            }

            if (message.roundPhase === RoundPhase.IN_PROGRESS) {
                const currentPuzzle = puzzle(state);
                const action = setTimeRemaining(currentPuzzle.timeLimit);

                store.dispatch(action);
            }
            break;
        }

        case MESSAGE_NAME.startCountdownChanged: {
            const action = setTimeRemaining(message.startCountdown);
            store.dispatch(action);
            break;
        }

        case MESSAGE_NAME.roundCountdownChanged: {
            const action = setTimeRemaining(message.roundCountdown);
            store.dispatch(action);
            break;
        }

        case MESSAGE_NAME.puzzleChanged: {
            const currentPuzzle = puzzle(state);

            const action = receivePuzzle({
                ...currentPuzzle,
                title: message.puzzleName,
                index: message.puzzleIndex,
                bannedChars: message.puzzleOptions.bannedCharacters,
                timeLimit: message.puzzleOptions.timeLimit,
            });

            store.dispatch(action);
            break;
        }

        case MESSAGE_NAME.puzzle: {
            const currentPuzzle = puzzle(state);

            const action = receivePuzzle({
                ...currentPuzzle,
                markup: message.input,
                bannedChars: message.puzzleOptions.bannedCharacters,
                timeLimit: message.puzzleOptions.timeLimit,
                expectedSelection: JSON.parse(message.expected),
            });

            store.dispatch(action);
            break;
        }

        case MESSAGE_NAME.playerSessionState:
        case MESSAGE_NAME.gameMasterSessionState: {
            spreadSessionState(store, message);
            break;
        }
    }

    return next(action);
};

function spreadSessionState(store, message) {
    const actions = [
        init(),
        receiveUser(message.displayName),
        message.roundCountdown && setTimeRemaining(message.roundCountdown),
        message.startCountdown && setTimeRemaining(message.startCountdown),
        roundPhaseToActionMap[message.roundPhase] && roundPhaseToActionMap[message.roundPhase](),
        message.puzzle &&
            receivePuzzle({
                markup: message.puzzle.input,
                bannedChars: message.puzzle.options.bannedCharacters,
                timeLimit: message.puzzle.options.timeLimit,
                expectedSelection: JSON.parse(message.puzzle.expected),
                title: message.puzzle.name,
                index: message.puzzleIndex,
            }),
        receivePuzzlesCount(message.puzzleCount),
    ].filter(Boolean);

    actions.forEach(store.dispatch);
}
