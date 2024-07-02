describe('login-saucedemo', () => {
    it('successful login', () => {
    cy.sauce('jennifer@aol.com', 'password1234')
    })
})