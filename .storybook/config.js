import { h } from 'preact';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { setOptions } from '@storybook/addon-options';

import { Layout } from '../src/components/Layout';

setOptions({
    downPanelInRight: true,
});

addDecorator(story => <Layout>{story()}</Layout>);
addDecorator(withKnobs);

function loadStories() {
    require('./stories');
}

configure(loadStories, module);
