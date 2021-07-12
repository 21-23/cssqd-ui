import { h, render } from 'preact';

import { Layout } from '../components/Layout';
import { AuthButton } from '../components/AuthButton/AuthButton';

render(
    <Layout>
        <div className="login-panel">
            <div className="buttons-wrapper">
                <AuthButton path="/auth/github" icon="github" />
                {/* <AuthButton path="/auth/facebook" icon="facebook" /> */}
                <AuthButton path="/auth/twitter" icon="twitter" />
                <AuthButton path="/auth/google" icon="google" />
                <AuthButton path="/auth/qdauto" icon="database" />
            </div>
            <style jsx>{`
                .login-panel {
                    background: rgba(0, 0, 0, 0.3);
                    width: 100%;
                    margin: auto;
                    display: flex;
                    justify-content: center;
                }

                .buttons-wrapper {
                    max-width: 500px;
                    display: flex;
                    flex: 1;
                    justify-content: space-around;
                }
            `}</style>
        </div>
    </Layout>,
    document.body
);
