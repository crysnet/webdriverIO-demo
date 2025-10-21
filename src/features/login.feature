Feature: Swag Labs Website

  @regression
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a title saying <message>

    Examples:
      | username | password          | message                       |
      | standard_user | secret_sauce | Products |

  @smoke
  Scenario Outline: As a user, I cannot log into the secure area
    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an invalid alert

    Examples:
      | username      | password | 
      | standard_user | barfoo   |

