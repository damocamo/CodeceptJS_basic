const chromiumArgs = [
  '--ignore-certificate-errors',
  '--allow-insecure-localhost',
  '--disable-device-discovery-notifications',
  '--start-maximized',
];

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'https://www.afl.com.au/',
      show: true,
      waitForNavigation: ["domcontentloaded", "networkidle0"],
      waitForAction: 500,
      chrome: {
        args: chromiumArgs,
        defaultViewport: null,
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'CodeceptJS_basic'
}