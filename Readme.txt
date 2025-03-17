---  Playwright-Cucumber-Typescript-Project1

Purpose: The very first demo project with Playwright + Cucumber + Typescript(i.e,git@github.com:KC0122/cucumber-playwright-typescript_project1.git)

i.e,
-Launch a browser
-Navigate to a webpage(Example: BBC)
-It will check if a text exist or not (Example: BBC)

Main differance in this Project(2) is, Before All, After All hookes were used
-To launch the browser before all tests
-To close the browser after all tests
-Also,execute tests serially with the command  :  test.describe.configure({ mode: 'serial' });


******************************************************************************
Before you clone the repo, install following dependencies 

*******************************************************************************

      -Install Nodejs LTS version from
      https://nodejs.org/en/download

            -Execute the .exe and installing
            -Open the command prompt as an admin
            -Issue command:    node -v and press ENTER
            -Issue command:    npm -v and press ENTER
            -If you see the version numbers appearing for each of the above commands.(i.e,if you have successfully installed Node!)
            (if not re-start the machine and re check!)            
            
            -Create a folder annd install the latest NPM globally by issuing following commands.
                 npm install -g npm        
                
             Why NPM ?  It help us to install many software libraries and manage dependencies.
            -If successful you should be able to issue npm -v  command from directory and see the latest version number that you have just installed!
            -Clone the repo from https://github.com/KC0122/playwright-core-project1.git ,open command prompt and CD into the same folder.



 -How to install Playwright successfully ?
      -All set to Install Playwright!Cloned repo looks like this on my machine! D:\Myprojects\playwright-core-project1
      -CD into this same folder in the Command prompt
      -Double check by re issuing node -v & npm -v one after another, to see if they are still working or not.
      (Note in some machines the VSCode terminal window might give you an error if you issue the npm -v command.But in a command prompt as an admin, you should be able to see the version)
      
      -If all good, now issue the below command to install the latest Playwright version
         npm init playwright@latest
      -
       During the installation, it will ask few questions and after entering "Y" for the first question,
         keep pressing 'Enter' to go ahead with the defaults values.
         Once done, you should see below message on the command prompt
         
         Visit https://playwright.dev/docs/intro for more information. ✨
        
- Issue the below command, and you will see 2 tests are passing!
       npx playwright test          
          
        
-In addition, you also need to follow the below steps
         -Install Cucumber extension for the VSCode -done!

         -Need to install cucumber from npm library
             npm i @cucumber/cucumber

         -Install ts-node from NPM library
              npm i ts-node
         -Create the folder strsucture -done!
         -Create Cucumber.json file at the root directory -done!

         ex:
         {
        "default": {
        "paths": ["src/test/features/*.feature"],
        "publishQuite":true,
        "dryRun":false,
        "require": ["testssrc/test/steps/*.ts"],
         "requireModule":["ts-node/register"]        
                   }
         }


   -Also,make sure to update the "Script" section of Package.json as per below.
        
        ;;;
        .....
      
       "scripts":{
          "test" : "cucumber-js test"
        },

      ...
      --

-To run the Cucumber tests, issue below command
     npm run test
   
    
  
***********************************************************
 Lessons Learned
************************************************************

1).Feature File Error Fixing!

if you ever, encountered Feature file  steps undefined error,
even after you have clearly defined them all,

Steps to fix the problem:

Press Ctrl + comma button 
You will see now the settingd screen has opened
In the search bar, type cucumber
Click on Edit in settings.json

Now you will see something like below

  "cucumber.features": [
    "src/test/**/*.feature",
    "features/**/*.feature",
    "tests/**/*.feature",
    "*specs*/**/*.feature"
  ]
  
  Make sure you delete above and paste the exact like for like details from Cucumber.json, as per below
  
  
  "cucumber.features": [
    "src/test/features/*.feature"
  ]
  
And do the same for Cucumber.glue section..This detail should match with Cucumber.json's require value(i.e,stepdefinition path

  "cucumber.glue": [
    "src/test/steps/*.ts"
  ]
   
  Once saved these changes, close all files and the VSCode, and re-open!
  -Now you will see that the "Feature" file's error has disappeared!
  If you issue below command, the feature file will be executed along with the step definitions!
  
  npm run test
  
  





2).VSCode error in the terminal  for the NPM Command:

Nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170. 
At line:1 char:1


To fix this issue:
Open Powershell in admin mode and enter below command

Set-ExecutionPolicy -ExecutionPolicy RemoteSigned

-Re-start your VS Code.Issue  npm -v command
 Now it should show you the same version number in the VS Terminal too!
