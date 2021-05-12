import HomePage_PO from '../support/page-object/automation-test-store/HomePage-PO'
import FormPage_PO from '../support/page-object/automation-test-store/ErrorPage-PO';
import ErrorPage_PO from '../support/page-object/automation-test-store/ErrorPage-PO';
/// <reference types ='cypress'/>

describe('check for error page information"', () => {
    const homePage = new HomePage_PO();
    const errorPage = new ErrorPage_PO();
        
    beforeEach(function(){
         
         homePage.visitHompage();
                      
    });

    it('should verify title of error page', () => {
        homePage.clickOn_Error_Tab();
                
    });
});