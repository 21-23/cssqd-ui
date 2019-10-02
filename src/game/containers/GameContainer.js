import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { isWaiting } from '../../shared/selectors/round-phase-selectors';
import { AppContainer } from '../../shared/containers/AppContainer';
import { Waitscreen } from '../../components/Waitscreen/Waitscreen';
import { RoundContainer } from './RoundContainer';
import { isSessionFinished } from '../../shared/selectors/session-state-selectors';
import { join } from '../selectors/player-join-selectors';
import { JoinReason } from '../components/JoinReason';

const PureGameContainer = ({ isWaiting, isSessionFinished, join }) => {
    let content = null;

    if (join && join.reason) {
        content = <JoinReason reason={join.reason} />;
    } else if (isWaiting && !isSessionFinished) {
        content = <Waitscreen />;
    } else {
        content = <RoundContainer />;
    }

    return <AppContainer>{content}</AppContainer>;
};

const GameContainer = connect(
    createStructuredSelector({
        isWaiting,
        isSessionFinished,
        join,
    })
)(PureGameContainer);

export { GameContainer };
