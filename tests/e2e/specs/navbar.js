// https://docs.cypress.io/api/introduction/api.html

describe('Testing navbar', () => {
    it('links', () => {
        cy.visit('/')
        cy.get(':nth-child(2) > .nav-link > a').click()
        cy.wait(2000);
        cy.get('.text-center').contains('Lista de Opiniones')
        cy.wait(2000);
        cy.get(':nth-child(3) > .nav-link > a').click()
        cy.wait(2000);
        cy.get('.text-center').contains('Administrando la Lista de Opiniones')
        cy.wait(2000);
        cy.get(':nth-child(1) > .nav-link > .router-link-active').click()
        cy.wait(4000);
    })
    it('link 404', () => {
        cy.visit('/rutadementira')
        cy.wait(3000);
        cy.get('h1').contains('Error 404 Not Found')
        cy.wait(3000);
        cy.get('[data-v-fb275356=""][data-v-51b07a4e=""] > button').click()
        cy.wait(3000);
    })
})