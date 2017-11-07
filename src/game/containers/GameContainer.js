import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { isWaiting } from '../../shared/selectors/round-phase-selectors';
import { AppContainer } from '../../shared/containers/AppContainer';
import { WaitScreen } from '../../components/Waitscreen/Waitscreen';
import { RoundContainer } from './RoundContainer';

const PureGameContainer = ({ isWaiting }) => (
    <AppContainer>
        { isWaiting ? <WaitScreen /> : <RoundContainer /> }
    </AppContainer>
);

const GameContainer = connect(createStructuredSelector({
    isWaiting,
}))(PureGameContainer);

export { GameContainer };
