import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import { MarkupRenderer } from './MarkupRenderer';
import { Line } from './Line';
import { withDotSelectionIndicator } from './with-dot-selection-indicator';
import { withLineBackgroundSelection } from './with-line-background-selection';

import { text, array } from '@storybook/addon-knobs';

const taskSource = `
<main data-qdid="1">
    <input data-qdid="2" type="text"></input>
    <input data-qdid="3" type="number"></input>
    <input data-qdid="4" type="checkbox" checked></input>
    <input data-qdid="5" type="checkbox"></input>
    <input data-qdid="6" type="text"></input>
</main>
`

storiesOf('MarkupRenderer', module)
    .add('default', () => (
        <MarkupRenderer
            source={text('source', taskSource)}
            colors={{
                primary: 'white',
                tagName: '#eb5680',
                attrName: '#a9da46',
                attrValue: '#cac277',
            }}
            expectedSelection={array('expectedSelection', ["4"])}
            actualSelection={array('actualSelection', ["4", "5"])}
            LineComponent={Line}
        />
    ))
    .add('with dot selection indicator', () => (
        <MarkupRenderer
            source={text('source', taskSource)}
            colors={{
                primary: 'white',
                tagName: '#eb5680',
                attrName: '#a9da46',
                attrValue: '#cac277',
            }}
            expectedSelection={array('expectedSelection', ["4"])}
            actualSelection={array('actualSelection', ["4", "5"])}
            LineComponent={withDotSelectionIndicator(Line, {
                validSelection: '#a9da46',
                invalidSelection: '#eb5680',
            })}
        />
    ))
    .add('with background color selection', () => (
        <MarkupRenderer
            source={text('source', taskSource)}
            colors={{
                primary: 'white',
                tagName: '#eb5680',
                attrName: '#a9da46',
                attrValue: '#cac277',
            }}
            expectedSelection={array('expectedSelection', ["4"])}
            actualSelection={array('actualSelection', ["4", "5"])}
            LineComponent={withLineBackgroundSelection(Line, {
                validSelection: 'rgba(169, 218, 70, 0.3)',
                invalidSelection: 'rgba(235, 86, 128, 0.3)',
            })}
        />
    ));
