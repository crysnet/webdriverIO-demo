Feature: Swag Labs Product Page

    @smoke @product
    Scenario Outline: As a user, I can log in to the page and verify that the products have a brand
        Given I am on the login page
        When I login with <username> and <password>
        Then I should see a title saying <message>
        And I should see products with the brand name <productBrand>

        Examples:
            | username      | password     | message  | productBrand |
            | standard_user | secret_sauce | Products | Sauce Labs   |

    @smoke @product @cart
    Scenario Outline: As a user, I can log in to the page and Add products to shopping cart
        Given I am on the login page
        When I login with <username> and <password>
        And I should see a title saying <message>
        And I add the product <productName> to the cart
        Then I should see increment the shopping cart badge

        Examples:
            | username      | password     | message  | productName             |
            | standard_user | secret_sauce | Products | Sauce Labs Backpack     |
            | standard_user | secret_sauce | Products | Sauce Labs Bolt T-Shirt |


    @smoke @product @checkout
    Scenario Outline: As a user, I can log in and checkout <productName> for <firstName> <lastName>
        Given I am on the login page
        When I login with <username> and <password>
        And I should see a title saying <message>
        And I add the product <productName> to the cart
        And I should see increment the shopping cart badge
        And I go to the cart page
        And The shopping cart title should be "Your Cart"
        And I should see the product <productName> in the cart
        And I proceed to checkout
        And I should see the checkout information page "Checkout: Your Information"
        And I fill in the checkout information with <firstName>, <lastName>, <postalCode>
        And I continue to the next checkout step
        And I should see the checkout information page "Checkout: Overview"
        And I should see the total amount for checkout
        And I finish the checkout process
        Then I should see the order confirmation message "Thank you for your order!"

        Examples:
            | username      | password     | message  | productName           | firstName | lastName | postalCode |
            | standard_user | secret_sauce | Products | Sauce Labs Backpack   | John      | Doe      | 12345      |
            | standard_user | secret_sauce | Products | Sauce Labs Bike Light | Mary      | Doe      | 78345      |

