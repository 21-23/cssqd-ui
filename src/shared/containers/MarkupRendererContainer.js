import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { MarkupRenderer } from '../../components/MarkupRenderer/MarkupRenderer';

import { markup, expectedSelection } from '../selectors/puzzle-selectors';
import { roundStarted, roundFinished } from '../selectors/round-phase-selectors';

const MarkupRendererContainer = connect(
    createStructuredSelector({
        markup,
        expectedSelection,
        roundStarted,
        roundFinished,
    })
)(
    ({ markup, expectedSelection, roundStarted, roundFinished, ...rest }) =>
        !roundStarted && !roundFinished ? null : (
            <MarkupRenderer source={markup} expectedSelection={expectedSelection} {...rest} />
        )
);

export { MarkupRendererContainer };
