import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { WaitScreen } from './WaitScreen';

storiesOf('WaitScreen', module)
    .add('default', () => (
        <WaitScreen />
    ));
