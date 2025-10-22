import Locate from "../support/locate";
import Assert from "../support/assert";
import Command from "../support/command";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  locate: Locate;
  assert: Assert;
  command: Command;

  constructor() {
    this.locate = new Locate();
    this.assert = new Assert();
    this.command = new Command();
  }

  /**
   * Opens a sub page of the page
   * @param path path of the sub page
   */
  public open(path: string) {
    return browser.url(path);
  }
}
