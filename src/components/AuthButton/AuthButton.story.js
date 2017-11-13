import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { AuthButton } from './AuthButton';

storiesOf('AuthButton', module)
    .add('github', () => (
        <AuthButton
            path="/auth/github"
            icon="github"
        />
    ))
    .add('local', () => (
        <AuthButton
            path="/auth/qd-auto"
            icon="database"
        />
    ));
