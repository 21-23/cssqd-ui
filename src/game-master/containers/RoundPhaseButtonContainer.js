import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { Button } from '../../components/Button/Button';
import { roundStarted } from '../../shared/selectors/round-phase-selectors';
import { triggerRoundStart, triggerRoundEnd } from '../actions/gm-round-phase-actions';

const RoundPhaseButtonContainer = connect(createStructuredSelector({
    roundStarted,
}), {
    triggerRoundStart,
    triggerRoundEnd,
})(({ roundStarted, triggerRoundStart, triggerRoundEnd }) => (
    <Button
        iconLeft={roundStarted ? 'stop' : null }
        iconRight={!roundStarted ? 'arrow-right' : null }
        text={roundStarted ? 'STOP LEVEL' : 'NEXT LEVEL'}
        onClick={roundStarted ? () => triggerRoundEnd() : () => triggerRoundStart() }
    />
));

export { RoundPhaseButtonContainer };
