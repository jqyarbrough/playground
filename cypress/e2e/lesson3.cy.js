describe('login', () => {
    it('successful login', () => {
    Cypress.config('defaultCommandTimeout', 70000);
      cy.visit('https://www.saucedemo.com/')
      cy.get('#user-name').should('be.visible').type('standard_user')
      cy.get('[data-test="password"]').should('be.visible').type('secret_sauce')
      cy.get('[data-test="login-button"]').should('be.visible').click ();
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click ();
      cy.get('[data-test="shopping-cart-badge"]').click ();
      cy.get('.cart_footer').click ();
      cy.get('[data-test="checkout"]').click ();
      cy.get('[data-test="firstName"]').should('be.visible').type('Jennifer')
      cy.get('[data-test="lastName"]').should('be.visible').type('Yarbrough')
      cy.get('[data-test="postalCode"]').should('be.visible').type('32780')
      cy.get('[data-test="continue"]').click ();
      cy.get('[data-test="finish"]').click ();
      cy.get('[data-test="back-to-products"]').click ();
    

   
         
    })   
  })