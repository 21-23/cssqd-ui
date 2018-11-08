import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import { store } from './demo-store';
import { RoundContainer } from '../game/containers/RoundContainer';
import { AppContainer } from '../shared/containers/AppContainer';

render(
    <Provider store={store}>
        <AppContainer>
            <RoundContainer />
        </AppContainer>
    </Provider>,
    document.body
);
