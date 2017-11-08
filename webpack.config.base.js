const path = require('path');

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
    }
};

module.exports = config;
