import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { Waitscreen } from './Waitscreen';

storiesOf('Waitscreen', module)
    .add('default', () => (
        <Waitscreen />
    ));
