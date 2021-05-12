# docler

Docler automated web testing

Docler automated web testing cypress based test automation platform for performing UI based functional checks. 

### Tech stack used in building the framework 
##### Programming language used: javascript
##### Test framework : Cypress version 7.2.0
##### IDE : VS Code

### Prerequisite 1
##### nodejs should be installed on the system.To check if java is available on the system, go to command prompt and type node -version.It should display: 
    
v14.15.1
### Prerequisite 2 --> Cypress should be installed on the system using npm install cypress --save-dev

### Prerequisite 3 (not mandatory)
##### git should be configured on the system to pull the project from github. 

If github is not configured on the system, then project can be downloaded using the option "Download ZIP" from https://github.com/rohitbahadur/docler


### Installation (using git, assumption is a repo created on github )
1. If using git,create a project folder on your local machine.
2. From the git repo click on Clone or download option and copy the link. 
2. Go to command prompt and navigate to the project and folder and type git clone "copy the link" 
(copy the link is the link copied from git repo).


### Installation (without git)
1. There is no additional settings or configurations required. The 
   project can be downloaded using git or option "Download ZIP" from 
   https://github.com/rohitbahadur/docler
2. unzip (if downloaded as a ZIP) the project folder and open in eclipse 
    (File-->Open Projects from File System ). Select the directory where 
    the project folder is available.



#### Project Design Strategy
#### The project is designed using page object model principles.
1. Fixtures --> to fetch data. eg. input on form page 
   package.
2. Support --> pageObject --> automation-test-store. This is used to store page objects
  
3. integration folder --> This is the main folder where the tests are placed.
  
#### For executing the tests, navigate to the project. We have two options to run the tests:

1. Visual based --> npm run cypress
2. cmdline based --> npm run cypress-run





