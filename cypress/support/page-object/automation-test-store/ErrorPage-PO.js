class ErrorPage_PO {
    verifyTitle(){
        cy.title().should('include', 'UI Testing Site');
    }

}
export default ErrorPage_PO;