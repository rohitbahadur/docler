/// <reference types ='cypress'/>

describe('The Title should be "UI Testing Site"', () => {
    it('it should open docler home page', () => {
        cy.visit('https://knauf.okta.com/');
        cy.get('#okta-signin-username').type('EXT_BahadurR@knauf.com');
        cy.get('[data-type="save"]').click();
        cy.get('#input8').type('knauf21!');
        cy.get('[data-type="save"]').click();
               
        
    });
});