const path = require('path');
const merge = require('webpack-merge');

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
        'babel-polyfill',
        `./src/${app.chunk}/${app.chunk}.index.js`,
        `./scenarios/${app.chunk}`,
    ];
    return entries;
}, {});

module.exports = merge(baseConfig, ownConfig);
