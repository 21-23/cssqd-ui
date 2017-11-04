import { pause } from '../helpers';

import { countdown } from './countdown';
import { inputSelector, erase } from './input-selector';
import { setPuzzle } from './puzzle';
import * as RoundPhaseActions from '../../src/shared/actions/round-phase-actions';
import { DURATION } from '../../src/shared/constants/round';

setPuzzle({
    title: 'Signing Up',
    index: 1,
    markup :`
    <main data-qdid="1">
        <input data-qdid="2" type="text"></input>
        <input data-qdid="3" type="number"></input>
        <input data-qdid="4" type="checkbox" checked></input>
        <input data-qdid="5" type="checkbox"></input>
        <input data-qdid="6" type="text"></input>
    </main>,
    `,
    bannedChars: ['n', '['],
    expectedSelection: ['4'],
});

(async () => {
    await countdown(3);
    store.dispatch(RoundPhaseActions.startRound());
    await Promise.all([
        countdown(DURATION),

        (async () => {
            await inputSelector('input');
            await pause(500);
            erase();
            await pause(500);
            await inputSelector(':checked');
        })(),
    ]);

    store.dispatch(RoundPhaseActions.finishRound());
})();
