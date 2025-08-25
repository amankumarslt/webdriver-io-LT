exports.config = {
  user: process.env.LT_USERNAME || "amankumars", /* Add your username */
  key: process.env.LT_ACCESS_KEY || "LT_euA4TdkHayXDAw21SwRi7cM8SWDR0Zni1SaBNYTcqbR1rmu",  /* Add your Acess key here */

  updateJob: false,
  specs: ["./specs/android-test.js"],
  exclude: [],

  commonCapabilities: {
    build: "LT_Appium_NodeJS_WebDriverIO_App_Automation",
    name: "Sample Single Test - WebDriverIO",
    isRealMobile: true,
    devicelog: true,
    visual: true,
  },


  // Enter the app id From the uploaded app section 

  capabilities: [
    {
      platformName: "Android",
      deviceName: ".*",
      name: "Sample Single Test - WebDriverIO",
      app: process.env.LT_APP_ID||"lt://APP1016036541751436219196760",
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "https://mobile-hub.lambdatest.com",
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  path: "/wd/hub",
  hostname: process.env.LT_GRID_URL||"mobile-hub.lambdatest.com",
  port: 80,

  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 20000,
  },
};

exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities)
    caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
