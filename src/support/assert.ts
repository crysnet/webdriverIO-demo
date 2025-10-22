export default class Assert {
  async toBeDisplayed(element: ChainablePromiseElement) {
    try {
      await expect(element).toBeDisplayed();
    } catch (error) {
      console.error("Element is not displayed:", error);
      throw error;
    }
  }

  async toHaveText(element: ChainablePromiseElement, expectedText: string) {
    try {
      await expect(element).toHaveText(expectedText);
    } catch (error) {
      console.error(
        `Element does not have the expected text "${expectedText}":`,
        error
      );
      throw error;
    }
  }

  async containsText(element: ChainablePromiseElement, text: string) {
    try {
      await expect(element).toHaveText(text, {
        containing: true,
      });
    } catch (error) {
      console.error(
        `Element does not have the expected text "${text}":`,
        error
      );
      throw error;
    }
  }

  async toBeExisting(element: ChainablePromiseElement) {
    try {
      await expect(element).toBeExisting();
    } catch (error) {
      console.error("Element does not exist:", error);
      throw error;
    }
  }
}
