import { h } from 'preact';

const Layout = ({ children }) => (
    <div class="react-root">
        {children}
        <style jsx global>{`
            html {
                font-size: 16px;
                background: linear-gradient(to top, #183d3d 0%, #224b4b 35%, #2d5d59 70%, #43827f 100%) repeat-x #183d3d;
                min-height: 100%;
                height: 100%;
                font-family: sans-serif;
            }

            body {
                margin: 0;
                height: 100%;
            }

            .react-root {
                display: flex;
                height: 100%;
                flex-direction: column;
                align-items: stretch;
                height: 100%;
            }
        `}</style>
    </div>
);

export { Layout };
