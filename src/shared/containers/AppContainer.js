import { h } from 'preact';
import { Header } from './HeaderContainer';

const AppContainer = ({ children }) => (
    <Layout>
        <Header />
        { children }
    </Layout>
);

export { AppContainer };
