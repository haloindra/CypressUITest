describe("Login Page Test Case", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should display email input, password input, and login button', () => {
    cy.get("input[name='email']").should("be.visible")
      .should("have.attr", "type", "email")
      .should("have.attr", "placeholder", "Email Address");

    cy.get("input[name='password']").should("be.visible")
      .should("have.attr", "type", "password")
      .should("have.attr", "placeholder", "Password");

    cy.get("button").should("be.visible")
      .should("have.text", "Login")
      .should("have.css", "background-color", "rgb(79, 70, 229)")
      .should("have.css", "color", "rgb(255, 255, 255)");
  });

  const testLoginAlert = expectedAlert => {
    cy.get("input[name='email']");
    cy.get("input[name='password']");
    cy.get("button").click();
    cy.on('window:alert', (expectedAlert) => {
      expect(expectedAlert).to.equal('login failed');
    });
  };

  it('should display an alert for login with null values', () => {
    testLoginAlert('', '', 'login failed');
  });

  it('should display an alert for login with wrong values', () => {
    testLoginAlert('wrong@react.test', 'password', 'login failed');
  });

  it('should successfully log in with correct values', () => {
    testLoginAlert('user@react.test', 'password', 'welcome');
    cy.url('eq', Cypress.config().baseUrl + '/dashboard');
    // Add assertions for UI elements after successful login
  });

  // Add more tests as needed
});
