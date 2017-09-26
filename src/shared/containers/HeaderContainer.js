import { h } from 'preact';
import { connect } from 'preact-redux';
import { Header as PureHeader } from '../components/Header/Header';

const backgroundImageUrl = require('../assets/images/header-bg.png');

const Header = connect(state => ({
    username: state.username,
}))
(({ username }) => (
    <Header
        productName="CSS Quickdraw"
        username={username}
        backgroundImageUrl={backgroundImageUrl}
    />
));

export { Header };
