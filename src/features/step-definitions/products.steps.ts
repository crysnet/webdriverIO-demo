import { Then } from "@wdio/cucumber-framework";
import productsPage from "../page-objects/products.page";

let initialBadgeCount: number = 0;

Then(/^I should see a title saying (.*)$/, async (message) => {
  await productsPage.assert.toBeExisting(productsPage.title);
  await productsPage.assert.containsText(productsPage.title, message);

  // Store the initial badge count
  initialBadgeCount = await productsPage.getBadgeCount();
});

Then(
  /^I should see products with the brand name (.*)$/,
  async (productBrand) => {
    const itemNames = productsPage.productNameList;
    await itemNames.forEach(async (itemName) => {
      await productsPage.assert.containsText(itemName, productBrand);
    });
  }
);

Then(/^I add the product (.*) to the cart$/, async (productName) => {
  await productsPage.addProductToCart(
    productName.toLowerCase().replace(/ /g, "-")
  );
});

Then(/^I should see increment the shopping cart badge$/, async () => {
  if (initialBadgeCount === 0) {
    await productsPage.assert.toBeDisplayed(productsPage.shoppingCartBadge);
    const badgeCount = await productsPage.getBadgeCount();
    await expect(badgeCount).toBe(1);
  } else {
    const currentBadgeCount = await productsPage.getBadgeCount();
    const expectedCount = initialBadgeCount + 1;
    await productsPage.assert.toBeEqual(currentBadgeCount, expectedCount);
  }
});

Then(/^I go to the cart page$/, async () => {
  await productsPage.openCart();
});
