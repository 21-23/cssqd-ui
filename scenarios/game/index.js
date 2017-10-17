import { pause } from '../helpers';

import { countdown } from './countdown';
import { inputSelector, erase } from './input-selector';
import { setPuzzle } from './puzzle';


countdown();

setPuzzle({
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
    await inputSelector('input');
    await pause(500);
    erase();
    await pause(500);
    await inputSelector(':checked');
})();
