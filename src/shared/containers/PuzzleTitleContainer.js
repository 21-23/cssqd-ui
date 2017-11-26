import { PuzzleTitle } from '../../components/PuzzleTitle/PuzzleTitle';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { index, title } from '../../shared/selectors/puzzle-selectors';

const PuzzleTitleContainer = connect(createStructuredSelector({ index, title }))(PuzzleTitle);

export { PuzzleTitleContainer };
