import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import { store } from './#{name}-store';
import { #{CamelCaseName}Container } from './containers/#{CamelCaseName}Container';

render(
    <Provider store={store}>
        <#{CamelCaseName}Container />
    </Provider>,
    document.body
);
