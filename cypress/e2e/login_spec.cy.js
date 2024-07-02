describe('launch application', () => {
    it('launch application', () => {
        launchApplication
        enterusername("");
        enterpassword("password");
        clickloginbutton("login");

        const validusername= 'username';

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
       