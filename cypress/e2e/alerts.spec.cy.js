describe('test alert page', () => {
    it('validate alert buttons', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
      cy.visit('https://demoqa.com/alerts', {timeout:120000});
      cy.get('#confirmButton').click();
      cy.on('window:alert', (t) => {
        expect(t).to.contains('Do you confirm action?')})
      cy.on('window:confirm',()=> false);
      cy.get('#confirmResult').should('have.text','You selected Cancel')  
    })
  })
  





   