import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { RoundLayout } from '../components/RoundLayout';
import { Countdown } from '../../components/Countdown/Countdown';
import { SelectorInput } from '../../components/SelectorInput/SelectorInput';
import { MarkupRenderer } from '../../components/MarkupRenderer/MarkupRenderer';
import { withDotSelectionIndicator } from '../../components/MarkupRenderer/with-dot-selection-indicator';
import { Line } from '../../components/MarkupRenderer/Line';
import { BannedCharacters } from '../../components/BannedCharacters/BannedCharacters';
import { PuzzleTitle } from '../../components/PuzzleTitle/PuzzleTitle';

import * as RoundPhase from '../../shared/constants/round-phase';
import { DURATION } from '../../shared/constants/round';

import { phase } from '../../shared/selectors/round-phase-selectors';
import { countdown } from '../../shared/selectors/countdown-selectors';
import {
    expectedSelection,
    bannedChars,
    markup,
    index as puzzleIndex,
    title as puzzleTitle,
} from '../../shared/selectors/puzzle-selectors';
import { selector, selection } from '../selectors/solution-selectors';
import { highlightedBannedChars } from '../selectors/round-selectors';

import { setSelector } from '../actions/solution-actions';

const PureRound = ({
    roundPhase,
    timeRemaining,
    selector,
    setSelector,
    markup,
    expectedSelection,
    actualSelection,
    bannedChars,
    highlightedBannedChars,
    puzzleIndex,
    puzzleTitle,
}) => roundPhase !== RoundPhase.IN_PROGRESS && roundPhase !== RoundPhase.FINISHED ? null :
    <RoundLayout>
        <PuzzleTitle
            index={puzzleIndex}
            title={puzzleTitle}
        />
        <SelectorInput
            value={selector}
            disabled={roundPhase === RoundPhase.FINISHED}
            onInput={setSelector}
        />
        <Countdown
            timeAmount={DURATION}
            timeRemaining={timeRemaining}
        />
        <BannedCharacters
            bannedCharacters={bannedChars}
            highlightedCharacters={highlightedBannedChars}
        />
        <MarkupRenderer
            source={markup}
            expectedSelection={expectedSelection}
            actualSelection={actualSelection}
        />
    </RoundLayout>

const RoundContainer = connect(createStructuredSelector({
    roundPhase: phase,
    timeRemaining: countdown,
    markup,
    expectedSelection,
    actualSelection: selection,
    selector,
    bannedChars,
    highlightedBannedChars,
    puzzleIndex,
    puzzleTitle,
}), {
    setSelector,
})(PureRound);

export { RoundContainer };
