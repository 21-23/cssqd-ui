import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { Header } from './HeaderContainer';
import { Layout } from '../../components/Layout';


const PureAppContainer = ({ children, ready }) => (
    <Layout>
        <Header />
        { ready ? children : null }
    </Layout>
);

const AppContainer = connect(createStructuredSelector({
    ready: state => state.username !== '',
}))(PureAppContainer);

export { AppContainer };
