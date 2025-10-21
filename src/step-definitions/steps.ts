import { Given, When, Then } from "@wdio/cucumber-framework";

import LoginPage from "../page-objects/login.page.js";
import SecurePage from "../page-objects/secure.page.js";

const pages = {
  login: LoginPage,
};

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^I should see a title saying (.*)$/, async (message) => {
  await expect(SecurePage.title).toBeExisting();
  await expect(SecurePage.title).toHaveText(expect.stringContaining(message));
});

Then(/^I should see an invalid alert$/, async () => {
  await expect(LoginPage.invalidLoginMessage).toBeDisplayed();
});
