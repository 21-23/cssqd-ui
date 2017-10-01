import { h } from 'preact';
import { Header } from './HeaderContainer';
import { Layout } from '../../components/Layout';


const AppContainer = ({ children }) => (
    <Layout>
        <Header />
        { children }
    </Layout>
);

export { AppContainer };
