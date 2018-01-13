const webpackTestConfig = require('../../build/webpack.test.conf.js')

module.exports = function (config) {
  config.set({
    files: [
      '../../src/**/*.js',
      'spec/**/*.spec.js'
    ],
    preprocessors: {
      '../../src/**/*.js': ['webpack', 'sourcemap'],
      'spec/**/*.spec.js': ['webpack', 'sourcemap']
    },
    browsers: ['PhantomJS'],
    frameworks: ['jasmine', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    webpack: webpackTestConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
