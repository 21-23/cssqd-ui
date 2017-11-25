import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { CorrectSolution } from './CorrectSolution';

storiesOf('CorrectSolution', module)
    .add('default', () => (
        <CorrectSolution
            solution=":checked"
        />
    ));
