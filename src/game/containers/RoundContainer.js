import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { RoundLayout } from '../components/RoundLayout';
import { PearlThread } from '../../components/PearlThread/PearlThread';
import { Countdown } from '../../components/Countdown/Countdown';
import { SelectorInput } from '../../components/SelectorInput/SelectorInput';
import { MarkupRenderer } from '../../components/MarkupRenderer/MarkupRenderer';
import { withDotSelectionIndicator } from '../../components/MarkupRenderer/with-dot-selection-indicator';
import { Line } from '../../components/MarkupRenderer/Line';
import { BannedCharacters } from '../../components/BannedCharacters/BannedCharacters';
import { PuzzleTitle } from '../../components/PuzzleTitle/PuzzleTitle';
import { RoundStartCountdown } from '../../components/RoundStartCountdown/RoundStartCountDown';


import * as RoundPhase from '../../shared/constants/round-phase';
import { DURATION } from '../../shared/constants/round';

import { roundStarted, roundFinished } from '../../shared/selectors/round-phase-selectors';
import { countdown } from '../../shared/selectors/countdown-selectors';
import {
    expectedSelection,
    bannedChars,
    markup,
    index as puzzleIndex,
    title as puzzleTitle,
    puzzlesCount,
} from '../../shared/selectors/puzzle-selectors';
import { selector, selection } from '../selectors/solution-selectors';
import { highlightedBannedChars } from '../selectors/round-selectors';

import { setSelector } from '../actions/solution-actions';

const PureRound = ({
    roundStarted,
    roundFinished,
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
    puzzlesCount,
}) => (
    <RoundLayout>
        <PearlThread
            itemsCount={puzzlesCount}
            activeIndex={puzzleIndex - 1}
            activeTitle={puzzleTitle}
        />
        <PuzzleTitle
            index={puzzleIndex}
            title={puzzleTitle}
        />
        <SelectorInput
            value={selector}
            disabled={!roundStarted || roundFinished}
            onInput={setSelector}
        />

        <BannedCharacters
            bannedCharacters={ roundStarted ? bannedChars : null }
            highlightedCharacters={ roundStarted ? highlightedBannedChars : null }
        />

        { !roundStarted ? null :
            <Countdown
                timeAmount={DURATION}
                timeRemaining={timeRemaining}
            />
        }

        { !roundStarted ? null :
            <MarkupRenderer
                source={markup}
                expectedSelection={expectedSelection}
                actualSelection={actualSelection}
            />
        }

        { (roundStarted || roundFinished) ? null : <RoundStartCountdown timeRemaining={timeRemaining} /> }
    </RoundLayout>
);

const RoundContainer = connect(createStructuredSelector({
    roundStarted,
    roundFinished,
    timeRemaining: countdown,
    markup,
    expectedSelection,
    actualSelection: selection,
    selector,
    bannedChars,
    highlightedBannedChars,
    puzzleIndex,
    puzzleTitle,
    puzzlesCount,
}), {
    setSelector,
})(PureRound);

export { RoundContainer };
