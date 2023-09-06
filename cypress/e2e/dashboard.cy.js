describe("Dashboard Page Test Case", () =>{

  it('Do Login with Correct Values', () =>{
    cy.visit('/');
    //type email
    const email = cy.get("input[name='email']");
    email.type("user@react.test");
    //type password
    const password = cy.get("input[name='password']");
    password.type("password");
    const button = cy.get("button");
    button.click();
    
    cy.on('window:alert', (text) =>{
      expect(text).to.equal("welcome");
    });

    const baseUrl = Cypress.config('baseUrl');
    cy.url().should("eq",`${baseUrl}/dashboard`)  
  });

  it("Website contains Found 0 Photos text", () =>{
    cy.visit("/dashboard");
    cy.contains("Found 0 photos");
  });

  it("Contains image url and description input, and publish button", () =>{
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
    const photos = [
      {
        imageValue:"https://images.unsplash.com/photo-1691983831831-0febe357c6df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue:"Mini Cooper Car",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691513412715-6bea7823700f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
        descriptionValue:"Couple Love",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691866071118-5129e319c7c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
        descriptionValue: "Nature",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691789873697-297c5be047f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue: "Mountain",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691681858107-ab1c79f7d1d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue:"Classic Building",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691732870814-058265779623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=665&q=80",
        descriptionValue:"Blurry Flower",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691585649388-ac3779c2cb5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue:"The Pier on the Beach",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691520669956-1fcaa9d611c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue:"Wadi Rum Dessert",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1690200371478-fcbfe5fe7073?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue:"Sunflower",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691441131483-7901e11ba084?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        descriptionValue:"House of South Tyrol",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1683319915193-c03a77fcf1ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=663&q=80",
        descriptionValue:"Building in Tehran Province,Iran",
      },
      {
        imageValue:"https://images.unsplash.com/photo-1691334010872-9c9a2a92c56e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        descriptionValue:"Building in Kyoto, Japan",
      },
      
    ];

    photos.forEach(({ imageValue, descriptionValue}) =>{
        const image = cy.get("input[name='image']");
        image.type(imageValue)

        const description = cy.get("input[name='desc']");
        description.type(descriptionValue);

        const button = cy.get("button");
        button.click();

        cy.get("img").should("have.attr", "src", imageValue);
        cy.contains(descriptionValue);
        cy.contains(`Found ${photos.lenght} photos`);
        cy.wait(500)
    });
    cy.contains(`Found ${photos.length} photos`);
  });
});  