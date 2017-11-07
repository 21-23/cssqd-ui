import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';

import { PearlThread } from './PearlThread';

storiesOf('PearlThread', module)
    .add('default', () => (
        <PearlThread
            items={new Array(12).fill({caption: 'Signing up'})}
            activeIndex={number('activeIndex', 5)}
        />
    ))
    .add('clickable', () => (
        <PearlThread
            items={new Array(12).fill({caption: 'Signing up'})}
            activeIndex={number('activeIndex', 5)}
            onPearlClick={console.log}
        />
    ));
