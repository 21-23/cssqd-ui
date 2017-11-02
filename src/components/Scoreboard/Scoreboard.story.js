import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';

import { Scoreboard } from './Scoreboard';
import Score from './Score.mock';

storiesOf('Scoreboard', module)
    .add('Round score', () => (
        <Scoreboard score={Score.players} visibleScore="round" />
    ))
    .add('Aggregate score', () => (
        <Scoreboard score={Score.players} visibleScore="aggregate" />
    ))
    .add('Score with selector', () => (
        <Scoreboard score={Score.players} visibleScore={select('visible score', ['round', 'aggregate'], 'round')} />
    ));
