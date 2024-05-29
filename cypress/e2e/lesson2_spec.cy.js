describe('confirming h1 header', () => {
    it('visable', () => {
      cy.visit('https://example.cypress.io')
      cy.get('h1').should("have.value","")
    })
  })
  describe('querying', () => {
    it('querying', () => {
      cy.visit('https://example.cypress.io')
      cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
      cy.get('#query-btn').should("contain","Button")
    })
  })
  describe('action', () => {
    it('action', () => {
      cy.visit('https://example.cypress.io')
      cy.get('.home-list > :nth-child(3) > :nth-child(1)').click ();
    })
  })
  describe('my own test', () => {
    it('action', () => {
      cy.visit('https://example.cypress.io')
      cy.get('.home-list > :nth-child(3) > :nth-child(1)').click ();
      cy.get('.action-email').type('fake@email.com')
    })
  })