const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const apps = require('./apps.json');
const baseConfig = require('./webpack.config.base');

const ownConfig = {
    output: {
        path: path.join(__dirname, 'dist-prod'),
        filename: '[name].bundle.js',
    },
    devtool: 'nosources-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'LOG_LEVEL': JSON.stringify('+error,-warn,-info,-log,+perf')
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false,
            warnings: false,
        }),
    ]
};

ownConfig.entry = apps.reduce((entries, app) => {
    entries[app.chunk] = [
        'babel-polyfill',
        `./src/${app.chunk}/${app.chunk}.index.js`,
    ];
    return entries;
}, {});

module.exports = merge(baseConfig, ownConfig);
