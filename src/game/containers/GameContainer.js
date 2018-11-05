import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { isWaiting } from '../../shared/selectors/round-phase-selectors';
import { AppContainer } from '../../shared/containers/AppContainer';
import { Waitscreen } from '../../components/Waitscreen/Waitscreen';
import { RoundContainer } from './RoundContainer';
import { isLastRound } from '../../shared/selectors/puzzle-selectors';

const PureGameContainer = ({ isWaiting, isLastRound }) => (
    <AppContainer>
        {isWaiting && !isLastRound ? <Waitscreen /> : <RoundContainer isLastRound={isLastRound} />}
    </AppContainer>
);

const GameContainer = connect(
    createStructuredSelector({
        isWaiting,
        isLastRound,
    })
)(PureGameContainer);

export { GameContainer };
