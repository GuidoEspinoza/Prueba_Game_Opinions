// https://docs.cypress.io/api/introduction/api.html

describe('opiniones', () => {
    it('agregar opinion', () => {
        cy.visit('/')
        cy.get(':nth-child(1) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > #recipient-name').type('Anacleto')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #message-text').type('Me encanto el juego')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(4000);
    })
    it('eliminar opinion', () => {
        cy.visit('/')
        cy.get(':nth-child(1) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > #recipient-name').type('Nats')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #message-text').type('Mi opinion')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2500);
        cy.get(':nth-child(3) > .nav-link > a').click()
        cy.wait(2500);
        cy.get('.btn-danger').click()
        cy.wait(4000);
    })
    it('modificar opinion', () => {
        cy.visit('/')
        cy.get(':nth-child(1) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > #recipient-name').type('Nat')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #message-text').type('Mi opinion')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2500);
        cy.get(':nth-child(3) > .nav-link > a').click()
        cy.wait(2500);
        cy.get('.btn-primary').click()
        cy.wait(2500);
        cy.get('#recipient-name').type('alia')
        cy.wait(2500);
        cy.get('#message-text').type(' modificada')
        cy.wait(2500);
        cy.get('.btn-danger').click()
        cy.get(':nth-child(3) > .nav-link > a').click()
        cy.wait(4000);
    })
    it('mirar listado de opiniones', () => {
        cy.visit('/')
        cy.get(':nth-child(1) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > #recipient-name').type('Nat')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #message-text').type('Mi opinion')
        cy.wait(2500);
        cy.get('#modalJuego3498 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2500);
        cy.get(':nth-child(2) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(2500);
        cy.get('#modalJuego3328 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > #recipient-name').type('Juanito')
        cy.wait(2500);
        cy.get('#modalJuego3328 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #message-text').type('Mejor juego de la vida por lejos')
        cy.wait(2500);
        cy.get('#modalJuego3328 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2500);
        cy.get(':nth-child(3) > .card-deck > .card > .card-body > .btn').click()
        cy.wait(2500);
        cy.get('#modalJuego4200 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(1) > #recipient-name').type('Gladys')
        cy.wait(2500);
        cy.get('#modalJuego4200 > .modal-dialog > .modal-content > .modal-body > form > :nth-child(2) > #message-text').type('Un poco lento pero se pone bueno al final')
        cy.wait(2500);
        cy.get('#modalJuego4200 > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(3000);
        cy.get(':nth-child(2) > .nav-link > a').click()
        cy.wait(3000);
        cy.visit('/')
    })
})