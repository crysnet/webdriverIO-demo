export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./tsconfig.json",
  automationProtocol: "webdriver",
  specs: ["./src/features/**/*.feature"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "info",
  bail: 0,
  baseUrl: "https://www.saucedemo.com/",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  specFileRetries: 0,
  specFileRetriesDelay: 5,
  reporters: ["spec"],
  cucumberOpts: {
    require: ["./src/step-definitions/steps.ts"],
    backtrace: false,
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
