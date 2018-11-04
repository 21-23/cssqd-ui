import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { PearlThread } from '../../components/PearlThread/PearlThread';
import { index as puzzleIndex, puzzlesCount, title as puzzleTitle } from '../selectors/puzzle-selectors';

const PearlThreadContainer = connect(
    createStructuredSelector({
        activeIndex: puzzleIndex,
        itemsCount: puzzlesCount,
        activeTitle: puzzleTitle,
    })
)(PearlThread);

export { PearlThreadContainer };
