import { h } from 'preact';
import { connect } from 'preact-redux';

import { RoundLayout } from '../components/RoundLayout';
import { Countdown } from '../../components/Countdown/Countdown';

import * as RoundPhase from '../../shared/constants/round-phase';
import { DURATION } from '../../shared/constants/round';

const PureRound = ({ roundPhase, timeRemaining }) =>
    roundPhase !== RoundPhase.IN_PROGRESS && roundPhase !== RoundPhase.FINISHED ? null :

    <RoundLayout>
        <Countdown
            timeAmount={DURATION}
            timeRemaining={timeRemaining}
        />
    </RoundLayout>

const RoundContainer = connect(state => ({
    roundPhase: state.roundPhase,
    timeRemaining: state.countdown,
}))(PureRound);

export { RoundContainer };
