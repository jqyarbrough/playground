describe("Data-Driven API Testing with Cypress", () => {

    const testFirstName = ["Michael"];
  
    testFirstName.forEach((firstName) => {
  
      it(`Retrieves booking IDs for ${firstName}`, () => {
  
        cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {
  
          expect(response.status).to.eq(200);
    
          response.body.forEach((booking) => {
  
            expect(booking.firstname).to.eq(firstName);
  
          });
  
        });
  
      });
  
    });
  
  });