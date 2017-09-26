import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SelectorInput } from './SelectorInput';

storiesOf('SelectorInput', module)
    .add('default', () => (
        <SelectorInput
            onChange={action('onChange')}
        />
    ))
    .add('disabled', () => (
        <SelectorInput
            onChange={action('onChange')}
            disabled
        />
    ));
