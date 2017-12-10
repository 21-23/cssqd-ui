import { h } from 'preact';
import { connect } from 'preact-redux';
import { createStructuredSelector } from 'reselect';

import { Header } from './HeaderContainer';
import { Layout } from '../../components/Layout';
import { initialized } from '../selectors/init-selectors';


const PureAppContainer = ({ children, initialized }) => (
    <Layout>
        <Header />
        { initialized ? children : null }
    </Layout>
);

const AppContainer = connect(createStructuredSelector({ initialized }))(PureAppContainer);

export { AppContainer };
