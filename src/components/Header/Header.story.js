import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import { Header } from './Header';

const backgroundImageUrl = require('../../assets/images/header-bg.png');

storiesOf('Header', module).add('default', () => (
    <Header
        productName={text('productName', 'CSS Quickdraw')}
        username={text('username', 'username')}
        backgroundImageUrl={backgroundImageUrl}
    />
));
