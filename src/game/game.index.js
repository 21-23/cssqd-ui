import { h, render } from 'preact';
import { Provider } from 'preact-redux';

import { store } from './game-store';
import { GameContainer } from './containers/GameContainer';

render(
    <Provider store={store}>
        <GameContainer />
    </Provider>,
document.body);
