import { Given, When, Then } from "@wdio/cucumber-framework";
import loginPage from "../page-objects/login.page";

const pages = {
  login: loginPage,
};

Given(/^I am on the (\w+) page$/, async (page: keyof typeof pages) => {
  await pages[page].navigateTo();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await loginPage.login(username, password);
});

Then(/^I should see an invalid alert$/, async () => {
  await loginPage.assert.toBeDisplayed(loginPage.invalidLoginMessage);
});
