const { merge } = require('webpack-merge');

module.exports = function override(config, env) {
  // Add your custom configuration here
  const customConfig = {
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };

  return merge(config, customConfig);
};
