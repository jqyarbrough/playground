describe('iframes', () => {
 it('frames', () => { 
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    cy.visit('https://demoqa.com/frames')
    cy.get('#frame1').then(($iframe) => {
        const iframecontent=$iframe.contents().find('This is a sample page')
        })
    })
    it('nested frame', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit('https://demoqa.com/frames/')
        cy.get('#frame2').then(($iframe) =>{
            const iframecontent=$iframe.contents().find('This is a sample page')
        })
    })
})
