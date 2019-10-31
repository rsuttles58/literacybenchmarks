describe('Page Loads', function(){
    it('Visits the Home Page', function() {
        cy.visit('/')
      })
    it('Sees a registration form', function(){
        cy.get('form#registration')
    })
    it('Sees a login form', function(){
        cy.get('form#login').within(() => {
        cy.get('input#username')
        cy.get('input#password')
      })
    })
})