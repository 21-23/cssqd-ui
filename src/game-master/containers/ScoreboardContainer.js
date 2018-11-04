import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { Scoreboard } from '../../components/Scoreboard/Scoreboard';
import { toggleVisibleScoreType } from '../actions/score-actions';
import { visibleScore, aggregateScore, roundScore } from '../selectors/score-selectors';
import { ScoreType } from '../constants/score-types';

const ScoreboardContainer = connect(
    createStructuredSelector({
        visibleScore,
        aggregateScore,
        roundScore,
    }),
    {
        toggleVisibleScoreType,
    }
)(Scoreboard);

export { ScoreboardContainer };
