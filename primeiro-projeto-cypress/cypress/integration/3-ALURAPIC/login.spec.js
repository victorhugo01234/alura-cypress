describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
        cy.visit('/')

    })

    it('fazer login com usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('victor', '1234')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        });
    })
})