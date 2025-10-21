import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  public get title() {
    return $('[data-test="title"]');
  }
}

export default new SecurePage();
