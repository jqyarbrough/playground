describe('Health Ping Check', () => {
      it('should retrieve all booking IDs', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/ping')

      .should((response) => {

        expect(response.status).to.eq(201);


      });

  });

});