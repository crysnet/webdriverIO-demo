import type { Options } from "@wdio/types";

export const sharedConfig: Partial<Options.Testrunner> = {
  runner: "local",
  tsConfigPath: "../tsconfig.json",
  automationProtocol: "webdriver",
  specs: ["../src/features/**/*.feature"],
  maxInstances: 2,
  logLevel: "info",
  bail: 0,
  baseUrl: process.env.BASE_URL,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "cucumber",
  specFileRetries: 0,
  specFileRetriesDelay: 5,
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
      },
    ],
  ],
  cucumberOpts: {
    require: ["src/features/step-definitions/**/*.steps.ts"],
    backtrace: false,
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: "",
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
  /**
   * Gets executed before a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world    world object containing information on pickle and test step
   * @param {object}                 context  Cucumber World object
   */
  beforeScenario: async function (_world, _context) {
    await browser.deleteAllCookies();
    await browser.execute(() => {
      if (typeof localStorage !== "undefined") {
        localStorage.clear();
      }
      if (typeof sessionStorage !== "undefined") {
        sessionStorage.clear();
      }
    });
    await browser.url("about:blank");
  },

  /**
   * Gets executed after a Cucumber Step.
   * @param {Pickle.IPickleStep} step             step data
   * @param {IPickle}            scenario         scenario pickle
   * @param {object}             result           results object containing scenario results
   * @param {boolean}            result.passed    true if scenario has passed
   * @param {string}             result.error     error stack if scenario failed
   * @param {number}             result.duration  duration of scenario in milliseconds
   * @param {object}             context          Cucumber World object
   */
  afterStep: async function (_step, _scenario, result, _context) {
    if (!result.passed) {
      const screenshot = await browser.takeScreenshot();
      await browser.call(() => {
        const allureReporter = require("@wdio/allure-reporter").default;
        allureReporter.addAttachment(
          "Screenshot on Failure",
          Buffer.from(screenshot, "base64"),
          "image/png"
        );
      });
    }
  },

  /**
   * Gets executed after a Cucumber Scenario.
   * @param {ITestCaseHookParameter} world            world object containing information on pickle and test step
   * @param {object}                 result           results object containing scenario results
   * @param {boolean}                result.passed    true if scenario has passed
   * @param {string}                 result.error     error stack if scenario failed
   * @param {number}                 result.duration  duration of scenario in milliseconds
   * @param {object}                 context          Cucumber World object
   */
  afterScenario: async function (_world, result, _context) {
    if (!result.passed) {
      const screenshot = await browser.takeScreenshot();
      await browser.call(() => {
        const allureReporter = require("@wdio/allure-reporter").default;
        allureReporter.addAttachment(
          "Scenario Failure Screenshot",
          Buffer.from(screenshot, "base64"),
          "image/png"
        );
      });
    }
  },
};
