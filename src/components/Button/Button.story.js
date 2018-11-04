import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { Button } from './Button';

storiesOf('Button', module)
    .addDecorator(story => (
        <div>
            {story()}

            <style jsx>{`
                div {
                    font-size: 20px;
                }
            `}</style>
        </div>
    ))
    .add('Stop level', () => <Button iconLeft="stop" text="Stop level" />)
    .add('Next level', () => <Button iconRight="arrow-right" text="Next level" />);
