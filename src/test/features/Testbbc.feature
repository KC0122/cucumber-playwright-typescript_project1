Feature:Check If BBC Text Exists On BBC Home Page

  Scenario:
    Given I Launch the browser
    When  I provide the URL for Home page of orangecrm.com
    Then  Home page is loaded and checks if the text  - Orange CRM - exists or not
    And   Close browser