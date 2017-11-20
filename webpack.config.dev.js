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

ownConfig.entry = apps.reduce((entries, app) => {
    entries[app.chunk] = [
        `./src/${app.chunk}/${app.chunk}.index.js`,
        `./scenarios/${app.chunk}`,
    ];
    return entries;
}, {});

ownConfig.plugins = apps.map(app => new HTMLWebpackPlugin({
    chunks: [app.chunk],
    title: `${app.title}`,
    filename: `${app.filename}.html`,
    template: './src/index.tpl.html',
}));

module.exports = merge(baseConfig, ownConfig);
