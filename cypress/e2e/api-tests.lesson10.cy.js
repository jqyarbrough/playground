let bearerToken = '';
describe('Login API Test with Bearer Token', () => {
    //const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTUyMTV9.ep-GXcg7-iU8hff77rlct5yo_2N8b2sAlg6crjwz59Y'; 
  
    it('should access the login endpoint with Bearer token', () => {
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/users/login',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          email: 'annie@supermutt.com',  
          password: '123456789'     
        },
        failOnStatusCode: false 
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log(response.body['token']);
        bearerToken = response.body['token'];

      });
    });
  });

  
  describe('Add Contact for API Test', () => {
    it('should add a new contact', () => {

      const newContact = {
      firstName: "Test",
      lastName: "Doe",
      birthdate: "1970-01-01",
      email: "jdoe@testthis.com",
      phone: "8005555555",
      street1: "1 Main St.",
      street2: "Apartment A",
      city: "Anytown",
      stateProvince: "KS",
      postalCode: "12345",
      country: "USA"
      };
  
      
      cy.request({
        method: 'POST',
        url: 'https://thinking-tester-contact-list.herokuapp.com/contacts', 
        body: newContact,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
        }
      }).then((response) => {
        expect(response.status).to.eq(201); // 
  
        expect(response.body).to.have.property('_id');
        expect(response.body).to.have.property('firstName', newContact.firstName);
        expect(response.body).to.have.property('lastName', newContact.lastName);
        expect(response.body).to.have.property('birthdate', newContact.birthdate);
        expect(response.body).to.have.property('email', newContact.email);
        expect(response.body).to.have.property('phone', newContact.phone);
        expect(response.body).to.have.property('street1', newContact.street1);
        expect(response.body).to.have.property('street2', newContact.street2);
        expect(response.body).to.have.property('city', newContact.city);
        expect(response.body).to.have.property('stateProvince', newContact.stateProvince);
        expect(response.body).to.have.property('postalCode', newContact.postalCode);
        expect(response.body).to.have.property('country', newContact.country);
        expect(response.body).to.have.property('owner');


        cy.request('GET', `https://thinking-tester-contact-list.herokuapp.com/contacts${response.body.id}`)
          .then((getResponse) => {
            expect(getResponse.status).to.eq(200);
            expect(response.body).to.have.property('_id');
            expect(response.body).to.have.property('firstName', newContact.firstName);
            expect(response.body).to.have.property('lastName', newContact.lastName);
            expect(response.body).to.have.property('birthdate', newContact.birthdate);
            expect(response.body).to.have.property('email', newContact.email);
            expect(response.body).to.have.property('phone', newContact.phone);
            expect(response.body).to.have.property('street1', newContact.street1);
            expect(response.body).to.have.property('street2', newContact.street2);
            expect(response.body).to.have.property('city', newContact.city);
            expect(response.body).to.have.property('stateProvince', newContact.stateProvince);
            expect(response.body).to.have.property('postalCode', newContact.postalCode);
            expect(response.body).to.have.property('country', newContact.country);
            expect(response.body).to.have.property('owner');

          });
      });
    });
  });

  describe('API Test to Retrieve Contacts', () => {
    const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/contacts/';
    const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTUyMTV9.ep-GXcg7-iU8hff77rlct5yo_2N8b2sAlg6crjwz59Y'; 

    it('should retrieve the list of contacts', () => {
        cy.request({
            method: 'GET',
            url: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${bearerToken}`
            },
            failOnStatusCode: false
        })
        .then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body).to.be.an('array');

            expect(response.body).to.have.length.greaterThan(0);

            const firstContact = response.body[0];
            expect(firstContact).to.have.all.keys(
                '_id', 'firstName', 'lastName', 'birthdate', 'email', 
                'phone', 'street1', 'street2', 'city', 
                'stateProvince', 'postalCode', 'country', 'owner', '__v'
            );

        });
    });
});

describe('API Test for Adding a User', () => {
  const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/users';
  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTUyMTV9.ep-GXcg7-iU8hff77rlct5yo_2N8b2sAlg6crjwz59Y'; 
  const userBody = {
      user: {
          _id: "66f9e8442400e70013b4915d",
          firstName: "Jennifer",
          lastName: "Yarbrough",
          email: "jen@annie.com",
          __v: 1
      },
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTM5NTZ9.OKQLGod-K-6u_6_suNlWqrqf4KMGCmibMJqHT7otb1k"
  };

  it('should create a new user and return user details with token', () => {
      cy.request({
          method: 'POST',
          url: apiUrl,
          headers: {
              'Content-Type': 'application/json'
          },
          body: userBody,
          timeout: 1000000,
          failOnStatusCode: false
      })
      .then((response) => {
        console.log(response.body); 
    
        if (response.status === 201) {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('user');
            expect(response.body.user).to.deep.equal(userBody.user);
            expect(response.body).to.have.property('token').that.is.a('string');
        } else if (response.status === 400) {
            expect(response.status).to.eq(400);
            
            if (response.body.errors) {
                expect(response.body).to.have.property('errors'); 
                
            } else {
                expect(response.body).to.have.property('_message'); 
              }
            }
        }); 
    }); 
}); 

describe('API Test for Retrieving the User Profile', () => {
  const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/users/me';
  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTUyMTV9.ep-GXcg7-iU8hff77rlct5yo_2N8b2sAlg6crjwz59Y'; 

  it('should retrieve the user profile and return correct details', () => {
      cy.request({
          method: 'GET',
          url: apiUrl,
          headers: {
              'Authorization': `Bearer ${bearerToken}`,
              'Content-Type': 'application/json'
          },
          failOnStatusCode: false 
      })
      .then((response) => {
          
          console.log(response.body);
          
          expect(response.status).to.eq(200);

          expect(response.body).to.have.property('_id', '66f9e8442400e70013b4915d');
          expect(response.body).to.have.property('firstName', 'Jessica');
          expect(response.body).to.have.property('lastName', 'Testing');
          expect(response.body).to.have.property('email', 'annie@supermutt.com');
          expect(response.body).to.have.property('__v');
      });
  });
});

describe('API Test for Updating a User Profile', () => {
  const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/users/me';
  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTUyMTV9.ep-GXcg7-iU8hff77rlct5yo_2N8b2sAlg6crjwz59Y'; 

  const updatedUserBody = {
      _id: "66f9e8442400e70013b4915d'",
      firstName: "Jessica",
      lastName: "Testing",
      email: "annie@supermutt.com",
      __v: 7
  };

  it('should update the user profile and return updated user details', () => {
      cy.request({
          method: 'PUT',
          url: apiUrl,
          headers: {
              'Authorization': `Bearer ${bearerToken}`,
              'Content-Type': 'application/json'
          },
          body: updatedUserBody,
          failOnStatusCode: false 
      })
      .then((response) => {

        console.log(response.body);

          expect(response.status).to.eq(200); 

          expect(response.body).to.have.property('_id', updatedUserBody._id);
          expect(response.body).to.have.property('firstName', updatedUserBody.firstName);
          expect(response.body).to.have.property('lastName', updatedUserBody.lastName);
          expect(response.body).to.have.property('email', updatedUserBody.email);
          expect(response.body).to.have.property('__v'); 
      });
  });
});

describe('API Test for the User Login function', () => {
  const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/users/login';

  const loginBody = {
      email: "annie@supermutt.com", 
      password: "123456789"  
  };

  it('should log in the user and return user details with a token', () => {
      cy.request({
          method: 'POST',
          url: apiUrl,
          headers: {
              'Content-Type': 'application/json',
              
          },
          body: loginBody,
          failOnStatusCode: false 
      })
      .then((response) => {
          console.log(response.body); 

          
          if (response.status === 200) {
              
              expect(response.status).to.eq(200);
              expect(response.body).to.have.property('user');
              expect(response.body).to.have.property('token'); 
          } else {

              expect(response.status).to.eq(401);
              expect(response.body).to.have.property('error'); 
          }
      });
  });
});


describe('API Test for the User Logout Function', () => {
  const apiUrl = 'https://thinking-tester-contact-list.herokuapp.com/users/logout';
  const bearerToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY5ZTg0NDI0MDBlNzAwMTNiNDkxNWQiLCJpYXQiOjE3Mjc2NTUyMTV9.ep-GXcg7-iU8hff77rlct5yo_2N8b2sAlg6crjwz59Y'; 

  it('should log out the user successfully', () => {
      cy.request({
          method: 'POST',
          url: apiUrl,
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${bearerToken}`
          },
          body: {}, 
          failOnStatusCode: false 
      })
      .then((response) => {
          console.log(response.body); 

          expect(response.status).to.eq(200); 

          expect(response.body).to.be.undefined;
      });
  });
});


