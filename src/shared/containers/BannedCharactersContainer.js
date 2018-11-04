import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { BannedCharacters } from '../../components/BannedCharacters/BannedCharacters';

import { roundStarted, roundFinished } from '../selectors/round-phase-selectors';
import { bannedChars } from '../selectors/puzzle-selectors';

const BannedCharactersContainer = connect(
    createStructuredSelector({
        roundStarted,
        roundFinished,
        bannedChars,
    })
)(({ roundStarted, roundFinished, bannedChars, ...rest }) => (
    <BannedCharacters bannedCharacters={roundStarted || roundFinished ? bannedChars : null} {...rest} />
));

export { BannedCharactersContainer };
