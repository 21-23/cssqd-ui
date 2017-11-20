import { h, render } from 'preact';

import { Layout } from '../components/Layout';

const logoUrl = require('../assets/images/logo.png');

render(
    <Layout>
        <div className="landing-logo">
            <div className="logo-container" style={{ backgroundImage: `url(${logoUrl})` }}>

            </div>
            <style jsx>{`
                .landing-logo {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .logo-container {
                    background-color: #fff;
                    background-size: contain;
                    box-shadow: 0 0 .7em #000;
                    width: 12vw;
                    height: 12vw;
                }
            `}</style>
        </div>
    </Layout>,
    document.body
);
