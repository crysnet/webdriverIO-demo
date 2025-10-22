export default class Command {
  /**
   *  Click on a specific element.
   * @param element - The element to be clicked.
   */
  async click(element: ChainablePromiseElement) {
    try {
      await element.click();
    } catch (error) {
      console.error("Error clicking on element:", error);
      throw error;
    }
  }

  async setValue(element: ChainablePromiseElement, text: string) {
    try {
      await element.setValue(text);
    } catch (error) {
      console.error("Error setting text on element:", error);
      throw error;
    }
  }
}
