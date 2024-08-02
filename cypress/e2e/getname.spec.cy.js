describe("Data-Driven API Testing with Cypress", () => {

    const testFirstNames = ["John", "Sally", "Michael"];
  
    testFirstNames.forEach((firstName) => {
  
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

  //John test failed. It might be do to absence of booking with John. I double checked on Postman and found bookings for John. May be an issue with the API response.


 