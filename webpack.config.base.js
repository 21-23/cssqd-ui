const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const apps = require('./apps.json');

const config = {
    resolve: {
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.resolve(__dirname, 'src'),
                path.resolve(__dirname, 'node_modules', 'message-factory'),
                path.resolve(__dirname, 'node_modules', 'phoenix'),
            ],
        }, {
            test: /(\.(png|jpg)$)/,
            loader: 'url-loader',
        }]
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: './src/assets/images/logo.png',
            persistentCache: true,
            inject: true,
            background: '#fff',
            title: 'CSS Quick Draw',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),

        ...apps.map(app => new HTMLWebpackPlugin({
            chunks: [app.chunk],
            title: `${app.title}`,
            filename: `${app.filename}.html`,
            template: './src/index.tpl.html',
        })),
    ],
};

module.exports = config;
