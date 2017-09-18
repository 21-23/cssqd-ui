import { h } from 'preact';

const Layout = ({ children }) => (
    <div>
        { children }
        <style jsx global>{`
            html {
                font-size: 16px;
                background: linear-gradient(to top, #183d3d 0%, #224b4b 35%, #2d5d59 70%, #43827f 100%) repeat-x #183d3d;
                min-height: 100%;
                font-family: sans-serif;
            }
        `}</style>
    </div>
);

export { Layout };
