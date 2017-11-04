import { pause } from '../helpers';

import { store } from '../../src/game/game-store';
import * as CountdownActions from '../../src/shared/actions/countdown-actions';


export async function countdown(duration) {
    let timeRemaining = duration;

    tick();

    while (timeRemaining >= 0) {
        await pause(1000);
        tick();
    }

    function tick() {
        store.dispatch(CountdownActions.setTimeRemaining(timeRemaining));
        timeRemaining--;
    }
};
