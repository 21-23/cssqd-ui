import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { AppContainer } from '../../shared/containers/AppContainer';
import { PearlThreadContainer } from '../../shared/containers/PearlThreadContainer';

import { GameMasterLayout } from '../components/GameMasterLayout';
import { PuzzleTitle } from '../../components/PuzzleTitle/PuzzleTitle';

import { setPuzzleIndex } from '../actions/gm-puzzle-actions';
import { RoundPhaseButtonContainer } from './RoundPhaseButtonContainer';

import { PuzzleTitleContainer } from '../../shared/containers/PuzzleTitleContainer';
import { BannedCharactersContainer } from '../../shared/containers/BannedCharactersContainer';
import { MarkupRendererContainer } from '../../shared/containers/MarkupRendererContainer';
import { RoundStartCountdownContainer } from '../../shared/containers/RoundStartCountdownContainer';
import { CountdownContainer } from '../../shared/containers/CountdownContainer';


const PureGameMasterContainer = ({ setPuzzleIndex }) => (
    <AppContainer>
        <GameMasterLayout>
            <PearlThreadContainer
                onPearlClick={setPuzzleIndex}
                key="PearlThread"
            />

            <PuzzleTitleContainer key="PuzzleTitle" />
            <RoundPhaseButtonContainer key="RoundPhaseButton" />
            <BannedCharactersContainer key="BannedCharacters" />
            <MarkupRendererContainer key="MarkupRenderer" />
            <RoundStartCountdownContainer key="RoundStartCountdown" />
            <CountdownContainer key="Countdown" />
        </GameMasterLayout>
    </AppContainer>
);

const GameMasterContainer = connect(null, {
    setPuzzleIndex,
})(PureGameMasterContainer);

export { GameMasterContainer };
