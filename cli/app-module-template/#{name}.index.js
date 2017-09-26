import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import { store } from './#{name}-store';
import { #{camelCaseName} } from './containers/#{camelCaseName}';

render(
    <Provider store={store}>
        <#{camelCaseName} />
    </Provider>,
document.body);
