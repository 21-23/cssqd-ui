import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import { BannedCharacters } from './BannedCharacters';

storiesOf('BannedCharacters', module)
    .add('default', () => (
        <BannedCharacters
            bannedCharacters={array('bannedCharacters', ['n', ']', 'x'])}
            highlightedCharacters={array('highlightedCharacters', ['x'])}
        />
    ))
    .add('without restrictions', () => (
        <BannedCharacters
            bannedCharacters={array('bannedCharacters', [])}
        />
    ));
