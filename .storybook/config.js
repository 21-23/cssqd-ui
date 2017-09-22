import { h } from 'preact';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Layout } from '../src/components/Layout';

addDecorator(story => (
    <Layout>
        { story() }
    </Layout>
));

addDecorator(withKnobs);

function loadStories() {
    require('./stories');
}

configure(loadStories, module);
