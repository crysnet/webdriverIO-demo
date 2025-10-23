import Page from "./page";

class CheckoutPage extends Page {
  constructor() {
    super();
  }

  public get checkoutTitle() {
    return this.locate.elementByDataTest("title");
  }

  public get firstNameInput() {
    return this.locate.elementByDataTest("firstName");
  }

  public get lastNameInput() {
    return this.locate.elementByDataTest("lastName");
  }

  public get postalCodeInput() {
    return this.locate.elementByDataTest("postalCode");
  }

  public get continueButton() {
    return this.locate.elementByType("submit");
  }

  public get finishButton() {
    return this.locate.elementByDataTest("finish");
  }

  public get totalLabel() {
    return this.locate.elementByDataTest("total-label");
  }

  public get completeHeader() {
    return this.locate.elementByDataTest("complete-header");
  }

  // Actions
  public async assertCheckoutStepTitle(title: string) {
    await this.assert.toBeDisplayed(this.checkoutTitle);
    return this.assert.toHaveText(this.checkoutTitle, title);
  }

  public async fillCheckoutInformation({
    firstName,
    lastName,
    postalCode,
  }: {
    firstName: string;
    lastName: string;
    postalCode: string;
  }) {
    await this.command.setValue(this.firstNameInput, firstName);
    await this.command.setValue(this.lastNameInput, lastName);
    await this.command.setValue(this.postalCodeInput, postalCode);
  }

  public async continueCheckout() {
    await this.command.click(this.continueButton);
  }

  public async finishCheckout() {
    await this.command.click(this.finishButton);
  }

  public async assertTotalAmountIsVisible() {
    await this.assert.toBeDisplayed(this.totalLabel);
  }

  public async assertOrderConfirmationMessage(message: string) {
    await this.assert.toBeDisplayed(this.completeHeader);
    return this.assert.toHaveText(this.completeHeader, message);
  }
}

export default new CheckoutPage();
