import { h } from 'preact';
import { configure, addDecorator } from '@storybook/react';

import { Layout } from '../src/components/Layout';

addDecorator(story => (
    <Layout>
        { story() }
    </Layout>
));

function loadStories() {
    require('../src/components/Header/Header.story')
}

configure(loadStories, module);
