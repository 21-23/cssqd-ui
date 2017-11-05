import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import { store } from './game-master-store';
import { GameMasterContainer } from './containers/GameMasterContainer';

render(
    <Provider store={store}>
        <GameMasterContainer />
    </Provider>,
    document.body
);
