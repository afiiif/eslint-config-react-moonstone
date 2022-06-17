const eslintrc = require('./.eslintrc');

// Exclude parserOptions from the config
const { parserOptions, ...config } = eslintrc;

module.exports = config;
