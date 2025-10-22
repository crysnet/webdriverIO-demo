import { Then } from "@wdio/cucumber-framework";
import productsPage from "../page-objects/products.page";

Then(/^I should see a title saying (.*)$/, async (message) => {
  await productsPage.assert.toBeExisting(productsPage.title);
  await productsPage.assert.containsText(productsPage.title, message);
});
