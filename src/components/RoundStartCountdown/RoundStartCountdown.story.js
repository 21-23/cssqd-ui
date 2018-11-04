import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';

import { RoundStartCountdown } from './RoundStartCountdown';

storiesOf('RoundStartCountdown', module).add('default', () => (
    <RoundStartCountdown timeRemaining={number('timeRemaining', 3)} />
));
