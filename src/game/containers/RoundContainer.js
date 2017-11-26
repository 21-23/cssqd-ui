import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { PearlThreadContainer } from '../../shared/containers/PearlThreadContainer';
import { PuzzleTitleContainer } from '../../shared/containers/PuzzleTitleContainer';
import { BannedCharactersContainer } from '../../shared/containers/BannedCharactersContainer';
import { MarkupRendererContainer } from '../../shared/containers/MarkupRendererContainer';
import { CountdownContainer } from '../../shared/containers/CountdownContainer';
import { RoundStartCountdownContainer } from '../../shared/containers/RoundStartCountdownContainer';

import { RoundLayout } from '../components/RoundLayout';
import { SelectorInput } from '../../components/SelectorInput/SelectorInput';

import { roundStarted, roundFinished } from '../../shared/selectors/round-phase-selectors';

import { selector, selection, isCorrect } from '../selectors/solution-selectors';
import { highlightedBannedChars } from '../selectors/round-selectors';

import { setSelector } from '../actions/solution-actions';


const PureRound = ({
    roundStarted,
    roundFinished,
    selector,
    setSelector,
    selection,
    highlightedBannedChars,
    isCorrect,
}) => (
    <RoundLayout>
        <PearlThreadContainer key="PearlThread" />
        <PuzzleTitleContainer key="PuzzleTitle" />
        <SelectorInput
            value={selector}
            disabled={!roundStarted || roundFinished || isCorrect}
            onInput={setSelector}
        />

        <BannedCharactersContainer
            key="BannedCharacters"
            highlightedCharacters={ roundStarted ? highlightedBannedChars : null }
        />

        <CountdownContainer key="Countdown" />

        <MarkupRendererContainer
            key="MarkupRenderer"
            actualSelection={selection}
        />

        <RoundStartCountdownContainer key="RoundStartCountdown" />
    </RoundLayout>
);

const RoundContainer = connect(createStructuredSelector({
    roundStarted,
    roundFinished,
    selection,
    selector,
    highlightedBannedChars,
    isCorrect,
}), {
    setSelector,
})(PureRound);

export { RoundContainer };
