import { store } from '../../src/game/game-store';
import { receivePuzzle } from '../../src/shared/actions/puzzle-actions';

export function setPuzzle(puzzleDef) {
    const action = receivePuzzle(puzzleDef);
    store.dispatch(action);
}
