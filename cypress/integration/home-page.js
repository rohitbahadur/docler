import HomePage_PO from '../support/page-object/automation-test-store/HomePage-PO'
/// <reference types ='cypress'/>

describe('check homepage information"', () => {
    const homePage = new HomePage_PO()
    
    beforeEach(function(){
         
         homePage.visitHompage()
    
    });

    it('it should verify for Active status', () => {
      homePage.verifyActive_Status();
       
    });
    
    it('should verify the title', () => {
       homePage.verifyTtitle();
    });
    
    it('should verify text (in h1 tag) "Welcome to the Docler Holding QA Department" on hompage', () => {
        homePage.verifyTextInH1_To_Be_Equal_To();
    });

    it('should navigate to Form page when click on Form tab', () => {
        homePage.clickOn_Form_Tab()
    });

    it('should verify text (in p tag) "This site is dedicated to perform some exercises and demonstrate automated web testing', () => {
        homePage.verifyTextInPTag_To_Be_Equal_To();
    });
});