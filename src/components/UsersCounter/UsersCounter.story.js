import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';

import { UsersCounter } from './UsersCounter';

storiesOf('UsersCounter', module)
    .addDecorator(story => (
        <div>
            {story()}
            <style jsx>{`
                div {
                    color: white;
                }
            `}</style>
        </div>
    ))
    .add('default', () => <UsersCounter count={number('count', 10)} label={text('label', 'joined')} />);
