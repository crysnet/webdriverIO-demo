import { Then } from "@wdio/cucumber-framework";
import checkoutPage from "../page-objects/checkout.page";

Then(
  /^I should see the checkout information page "([^"]+)"$/,
  async (title: string) => {
    await checkoutPage.assertCheckoutStepTitle(title);
  }
);

Then(
  /^I fill in the checkout information with (.+), (.+), (.+)$/,
  async (firstName: string, lastName: string, postalCode: string) => {
    await checkoutPage.fillCheckoutInformation({
      firstName,
      lastName,
      postalCode,
    });
  }
);

Then(/^I continue to the next checkout step$/, async () => {
  await checkoutPage.continueCheckout();
});

Then(/^I should see the total amount for checkout$/, async () => {
  await checkoutPage.assertTotalAmountIsVisible();
});

Then(/^I finish the checkout process$/, async () => {
  await checkoutPage.finishCheckout();
});

Then(
  /^I should see the order confirmation message "([^"]+)"$/,
  async (message: string) => {
    await checkoutPage.assertOrderConfirmationMessage(message);
  }
);
