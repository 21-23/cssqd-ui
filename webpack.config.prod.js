// TODO: this is stub config only

const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./webpack.config.dev');

const ownConfig = {
    output: {
        path: path.join(__dirname, 'dist-prod'),
        filename: '[name].bundle.js',
    },
    devtool: 'nosources-source-map',
};

module.exports = merge(baseConfig, ownConfig);
