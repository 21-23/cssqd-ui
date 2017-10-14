import { h } from 'preact';
import { connect } from 'preact-redux';

import { RoundLayout } from '../components/RoundLayout';
import { Countdown } from '../../components/Countdown/Countdown';
import { SelectorInput } from '../../components/SelectorInput/SelectorInput';

import * as RoundPhase from '../../shared/constants/round-phase';
import { DURATION } from '../../shared/constants/round';

import { setSelector } from '../actions/solution-actions';


const PureRound = ({ roundPhase, timeRemaining, selector, setSelector }) =>
    roundPhase !== RoundPhase.IN_PROGRESS && roundPhase !== RoundPhase.FINISHED ? null :

    <RoundLayout>
        <SelectorInput
            value={selector}
            disabled={roundPhase === RoundPhase.FINISHED}
            onInput={setSelector}
        />
        <Countdown
            timeAmount={DURATION}
            timeRemaining={timeRemaining}
        />
    </RoundLayout>

const RoundContainer = connect(state => ({
    roundPhase: state.roundPhase,
    timeRemaining: state.countdown,
    selector: state.solution.selector,
}), {
    setSelector,
})(PureRound);

export { RoundContainer };
