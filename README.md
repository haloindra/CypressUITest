# CypressUITest
Automation Test With Cypress Framework

# Login Page Test Suite

This test suite covers various scenarios related to the login page of your application.

## Table of Contents

- [Description](#description)
- [Test Cases](#test-cases)
- [Usage](#usage)
- [Contributing](#contributing)

## Description

The `Login Page Test Case` suite uses Cypress to automate testing for your login page. It checks the display of input fields (email and password), login button, and handles alerts for different login scenarios.

## Test Cases

1. **Display Email and Password Inputs**: Checks if the email input, password input, and login button are displayed correctly on the login page.

2. **Alert for Login with Null Values**: Ensures that an alert is displayed when attempting to log in with empty email and password fields.

3. **Alert for Login with Wrong Values**: Verifies that an alert is displayed when trying to log in with incorrect email and password values.

4. **Successful Login**: Tests the successful login process by entering valid credentials. It confirms the welcome alert, URL redirection, and potential UI elements after a successful login.

## Usage

To run these tests, make sure you have [Cypress](https://www.cypress.io/) installed in your project.

1. Clone this repository.
2. Install the project dependencies: `npm install`.
3. Open Cypress: `npx cypress open`.
4. Click on the test file `login-page.spec.js` to run the test suite.

## Contributing

Contributions are welcome! If you find any issues or want to add more test cases, feel free to submit a pull request.

