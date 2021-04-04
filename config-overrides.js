const path = require('path');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    console.log('override', config);

    console.log('override', config);
    config.resolve.alias['~'] =  path.resolve(__dirname, 'src');
    return config;
  }