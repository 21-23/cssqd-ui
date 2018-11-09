import { roundPhaseToActionMap } from '../../shared/middlewares/phoenix-receiver-middleware';
import * as RoundPhase from '../../shared/constants/round-phase';
import { init } from '../../shared/actions/init-actions';
import { receiveUser } from '../../shared/actions/user-actions';
import { setTimeRemaining } from '../../shared/actions/countdown-actions';
import { receivePuzzlesCount } from '../../shared/actions/puzzle-actions';

const demoPuzzles = require('../constants/demo-puzzles.json');

const demoGameInitMiddleware = store => {
    setTimeout(() => {
        const actions = [
            init(),
            receiveUser('Demo Session User'),
            setTimeRemaining(3),
            roundPhaseToActionMap[RoundPhase.COUNTDOWN](),
            receivePuzzlesCount(demoPuzzles.length),
        ];

        actions.forEach(store.dispatch);
    }, 0);

    return next => action => {
        return next(action);
    };
};

export { demoGameInitMiddleware };
