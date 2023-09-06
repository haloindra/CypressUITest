describe("Login Page Test Case", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('should display email input, password input, and login button', () => {
    cy.get("input[name='email']").should("be.visible").and("have.attr", "type", "email").and("have.attr", "placeholder", "Email Address");
    cy.get("input[name='password']").should("be.visible").and("have.attr", "type", "password").and("have.attr", "placeholder", "Password");
    cy.get("button").should("be.visible").and("have.text", "Login").and("have.css", "background-color", "rgb(79, 70, 229)").and("have.css", "color", "rgb(255, 255, 255)");
  });

  it('should display an alert for login with null values', () => {
    cy.get("button").click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal("login failed");
    });
  });

  it('should display an alert for login with wrong values', () => {
    cy.get("input[name='email']").type("wrong@react.test");
    cy.get("input[name='password']").type("password");
    cy.get("button").click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal("login failed");
    });
  });

  it('should successfully log in with correct values', () => {
    cy.get("input[name='email']").type("user@react.test");
    cy.get("input[name='password']").type("password");
    cy.get("button").click();
    cy.on('window:alert', (text) => {
      expect(text).to.equal("welcome");
    });
    cy.url().should("eq", Cypress.config().baseUrl + "/dashboard");
    // Add assertions for UI elements after successful login
  });

  // Add more tests as needed
});