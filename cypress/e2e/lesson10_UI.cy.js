describe('Page Title Test', { timeout: 120000 }, () => {
  it('Should have the correct title', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.title().should('eq', 'Contact List App');
  });
});

describe('Load Homepage', { timeout: 120000 }, function() {
  it('Should load homepage', { timeout: 120000 }, function() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');
    cy.url().should('include', '/');
  });
});

describe('Check Submit Button', { timeout: 120000 }, function() {
  it('Should have a working submit button', { timeout: 120000 }, function() {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');
    cy.get('#submit').click(); 
    cy.wait(2000); 
  });
});

describe('Login- Contact App Page', { timeout: 120000 }, () => {
  it('Should successfully login', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
    cy.get('input[id="email"]').type('jennifer@aol.com'); 
    cy.get('input[id="password"]').type('1234567'); 
    cy.get('#submit').click(); 
  });
});

describe('Redirect to page to add new user', { timeout: 120000 }, () => {
  it('Should redirect to the Add New User page', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com');
    cy.get('#signup').click(); 
    cy.url().should('include', '/addUser');
    cy.get('h1').should('contain', 'Add User');
  });
});

describe('Add New User', { timeout: 120000 }, () => {
  it('Should add new user', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
    cy.get('input[id="firstName"]').type('Will');
    cy.get('input[id="lastName"]').type('Smith');
    cy.get('input[id="email"]').type('wills@wills.com');
    cy.get('input[id="password"]').type('123abcde');
    cy.get('#submit').click(); 
    cy.wait(2000); 

  });
});

describe('Navigate to Add New Contact Page', { timeout: 120000 }, () => {
  it('Should redirect to add new contact page', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    cy.get('#add-contact').click(); 
    cy.url().should('include', '/addContact');
    cy.get('h1').should('contain', 'Add Contact'); 
  });
});

describe('Using Cancel Button', { timeout: 120000 }, () => {
  it('Should redirect back to Contact List Page', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    cy.get('#add-contact').click(); 
    cy.url().should('include', '/addContact');
    cy.get('h1').should('contain', 'Add Contact');
    cy.get('#cancel').click(); 
    cy.wait(2000); 
  });
});

describe('Add New Contact', { timeout: 120000 }, () => {
  it('Should add new contact', { timeout: 120000 }, () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addContact');
    
    cy.get('input[id="firstName"]').type('Will');
    cy.get('input[id="lastName"]').type('Smith');
    cy.get('input[id="birthdate"]').type('1966-09-17');
    cy.get('input[id="email"]').type('john.doe@example.com');
    cy.get('input[id="phone"]').type('555-555-5556');
    cy.get('input[id="street1"]').type('5432');
    cy.get('input[id="street2"]').type('Apple Valley Rd.');
    cy.get('input[id="city"]').type('Boston');
    cy.get('input[id="stateProvince"]').type('MA');
    cy.get('input[id="postalCode"]').type('32227');
    cy.get('input[id="country"]').type('USA');
    
    cy.get('#submit').click(); 
    cy.wait(2000); 

  });
});
