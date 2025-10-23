import { Then } from "@wdio/cucumber-framework";
import cartPage from "../page-objects/cart.page";

Then(/^The shopping cart title should be "([^"]+)"$/, async (title: string) => {
  await cartPage.assertShoppingCartTitle(title);
});

Then(
  /^I should see the product (.+) in the cart$/,
  async (itemName: string) => {
    await cartPage.validateItemInCart(itemName);
  }
);

Then(/^I proceed to checkout$/, async () => {
  await cartPage.proceedToCheckout();
});
