describe('launch application', () => {
    const validusername= 'username';
    const validpassword= 'password';

    it('launch application', () => {
        launchApplication
        enterusername(validusername);
        enterpassword(validpassword);
        clickloginbutton("login");


        function launchApplication(){
        cy.visit('https://demo.applitools.com/');}
        function enterusername(){
        cy.visit('https://demo.applitools.com/');
        cy.get('#username').type('username').should("have.value", 'username')}
        function enterpassword(){
        cy.visit('https://demo.applitools.com/');    
        cy.get('#password').type('password')} 
        function clickloginbutton(){
        cy.get('#log-in').click();}
        function verifylogin(){
        cy.get('.top-menu-controls > .logged-user-w > .logged-user-i > .avatar-w > img') 
        }

       
        })
    })
       