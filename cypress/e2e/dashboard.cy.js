describe("Dashboard Page Test Case", () => {

  it('Do Login with Correct Values', () => {
    cy.visit('/');
    //type email
    const email = cy.get("input[name='email']");
    email.type("user@react.test");
    //type password
    const password = cy.get("input[name='password']");
    password.type("password");
    const button = cy.get("button");
    button.click();

    cy.on('window:alert', (text) => {
      expect(text).to.equal("welcome");
    });

    const baseUrl = Cypress.config('baseUrl');
    cy.url().should("eq", `${baseUrl}/dashboard`)
  });

  it("Website contains Found 0 Photos text", () => {
    cy.visit("/dashboard");
    cy.contains("Found 0 photos");
  });

  it("Contains image url and description input, and publish button", () => {
    cy.visit("/dashboard");
    //check image
    const image = cy.get("input[name='image']");
    image.should('be.visible');
    image.should("have.attr", "type", "url");
    image.should("have.attr", "required", "required");
    image.should("have.attr", "placeholder", "Image URL");

    //check description
    const description = cy.get("input[name='desc']");
    image.should('be.visible');
    image.should("have.attr", "type", "text");
    image.should("have.attr", "required", "required");
    image.should("have.attr", "placeholder", "What's on your mind?");

    //check publish button
    const button = cy.get("button");
    button.should('be.visible');
    button.contains('Publish');
    button.should("have.css", "background-color", "rgb(79, 70, 229)");
    button.should("have.css", "color", "rgb(255, 255, 255)");
  });

  it('Upload some photos', () => {
    cy.fixture("photos").then((photos) => {
      photos.forEach(({ imageValue, descriptionValue }) => {

        // Find and type into the image and description input fields
        cy.get("input[name='image']").type(imageValue);
        cy.get("input[name='desc']").type(descriptionValue);

        // Find and click the button to upload
        cy.get("button").click();

        // Wait for the image and description to be displayed
        cy.get("img").should("have.attr", "src", imageValue);
        cy.contains(descriptionValue);

        // Wait for a while to ensure the next iteration doesn't start too quickly
        cy.wait(500);
      });
      // After all photos are uploaded, assert that you found all photos
      cy.contains(`Found ${photos.length} photos`);
    });
  });
});  