import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import { PearlThread } from './PearlThread';

storiesOf('PearlThread', module)
    .add('default', () => (
        <PearlThread
            itemsCount={10}
            activeIndex={number('activeIndex', 5)}
            activeTitle={text('activeTitle', 'Lorem')}
        />
    ))
    .add('with long title', () => (
        <PearlThread
            itemsCount={10}
            activeIndex={number('activeIndex', 5)}
            activeTitle={text('activeTitle', 'Lorem ipsum dolor')}
            onPearlClick={console.log}
        />
    ))
    .add('overpopulated', () => (
        <PearlThread
            itemsCount={10}
            activeIndex={number('activeIndex', 5)}
            activeTitle={text('activeTitle', 'Lorem')}
        />
    ));
