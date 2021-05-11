/// <reference types ='cypress'/>

describe('The Title should be "UI Testing Site"', () => {
    it('it should open docler home page', () => {
        cy.visit('http://uitest.duodecadits.com');
        cy.title().should('include', 'UI Testing Site');
        cy.get('div').find('img').should('have.attr', 'id', 'dh_logo');
        
    });

    it('The Company Logo should be visible on every site', () => {
        cy.visit('http://uitest.duodecadits.com');
        cy.title().should('include', 'UI Testing Site');
        cy.get('div').find('img').should('have.attr', 'id', 'dh_logo');
        
    });
});