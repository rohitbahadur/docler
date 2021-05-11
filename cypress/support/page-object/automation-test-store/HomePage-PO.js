class HomePage_PO {
    visitHompage(){

        cy.visit(Cypress.env("baseUrl"));
        //cy.visit('http://uitest.duodecadits.com')
    }
    
    verifyActive_Status(){
        cy.document().should('have.property', 'charset').and('eq','UTF-8');
    };

    verifyTtitle(){
        cy.title().should('include', 'UI Testing Site');
    };
    
    verifyTextInH1_To_Be_Equal_To(){
        cy.get('h1').should('have.text', 'Welcome to the Docler Holding QA Department');
    };

    verifyTextInPTag_To_Be_Equal_To(){
        cy.get('.ui-test > p').should('have.text', 'This site is dedicated to perform some exercises and demonstrate automated web testing.');
    };

    clickOn_Form_Tab(){
        cy.get('a#form').click();
        cy.contains('Simple Form Submission');
    };

}
export default HomePage_PO;