describe('Error Handling Test', () => {
    it('should display an error message on failure', () => {
      cy.intercept('POST', 'https://thinking-tester-contact-list.herokuapp.com/api/login', {
        statusCode: 401,
        body: { error: ' Incorrect username or password ' },
      }).as('loginError');
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
  
      cy.get('input[id="email"]').type('wrongUser');
      cy.get('input[id="password"]').type('wrongPassword');
      cy.get('form').submit();
        cy.wait('@loginError');
      cy.contains('Incorrect username or password').should('be.visible');
    });
  });
  