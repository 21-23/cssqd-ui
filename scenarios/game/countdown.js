import { store } from '../../src/game/game-store';
import * as RoundPhaseActions from '../../src/shared/actions/round-phase-actions';
import * as CountdownActions from '../../src/shared/actions/countdown-actions';
import { DURATION } from '../../src/shared/constants/round';

store.dispatch(RoundPhaseActions.startRound());

async function pause(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

(async () => {
    let timeRemaining = DURATION;

    while (timeRemaining >= 0) {
        store.dispatch(CountdownActions.setTimeRemaining(timeRemaining));
        await pause(1000);
        timeRemaining--;
    }
})();
