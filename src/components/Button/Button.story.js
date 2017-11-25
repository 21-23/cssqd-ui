import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('Button', module)
    .addDecorator(story => (
        <div>
            { story() }

            <style jsx>{`
                div {
                    font-size: 20px;
                }
            `}</style>
        </div>
    ))
    .add('default', () => (
        <Button
            icon="stop"
            text="Stop round"
        />
    ));
