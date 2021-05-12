import FormPage_PO from '../support/page-object/automation-test-store/FormPage-PO';
import HomePage_PO from '../support/page-object/automation-test-store/HomePage-PO'
/// <reference types ='cypress'/>

describe('check form page information', () => {
    const homePage = new HomePage_PO();
    const formPage = new FormPage_PO();
    
    beforeEach(function(){
         
         homePage.visitHompage()
             
    });

    it('should verify title of form page', () => {
        formPage.verifyTitle(); 
        formPage.clickOn_Form_Tab(); 
    });

    it('should verify title post click on UI Testing button', () => {
        formPage.click_On_UI_Testing_Button();
        formPage.verifyTitle();
    });

    it('On the Form page, a form should be visible with one input box and one submit button', () => {
        formPage.clickOn_Form_Tab(); 
        formPage.check_for_inputField();
        homePage.check_logo();
    });

});