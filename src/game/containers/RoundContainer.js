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

import * as RoundPhase from '../../shared/constants/round-phase';
import { DURATION } from '../../shared/constants/round';

import { bannedChars, highlightedBannedChars, selector } from '../selectors/round-selectors';

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
}) => roundPhase !== RoundPhase.IN_PROGRESS && roundPhase !== RoundPhase.FINISHED ? null :
    <RoundLayout>
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
    roundPhase: state => state.roundPhase,
    timeRemaining: state => state.countdown,
    markup: state => state.puzzle.markup,
    expectedSelection: state => state.puzzle.expectedSelection,
    actualSelection: state => state.solution.selection,
    selector,
    bannedChars,
    highlightedBannedChars,
}), {
    setSelector,
})(PureRound);

export { RoundContainer };
