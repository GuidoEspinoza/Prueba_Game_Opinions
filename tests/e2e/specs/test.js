// https://docs.cypress.io/api/introduction/api.html

describe('Testing Home.vue', () => {
    it('render h1 al visitar home', () => {
        cy.visit('/')
        cy.wait(2000);
        cy.get('.text-center').contains('Lista de Juegos Disponibles')
        cy.wait(3000);
    })
    it('abrir/cerrar modal', () => {
        cy.get(':nth-child(1) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(3000);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > #cerrar').should('be.visible').click({ force: true });
        cy.wait(3000);

        //cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > #cerrar')
        //cy.contains('cerrar').click()
        // cy.get('body').trigger('keydown', { keyCode: 27 });
        // cy.wait(500);
        // cy.get('body').trigger('keyup', { keyCode: 27 });
        //cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > #cerrar').click({ force: true })
    })

})