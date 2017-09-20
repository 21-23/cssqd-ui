import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Header } from './Header';

storiesOf('Header', module)
    .add('default', () => (
        <Header username={text('username', 'username')}/>
    ));
