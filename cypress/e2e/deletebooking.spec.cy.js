describe('Delete Contact API Test', () => {
  const apiUrl = 'https://restful-booker.herokuapp.com';
  const credentials = {
    username: 'admin',
    password: 'password123'
  };
  let token;
  const contactId = 403;  it('should delete the contact', () => {
    cy.request({
      method: 'POST',
      url: `${apiUrl}/auth`,
      body: credentials
    }).then((response) => {
      expect(response.status).to.eq(200);
      token = response.body.token;
    }).then(() => {
      cy.wrap(token).should('not.be.undefined');      cy.request({
        method: 'DELETE',
        url: `${apiUrl}/booking/${contactId}`,
        headers: {
          Cookie: `token=${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  });
});
