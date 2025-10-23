import Page from "./page";

class CartPage extends Page {
  constructor() {
    super();
  }

  public get title() {
    return this.locate.elementByDataTest("title");
  }

  public get itemNameList() {
    return this.locate.elementsByDataTest("inventory-item-name");
  }

  public get checkoutButton() {
    return this.locate.elementByDataTest("checkout");
  }

  // Actions
  public async assertShoppingCartTitle(title: string) {
    await this.assert.toBeDisplayed(this.title);
    await this.assert.toHaveText(this.title, title);
  }

  public async getItemNamesInCart(): Promise<string[]> {
    const itemElements = this.itemNameList;
    const itemNames = await itemElements.map(
      async (item) => await item.getText()
    );
    return itemNames;
  }

  public async validateItemInCart(itemName: string) {
    const itemNames = await this.getItemNamesInCart();
    if (!itemNames.includes(itemName)) {
      throw new Error(
        `Item "${itemName}" not found in cart. Current items: ${itemNames.join(
          ", "
        )}`
      );
    }
  }

  public async proceedToCheckout() {
    await this.command.click(this.checkoutButton);
  }
}
export default new CartPage();
