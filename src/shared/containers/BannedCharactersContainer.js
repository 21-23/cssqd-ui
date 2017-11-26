import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { BannedCharacters } from '../../components/BannedCharacters/BannedCharacters';

import { roundStarted } from '../selectors/round-phase-selectors';
import { bannedChars } from '../selectors/puzzle-selectors';

const BannedCharactersContainer = connect(createStructuredSelector({
    roundStarted,
    bannedChars,
}))(({ roundStarted, bannedChars, ...rest }) => (
    <BannedCharacters
        bannedCharacters={ roundStarted ? bannedChars : null }
        {...rest}
    />
));

export { BannedCharactersContainer };
