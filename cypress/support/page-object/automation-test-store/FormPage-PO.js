class FormPage_PO {
    verifyTitle(){
        cy.title().should('include', 'UI Testing Site');
    }

    clickOn_Form_Tab(){
        cy.get('a#form').click();
        cy.contains('Simple Form Submission');
    };

    click_On_UI_Testing_Button(){
        cy.get('#site').click();
    }

    check_for_inputField_input(){
        cy.get('#hello-input').should('have.id', 'hello-input');
    }

    click_submit(){
        cy.get('#hello-submit').click();
    }
}
export default FormPage_PO;