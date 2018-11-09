import { INIT } from '../../shared/actions/init-actions';
import { setTimeRemaining } from '../../shared/actions/countdown-actions';
import { startRound, finishRound, startCountdown } from '../../shared/actions/round-phase-actions';
import { SET_SELECTOR, setSelection, clearSelector } from '../../game/actions/solution-actions';
import { RECEIVE_PUZZLE, receivePuzzle } from '../../shared/actions/puzzle-actions';

const demoPuzzles = require('../constants/demo-puzzles.json');

const demoGameMiddleware = store => {
    let currentPuzzleRoot;
    let bannedChars;
    let expectedSelection;
    let currentPuzzleIndex = -1;
    let puzzlesCount = demoPuzzles.length;

    let roundTimeCountdownIntervalId;

    function timeRemainingCountdown() {
        let time = 120;

        roundTimeCountdownIntervalId = setInterval(() => {
            if (time === 0) {
                store.dispatch(finishRound());
                nextRound();
            } else {
                time--;
                store.dispatch(setTimeRemaining(time));
            }
        }, 1000);

        store.dispatch(setTimeRemaining(time));
    }

    function roundCountdown() {
        let i = 3;

        store.dispatch(receivePuzzle(demoPuzzles[currentPuzzleIndex + 1]));
        store.dispatch(clearSelector());

        store.dispatch(setTimeRemaining(i--));
        store.dispatch(startCountdown());

        const intervalID = setInterval(() => {
            if (i > 0) {
                store.dispatch(setTimeRemaining(i--));
            } else {
                store.dispatch(startRound());
                clearInterval(intervalID);
            }
        }, 1000);
    }

    function handlePuzzle(puzzle) {
        bannedChars = puzzle.bannedChars;
        currentPuzzleRoot = document.createElement('div');
        currentPuzzleRoot.innerHTML = puzzle.markup;
        expectedSelection = puzzle.expectedSelection;
        currentPuzzleIndex = puzzle.index;
    }

    function handleSelector(action) {
        const lowerCasedSelector = action.payload.toLowerCase();

        if (action.payload.length === 0) {
            return;
        }

        if (bannedChars.some(char => lowerCasedSelector.indexOf(char) !== -1)) {
            return;
        }

        try {
            const selection = Array.from(currentPuzzleRoot.querySelectorAll(action.payload)).map(
                element => element.dataset.qdid
            );

            const isCorrect = expectedSelection.sort().join('') === selection.sort().join();

            store.dispatch(
                setSelection({
                    selection,
                    isCorrect,
                })
            );

            if (isCorrect) {
                store.dispatch(finishRound());

                setTimeout(() => {
                    nextRound();
                }, 1000);
            }
        } catch (err) {}
    }

    function nextRound() {
        clearInterval(roundTimeCountdownIntervalId);
        store.dispatch(finishRound());

        if (currentPuzzleIndex === puzzlesCount - 1) {
            return;
        }

        roundCountdown();

        setTimeout(() => {
            timeRemainingCountdown();
        }, 3000);
    }

    return next => action => {
        let result = next(action);

        switch (action.type) {
            case INIT: {
                nextRound();
                break;
            }

            case RECEIVE_PUZZLE:
                handlePuzzle(action.payload);
                break;

            case SET_SELECTOR: {
                handleSelector(action);
                break;
            }
        }

        return result;
    };
};

export { demoGameMiddleware };
