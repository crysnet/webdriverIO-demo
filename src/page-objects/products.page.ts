import Page from "./page.js";

class ProductsPage extends Page {
  constructor() {
    super();
  }

  public get title() {
    return this.locate.elementByDataTest("title");
  }
}

export default new ProductsPage();
