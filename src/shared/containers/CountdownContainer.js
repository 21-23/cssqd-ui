import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { Countdown } from '../../components/Countdown/Countdown';

import { timeLimit } from '../selectors/puzzle-selectors';
import { roundStarted } from '../selectors/round-phase-selectors';
import { countdown } from '../selectors/countdown-selectors';

const CountdownContainer = connect(
    createStructuredSelector({
        timeLimit,
        roundStarted,
        countdown,
    })
)(
    ({ timeLimit, roundStarted, countdown, ...rest }) =>
        !roundStarted ? null : <Countdown timeAmount={timeLimit} timeRemaining={countdown} {...rest} />
);

export { CountdownContainer };
