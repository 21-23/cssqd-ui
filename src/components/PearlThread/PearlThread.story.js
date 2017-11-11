import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';

import { PearlThread } from './PearlThread';

const rounds = [
    'Lorem',
    'ipsum',
    'dolor sit amet',
    'consectetur',
    'adipisicing elit, Debitis culpa aspernatur repellendus, vel quis adipisci voluptates',
    'cum',
    'illo',
    'quidem',
    'dolor',
    'a',
     'quibusdam',
     'quibusdam',
].map(caption => ({ caption }));

storiesOf('PearlThread', module)
    .add('default', () => (
        <PearlThread
            items={rounds}
            activeIndex={number('activeIndex', 5)}
        />
    ))
    .add('clickable', () => (
        <PearlThread
            items={rounds}
            activeIndex={number('activeIndex', 5)}
            onPearlClick={console.log}
        />
    ))
    .add('overpopulated', () => (
        <PearlThread
            items={rounds.concat(rounds)}
            activeIndex={number('activeIndex', 5)}
        />
    ));
