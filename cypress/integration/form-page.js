/// <reference types ='cypress'/>
import FormPage_PO from '../support/page-object/automation-test-store/FormPage-PO';
import HomePage_PO from '../support/page-object/automation-test-store/HomePage-PO'



describe('check form page information', () => {
    
    before(function () {
        cy.fixture('example').then(function(data) {
          globalThis.data = data;
        });
    });

    const homePage = new HomePage_PO();
    const formPage = new FormPage_PO();
    
    beforeEach(function(){
         
         homePage.visitHompage()
         formPage.clickOn_Form_Tab();            
    });

    it('should verify title of form page', () => {
        formPage.verifyTitle(); 
        
    });

    it('should verify title post click on UI Testing button', () => {
        formPage.click_On_UI_Testing_Button();
        formPage.verifyTitle();
    });

    it('should display form page with one input box and one submit button', () => {
     
        formPage.check_for_inputField_input();
        formPage.click_submit();
        homePage.check_logo();
    });

    it('should display logo of Docler', () => {
        homePage.check_logo();
    });
    
    it('should display the name entered on the form page input field post submit', () => {
        formPage.click_submit();
        
    });
});