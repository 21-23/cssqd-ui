const config = {
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  module: {
    rules: [{
      test: /(.png$)/,
      loader: 'url-loader',
    }]
  }
};

module.exports = config;
