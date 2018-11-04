import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { RoundStartCountdown } from '../../components/RoundStartCountdown/RoundStartCountdown';

import { countdown } from '../selectors/countdown-selectors';
import { roundStarted, roundFinished } from '../selectors/round-phase-selectors';

const RoundStartCountdownContainer = connect(
    createStructuredSelector({
        countdown,
        roundStarted,
        roundFinished,
    })
)(
    ({ countdown, roundStarted, roundFinished, ...rest }) =>
        roundStarted || roundFinished ? null : <RoundStartCountdown timeRemaining={countdown} {...rest} />
);

export { RoundStartCountdownContainer };
