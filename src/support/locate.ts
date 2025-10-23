export default class Locate {
  /**
   *  Get an element by its data-test attribute.
   * @param dataTestValue  - The value of the data-test attribute.
   * @returns The element matching the specified data-test attribute.
   */
  elementByDataTest(dataTestValue: string) {
    return $(`[data-test="${dataTestValue}"]`);
  }

  /**
   *  Get elements by their data-test attribute.
   * @param dataTestValue  - The value of the data-test attribute.
   * @returns The elements matching the specified data-test attribute.
   */
  elementsByDataTest(dataTestValue: string) {
    return $$(`[data-test="${dataTestValue}"]`);
  }

  /**
   * Get an element by its type.
   * @param type - The type of the element (e.g., "text", "button", "submit", etc.).
   * @returns The element matching the specified type.
   */
  elementByType(type: string) {
    return $(`[type="${type}"]`);
  }

  /** Get an element using an XPath expression.
   * @param xpath - The XPath expression to locate the element.
   * @returns The element matching the specified XPath expression.
   */
  elementByXPath(xpath: string) {
    return $(xpath);
  }

  /** Get multiple elements using an XPath expression.
   * @param xpath - The XPath expression to locate the elements.
   * @returns An array of elements matching the specified XPath expression.
   */
  elementsByXPath(xpath: string) {
    return $$(xpath);
  }
}
