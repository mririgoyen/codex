const devConfig = require('./dev.webpack.config.js');
const prodConfig = require('./prod.webpack.config.js');

module.exports = () => {
  if (process.env.NODE_ENV !== 'production') {
    return devConfig;
  }
  return prodConfig;
};
