describe('Login API Test with Bearer Token', () => {
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmUyMzM5NGRiYzRjNTAwMTM4MjVjMTEiLCJpYXQiOjE3MjY1MzY3OTZ9.0hJfVu_rHl2KhwMax8LEaDVCKZ9Y8sZSnXOOIGFcY_Y'; 
  
    it('should access the login endpoint with Bearer token', () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        headers: {
          'Authorization': `Bearer ${bearerToken}`
        },
        body: {
          email: 'jennifer@aol.com',  
          password: '1234567'     
        },
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  });


  
  
  describe('Contact API Tests', () => {
    it('should add a new contact', () => {
      // Define the new contact payload
      const newContact = {
        name: 'Sebby Smith',
        email: 'sebby@sebby.com',
        phone: '123-456-7890'
      };
  
      
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts', 
        body: newContact,
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        expect(response.status).to.eq(201); // 
  
        expect(response.body).to.have.property('id');
        expect(response.body).to.have.property('name', newContact.name);
        expect(response.body).to.have.property('email', newContact.email);
        expect(response.body).to.have.property('phone', newContact.phone);
  
        cy.request('GET', `https://thinking-tester-contact-list.herokuapp.com/contacts${response.body.id}`)
          .then((getResponse) => {
            expect(getResponse.status).to.eq(200);
            expect(getResponse.body).to.have.property('name', newContact.name);
            expect(getResponse.body).to.have.property('email', newContact.email);
            expect(getResponse.body).to.have.property('phone', newContact.phone);

          });
      });
    });
  });
  