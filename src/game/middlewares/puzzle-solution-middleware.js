import { RECEIVE_PUZZLE } from '../../shared/actions/puzzle-actions';
import { SET_SELECTOR, setSelection } from '../actions/solution-actions';

const currentPuzzle = {
    nodes: null,
};

const puzzleSolutionMiddleware = store => next => action => {
    if (action.type === RECEIVE_PUZZLE) {
        currentPuzzle.nodes = createPuzzleNodesTree(action.payload.markup);
    }

    if (action.type === SET_SELECTOR) {
        try {
            const selection = applySelector(action.payload);
            store.dispatch(setSelection(selection));
        } catch (err) {
            store.dispatch(setSelection([]));
        }
    }

    let result = next(action);
    return result;
};

function createPuzzleNodesTree(markup) {
    const container = document.createElement('div');
    container.innerHTML = markup;
    return container;
}

function applySelector(selector) {
    const selectedNodes = currentPuzzle.nodes.querySelectorAll(selector);
    const ids = Array.from(selectedNodes)
        .map(node => node.dataset.qdid)
        .filter(Boolean);

    return ids;
}

export { puzzleSolutionMiddleware };
