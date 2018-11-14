import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { isWaiting } from '../../shared/selectors/round-phase-selectors';
import { AppContainer } from '../../shared/containers/AppContainer';
import { Waitscreen } from '../../components/Waitscreen/Waitscreen';
import { RoundContainer } from './RoundContainer';
import { isSessionFinished } from '../../shared/selectors/session-state-selectors';

const PureGameContainer = ({ isWaiting, isSessionFinished }) => (
    <AppContainer>{isWaiting && !isSessionFinished ? <Waitscreen /> : <RoundContainer />}</AppContainer>
);

const GameContainer = connect(
    createStructuredSelector({
        isWaiting,
        isSessionFinished,
    })
)(PureGameContainer);

export { GameContainer };
