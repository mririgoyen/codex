const path = require('path');

module.exports = config => {
  const scssRule = config.module.rules.find(e => e.test.toString().includes('s([ac])ss'));
  const cssLoader = scssRule.use.find(e => e.loader === 'css-loader');
  cssLoader.options.modules = true;
  cssLoader.options.localsConvention = 'camelCase';
  scssRule.use.push({
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../src/renderer/style/variables.scss')
      ]
    }
  });

  config.module.rules.find(e => e.test.toString().includes('svg')).test = /\.(png|jpe?g|gif)(\?.*)?$/;
  config.module.rules.push({
    test: /\.(svg)$/,
    use: [ 'react-svg-loader' ]
  });

  return config;
};
