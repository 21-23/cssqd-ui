import { pause, randomInt } from '../helpers';
import { store } from '../../src/game/game-store';
import { setSelector } from '../../src/game/actions/solution-actions';

export async function inputSelector(selector) {
    let charsCount = 0;

    await pause(1000);

    while (charsCount < selector.length) {
        charsCount++;

        const delay = randomInt({ max: 300 });
        await pause(delay);

        const action = setSelector(selector.substring(0, charsCount));
        store.dispatch(action);
    }
}

export async function erase() {
    const action = setSelector('');
    store.dispatch(action);
}
