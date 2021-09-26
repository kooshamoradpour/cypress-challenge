const { expect } = require("chai")

describe("Median App", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    it('Should Display Header', () => {
        cy.get('h1').contains('Enter a number to get the median of primes:')
    })

    it('Should not accept string input', () => {
        cy.get('input')
        .type('bad-input')
        .should('not.have.value', 'bad-input')
    })

    it('Should accept number inputs', () => {
        cy.get('input')
        .should('have.attr', 'type', 'number')
        .type(10)
        .should('have.value', 10)
    })

})
