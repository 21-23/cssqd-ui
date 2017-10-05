const path = require('path');
const merge = require('webpack-merge');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const apps = require('./apps.json');
const baseConfig = require('./webpack.config.base');

const ownConfig = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
};

ownConfig.entry = apps.reduce((entries, appName) => {
    entries[appName] = `./src/${appName}/${appName}.index.js`;
    return entries;
}, {});

ownConfig.plugins = apps.map(appName => new HTMLWebpackPlugin({
    chunks: [appName],
    title: `${appName.charAt(0).toUpperCase()}${appName.substring(1)}`,
    filename: `${appName}.html`
}));

module.exports = merge(baseConfig, ownConfig);