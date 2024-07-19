describe('API Testing with Cypress', () => {

    it('should retrieve all booking IDs', () => {
  
      cy.request('GET', 'https://restful-booker.herokuapp.com/booking')
  
        .should((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.length.greaterThan(0);
  
        });
  
    });
  
  });
  
  describe("Data-Driven API Testing with Cypress", () => {

    const testFirstNames = ["John", "Sally", "Michael"];
  
    testFirstNames.forEach((firstName) => {
  
      it(`Retrieves booking IDs for ${firstName}`, () => {
  
        cy.request(`GET`, `https://restful-booker.herokuapp.com/booking?firstname=${firstName}`).then((response) => {
  
          expect(response.status).to.eq(200);
  
          expect(response.body).to.have.length.greaterThan(0);
  
          response.body.forEach((booking) => {
  
            expect(booking.firstname).to.eq(firstName);
  
          });
  
        });
  
      });
  
    });
  
  });

  function getBookingById(bookingId) {

    return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking/${bookingId}`);
  
  }
  
  describe("Custom Functions for API Testing with Cypress", () => {
  
    it("Retrieves booking details for a specific ID", () => {
  
      getBookingById(1).then((response) => {
  
        expect(response.status).to.eq(200);
  
        expect(response.body).to.have.property("bookingid", 1);
  
      });
  
    });
  
  });