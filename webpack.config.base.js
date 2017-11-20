const path = require('path');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const config = {
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            react: 'preact-compat',
            'react-dom': 'preact-compat',
        },
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
        }, {
            test: /(\.(png|jpg)$)/,
            loader: 'url-loader',
        }]
    },
    plugins: [
        new FaviconsWebpackPlugin({
            logo: 'assets/images/logo.png',
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
    ],
};

module.exports = config;
