import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { number, color } from '@storybook/addon-knobs';

import { Countdown } from './Countdown';

storiesOf('Countdown', module)
    .add('round start', () => (
        <Countdown
            size={number('size', 300)}
            strokeSize={number('strokeSize', 10)}
            textFillColor={color('textFillColor', '#f8d940')}
            arcColor={color('arcColor', '#75a096')}
            remainingTimeArcColor={color('remainingTimeArcColor', '#f8d940')}
            timeAmount={number('timeAmount', 120)}
            timeRemaining={number('timeRemaining', 120)}
        />
    ))
    .add('some time elapsed', () => (
        <Countdown
            size={number('size', 300)}
            strokeSize={number('strokeSize', 10)}
            textFillColor={color('textFillColor', '#f8d940')}
            arcColor={color('arcColor', '#75a096')}
            remainingTimeArcColor={color('remainingTimeArcColor', '#f8d940')}
            timeAmount={number('timeAmount', 120)}
            timeRemaining={number('timeRemaining', 98)}
        />
    ))
    .add('puzzle solved', () => (
        <Countdown
            size={number('size', 300)}
            strokeSize={number('strokeSize', 10)}
            textFillColor={color('textFillColor', '#95c547')}
            arcColor={color('arcColor', '#75a096')}
            remainingTimeArcColor={color('remainingTimeArcColor', '#95c547')}
            timeAmount={number('timeAmount', 120)}
            timeRemaining={number('timeRemaining', 98)}
        />
    ));;
