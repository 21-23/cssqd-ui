import { h } from 'preact';
import { configure, addDecorator } from '@storybook/react';

import { Layout } from '../src/components/Layout';

addDecorator(story => (
    <Layout>
        { story() }
    </Layout>
));

function loadStories() {
    require('./stories');
}

configure(loadStories, module);
