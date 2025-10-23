import Page from "./page.js";

class ProductsPage extends Page {
  constructor() {
    super();
  }

  public get title() {
    return this.locate.elementByDataTest("title");
  }

  public async addProductToCartButton(name: string) {
    return this.locate.elementByDataTest(`add-to-cart-${name}`);
  }

  public get shoppingCartBadge() {
    return this.locate.elementByDataTest("shopping-cart-badge");
  }

  public get productNameList() {
    return this.locate.elementsByDataTest("inventory-item-name");
  }

  public get cartLink() {
    return this.locate.elementByDataTest("shopping-cart-link");
  }

  // Actions
  public async addProductToCart(name: string) {
    const addToCartButton = await this.addProductToCartButton(name);
    await this.command.click(addToCartButton);
  }

  public async getBadgeCount() {
    const shoppingCartBadge = await this.shoppingCartBadge.isExisting();
    if (shoppingCartBadge) {
      const badgeCount = await this.shoppingCartBadge.getText();
      return Number(badgeCount);
    }
    return 0;
  }

  public async openCart() {
    await this.command.click(this.cartLink);
  }
}

export default new ProductsPage();
